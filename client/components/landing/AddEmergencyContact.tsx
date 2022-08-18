import React from "react";
import Wrapper from "components/Wrapper";
import { Heading, Stack, Image, Box } from "@chakra-ui/react";

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
          maxW={600}
          mx="auto"
        >
          Add your trusted friends and loved ones to your emergency contact
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
