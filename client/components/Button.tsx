import React from "react";
import { Button, ButtonProps, forwardRef } from "@chakra-ui/react";

const PrimaryButton = forwardRef<ButtonProps, "button">((props, ref) => {
  const { children, ...rest } = props;

  return (
    <Button
      ref={ref}
      height="56px"
      bg="#0D359A"
      colorScheme="#0D359A"
      {...rest}
    >
      {children}
    </Button>
  );
});

export default PrimaryButton;
