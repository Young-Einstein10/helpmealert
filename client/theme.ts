import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
};

const theme = extendTheme({
  colors: {
    brand: "#1B5FC6",
    success: "rgba(39, 174, 96, 1)",
    danger: "rgba(238, 0, 32, 1)",
    info: "rgba(20, 142, 186, 1)",
    warning: "rgba(254, 155, 14, 1)",
  },
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
  breakpoints,
});

export default theme;
