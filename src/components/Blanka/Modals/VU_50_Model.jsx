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
import { useFieldArray, useForm } from "react-hook-form";
import UserApi from "../../../Service/module/userModule.api";
import { FormWheel } from "./FormWheel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export const VU_50_Model = ({ onClose, isOpen }) => {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "wheel_pair",
  });

  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);

    const { response, error } = await new UserApi().postVu50(data);
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
              <FormControl isInvalid={errors?.referral_number}>
                <FormLabel>Yo‘naltirish varaqasi raqami </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("referral_number", { required: true })}
                  type="number"
                />
              </FormControl>
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
            </Flex>

            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
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
            {fields?.length < 6 ? (
              <Button
                colorScheme="messenger"
                onClick={() => append()}
                leftIcon={
                  <FontAwesomeIcon
                    icon={faPlus}
                    style={{
                      border: "1px solid rgba(255,255,255,0.2)",
                      padding: "5px",
                      borderRadius: 50,
                    }}
                  />
                }
              >
                Ma'lumor birligi qushish
              </Button>
            ) : (
              <Text
                fontWeight={700}
                color="white"
                bgColor={"orange"}
                rounded={4}
                p={"5px 10px"}
              >
                Ma'lumot chegarasi 20 ta dan oshmasligi kerak
              </Text>
            )}
            {fields.map((group, idx) => (
              <FormWheel
                key={group.id}
                {...{
                  group,
                  idx,
                  control,
                  register,
                  remove,
                  errors,
                }}
              />
            ))}
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

VU_50_Model.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};
