import React from "react";
import { Container, ContainerProps } from "@chakra-ui/react";
import { MAX_WIDTH_VALUE } from "utils/constants";

const Wrapper = ({ children, ...rest }: ContainerProps) => {
  return (
    <Container maxW={MAX_WIDTH_VALUE} mx="auto" py={24} {...rest}>
      {children}
    </Container>
  );
};

export default Wrapper;
