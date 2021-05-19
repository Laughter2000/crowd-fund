import React, { useReducer } from 'react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure,
  Button,
} from '@chakra-ui/react';

import { items } from './About';
import ProjectCard from './ProjectCard';

const initialItems = [
  {
    id: 4,
    title: 'Pledge with no reward',
    aid: null,
    description:
      'Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.',
    amount: null,
    isAvailable: true,
    checked: false,
  },
  ...items,
];

const itemReducer = (state, action) => {
  switch (action.type) {
    case 'CHECK':
      return state.map(item => {
        if (item.id === action.id) {
          return { ...item, checked: true };
        } else {
          return item;
        }
      });

    case 'UNCHECK':
      return state.map(item => {
        if (item.id === action.id) {
          return { ...item, checked: false };
        } else {
          return item;
        }
      });

    default:
      return state;
  }
};

function ProjectModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [moreItems, dispatch] = useReducer(itemReducer, initialItems);

  const handleChange = (id, checked) => {
    dispatch({
      type: checked ? 'UNCHECK' : 'CHECK',
      id: id,
    });
  };

  return (
    <>
      <Button
        color="white"
        bgColor="brand.100"
        _hover={{
          bgColor: 'brand.300',
        }}
        _active={{
          bgColor: 'brand.300',
        }}
        borderLeftRadius="50px"
        borderRightRadius="50px"
        py={8}
        px={12}
        fontSize="lg"
        onClick={onOpen}
      >
        Back this project
      </Button>

      <Modal
        onClose={onClose}
        isOpen={isOpen}
        scrollBehavior="outside"
        size="2xl"
      >
        <ModalOverlay />
        <ModalContent maxW="700px" mx={12}>
          <ModalHeader>Back this project</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text my={4}>
              Want to support us in bringing Mastercraft Bamboo Monitor Riser
              out in the world?
            </Text>

            {moreItems.map(item => (
              <ProjectCard
                title={item.title}
                aid={item.aid}
                description={item.description}
                amount={item.amount}
                isAvailable={item.isAvailable}
                key={item.id}
                id={item.id}
                checked={item.checked}
                change={handleChange}
              />
            ))}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ProjectModal;
