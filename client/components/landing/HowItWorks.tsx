import React from "react";
import { Box, Flex, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import TwitterIcon from "components/icons/twitter";
import Wrapper from "components/Wrapper";
import AlertIcon from "components/icons/alert";
import UsersIcon from "components/icons/users";

const HowItWorks = () => {
  return (
    <section id="how-it-works">
      <Wrapper pb={24}>
        <Box mb={20} textAlign="center">
          <Heading mb={2} fontSize="32px" fontWeight={600}>
            How it works
          </Heading>
          <Text fontSize="24px" fontWeight={300}>
            Here is what you to do durring an emmergency
          </Text>
        </Box>

        <Stack direction={["column", "row"]} spacing={["3rem", "1.5rem"]}>
          <Box flexDirection="column" textAlign="center">
            <TwitterIcon color="#2D65B8" height="42px" width="36px" />

            <Text mt={6} fontSize="24px" fontWeight={400}>
              Tweet @Us when your in an <strong>emergency!!!</strong>
            </Text>
          </Box>
          <Box flexDirection="column" textAlign="center">
            <AlertIcon />

            <Text mt={6} fontSize="24px" fontWeight={400}>
              We <strong>alert</strong> your emmergency contact
            </Text>
          </Box>
          <Box flexDirection="column" textAlign="center">
            <UsersIcon />

            <Text mt={6} fontSize="24px" fontWeight={400}>
              Inform the <strong>community</strong> to help
            </Text>
          </Box>{" "}
        </Stack>
      </Wrapper>
    </section>
  );
};

export default HowItWorks;
