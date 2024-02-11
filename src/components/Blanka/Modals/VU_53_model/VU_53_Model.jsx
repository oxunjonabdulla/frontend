import {
  Button,
  Flex,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { InviteForm } from "./InviteForm";
import { UseForm } from "./UseForm";

export const VU_53_Model = ({ onClose, isOpen }) => {
  const [activeType, setActiveType] = useState(1);

  const renderComponent = () => {
    switch (activeType) {
      case 1:
        return <InviteForm />;
      case 2:
        return <UseForm />;
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
        <Flex
          flexDir={"column"}
          align={"center"}
          justify={"center"}
          mt={8}
          gap={4}
        >
          <Text>VU-53 shakl turini tanlang</Text>

          <Flex gap={4}>
            <Button
              onClick={() => setActiveType(1)}
              variant={activeType === 1 ? "outline_active" : "outline"}
            >
              Qabul
            </Button>
            <Button
              onClick={() => setActiveType(2)}
              variant={activeType === 2 ? "outline_active" : "outline"}
            >
              Istemol
            </Button>
          </Flex>
        </Flex>

        <ModalCloseButton />

        {renderComponent()}
      </ModalContent>
    </Modal>
  );
};

VU_53_Model.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};
