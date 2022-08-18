import { Icon, IconProps } from "@chakra-ui/react";
import React from "react";

const SearchIcon = (props: IconProps) => {
  return (
    <Icon
      width="28px"
      height="28px"
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.8422 22.6909C17.9134 22.6909 22.0244 18.5799 22.0244 13.5088C22.0244 8.43764 17.9134 4.32666 12.8422 4.32666C7.77107 4.32666 3.6601 8.43764 3.6601 13.5088C3.6601 18.5799 7.77107 22.6909 12.8422 22.6909Z"
        stroke="#0F172A"
        strokeWidth="2.29553"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.3199 24.9864L19.3271 19.9937"
        stroke="#0F172A"
        strokeWidth="2.29553"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default SearchIcon;
