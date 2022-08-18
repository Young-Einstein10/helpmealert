import React from "react";
import Wrapper from "components/Wrapper";
import { Heading, Image, Box, Stack } from "@chakra-ui/react";

const CommunityFeedback = () => {
  return (
    <Box as="section" bg="#EEF5EC">
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
          Hear what the community says about us
        </Heading>

        <Stack
          direction={["column", "row"]}
          spacing={["2rem"]}
          justifyContent="space-between"
        >
          <Box>
            <Image
              src="/assets/img/addEmergencyContact.png"
              alt="Add Emergency Contact"
            />
          </Box>

          <Box mt="-6rem">
            <Image src="/assets/img/contacts.png" alt="Emergency Contacts" />
          </Box>
        </Stack>
      </Wrapper>
    </Box>
  );
};

export default CommunityFeedback;
