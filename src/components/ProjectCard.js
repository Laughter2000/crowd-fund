import React from 'react';

import {
  Heading,
  Text,
  Link,
  Box,
  Flex,
  HStack,
  Divider,
  Textarea,
} from '@chakra-ui/react';
import ThankYou from './ThankYouModal';

const ProjectCard = ({
  id,
  title,
  aid,
  checked,
  change,
  description,
  amount,
  isAvailable,
}) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="10px"
      borderColor="gray.200"
      my={12}
      py={4}
      alignItems="left"
      opacity={isAvailable ? 1.0 : 0.3}
      _hover={{
        borderColor: 'brand.300',
        borderWidth: '2px',
      }}
      _active={{
        borderColor: 'brand.300',
      }}
    >
      <Flex
        spacing={4}
        alignContent="center"
        justifyContent="space-between"
        px={4}
      >
        <HStack spacing={4} alignContent="center">
          <Box
            w="25px"
            h="25px"
            borderRadius="50%"
            borderColor="gray"
            borderWidth="1px"
            as="button"
          >
            <Box
              w="15px"
              h="15px"
              borderRadius="50%"
              borderColor="gray"
              bgColor={checked ? '#3cb4ac' : null}
              mx="auto"
              mt="3px"
              as="button"
              onClick={() => change(id, checked)}
            >
              {' '}
            </Box>
          </Box>

          <Flex
            direction={{ base: 'column', md: 'row' }}
            alignItems={{ base: 'left', md: 'center' }}
            justifyContent={{ md: 'space-between' }}
            textAlign="left !important"
          >
            <Heading
              as="h6"
              fontSize="xl"
              mb={[2, 2, 0, 0]}
              textAlign="left"
              _hover={{
                color: 'brand.100',
                pointer: 'cursor',
              }}
            >
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
              textAlign="left"
              mx={[0, 0, 0, 4]}
            >
              {aid}
            </Link>
          </Flex>
        </HStack>
        <Flex alignItems="center" display={{ sm: 'none', md: 'flex' }}>
          <Text fontWeight="bold" fontSize="4xl" pr={2} my={4}>
            {amount}
          </Text>
          {aid && <Text>Left</Text>}
        </Flex>
      </Flex>
      <Text my={4} px={4}>
        {description}
      </Text>

      <Flex alignItems="center" display={{ sm: 'flex', md: 'none' }} px={4}>
        <Text fontWeight="bold" fontSize="4xl" pr={2} my={4}>
          {amount}
        </Text>
        {aid && <Text>Left</Text>}
      </Flex>

      {aid && checked && (
        <Box>
          <Divider type="dashed" />
          <Flex
            direction={{ sm: 'column', md: 'row' }}
            alignItems="center"
            justifyContent="space-between"
            p={4}
          >
            <Text mb={4}>Enter your Pledge</Text>
            <Flex alignItems="center">
              <Textarea
                w="170px"
                h="10px"
                resize="none"
                borderLeftRadius="50px"
                borderRightRadius="50px"
                mr={2}
                textAlign="center"
                _hover={{
                  borderColor: 'brand.100',
                }}
              />
              <ThankYou />
            </Flex>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default ProjectCard;
