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
export const VU_50_Model = ({ onClose, isOpen }) => {
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

    const { response, error } = await new UserApi().postVu50(
      serachingResult,
      data
    );
    setLoading(false);
    if (response) {
      toast({
        status: "success",
        title: "VU-50 shakliga vagon muvaffaqiyatli qo'shildi.",
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
          : "Bu vagon raqami uchun VU-50 shakli mavjud.",
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
          VU-50 Jurnalini qo&apos;shish
        </ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <SearchTrain setSerachingResult={setSerachingResult} />

              <FormControl isInvalid={errors?.referral_number}>
                <FormLabel>Yo‘naltirish varaqasi raqami </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("referral_number", { required: true })}
                  type="number"
                />
              </FormControl>
            </Flex>

            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.wheels_send_pair}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  G‘ildirak juftlarini yuborish uchun-ta&apos;mirlash(ga){" "}
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("wheels_send_pair", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.via_carriage_number}>
                <FormLabel>Vagon orqali №</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("via_carriage_number", { required: true })}
                  type="text"
                />
              </FormControl>

              <FormControl isInvalid={errors?.wheel_pair_send_date}>
                <FormLabel>Sana va kuni</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("wheel_pair_send_date", { required: true })}
                  type="date"
                />
              </FormControl>
            </Flex>

            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.sanding_station_railway}>
                <FormLabel>Jo‘natuvchi stansiya va temiryo’l </FormLabel>
                <Input
                  type="text"
                  {...register("sanding_station_railway", { required: true })}
                  borderColor={"gray.600"}
                />
              </FormControl>
              <FormControl isInvalid={errors?.sending_station_name}>
                <FormLabel>Jo‘natuvchi tashkilot nomi</FormLabel>
                <Input
                  type="text"
                  {...register("sending_station_name", { required: true })}
                  borderColor={"gray.600"}
                />
              </FormControl>
              <FormControl isInvalid={errors?.receiving_station_railway}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Qabul qiluvchi stansiya va temiryo’l{" "}
                </FormLabel>
                <Input
                  type="text"
                  {...register("receiving_station_railway", { required: true })}
                  borderColor={"gray.600"}
                />
              </FormControl>
              <FormControl isInvalid={errors?.receiving_station_name}>
                <FormLabel>Qabul qiluvchi tashkilot nomi </FormLabel>
                <Input
                  type="text"
                  {...register("receiving_station_name", { required: true })}
                  borderColor={"gray.600"}
                />
              </FormControl>
            </Flex>

            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.wheel_pair_number}>
                <FormLabel>G‘ildirak juftligi raqami</FormLabel>
                <Input
                  type="text"
                  {...register("wheel_pair_number", { required: true })}
                  borderColor={"gray.600"}
                />
              </FormControl>

              <FormControl isInvalid={errors?.wheel_pair_type}>
                <FormLabel>G‘ildirak juftligi turi</FormLabel>
                <Input
                  type="text"
                  {...register("wheel_pair_type", { required: true })}
                  borderColor={"gray.600"}
                />
              </FormControl>
            </Flex>

            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.condition_servicable_defects}>
                <FormLabel>
                  Holati: xizmatga yaroqli-yangi shakllanish yoki
                  ta&apos;mirlangan; nosoz-kerakli ta&apos;mirlash
                  (klassifikator bo‘yicha nuqson raqami
                </FormLabel>
                <Input
                  type="text"
                  {...register("condition_servicable_defects", {
                    required: true,
                  })}
                  borderColor={"gray.600"}
                />
              </FormControl>

              <FormControl isInvalid={errors?.wheels_pair_priice_list}>
                <FormLabel>G‘ildirak juftliklarining ro‘yxat narxi</FormLabel>
                <Input
                  type="text"
                  {...register("wheels_pair_priice_list", { required: true })}
                  borderColor={"gray.600"}
                />
              </FormControl>
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

VU_50_Model.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};
