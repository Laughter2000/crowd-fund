import React from 'react';

import { Box, Flex, Text, Heading, Divider, Progress } from '@chakra-ui/react';

const reports = [
  {
    id: 1,
    amount: '$89,914',
    desc: 'of $100,000 backed',
    divider: true,
  },
  {
    id: 2,
    amount: '5,007',
    desc: 'total backers',
    divider: true,
  },
  {
    id: 3,
    amount: '56',
    desc: ' days left',
    divider: false,
  },
];

const ReportComponent = ({ amount, desc, divider }) => {
  return (
    <Flex direction="column" m={8} height="50px">
      <Heading as="h3" fontSize="4xl" fontWeight="bold">
        {amount}
      </Heading>
      <Text fontSize="lg" my={2}>
        {desc}
      </Text>
      {divider && <Divider orientation="horizontal" size="xl" />}
    </Flex>
  );
};

const Statistics = () => {
  return (
    <Box
      backgroundColor="white"
      borderRadius={8}
      px={2}
      py={4}
      w="90%"
      mx="auto"
      maxW="700px"
      my={4}
      textAlign="center"
    >
      <Flex direction={{ base: 'column', md: 'row' }} justifyContent="center">
        {reports.map(report => (
          <>
            <ReportComponent
              amount={report.amount}
              desc={report.desc}
              divider={report.divider}
              key={report.id}
            />
          </>
        ))}
      </Flex>

      <Progress
        colorScheme="teal"
        size="lg"
        value={80}
        mx={4}
        my={[4, 4, 8, 8]}
        borderRadius="50px"
      />
    </Box>
  );
};

export default Statistics;
