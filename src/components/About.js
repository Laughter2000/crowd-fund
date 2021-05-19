import React from 'react';

import { Box, Heading, Text } from '@chakra-ui/react';
import ItemCard from './ItemCard';

export const items = [
  {
    id: 1,
    title: 'Bamboo Stand',
    aid: 'Pledge $25 or more',
    description:
      "You get an ergonomic stand made of natural bamboo.You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    amount: 101,
    isAvailable: true,
    checked: false,
  },
  {
    id: 2,
    title: 'Black Edition Stand',
    aid: 'Pledge $75 or more',
    description:
      'You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
    amount: 64,
    isAvailable: true,
    checked: false,
  },

  {
    id: 3,
    title: 'Mahogany Special Edition',
    aid: 'Pledge $200 or more',
    description:
      'You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
    amount: 0,
    isAvailable: false,
    checked: false,
  },
];

const About = () => {
  return (
    <Box
      backgroundColor="white"
      borderRadius={8}
      px={8}
      py={8}
      w="90%"
      mx="auto"
      maxW="700px"
      my={8}
      textAlign="left"
    >
      <Heading as="h3" fontSize="lg">
        About this project
      </Heading>
      <Text mt={4}>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
        <Text mt={4}>
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </Text>
      </Text>

      {items.map(item => (
        <ItemCard
          title={item.title}
          aid={item.aid}
          description={item.description}
          amount={item.amount}
          isAvailable={item.isAvailable}
          key={item.id}
        />
      ))}
    </Box>
  );
};

export default About;
