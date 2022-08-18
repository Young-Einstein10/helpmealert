import React from "react";
import {
  Box,
  Heading,
  ListIcon,
  ListItem,
  UnorderedList,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Quicklinks = ({
  toggleAddEmergencyContactModal,
}: {
  toggleAddEmergencyContactModal: () => void;
}) => {
  return (
    <Box width={["100%", "100%", "45%"]}>
      <Heading mb={4} fontSize="24px" color="rgba(33, 32, 38, 0.7)">
        QuickLinks
      </Heading>

      <UnorderedList listStyleType="none" mb={4}>
        <ListItem>
          <ListIcon as={ChevronRightIcon} />

          <ChakraLink onClick={toggleAddEmergencyContactModal} fontWeight={600}>
            Add Emergency contact
          </ChakraLink>
        </ListItem>

        <ListItem>
          <ListIcon as={ChevronRightIcon} />

          <ChakraLink>View key words</ChakraLink>
        </ListItem>

        <ListItem>
          <ListIcon as={ChevronRightIcon} />

          <ChakraLink>Join our saftey community</ChakraLink>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default Quicklinks;
