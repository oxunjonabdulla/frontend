import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import UserApi from "../../../Service/module/userModule.api";
export const UpdateDefectoscope = ({ onClose, isOpen, updatedObject }) => {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const { response, error } = await new UserApi().updateDefestoskop(
      updatedObject?.carriage,
      data
    );
    setLoading(false);
    if (response) {
      toast({
        status: "success",
        title: "Defestoskop yangilandi",
        duration: 4000,
        isClosable: true,
        position: "top-right",
        fontSize: "3xl",
      });
      window.location.reload();
    }
    if (error) {
      toast({
        status: "error",
        title: error?.detail,
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
      size={["sm", "md", "lg", "6xl"]}
      isCentered
      motionPreset="slideInLeft"
    >
      <ModalOverlay backdropFilter="blur(10px) hue-rotate(10deg)" />
      <ModalContent>
        <ModalHeader textAlign={"center"}>
          Defektoskoplar qayd etish
        </ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl>
                <FormLabel>Vagon raqami</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  defaultValue={updatedObject?.carriage}
                  readOnly
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.defectoscope_date}>
                <FormLabel>Tormoz ta’mirlangan sana</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("defectoscope_date", { required: true })}
                  type="date"
                  defaultValue={updatedObject?.defectoscope_date}
                />
              </FormControl>
            </Flex>

            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.detail_number}>
                <FormLabel>Detal nomi</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("detail_number", { required: true })}
                  type="text"
                  defaultValue={updatedObject?.detail_number}
                />
              </FormControl>
              <FormControl isInvalid={errors?.year_number_factory}>
                <FormLabel>Yil/raqam/zavod</FormLabel>
                <Input
                  type="text"
                  placeholder="yil/raqam/zavodi"
                  {...register("year_number_factory", { required: true })}
                  borderColor={"gray.600"}
                  defaultValue={updatedObject?.year_number_factory}
                />
              </FormControl>
              <FormControl isInvalid={errors?.break_detail}>
                <FormLabel whiteSpace={["pre-wrap", "nowrap"]}>
                  Nosozlik xulosasi
                </FormLabel>
                <Input
                  type="text"
                  {...register("break_detail", { required: true })}
                  borderColor={"gray.600"}
                  defaultValue={updatedObject?.break_detail}
                />
              </FormControl>
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
              Saqlash
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

UpdateDefectoscope.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  updatedObject: PropTypes.object,
};
