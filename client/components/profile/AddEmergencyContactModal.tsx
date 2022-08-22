import React, { useState } from "react";
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalProps as ChakraModalProps,
  ModalHeader,
  ModalBody,
  Heading,
  Flex,
  Text,
  Box,
  Image,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import Select, {
  ActionMeta,
  CSSObjectWithLabel,
  MultiValue,
} from "react-select";
import PrimaryButton from "components/Button";
import TwitterIcon from "components/icons/twitter";
import { CloseIcon } from "@chakra-ui/icons";
import WarningIcon from "components/icons/warning";
import useSWR from "swr";
import { UserV2 } from "twitter-api-v2";
import { Contacts } from "pages/api/contacts";
import { useAddEmergencyContact } from "hooks";

const styleProps = {
  control: (provided: CSSObjectWithLabel) => ({
    ...provided,
    minHeight: "56px",
  }),
};

type ModalProps = Omit<ChakraModalProps, "children">;

const AddEmergencyContactModal = (props: ModalProps) => {
  // const [isAddingContact, setIsAddingContact] = useState(false);
  // const [selectedContacts, setSelectedContacts] = useState<string[]>([]);

  // const { data: followers, error } = useSWR<UserV2[]>("/api/followers");
  // const { data: contacts, mutate: mutateContact } =
  //   useSWR<Contacts[]>("/api/contacts");

  // const toast = useToast();
  // const isLoading = !error && !followers;

  // const myContacts = contacts?.map((contact) => contact.username);

  // const unsavedFollowers = followers?.filter(
  //   (follower) => !myContacts?.includes(follower.username)
  // );

  const {
    followers,
    selectedContacts,
    setSelectedContacts,
    isAddingContact,
    handleAddContacts,
    isFollowersLoading,
  } = useAddEmergencyContact({ onClose: props.onClose });

  const options = followers?.map((follower) => ({
    label: `@${follower.username}`,
    value: follower.id,
  }));

  const handleSelectChange = (
    selectOption: MultiValue<{
      label: string;
      value: string;
    }>,
    actionMeta: ActionMeta<{
      label: string;
      value: string;
    }>
  ) => {
    const ids = selectOption?.map((opt) => opt.value);

    setSelectedContacts(ids!);
  };

  // const handleAddContacts = async () => {
  //   try {
  //     if (selectedContacts.length < 2) {
  //       return toast({
  //         title: "Please add at least 2 contacts",
  //         status: "warning",
  //         position: "top",
  //       });
  //     }

  //     setIsAddingContact(true);

  //     const payload = { twitter_user_ids: selectedContacts };

  //     const response = await fetch("/api/contacts", {
  //       method: "POST",
  //       body: JSON.stringify(payload),
  //     });

  //     if (response.ok) {
  //       setIsAddingContact(false);

  //       const { data } = await response.json();

  //       mutateContact([...contacts!, ...data]);

  //       toast({
  //         title: "Successful",
  //         description: `${selectedContacts.length} Emergency Contact(s) added successfully.`,
  //         status: "success",
  //         variant: "solid",
  //         position: "top",
  //       });

  //       props.onClose();
  //     } else {
  //       console.log(response);

  //       toast({
  //         position: "top",
  //         status: "error",
  //         variant: "solid",
  //         title: "Error",
  //         description: response.statusText,
  //       });

  //       setIsAddingContact(false);
  //     }
  //   } catch (error) {
  //     setIsAddingContact(false);

  //     console.log(error);
  //   }
  // };

  return (
    <ChakraModal isOpen={props.isOpen} onClose={props.onClose} size="6xl">
      <ModalOverlay />
      <ModalContent pos="relative" padding={8}>
        <Flex mb={8}>
          <ModalHeader
            justifyContent="space-between"
            flexGrow={1}
            borderBottom="#eee"
            fontSize="24px"
          >
            Add an Emergency Contact
          </ModalHeader>

          <IconButton
            aria-label="Close"
            onClick={props.onClose}
            icon={<CloseIcon />}
            fontWeight={600}
            bgColor="#fff"
            variant="primary"
            _hover={{
              bgColor: "#fff",
            }}
          />
        </Flex>

        <ModalBody>
          <Flex>
            <Box w="50%">
              <Heading mb={8} fontSize="20px" fontWeight={600}>
                Twitter Handle
              </Heading>

              <Select
                id="contacts"
                isLoading={isFollowersLoading}
                options={options}
                styles={styleProps}
                onChange={handleSelectChange}
                placeholder="Sesrch Twitter"
                isMulti
              />

              <PrimaryButton
                isLoading={isAddingContact}
                onClick={handleAddContacts}
                mt={4}
                w="full"
                leftIcon={<TwitterIcon />}
                disabled={selectedContacts.length === 0}
              >
                Add Contact
              </PrimaryButton>

              <Text mt={4} fontSize="14px" textAlign="center" fontWeight={300}>
                <WarningIcon /> The users must be following you
              </Text>
            </Box>

            <Box maxW="45%" ml="auto">
              <Box>
                <Image
                  src="/assets/img/contacts.png"
                  alt="Emergency Contacts"
                />
              </Box>
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  );
};

export default AddEmergencyContactModal;
