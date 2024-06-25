import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Oldi } from "./Oldi";

export const WheelDalolatnomaModal = ({ onClose, isOpen }) => {
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
          Kirish va chiqish dalolatnomasi g‘ildirak bo‘linmasi
        </ModalHeader>

        <ModalCloseButton />

        <Oldi onClose={onClose} />
      </ModalContent>
    </Modal>
  );
};
WheelDalolatnomaModal.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};
