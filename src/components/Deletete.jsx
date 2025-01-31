import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";

export const Deleteted = ({
  isOpen,
  onClose,
  carriageNumber,
  deletedFunction,
  text,
  placeholder
}) => {
  const [inputValue, setValueInput] = useState("");

  return (
    <Modal isOpen={isOpen} isCentered onClose={() => onClose(false)}>
      <ModalOverlay backdropFilter={"blur(10px)"} />
      <ModalContent>
        <ModalHeader fontSize={"3xl"}>
          Ma&apos;lumotni o&apos;chirish
        </ModalHeader>
        <ModalCloseButton onClick={() => onClose(false)} />
        <ModalBody>
          <Text fontSize={"xl"} fontWeight={"400"} userSelect={"none"}>
            Siz{" "}
            <Text
              as={"span"}
              border={"1px solid rgba(0,0,0,0.6)"}
              p={1}
              rounded={6}
              fontWeight={600}
            >
              {" "}
              {carriageNumber}
            </Text>{" "}
            {text ? text : "raqamli vagon ma'lumotini o'chirmoqdasiz."}
          </Text>
          <Input
            name="vagon_delete"
            placeholder={placeholder ? placeholder : "Vagon raqamini kirting"}
            borderColor={"gray.700"}
            mt={4}
            onChange={(e) => setValueInput(e.target.value)}
          />
        </ModalBody>
        <ModalFooter gap={"10px"}>
          <Button
            bgColor={"red"}
            color={"#fff"}
            border={0}
            _hover={{ bgColor: "red", opacity: 0.8 }}
            size="md"
            _disabled={{
              opacity: "0.4",
              _hover: { opacity: 0.4 },
              cursor: "not-allowed",
            }}
            variant="solid"
            onClick={() => deletedFunction(carriageNumber)}
            isDisabled={+inputValue !== +carriageNumber}
          >
            O&apos;chirish
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

Deleteted.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  carriageNumber: PropTypes.string,
  deletedFunction: PropTypes.func,
};
