import { HStack, Image } from '@chakra-ui/react';
import React from 'react';
import logo from '../assets/logo.webp';
import { px } from 'framer-motion';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <Image src={logo} boxSize="60px"></Image>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
