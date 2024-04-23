import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Oldi } from "./Oldi";

export const Dalolatnoma_Model = ({ onClose, isOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      w={"100%"}
      onClose={onClose}
      size={["sm", "md", "lg", "6xl"]}
      isCentered
      motionPreset="slideInLeft"
    >
      <ModalOverlay backdropFilter="blur(10px) hue-rotate(10deg)" />
      <ModalContent>
        <ModalHeader textAlign={"center"}>
          Kirish va chiqish dalolatnomasi
        </ModalHeader>

        <ModalCloseButton />
        <Oldi />
      </ModalContent>
    </Modal>
  );
};
Dalolatnoma_Model.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};
