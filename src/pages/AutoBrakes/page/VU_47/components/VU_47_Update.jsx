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
  ModalHeader,
  ModalOverlay,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import UserApi from "@/Service/module/userModule.api";
import { Signatur } from "../../../../../components";

export const VU_47_Update = ({ updateData, onClose, isOpen }) => {
  const [isLoading, setLoading] = useState(false);

  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const { response, error } = await new UserApi().patchBackVu47(
      updateData?.uuid,
      { acceptor_signature: "Orqa qismiga imzo quyildi", ...data }
    );

    setLoading(false);
    if (response) {
      toast({
        status: "success",
        title: "VU-36 jurnaliga vagon muvaffaqiyatli qo'shildi.",
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
        title: error?.error
          ? error?.error
          : "Bu vagon raqami uchun VU-36 jurnali mavjud.",
        duration: 4000,
        isClosable: true,
        position: "top-right",
        fontSize: "3xl",
      });
    }
  };
  console.log(updateData);
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
          VU-47 orqa qismini kiritish
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.date}>
                <FormLabel>Дата </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("date", { required: true })}
                  type="date"
                />
              </FormControl>
              <FormControl isInvalid={errors?.device_type}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Тип прибора{" "}
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("device_type", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.serial_number}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Заводской номер прибор год и месяц выпуска{" "}
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("serial_number", { required: true })}
                  type="text"
                />
              </FormControl>
            </Flex>

            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.charging_time_40}>
                <FormLabel>
                  {" "}
                  Время зарядки золотниковой камеры и запасного резервуара, с{" "}
                </FormLabel>
                <FormLabel> ЗР от 4,0 кгс/см2 4,5 кгс/см2</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("charging_time_40", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.brake_cylinder_fill_time}>
                <FormLabel>
                  {" "}
                  Время наполнения тормоз цилиндра до 3; 5 кгс/см2 при экстрен .
                  Или полном служебном торможении, с{" "}
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("brake_cylinder_fill_time", { required: true })}
                  type="text"
                />
              </FormControl>
            </Flex>

            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.cylinder_pressure_empty}>
                <FormLabel>порожнем</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("cylinder_pressure_empty", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.cylinder_pressure_normal}>
                <FormLabel>среднем </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("cylinder_pressure_normal", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.cylinder_pressure_full}>
                <FormLabel>груженом </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("cylinder_pressure_full", { required: true })}
                  type="text"
                />
              </FormControl>
            </Flex>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.acceptor_signature}>
                <FormLabel>Подпись принявшего прибор </FormLabel>

                <Signatur />
              </FormControl>
            </Flex>

            <Flex my={4} justify={"end"}>
              <Button
                colorScheme="teal"
                isLoading={isLoading}
                loadingText="Saqlash"
                spinnerPlacement="end"
                type="submit"
              >
                Saqlash
              </Button>
            </Flex>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
