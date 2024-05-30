import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";

import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding={5}>
      <Link to='/'>
      <Image src={logo} boxSize="60px" objectFit='cover'></Image>
      </Link>
     
      <SearchInput  />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
