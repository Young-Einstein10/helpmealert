import { TwitterApi, ETwitterStreamEvent } from "twitter-api-v2";
import CONFIG from "./config";
import {
  checkIfUserIsRegistered,
  replyToNewUser,
  replyToRegisteredUser,
  sendConfirmationMessageToVictim,
} from "./utils/helpers";

const BEARER_TOKEN = CONFIG.BEARER_TOKEN;

// Edit rules as desired below
const rules = [
  {
    value: "@helpmenaija has:mentions -is:reply -is:retweet",
    tag: "Helpmenaija mentions",
  },
  // {
  //   value: "@helpmenaija",
  //   tag: "Helpmenaija",
  // },
];

const streamClient = new TwitterApi(BEARER_TOKEN);

async function getAllRules() {
  try {
    const rules = await streamClient.v2.streamRules();

    console.log("Got all rules");

    return rules;
  } catch (error) {
    console.error(error);
  }
}

async function deleteAllRules(rules) {
  try {
    if (!Array.isArray(rules.data)) {
      return null;
    }

    // Extract all IDs in rules
    const ids = rules.data.map((rule) => rule.id);

    const data = {
      delete: {
        ids: ids,
      },
    };

    // Delete rules
    await streamClient.v2.updateStreamRules(data);

    console.log("Deleted all rules");
  } catch (error) {
    console.error(error);
  }
}

async function setRules() {
  try {
    await streamClient.v2.updateStreamRules({
      add: rules,
    });

    console.log("Set all rules");
  } catch (error) {
    console.error(error);
  }
}

async function streamConnect(retryAttempt) {
  const stream = await streamClient.v2.searchStream({
    expansions: "author_id",
    "tweet.fields": "geo",
  });

  console.log("Listening to Stream");

  // Awaits for a tweet
  stream.on(
    // Emitted when Node.js {response} emits a 'error' event (contains its payload).
    ETwitterStreamEvent.ConnectionError,
    (err) => console.log("Connection error!", err)
  );

  stream.on(
    // Emitted when Node.js {response} is closed by remote or using .close().
    ETwitterStreamEvent.ConnectionClosed,
    () => console.log("Connection has been closed.")
  );

  stream.on(
    // Emitted when a Twitter payload (a tweet or not, given the endpoint).
    ETwitterStreamEvent.Data,
    async (eventData) => {
      console.log("Twitter has sent something:", eventData);

      const { isRegistered, user } = await checkIfUserIsRegistered(
        eventData.data.author_id
      );

      if (isRegistered) {
        // TODO: Begin Flow for returning users
        console.log("User is Registered. Begin Flow for registered users");
        replyToRegisteredUser(eventData, user);

        setTimeout(() => {
          sendConfirmationMessageToVictim(user);
        }, 5 * 60 * 1000);
      } else {
        replyToNewUser(eventData);
      }
    }
  );

  stream.on(
    // Emitted when a Twitter sent a signal to maintain connection active
    ETwitterStreamEvent.DataKeepAlive,
    () => console.log("Twitter has a keep-alive packet.")
  );

  stream.on("err", (data) => {
    console.log("ERRRROOOORRRRR", data);
  });

  // Enable reconnect feature
  stream.autoReconnect = true;

  // Be sure to close the stream where you don't want to consume data anymore from it
  // stream.close();

  return stream;
}

export async function beginStreaming() {
  let currentRules;

  try {
    // Gets the complete list of rules currently applied to the stream
    currentRules = await getAllRules();

    // Delete all rules. Comment the line below if you want to keep your existing rules.
    await deleteAllRules(currentRules);

    // Add rules to the stream. Comment the line below if you don't want to add new rules.
    await setRules();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }

  // Listen to the stream.
  streamConnect(0);
}
