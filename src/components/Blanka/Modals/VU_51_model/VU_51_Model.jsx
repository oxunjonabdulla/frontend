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
import { Invite } from "./Invite";
import { Acepted } from "./Acepted";

export const VU_51_Model = ({ onClose, isOpen }) => {
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
          <Text>VU-51 shakl kelgan qismini qo'shish</Text>
        </Flex>

        <ModalCloseButton />

        <Invite />
      </ModalContent>
    </Modal>
  );
};

VU_51_Model.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};
