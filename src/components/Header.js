import React from 'react';
import '@fontsource/commissioner/700.css';

import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Text,
  Divider,
} from '@chakra-ui/react';
import { Hamburger, CloseIcon } from './CustomIcons';

const NavLink = ({ children }) => (
  <Link
    px={4}
    py={1}
    rounded={'md'}
    color="black.900"
    fontWeight="bold"
    _hover={{
      textDecoration: 'none',
    }}
    href={'#'}
  >
    {children}
  </Link>
);

const TopLink = ({ children }) => (
  <Link
    px={4}
    py={1}
    rounded={'md'}
    color="white"
    _hover={{
      textDecoration: 'none',
    }}
    href={'#'}
  >
    {children}
  </Link>
);

const Links = ['About', 'Discover', 'Get Started'];

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      w={'full'}
      h={'300px'}
      backgroundImage={{
        base: "url('/images/image-hero-mobile.jpg')",
        md: "url('/images/image-hero-desktop.jpg')",
      }}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <Flex justifyContent="space-between" py={4} px={[4, 4, 4, 16]}>
        <Text color="white" fontWeight="bold" fontSize="xl">
          CrowdFunds
        </Text>

        <IconButton
          icon={isOpen ? <CloseIcon boxSize="7" /> : <Hamburger boxSize="7" />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          colorScheme="none"
        />

        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
          {Links.map(link => (
            <TopLink key={link} color="white">
              {link}
            </TopLink>
          ))}
        </HStack>
      </Flex>

      {isOpen ? (
        <Box
          pb={4}
          display={{ md: 'none' }}
          bgColor="white"
          width="80%"
          justifyContent="center"
          mx="auto"
          mt={4}
          borderRadius="8"
          pos="relative"
          zIndex={150}
        >
          <Stack as={'nav'} spacing={4}>
            <NavLink>About</NavLink>
            <Divider />
            <NavLink>Discover</NavLink>
            <Divider />
            <NavLink>Get Started</NavLink>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Header;
