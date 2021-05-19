import React from 'react';

import { Heading, Text, Link, Button, Box, Flex } from '@chakra-ui/react';

const ItemCard = ({ title, aid, description, amount, isAvailable }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="10px"
      borderColor="gray.200"
      my={12}
      p={4}
      alignItems="left"
      opacity={isAvailable ? 1.0 : 0.3}
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        alignItems="left"
        justifyContent={{ md: 'space-between' }}
      >
        <Heading as="h6" fontSize="xl" mb={[2, 2, 0, 0]}>
          {title}
        </Heading>
        <Link
          rounded={'md'}
          color="brand.100"
          fontWeight="bold"
          _hover={{
            textDecoration: 'none',
          }}
          href={'#'}
        >
          {aid}
        </Link>
      </Flex>
      <Text my={4}>{description}</Text>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        alignItems="left"
        justifyContent={{ md: 'space-between' }}
      >
        <Flex alignItems="center">
          <Text fontWeight="bold" fontSize="4xl" pr={2} my={4}>
            {amount}
          </Text>
          <Text>Left</Text>
        </Flex>
        <Button
          color="white"
          bgColor={isAvailable ? '#3cb4ac' : 'gray'}
          _hover={{
            bgColor: 'brand.300',
          }}
          _active={{
            bgColor: 'brand.300',
          }}
          borderLeftRadius="50px"
          borderRightRadius="50px"
          py={8}
          px="none"
          fontSize="md"
          w="200px"
          isDisabled={!isAvailable}
        >
          {isAvailable ? 'Select Reward' : 'Out Of Stock'}
        </Button>
      </Flex>
    </Box>
  );
};

export default ItemCard;
