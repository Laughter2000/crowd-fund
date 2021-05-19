import React, { useState } from 'react';

import { Box, Heading, Text, Button, HStack, Flex } from '@chakra-ui/react';
import { Bookmark, MasterCraft } from './CustomIcons';
import ProjectModal from './ProjectModal';

const BackProject = () => {
  const [isBookmarked, setBookmark] = useState(false);
  return (
    <Box
      backgroundColor="white"
      borderRadius={8}
      px={2}
      py={8}
      w="90%"
      mx="auto"
      pos="relative"
      zIndex={100}
      maxW="700px"
      justifyContent="center"
      justifyItems="center"
      bottom="50px"
      textAlign="center"
    >
      <MasterCraft
        boxSize="16"
        mx="auto"
        pos="relative"
        bottom="70px"
        m="none"
      />

      <Box mx="auto" pos="relative" bottom="30px">
        <Heading as="h1" fontSize="2xl">
          Mastercraft Bamboo Monitor Riser
        </Heading>
        <Text py={4}>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </Text>
        <HStack
          justifyContent="center"
          spacing={[2, 2, 2, 16]}
          mx="auto"
          mt={2}
        >
          <ProjectModal />
          <Flex
            alignItems="center"
            onClick={() => {
              setBookmark(!isBookmarked);
            }}
          >
            <Bookmark boxSize="16" pos="relative" zIndex={5} left="22px" />
            <Button
              py={8}
              px={8}
              borderRightRadius="40px"
              alignItems="center"
              display={{ base: 'none', md: 'flex' }}
            >
              {isBookmarked ? 'Bookmarked' : 'Bookmark'}
            </Button>
          </Flex>
        </HStack>
      </Box>
    </Box>
  );
};

export default BackProject;
