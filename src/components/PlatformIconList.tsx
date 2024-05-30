import {
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaWindows,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { Platform } from "../entities/Platform";
import { HStack, Icon, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
    android: FaAndroid,
  };
  return (
    <>
      <HStack marginY={1}>
        {platforms.map((platform) => (
          <Icon
            key={platform.id}
            as={iconMap[platform.slug]}
            color="gray.500"
          ></Icon>
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
