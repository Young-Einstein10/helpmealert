import React from "react";
import Wrapper from "components/Wrapper";
import { Box, Heading, Stack } from "@chakra-ui/react";
import NextImage from "components/NextImage";
import JoinHands from "public/assets/img/join-hands.png";
import Community from "public/assets/img/community.png";

const ImprovingLives = () => {
  return (
    <section>
      <Wrapper>
        <Heading
          textAlign="center"
          fontSize="32px"
          fontWeight={600}
          color="#212026"
          mb="106px"
          maxW={600}
          mx="auto"
        >
          Improving the lives and saftey of users across all region
        </Heading>

        <Stack direction={["column", "row"]} spacing={["2rem", "1.5rem"]}>
          <Box>
            <NextImage src={JoinHands} alt="Join Hands" />
          </Box>
          <Box>
            <NextImage src={Community} alt="Community" />
          </Box>{" "}
        </Stack>
      </Wrapper>
    </section>
  );
};

export default ImprovingLives;
