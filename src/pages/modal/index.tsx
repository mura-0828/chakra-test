import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const ModalTest = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  if (isOpen) console.log("isOpen");
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        {/* モーダルを開いている時の背景 */}
        <ModalOverlay backgroundColor={"Highlight"} />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          {/* 閉じるボタン　これを使わない場合は、onCloseを使う */}
          <ModalCloseButton />
          <ModalBody>
            <Text>モーダルほんぶん</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalTest;
