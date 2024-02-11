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
import { Signatur } from "../../Signature/Signatur";
import { SearchTrain } from "../../../utils";
import UserApi from "../../../Service/module/userModule.api";
export const VU_92_Model = ({ onClose, isOpen }) => {
  const [isLoading, setLoading] = useState(false);
  const [serachingResult, setSerachingResult] = useState(null);
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);

    const { response, error } = await new UserApi().postVu92(
      serachingResult,
      data
    );
    setLoading(false);
    if (response) {
      toast({
        status: "success",
        title: "VU-92 jurnaliga vagon muvaffaqiyatli qo'shildi.",
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
        title: error?.detail
          ? "Vagon raqami kiritilmadi yoki bu turdagi vagon raqami mavjud emas."
          : "Bu vagon raqami uchun VU-92 jurnali mavjud.",
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
          VU-92 Jurnalini qo&apos;shish
        </ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <SearchTrain setSerachingResult={setSerachingResult} />

              <FormControl isInvalid={errors?.inspection_date}>
                <FormLabel>Taftish sanasi </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("inspection_date", { required: true })}
                  type="date"
                />
              </FormControl>
            </Flex>

            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.wheel_pair_number}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  G‘ildirak juftligi raqami
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("wheel_pair_number", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.buttock_parts}>
                <FormLabel> Buksa qismlarning holati </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("buttock_parts", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.execution_inspection}>
                <FormLabel>
                  Taftish ishlarini bajarishda amalga oshiriladi
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("execution_inspection", { required: true })}
                  type="text"
                />
              </FormControl>
            </Flex>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <Signatur title={"Taftish qilingan imzosi"} />
              <Signatur title={"Taftish qilingan usta imzosi"} />
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button variant={"outline_red"} mr={3} onClick={onClose}>
              Yopish
            </Button>
            <Button
              variant={"outline"}
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

VU_92_Model.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};
