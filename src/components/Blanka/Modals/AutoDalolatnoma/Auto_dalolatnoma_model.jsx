import {
  Button,
  Flex,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { Oldi } from "./Oldi";
import { Orqa } from "./Orqa";

export const Auto_dalolatnoma_model = ({ onClose, isOpen }) => {
  const [activeType, setActiveType] = useState(1);

  const renderComponent = () => {
    switch (activeType) {
      case 1:
        return <Oldi onClose={onClose} />;
      case 2:
        return <Orqa onClose={onClose} />;
    }
  };
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
          Kirish va chiqish dalolatnomasi Aravalar bo‘linmasi{" "}
          {activeType === 1 ? "oldi" : "orqasi"}
        </ModalHeader>
        <Flex flexDir={"column"} align={"center"} justify={"center"} gap={4}>
          <Flex gap={4}>
            <Button
              onClick={() => setActiveType(1)}
              variant={activeType === 1 ? "outline_active" : "outline"}
            >
              Oldi
            </Button>
            <Button
              onClick={() => setActiveType(2)}
              variant={activeType === 2 ? "outline_active" : "outline"}
            >
              Orqa
            </Button>
          </Flex>
        </Flex>
        <ModalCloseButton />
        {renderComponent()}
      </ModalContent>
    </Modal>
  );
};
Auto_dalolatnoma_model.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};
