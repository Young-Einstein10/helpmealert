import React from "react";
import { Avatar, Box, Text, WrapItem } from "@chakra-ui/react";
import TwitterIcon from "components/icons/twitter";
import { User } from "pages/api/user";

const ProfileBackground = ({ user }: { user?: User }) => {
  return (
    <Box
      height="300px"
      bg="url(/assets/img/bg-dashboard.png)"
      bgSize="cover"
      bgPosition="center"
    >
      <WrapItem
        position="absolute"
        left="50%"
        transform="translate(-50%, 0%)"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        maxW={200}
        mx="auto"
        mt="14rem"
      >
        <Avatar
          width={172}
          height={172}
          size="2xl"
          name={user?.name}
          src={user?.profile_image_url}
        />{" "}
        <Text mt={4}>{user?.name}</Text>
        <Text>
          <TwitterIcon color="#0D359A" /> {`@${user?.username}`}
        </Text>
      </WrapItem>
    </Box>
  );
};

export default ProfileBackground;
