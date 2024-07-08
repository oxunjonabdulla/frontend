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
  Text,
  useToast,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Signatur } from "../../Signature/Signatur";
import UserApi from "../../../Service/module/userModule.api";
export const VU_93_Model = ({ onClose, isOpen }) => {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (!data.made_date) {
      delete data.made_date;
    }
    setLoading(true);

    const { response, error } = await new UserApi().postVu93(data);
    setLoading(false);
    if (response) {
      toast({
        status: "success",
        title: "VU-93 jurnaliga vagon muvaffaqiyatli qo'shildi.",
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
          : "Bu vagon raqami uchun VU-93 jurnali mavjud.",
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
          VU-93 Jurnalini qo&apos;shish
        </ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.chartley_rapair_date}>
                <FormLabel> Podshipnik ta&apos;mirlangan sanasi </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("chartley_rapair_date", { required: true })}
                  type="date"
                />
              </FormControl>
            </Flex>

            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.chartley_model_chartley_number}>
                <FormLabel>
                  Podshipnik shartli belgilari, Podshipnik raqami{" "}
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  placeholder="Podshipnik belgisi va raqami kiritilsin "
                  {...register("chartley_model_chartley_number", {
                    required: true,
                  })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.made_in}>
                <FormLabel>Ishlab chiqorgan zavod </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("made_in", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Ishlab chiqorgan sanasi </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("made_date")}
                  type="date"
                />
              </FormControl>
            </Flex>

            <Text
              as={"h1"}
              textAlign={"center"}
              m={0}
              fontSize={"xl"}
              fontWeight={700}
            >
              Ko&apos;rinishi
            </Text>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.not_allowed}>
                <FormLabel>Yaroqsiz</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("not_allowed", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.rapair_works}>
                <FormLabel>Amalga oshirilgan ta&apos;mir ishlari</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("rapair_works", { required: true })}
                  type="text"
                />
              </FormControl>
            </Flex>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <Signatur title={"Ta'mirlagan shaxs imzosi"} />
              <Signatur title={"Usta imzosi"} />
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

VU_93_Model.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};
