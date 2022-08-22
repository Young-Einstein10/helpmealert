import React from "react";
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
import { useAddEmergencyContact } from "hooks";

const styleProps = {
  control: (provided: CSSObjectWithLabel) => ({
    ...provided,
    minHeight: "56px",
  }),
};

type ModalProps = Omit<ChakraModalProps, "children">;

const AddEmergencyContactModal = (props: ModalProps) => {
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
