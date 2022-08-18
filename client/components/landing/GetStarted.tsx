import React from "react";
import Link from "next/link";
import Wrapper from "components/Wrapper";
import { Box, Heading, Text } from "@chakra-ui/react";
import PrimaryButton from "components/Button";
import TwitterIcon from "components/icons/twitter";
import { useAuthContext } from "context/auth";

const GetStarted = () => {
  const user = useAuthContext();

  return (
    <section>
      <Wrapper>
        <Box
          bg="#EEF5EC"
          textAlign="center"
          p="40px"
          borderRadius="16px"
          boxShadow=""
        >
          <Text mb={2} fontSize="18px" fontWeight={500}>
            Get help from those that care
          </Text>
          <Heading mb="40px" fontSize="40px" fontWeight={700}>
            Get help in case of an Emergency
          </Heading>

          <Link
            href={user?.isAuthenticated ? "/profile" : "/api/login"}
            passHref
          >
            <PrimaryButton leftIcon={<TwitterIcon />}>
              Get Started
            </PrimaryButton>
          </Link>
        </Box>
      </Wrapper>
    </section>
  );
};

export default GetStarted;
