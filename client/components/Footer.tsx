import React from "react";
import { Flex, HStack, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";
import TwitterIcon from "./icons/twitter";
import Wrapper from "./Wrapper";
import Logo from "./icons/logo";

const Footer = () => {
  return (
    <footer>
      <Wrapper my={8} p={0}>
        <Flex justifyContent="space-between" alignItems="center">
          <HStack as="nav" spacing="32px">
            <Logo color="#0D359A" />

            <Link href="/about" passHref>
              <ChakraLink>About</ChakraLink>
            </Link>

            <Link href="#faqs" passHref>
              <ChakraLink>FAQ</ChakraLink>
            </Link>

            <Link href="/brand-assets" passHref>
              <ChakraLink>Brand Assets</ChakraLink>
            </Link>

            <Text>c 2022</Text>
          </HStack>

          <TwitterIcon color="#C8C7D8" width="28px" height="28px" />
        </Flex>
      </Wrapper>
    </footer>
  );
};

export default Footer;
