import React from "react";
import {
  Box,
  Container,
  Link as ChakraLink,
  Heading,
  HStack,
  InputGroup,
  InputLeftAddon,
  Text,
  useToast,
} from "@chakra-ui/react";
import Select, {
  ActionMeta,
  CSSObjectWithLabel,
  SingleValue,
} from "react-select";
import SearchIcon from "components/icons/search";
import PrimaryButton from "components/Button";
import TwitterIcon from "components/icons/twitter";
import PlayIcon from "components/icons/play";
import Waves from "components/Waves";
import Oval from "components/icons/oval";
import { useAddEmergencyContact } from "hooks";
import { useAuthContext } from "context/auth";

const styleProps = {
  control: (styles: CSSObjectWithLabel) => ({
    ...styles,
    minHeight: "56px",
    borderLeft: "none",
    borderTopLeftRadius: "none",
    borderBottomLeftRadius: "none",
    outline: "none",
  }),
  menu: (styles: CSSObjectWithLabel) => ({
    ...styles,
    width: "calc(100% + 61px)",
    marginLeft: "-61px",
  }),
};

const HomeSection = () => {
  const user = useAuthContext();
  const toast = useToast();

  const showToast = () =>
    toast({
      title:
        "Connect your twitter account to begin adding your emergency contacts.",
      status: "info",
      position: "top",
    });

  const {
    followers,
    selectedContacts,
    setSelectedContacts,
    isAddingContact,
    handleAddContacts,
    isFollowersLoading,
  } = useAddEmergencyContact({ onClose: () => {} });

  const options = followers?.map((follower) => ({
    label: `@${follower.username}`,
    value: follower.id,
  }));

  const handleSelectChange = (
    selectOption: SingleValue<{
      label: string;
      value: string;
    }>,
    actionMeta: ActionMeta<{
      label: string;
      value: string;
    }>
  ) => {
    setSelectedContacts([selectOption!.value]);
  };

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

          <Box
            flexGrow={1}
            textAlign="left"
            color="#000"
            sx={{
              ".css-1hb7zxy-IndicatorsContainer": {
                display: "none",
              },
              ".css-o6a4rf-control:hover": {
                borderColor: "#CBD5E1",
              },
            }}
          >
            <Select
              id="contacts"
              // isMulti
              isLoading={isFollowersLoading}
              options={options}
              styles={styleProps}
              onChange={handleSelectChange}
              placeholder="Search and add your emergency contact by via twitter handle"
            />
          </Box>
        </InputGroup>

        <HStack spacing={6} justify="center">
          <PrimaryButton
            isLoading={isAddingContact}
            onClick={user?.isAuthenticated ? handleAddContacts : showToast}
            leftIcon={<TwitterIcon />}
          >
            Add Emergency Contact
          </PrimaryButton>

          <ChakraLink
            href="https://youtu.be/lQRpGipaUas"
            target="_blank"
            rel="noreferrer noopenner"
          >
            <PrimaryButton
              leftIcon={<PlayIcon />}
              variant="link"
              textDecoration="underline"
              bg="none"
              color="#fff"
            >
              How it works
            </PrimaryButton>
          </ChakraLink>
        </HStack>
      </Container>

      {<Waves />}
    </Box>
  );
};

export default HomeSection;
