import {
  Button,
  Flex,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Oldi } from "./Oldi";
import { useState } from "react";
import { OldiUpdate } from "./OldiUpdate";
import { OrqaUpdate } from "./OrqaUpdate";

export const Update_Dalolatnoma = ({ onClose, isOpen, updateData }) => {
  const [activeComponent, setActiveComponent] = useState("Component1");
  const renderComponent = () => {
    switch (activeComponent) {
      case "Component1":
        return <OldiUpdate updateData={updateData} />;
      case "Component2":
        return <OrqaUpdate updateData={updateData} />;
      default:
        return <OldiUpdate />;
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
          Kirish va chiqish dalolatnomasi o'zgartirish
        </ModalHeader>
        <Text textAlign={"center"} fontWeight={"bold"} fontSize={"2rem"}>
          {updateData?.carriage}
        </Text>
        <Text mb={"5"} textAlign={"center"}>
          vagon raqami
        </Text>
        <Flex
          justify={"center"}
          gap="3"
          rounded={"md"}
          overflow={"auto"}
          flexWrap={"wrap"}
        >
          <Button
            colorScheme="teal"
            onClick={() => setActiveComponent("Component1")}
            variant={activeComponent === "Component1" ? "solid" : "outline"}
          >
            Oldi qismi yangilash
          </Button>
          {updateData?.back_detail ? (
            <Button
              colorScheme="teal"
              onClick={() => setActiveComponent("Component2")}
              variant={activeComponent === "Component2" ? "solid" : "outline"}
            >
              Orqa qismi yangilash
            </Button>
          ) : (
            <Text color={"red"}>Orqa qismi kiritilmagan</Text>
          )}
        </Flex>

        <ModalCloseButton />
        {renderComponent()}
      </ModalContent>
    </Modal>
  );
};
Update_Dalolatnoma.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};
