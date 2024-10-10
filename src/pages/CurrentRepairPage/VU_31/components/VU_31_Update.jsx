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
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  useToast,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { memo, useState } from "react";
import { useForm } from "react-hook-form";
import UserApi from "@/Service/module/userModule.api";
import { calculateHour } from "@/utils/dateToHourConverter";
export const VU_31_Update = memo(function VU_31_Update({
  onClose,
  isOpen,
  updatedData,
}) {
  const [isLoading, setLoading] = useState(false);
  const [get11To10, set11To10] = useState("0");
  const [get13To11, set13To11] = useState("0");
  const [get13To12, set13To12] = useState("0");
  const [get13To10, set13To10] = useState("0");
  const toast = useToast();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      tamir_boshlanish_date: updatedData?.tamir_boshlanish_date,
      nosoz_kirish_date: updatedData?.nosoz_kirish_date,
      nosoz_chiqish_date: updatedData?.nosoz_chiqish_date,
      tamir_uzatish_date: updatedData?.tamir_uzatish_date,
    },
  });

  const onSubmit = async (data) => {
    const obj = {
      ...data,
      tamir_yulida_gr13: get13To11,
      bekat_yulida_gr11: get11To10,
      umumiy_turish_gr11: get13To10,
      tamir_vaqtida_gr13: get13To12,
    };
    setLoading(true);
    const { response, error } = await new UserApi().updateVu31Current(
      updatedData?.carriage_number,
      obj
    );
    setLoading(false);
    if (response) {
      toast({
        status: "success",
        title: "VU-31 jurnaliga vagon muvaffaqiyatli yangilandi.",
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
        title: "Malumot yangilanmadi, xatolik keldi",
        duration: 4000,
        isClosable: true,
        position: "top-right",
        fontSize: "3xl",
      });
    }
  };

  //   const localDate = new Date();

  const type10Date = watch("nosoz_kirish_date"),
    type10Time =
      watch("nosoz_kirish_hour") + ":" + watch("nosoz_kirish_minute");
  const type11Date = watch("tamir_uzatish_date"),
    type11Time =
      watch("tamir_uzatish_hour") + ":" + watch("tamir_uzatish_minute");
  const type12Date = watch("tamir_boshlanish_date"),
    type12Time =
      watch("tamir_boshlanish_hour") + ":" + watch("tamir_boshlanish_minute");
  const type13Date = watch("nosoz_chiqish_date"),
    type13Time =
      watch("nosoz_chiqish_hour") + ":" + watch("nosoz_chiqish_minute");

  const handleCalculate = () => {
    set11To10(calculateHour(type11Date, type11Time, type10Date, type10Time));
    set13To11(calculateHour(type13Date, type13Time, type11Date, type11Time));
    set13To12(calculateHour(type13Date, type13Time, type12Date, type12Time));
    set13To10(calculateHour(type13Date, type13Time, type10Date, type10Time));
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
          VU-31 Jurnalini yangliash
        </ModalHeader>
        <ModalCloseButton />

        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.repair_date}>
                <FormLabel>Vagon raqami</FormLabel>
                <Input
                  type="text"
                  borderColor={"gray.600"}
                  disabled
                  defaultValue={updatedData?.carriage_number}
                  isReadOnly
                />
              </FormControl>
              <FormControl isInvalid={errors?.repair_date}>
                <FormLabel>Yuklangan, yuksiz</FormLabel>
                <Input
                  type="text"
                  borderColor={"gray.600"}
                  disabled
                  placeholder={updatedData?.is_freight ? "Yukli" : "Yuksiz"}
                />
              </FormControl>
              <FormControl isInvalid={errors?.repair_date}>
                <FormLabel whiteSpace={"nowrap"}>
                  Poezd raqami yoki nosoz parkga o&apos;tkazilgan yo&apos;l
                </FormLabel>
                <Input
                  type="text"
                  borderColor={"gray.600"}
                  disabled
                  placeholder={updatedData?.train_number}
                />
              </FormControl>
              <FormControl isInvalid={errors?.repair_date}>
                <FormLabel whiteSpace={"nowrap"}>
                  Oxirgi ta&apos;mir turi
                </FormLabel>
                <Input
                  type="text"
                  borderColor={"gray.600"}
                  disabled
                  placeholder={updatedData?.last_repair?.toUpperCase()}
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
              Poezddan uzilgan vagonlar
            </Text>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl>
                <FormLabel>buksa qizishi bo&apos;yicha</FormLabel>
                <Input
                  type="text"
                  {...register("buksa")}
                  defaultValue={updatedData?.buksa}
                  borderColor={"gray.600"}
                />
              </FormControl>
              <FormControl>
                <FormLabel>rolikli podshipniklarda</FormLabel>
                <Input
                  type="text"
                  {...register("rolik_podshipnik")}
                  defaultValue={updatedData?.rolik_podshipnik}
                  borderColor={"gray.600"}
                />
              </FormControl>
              <FormControl>
                <FormLabel>boshqa texnik nosozliklar bo&apos;yicha</FormLabel>
                <Input
                  type="text"
                  {...register("boshqa_tech_error")}
                  defaultValue={updatedData?.boshqa_tech_error}
                  borderColor={"gray.600"}
                />
              </FormControl>
              <FormControl>
                <FormLabel>jo&apos;natish parkida mahalliy tuzilgan</FormLabel>
                <Input
                  type="text"
                  {...register("junatish_park")}
                  defaultValue={updatedData?.junatish_park}
                  borderColor={"gray.600"}
                />
              </FormControl>
            </Flex>
            <Flex
              gap={3}
              flexWrap={["wrap", "nowrap"]}
              alignItems={"center"}
              my={4}
            >
              <Text
                as={"h1"}
                textAlign={"center"}
                m={0}
                fontSize={"xl"}
                fontWeight={700}
                whiteSpace={"nowrap"}
              >
                Nosoz holdagi vaqti hisobi{" "}
              </Text>
              <FormControl isInvalid={errors?.nosoz_kirish_date}>
                <FormLabel>sana:</FormLabel>
                <Input
                  type="date"
                  borderColor={"gray.600"}
                  {...register("nosoz_kirish_date")}
                />
              </FormControl>
              <FormControl isInvalid={errors?.nosoz_kirish_hour}>
                <FormLabel>soat:</FormLabel>
                <NumberInput
                  borderColor={"gray.600"}
                  mr="1rem"
                  max={23}
                  defaultValue={updatedData?.nosoz_kirish_hour}
                  min={0}
                >
                  <NumberInputField
                    {...register("nosoz_kirish_hour", {
                      setValueAs: (value) => value.toString(),
                    })}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <FormControl isInvalid={errors?.nosoz_kirish_minute}>
                <FormLabel>daqiqa:</FormLabel>
                <NumberInput
                  mr="1rem"
                  max={59}
                  defaultValue={updatedData?.nosoz_kirish_minute}
                  min={0}
                  borderColor={"gray.600"}
                >
                  <NumberInputField
                    {...register("nosoz_kirish_minute", {
                      setValueAs: (value) => value.toString(),
                    })}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </Flex>
            <Flex
              gap={3}
              flexWrap={["wrap", "nowrap"]}
              alignItems={"center"}
              my={4}
            >
              <Text
                as={"h1"}
                textAlign={"center"}
                m={0}
                fontSize={"xl"}
                fontWeight={700}
                whiteSpace={"nowrap"}
              >
                Ta&apos;mir yo&apos;liga uzatish vaqti{" "}
              </Text>
              <FormControl isInvalid={errors?.tamir_uzatish_date}>
                <FormLabel>sana:</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("tamir_uzatish_date")}
                  type="date"
                />
              </FormControl>
              <FormControl isInvalid={errors?.tamir_uzatish_hour}>
                <FormLabel>soat:</FormLabel>
                <NumberInput
                  borderColor={"gray.600"}
                  mr="1rem"
                  max={23}
                  defaultValue={updatedData?.tamir_uzatish_hour}
                  min={0}
                >
                  <NumberInputField
                    {...register("tamir_uzatish_hour", {
                      setValueAs: (value) => value.toString(),
                    })}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <FormControl isInvalid={errors?.tamir_uzatish_minute}>
                <FormLabel>daqiqa:</FormLabel>
                <NumberInput
                  mr="1rem"
                  max={59}
                  min={0}
                  borderColor={"gray.600"}
                  defaultValue={updatedData?.tamir_uzatish_minute}
                >
                  <NumberInputField
                    {...register("tamir_uzatish_minute", {
                      setValueAs: (value) => value.toString(),
                    })}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </Flex>
            <Flex
              gap={3}
              flexWrap={["wrap", "nowrap"]}
              alignItems={"center"}
              my={4}
            >
              <Text
                as={"h1"}
                textAlign={"center"}
                m={0}
                fontSize={"xl"}
                fontWeight={700}
                whiteSpace={"nowrap"}
              >
                Ta&apos;mir boshlanish vaqti
              </Text>
              <FormControl isInvalid={errors?.tamir_boshlanish_date}>
                <FormLabel>sana:</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("tamir_boshlanish_date")}
                  type="date"
                />
              </FormControl>
              <FormControl isInvalid={errors?.tamir_boshlanish_hour}>
                <FormLabel>soat:</FormLabel>
                <NumberInput
                  borderColor={"gray.600"}
                  mr="1rem"
                  max={23}
                  defaultValue={updatedData?.tamir_boshlanish_hour}
                  min={0}
                >
                  <NumberInputField
                    {...register("tamir_boshlanish_hour", {
                      setValueAs: (value) => value.toString(),
                    })}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <FormControl isInvalid={errors?.tamir_boshlanish_minute}>
                <FormLabel>daqiqa:</FormLabel>
                <NumberInput
                  mr="1rem"
                  max={59}
                  defaultValue={updatedData?.tamir_boshlanish_minute}
                  min={0}
                  borderColor={"gray.600"}
                >
                  <NumberInputField
                    {...register("tamir_boshlanish_minute", {
                      setValueAs: (value) => value.toString(),
                    })}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </Flex>
            <Flex
              gap={3}
              flexWrap={["wrap", "nowrap"]}
              alignItems={"center"}
              my={4}
            >
              <Text
                as={"h1"}
                textAlign={"center"}
                m={0}
                fontSize={"xl"}
                fontWeight={700}
                whiteSpace={"nowrap"}
              >
                Nosoz holdan chiqarish vaqti
              </Text>
              <FormControl isInvalid={errors?.nosoz_chiqish_date}>
                <FormLabel>sana:</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("nosoz_chiqish_date")}
                  type="date"
                />
              </FormControl>
              <FormControl isInvalid={errors?.nosoz_chiqish_hour}>
                <FormLabel>soat:</FormLabel>
                <NumberInput
                  borderColor={"gray.600"}
                  mr="1rem"
                  max={23}
                  defaultValue={updatedData?.nosoz_chiqish_hour}
                  min={0}
                >
                  <NumberInputField
                    {...register("nosoz_chiqish_hour", {
                      setValueAs: (value) => value.toString(),
                    })}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <FormControl isInvalid={errors?.nosoz_chiqish_minute}>
                <FormLabel>daqiqa:</FormLabel>
                <NumberInput
                  mr="1rem"
                  max={59}
                  defaultValue={updatedData?.nosoz_chiqish_minute}
                  min={0}
                  borderColor={"gray.600"}
                >
                  <NumberInputField
                    {...register("nosoz_chiqish_minute", {
                      setValueAs: (value) => value.toString(),
                    })}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </Flex>
            <Flex justify={"center"} my={3}>
              <Button
                colorScheme="teal"
                opacity={
                  !type10Date || !type11Date || !type12Date || !type13Date
                    ? "0.5"
                    : "1"
                }
                pointerEvents={
                  !type10Date || !type11Date || !type12Date || !type13Date
                    ? "none"
                    : "inherit"
                }
                onClick={handleCalculate}
              >
                Hisoblash
              </Button>
            </Flex>
            <Text
              as={"h1"}
              textAlign={"center"}
              m={0}
              fontSize={"xl"}
              fontWeight={700}
            >
              Nosoz holda turgan vaqti
            </Text>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.bekat_yulida_gr11}>
                <FormLabel>bekat yo&apos;llarida gr,11 - gr.10</FormLabel>
                <Input
                  type="text"
                  {...register("bekat_yulida_gr11")}
                  borderColor={"gray.600"}
                  defaultValue={updatedData?.bekat_yulida_gr11}
                  value={get11To10}
                />
              </FormControl>
              <FormControl isInvalid={errors?.tamir_yulida_gr13}>
                <FormLabel>ta&apos;mir yo&apos;llarida gr.13 - gr11</FormLabel>
                <Input
                  type="text"
                  {...register("tamir_yulida_gr13")}
                  defaultValue={updatedData?.tamir_yulida_gr13}
                  borderColor={"gray.600"}
                  value={get13To11}
                />
              </FormControl>
              <FormControl isInvalid={errors?.tamir_vaqtida_gr13}>
                <FormLabel>ta&apos;mir vaqtida gr.13 - gr12</FormLabel>
                <Input
                  type="text"
                  {...register("tamir_vaqtida_gr13")}
                  borderColor={"gray.600"}
                  defaultValue={updatedData?.tamir_vaqtida_gr13}
                  value={get13To12}
                />
              </FormControl>
              <FormControl isInvalid={errors?.umumiy_turish_gr11}>
                <FormLabel>umumiy turib qolishi gr.13 - gr.10</FormLabel>
                <Input
                  type="text"
                  {...register("umumiy_turish_gr11", {
                    required: true,
                  })}
                  defaultValue={updatedData?.umumiy_turish_gr11}
                  borderColor={"gray.600"}
                  value={get13To10}
                />
              </FormControl>
            </Flex>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"}>
              <FormControl isInvalid={errors?.nosoz_hujjat_raqam}>
                <FormLabel>
                  Vagonni nosoz holdan chiqaruvchi hujjat raqami va sanasi
                  (inventardan chiqarilgan, boshqa depo yoki zavodga ta&apos;mir
                  uchun jo&apos;natilgan)
                </FormLabel>
                <Input
                  type="text"
                  {...register("nosoz_hujjat_raqam")}
                  borderColor={"gray.600"}
                  defaultValue={updatedData?.nosoz_hujjat_raqam}
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
});

VU_31_Update.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  updatedData: PropTypes.object,
};
