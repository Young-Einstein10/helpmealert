import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

const PrimaryButton = ({ children, ...rest }: ButtonProps) => {
  return (
    <Button height="56px" bg="#0D359A" colorScheme="#0D359A" {...rest}>
      {children}
    </Button>
  );
};

export default PrimaryButton;
