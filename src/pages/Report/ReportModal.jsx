import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import UserApi from "../../Service/module/userModule.api";
import { SearchTrain } from "../../utils";

export const ReportModal = ({ onClose, isOpen, setGettingData }) => {
  const [isLoading, setLoading] = useState(false);
  const [serachingResult, setSerachingResult] = useState(null);
  const toast = useToast();
  const {
    handleSubmit,
  } = useForm();

  const onSubmit = async () => {
    setLoading(true);

    const { response, error } = await new UserApi().getGeneralReport(serachingResult);
    setLoading(false);
    if (response) {
      toast({
        status: "success",
        title: "Xisobot Tayyorlash muvaffaqiyatli amalga oshirildi",
        duration: 4000,
        isClosable: true,
        position: "top-right",
        fontSize: "3xl",
      });

      setGettingData(response?.data);
      onClose();
    }
    if (error) {
      toast({
        status: "error",
        title: error?.error ? error?.error : "Bu vagon raqami uchun Jurnallar mavjud emas.",
        duration: 4000,
        isClosable: true,
        position: "top-right",
        fontSize: "3xl",
      });
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      w={"100%"}
      onClose={onClose}
      size={"md"}
      isCentered
      motionPreset="slideInLeft"
    >
      <ModalOverlay backdropFilter="blur(10px) hue-rotate(10deg)" />
      <ModalContent>
        <ModalHeader textAlign={"center"}>Hisobot olish</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <SearchTrain setSerachingResult={setSerachingResult} />{" "}
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Yopish
            </Button>
            <Button
              colorScheme="teal"
              isLoading={isLoading}
              loadingText="Saqlash"
              spinnerPlacement="end"
              type="submit"
            >
              Yaratish
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

ReportModal.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};
