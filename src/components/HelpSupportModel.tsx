// src/components/HelpSupportModal.tsx
import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ListItem,
  List,
  ListIcon,
  Text,
} from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { FiBookOpen, FiHelpCircle, FiMail } from 'react-icons/fi';
interface HelpSupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function HelpSupportModal({ isOpen, onClose }: HelpSupportModalProps) {
  return (
    <ChakraProvider>
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay  bg='blackAlpha.800'/>
      <ModalContent
        bgColor="#FFF"
        mx="auto"
        my={300} 
        maxW="450px"
      >
        <ModalHeader>Help & Support</ModalHeader>
        <ModalCloseButton position="absolute" top={3} right={3} />
        <ModalBody p={6}>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={FiBookOpen} color="blue.500" />
              Help Center
              <Text mt={2}>Read more about how to fully utilize WealthWise</Text>
            </ListItem>
            <ListItem>
              <ListIcon as={FiHelpCircle} color="blue.500" />
              Feature Request
              <Text mt={2}>View the product roadmap and vote on features</Text>
            </ListItem>
          </List>
        </ModalBody>
      </ModalContent>
    </Modal>
    </ChakraProvider>
  );
}

export default HelpSupportModal;
