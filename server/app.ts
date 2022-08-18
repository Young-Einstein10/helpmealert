import http from "http";
import CONFIG from "./config";
import { beginStreaming } from "./streams";

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("Hello, World!");
};

const app = http.createServer(requestListener);

beginStreaming();

// Start server
app.listen(Number(CONFIG.PORT), "localhost", () => {
  console.log(`App is listening on port ${CONFIG.PORT}.`);
});
