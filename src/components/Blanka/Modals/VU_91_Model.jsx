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
  Select,
  useToast,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import UserApi from "../../../Service/module/userModule.api";
export const VU_91_Model = ({ onClose, isOpen }) => {
  const [isLoading, setLoading] = useState(false);
  const [wheelPlumberUser, setWheelPlumberUser] = useState([]);

  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);

    const { response, error } = await new UserApi().postVu91(data);
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

  useEffect(() => {
    const fetchData = async () => {
      const { response: wheelPlumberUserSignature } = await new UserApi().getWheelPlumberUserSignature();
      if (wheelPlumberUserSignature) setWheelPlumberUser(wheelPlumberUserSignature?.data);
    };
    fetchData();
  }, []);

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
          VU-91 Jurnalini qo&apos;shish
        </ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.seen_date}>
                <FormLabel>Ko‘rilgan sanasi </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("seen_date", { required: true })}
                  type="date"
                />
              </FormControl>
              <FormControl isInvalid={errors?.gildirak_chilangar_user_signature}>
                <FormLabel>G&rsquo;ildirak Plumber foydalanuvchi imzosi</FormLabel>
                <Select
                  borderColor={"gray.600"}
                  placeholder="G'ildirak Plumber foydalanuvchi imzosi"
                  {...register("gildirak_chilangar_user_signature", { required: true })}
                >
                  {wheelPlumberUser?.map((item) => (
                    <option key={item?.id} value={item?.id}>{item?.name}</option>
                  ))}
                </Select>
              </FormControl>
            </Flex>

            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.chartley_model}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Podshipnik shartli belgisi
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("chartley_model", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.chartley_made_and_year}>
                <FormLabel>
                  {" "}
                  Podshipnik ishlab chiqorilgan zavodi va yili{" "}
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  placeholder="Yil va Zavod raqami ko'rsatilsin"
                  {...register("chartley_made_and_year", { required: true })}
                  type="text"
                />
              </FormControl>
            </Flex>

            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.chartley_number}>
                <FormLabel>Podshipnik raqami</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("chartley_number", { required: true })}
                  type="number"
                />
              </FormControl>
              <FormControl isInvalid={errors?.defect_appearance}>
                <FormLabel>Nuqson ko&apos;rinishi</FormLabel>
                <Input
                  type="text"
                  {...register("defect_appearance", { required: true })}
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

VU_91_Model.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};
