import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Lorem,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/react";

import styles from "../styles/Home.module.css";

import { motion } from "framer-motion";

export default function VerticallyCenter() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className={styles.modal}>
      <motion.Button
        onClick={onOpen}
        colorScheme="black"
        initial={{ y: "1000px" }}
        animate={{ y: "0px" }}
        transition={{ type: "spring", duration: 5 }}
      >
        See More
      </motion.Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent className={styles.modalText}>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>
              Click the menu on the top right and browse my website. Don&apos;t
              forget to check out my GitHub at{" "}
              <a href="https://github.com/Dinomouse" style={{ color: "blue" }}>
                https://github.com/Dinomouse
              </a>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
