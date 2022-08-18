import React, { Fragment } from "react";
import { NextPage } from "next";
import { Box, Stack, useDisclosure } from "@chakra-ui/react";
import Quicklinks from "components/profile/Quicklinks";
import ProfileBackground from "components/profile/background";
import EmergencyContacts from "components/profile/emergency/Contacts";
import AddEmergencyContactModal from "components/profile/AddEmergencyContactModal";
import Head from "next/head";
import { useAuthContext } from "context/auth";

const Profile: NextPage = () => {
  const user = useAuthContext();

  const { isOpen, onToggle } = useDisclosure();

  return (
    <Fragment>
      <Head>
        <title>Profile</title>
      </Head>

      <Box
      // minH="calc(100vh - (100px + 60px + 64px))"
      >
        <ProfileBackground user={user} />

        <Stack
          direction={["column", "row"]}
          spacing={["2rem", null, null]}
          mt="14rem"
          mb="8rem"
          justifyContent="space-between"
          maxW="6xl"
          mx="auto"
          px={4}
        >
          <EmergencyContacts toggleAddEmergencyContactModal={onToggle} />

          <Quicklinks toggleAddEmergencyContactModal={onToggle} />
        </Stack>
      </Box>

      {isOpen ? (
        <AddEmergencyContactModal isOpen={isOpen} onClose={onToggle} />
      ) : null}
    </Fragment>
  );
};

export default Profile;
