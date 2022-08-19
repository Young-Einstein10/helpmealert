import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
} from "@chakra-ui/react";
import SearchIcon from "components/icons/search";
import PrimaryButton from "components/Button";
import TwitterIcon from "components/icons/twitter";
import PlayIcon from "components/icons/play";
import Waves from "components/Waves";
import Oval from "components/icons/oval";

const HomeSection = () => {
  return (
    <Box bg="#124FAA" height="calc(100vh - 100px)">
      <Container
        color="#fff"
        pt="140px"
        maxW={900}
        textAlign="center"
        bg="url(/assets/svg/bg-twitter.svg)"
        bgSize="contain"
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        <Box position="relative">
          <Heading
            fontSize={["35px", "40px", "56px"]}
            fontWeight={700}
            lineHeight={["40px", "57px", "67px"]}
          >
            Get help
            <br />
            in an emergency
          </Heading>
          <Text fontSize={["18px", null, "22px"]}>
            Alert your loved ones when you are in trouble
          </Text>
          <Oval position="absolute" top="72px" right="170px" />
        </Box>

        <InputGroup mt="36px" mb="32px" maxW="725px" mx="auto" height="56px">
          <InputLeftAddon bg="#fff" borderRight="none" h="full">
            <SearchIcon />
          </InputLeftAddon>
          <Input
            type="text"
            h="full"
            placeholder="Search and add your emergency contact by via twitter handle"
            background="#fff"
            color="#000"
            border="1px solid #CBD5E1"
            borderRadius="6px"
            borderLeft={0}
          />
        </InputGroup>

        <HStack spacing={6} justify="center">
          <PrimaryButton leftIcon={<TwitterIcon />}>
            Add Emergency contact
          </PrimaryButton>
          <PrimaryButton
            leftIcon={<PlayIcon />}
            variant="link"
            textDecoration="underline"
            bg="none"
            color="#fff"
          >
            How it works
          </PrimaryButton>
        </HStack>
      </Container>

      {<Waves />}
    </Box>
  );
};

export default HomeSection;
