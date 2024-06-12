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
import { SearchTrain } from "../../../utils";
export const CreateDefectoscope = ({ onClose, isOpen }) => {
  const [isLoading, setLoading] = useState(false);
  const [serachingResult, setSerachingResult] = useState(null);
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // setLoading(true);
    // const { response, error } = await new UserApi().postVu68(
    //   serachingResult,
    //   data
    // );
    // setLoading(false);
    // if (response) {
    //   toast({
    //     status: "success",
    //     title: "VU-68 jurnaliga vagon muvaffaqiyatli qo'shildi.",
    //     duration: 4000,
    //     isClosable: true,
    //     position: "top-right",
    //     fontSize: "3xl",
    //   });
    //   window.location.reload();
    // }
    // if (error) {
    //   toast({
    //     status: "error",
    //     title: error?.detail
    //       ? "Vagon raqami kiritilmadi yoki bu turdagi vagon raqami mavjud emas."
    //       : "Bu vagon raqami uchun VU-68 jurnali mavjud.",
    //     duration: 4000,
    //     isClosable: true,
    //     position: "top-right",
    //     fontSize: "3xl",
    //   });
    // }
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
              <SearchTrain setSerachingResult={setSerachingResult} />

              <FormControl isInvalid={errors?.stop_remont_date}>
                <FormLabel>Tormoz ta’mirlangan sana</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("stop_remont_date", { required: true })}
                  type="date"
                />
              </FormControl>
            </Flex>

            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.air_test_date}>
                <FormLabel>Detal nomi</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("air_test_date", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.air_dropper_type}>
                <FormLabel>Yil/raqam/zavod</FormLabel>
                <Input
                  type="text"
                  placeholder="yil/raqam/zavodi"
                  {...register("air_dropper_type", { required: true })}
                  borderColor={"gray.600"}
                />
              </FormControl>
              <FormControl isInvalid={errors?.last_remont_stop_date}>
                <FormLabel whiteSpace={["pre-wrap", "nowrap"]}>
                  Nosozlik xulosasi
                </FormLabel>
                <Input
                  type="text"
                  {...register("last_remont_stop_date", { required: true })}
                  borderColor={"gray.600"}
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

CreateDefectoscope.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};
