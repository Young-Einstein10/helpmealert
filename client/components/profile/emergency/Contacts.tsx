import React from "react";
import useSWR from "swr";
import {
  Box,
  Button,
  Heading,
  ListIcon,
  ListItem,
  UnorderedList,
  Link as ChakraLink,
  Square,
  Spinner,
  Text,
  Flex,
} from "@chakra-ui/react";
import { ChevronRightIcon, PlusSquareIcon } from "@chakra-ui/icons";
import { Contacts } from "pages/api/contacts";
import DeleteIcon from "components/icons/delete";

const EmergencyContacts = ({
  toggleAddEmergencyContactModal,
}: {
  toggleAddEmergencyContactModal: () => void;
}) => {
  const { data: contacts, error } = useSWR<Contacts[]>("/api/contacts");

  const isLoading = !contacts && !error;

  const handleDeleteEmergencyContact = (id: string) => {};

  return (
    <Box width={["100%", "100%", "45%"]}>
      <Heading mb={4} fontSize="24px" color="rgba(33, 32, 38, 0.7)">
        Emergency Contacts
      </Heading>

      {isLoading ? (
        <Square size={300}>
          <Spinner />
        </Square>
      ) : (
        <UnorderedList mb={4} listStyleType="none">
          {contacts?.map((contact) => (
            <ListItem as={Flex} alignItems="center" key={contact.id}>
              <ListIcon as={ChevronRightIcon} />

              <Flex
                flexGrow={1}
                alignItems="center"
                cursor="pointer"
                justifyContent="space-between"
                height="40px"
                sx={{
                  "&:hover .delete-btn": {
                    display: "flex",
                  },
                }}
              >
                <div>
                  {`${contact.name} `}

                  <Text as="span" fontWeight={600}>
                    @{contact.username}
                  </Text>
                </div>

                <Button
                  className="delete-btn"
                  fontSize="12px"
                  variant="ghost"
                  fontWeight={300}
                  color="#E85252"
                  onClick={() => handleDeleteEmergencyContact(contact.id!)}
                  leftIcon={<DeleteIcon />}
                  sx={{
                    "&.delete-btn": {
                      display: "none",
                    },
                  }}
                >
                  Remove
                </Button>
              </Flex>
            </ListItem>
          ))}
        </UnorderedList>
      )}

      {!isLoading && contacts?.length === 0 ? (
        <Text mb={6}>
          You have not added any contacts. Click the button below to add one.😀
        </Text>
      ) : null}

      <Button
        ml={4}
        variant="link"
        leftIcon={<PlusSquareIcon />}
        onClick={toggleAddEmergencyContactModal}
      >
        Add Contact
      </Button>
    </Box>
  );
};

export default EmergencyContacts;
