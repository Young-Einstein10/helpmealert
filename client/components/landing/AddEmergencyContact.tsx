import React from "react";
import Wrapper from "components/Wrapper";
import { Heading, Stack, Image, Box } from "@chakra-ui/react";
import Oval from "components/icons/oval";

const AddEmergencyContact = () => {
  return (
    <section>
      <Wrapper>
        <Heading
          textAlign="center"
          fontSize="32px"
          fontWeight={600}
          color="#212026"
          mb="106px"
          maxW={620}
          mx="auto"
          position="relative"
        >
          Add your trusted friends and loved ones to your emergency contact
          <Oval
            color="#124FAA"
            position="absolute"
            top="30px"
            left="190px"
            zIndex="-1"
          />
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
    </section>
  );
};

export default AddEmergencyContact;
