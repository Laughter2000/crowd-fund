import React from 'react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Text,
  useDisclosure,
  Button,
  Flex,
} from '@chakra-ui/react';

import { Check } from './CustomIcons';

function ThankYou() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        color="white"
        bgColor="brand.100"
        borderLeftRadius="50px"
        borderRightRadius="50px"
        _hover={{
          bgColor: 'brand.300',
        }}
        _active={{
          bgColor: 'brand.300',
        }}
        py={8}
        px="none"
        fontSize="md"
        w="170px"
        onClick={onOpen}
      >
        Continue
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentere>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Flex direction="column" justifyContent="center">
              <Check
                boxSize="16"
                my={8}
                justifySelf="center !important"
                isCentered
                mx="auto !important"
              />
              <Text fontWeight="bold" fontSize="xl" textAlign="center" my={4}>
                Thanks for your support!
              </Text>
              <Text textAlign="center">
                Your pledge brings us one step closer to sharing Mastercraft
                Bamboo Monitor Riser worldwide. You will get an email once our
                campaign is completed.
              </Text>

              <Button
                borderLeftRadius="50px"
                borderRightRadius="50px"
                py="12px"
                px={8}
                colorScheme="teal"
                my={8}
                onClick={onClose}
                mx="auto"
              >
                Got It
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ThankYou;
