import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalFooter,
  Text,
  useToast,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Signatur } from "../../../Signature/Signatur";
import { SearchTrain } from "../../../../utils";
import UserApi from "../../../../Service/module/userModule.api";
export const Invite = ({ onClose }) => {
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

    const { response, error } = await new UserApi().postIntiveVu51Api(
      serachingResult,
      { ...data, wheel_surface_diametr: "455" }
    );
    setLoading(false);
    if (response) {
      toast({
        status: "success",
        title: "VU-51 shakl vagon muvaffaqiyatli qo'shildi.",
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
          : "Bu vagon raqami uchun VU-51 shakli mavjud.",
        duration: 4000,
        isClosable: true,
        position: "top-right",
        fontSize: "3xl",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ModalBody>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <SearchTrain setSerachingResult={setSerachingResult} />
          <FormControl isInvalid={errors?.carriage_depo_station}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Vagon Depo, Zavod
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("carriage_depo_station", { required: true })}
              type="text"
            />
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel whiteSpace={["wrap", "depo_text"]}>j.d</FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("depo_text", { required: true })}
              type="text"
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
          G‘ildirak juftligi to‘liq ro‘yxati
        </Text>
        <Text
          as={"h1"}
          textAlign={"center"}
          m={0}
          fontSize={"xl"}
          fontWeight={700}
        >
          Keldi
        </Text>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl isInvalid={errors?.invite_date}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Qabul qilingan sana
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("invite_date", { required: true })}
              type="date"
            />
          </FormControl>
          <FormControl isInvalid={errors?.wheel_pair_number}>
            <FormLabel>G‘ilidrak juftligi raqami </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("wheel_pair_number", { required: true })}
              type="text"
            />
          </FormControl>
          <FormControl isInvalid={errors?.wheel_pair_type}>
            <FormLabel>Turi </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("wheel_pair_type", { required: true })}
              type="text"
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
          Sana va vaqt
        </Text>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl isInvalid={errors?.last_formation}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Oxirgi Shakllanish
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("last_formation", { required: true })}
              type="text"
            />
          </FormControl>
          <FormControl isInvalid={errors?.full_inspaction}>
            <FormLabel>
              {" "}
              Oxirgi to‘liq tekshirish va rolikli rulmonlarni buksaga o‘rnatish{" "}
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("full_inspaction", { required: true })}
              type="text"
            />
          </FormControl>
        </Flex>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl isInvalid={errors?.carriage_under}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Vagon ostidan olindi
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("carriage_under", { required: true })}
              type="text"
            />
          </FormControl>
          <FormControl isInvalid={errors?.invite_vchd}>
            <FormLabel>Qabul qilgan VCHD, Zavod, pto</FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("invite_vchd", { required: true })}
              type="text"
            />
          </FormControl>
          <FormControl isInvalid={errors?.referance_number}>
            <FormLabel>Yunaltiruvchi vedomostlar raqami</FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("referance_number", { required: true })}
              type="text"
            />
          </FormControl>
        </Flex>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl isInvalid={errors?.valid_invalid_text}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Yarokli (yangi shakllantirilgan yoki qayta tamirlangan) Yaroksiz
              (klassifikator bo‘yicha defekt raqami){" "}
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("valid_invalid_text", { required: true })}
              type="text"
            />
          </FormControl>
          <FormControl isInvalid={errors?.repair_required}>
            <FormLabel>Talab qilingan tamir turi</FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("repair_required", { required: true })}
              type="text"
            />
          </FormControl>
        </Flex>

        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl w={"50%"} isInvalid={errors?.inviting_date}>
            <Input
              mt={8}
              borderColor={"gray.600"}
              {...register("inviting_date", { required: true })}
              type="date"
            />
          </FormControl>
          <Signatur title={"Imzo"} />
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
  );
};

Invite.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};
