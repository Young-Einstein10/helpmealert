import React from "react";
import {
  Flex,
  HStack,
  Button,
  Avatar,
  Popover,
  IconButton,
  PopoverTrigger,
  PopoverContent,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import PrimaryButton from "./Button";
import TwitterIcon from "./icons/twitter";
import { MAX_WIDTH_VALUE } from "utils/constants";
import Logo from "./icons/logo";
import { useAuthContext } from "context/auth";

const Navbar = () => {
  const user = useAuthContext();

  return (
    <Flex
      as="header"
      px={["1rem", "1.5rem"]}
      height="100px"
      bgColor="rgba(18, 79, 170, 1)"
    >
      <Flex
        as="nav"
        w="full"
        maxW={MAX_WIDTH_VALUE}
        mx="auto"
        color="#fff"
        alignItems="center"
        justifyContent="space-between"
      >
        <Link href="/" passHref>
          <ChakraLink>
            <Logo />
          </ChakraLink>
        </Link>

        <HStack display={["none", "flex", "flex"]} spacing="30px">
          <Link href="#how-it-works" passHref>
            <ChakraLink>How it works</ChakraLink>
          </Link>

          <Link href="#" passHref>
            <ChakraLink>Keywords</ChakraLink>
          </Link>

          {!user?.isAuthenticated ? (
            <Link href="/api/login">
              <PrimaryButton leftIcon={<TwitterIcon />} colorScheme="#D359A">
                Link Twitter Account
              </PrimaryButton>
            </Link>
          ) : (
            <Popover>
              <PopoverTrigger>
                <Button
                  bg="transparent"
                  pr="0"
                  pl={2}
                  leftIcon={
                    <Avatar
                      size="sm"
                      name={user?.name}
                      src={user?.profile_image_url}
                    />
                  }
                  rightIcon={<ChevronDownIcon />}
                  _hover={{
                    bg: "transparent",
                  }}
                  _focus={{
                    bg: "transparent",
                  }}
                  _active={{
                    bg: "transparent",
                  }}
                >
                  {user?.username || "Test User"}
                </Button>
              </PopoverTrigger>

              <PopoverContent width="160px" mr="-2rem" p={4}>
                <Link href="/profile" passHref>
                  <Button
                    variant="link"
                    display="flex"
                    justifyContent="flex-start"
                    color="#000"
                    mb={4}
                  >
                    Profile
                  </Button>
                </Link>

                <Link href="/api/logout" passHref>
                  <Button
                    variant="link"
                    display="flex"
                    justifyContent="flex-start"
                    color="#000"
                  >
                    Logout
                  </Button>
                </Link>
              </PopoverContent>
            </Popover>
          )}
        </HStack>

        <IconButton
          display={["block", "none", "none"]}
          aria-label="Toggle Menu"
          icon={<HamburgerIcon color="#000" width="20px" height="20px" />}
        />
      </Flex>
    </Flex>
  );
};

export default Navbar;
