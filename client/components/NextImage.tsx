import Image from "next/image";
import { chakra } from "@chakra-ui/react";

const NextImage = chakra(Image, {
  shouldForwardProp: (prop) => {
    return ["width", "height", "src", "alt", "quality"].includes(prop);
  },
});

export default NextImage;
