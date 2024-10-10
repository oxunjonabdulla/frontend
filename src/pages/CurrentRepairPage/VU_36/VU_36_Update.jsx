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
import { useState } from "react";
import { useForm } from "react-hook-form";
import UserApi from "@/Service/module/userModule.api";

export const VU_36_Update = ({ updateData, onClose, isOpen }) => {
  const [isLoading, setLoading] = useState(false);

  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const { response, error } = await new UserApi().updateVu36Current(
      updateData?.carriage,
      data
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
          VU-36 Jurnalini qo&apos;shish
        </ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <Flex
              flexWrap={["wrap", "nowrap"]}
              justifyContent={"center"}
              alignItems={"center"}
              my="4"
              gap={3}
            >
              <FormControl>
                <FormLabel>Vagon raqami</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  placeholder="T.Y"
                  type="text"
                  value={updateData?.carriage}
                  readOnly
                  defaultValue={updateData?.temir_yul_name}
                />
              </FormControl>
              <FormControl isInvalid={errors?.temir_yul_name}>
                <FormLabel>Temir yo{"'"}l nomi</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  placeholder="T.Y"
                  type="text"
                  defaultValue={updateData?.temir_yul_name}
                  {...register("temir_yul_name", { required: true })}
                />
              </FormControl>
            </Flex>
            <Flex
              flexWrap={["wrap", "nowrap"]}
              justifyContent={"center"}
              alignItems={"center"}
              my="4"
              gap={3}
            >
              <FormControl isInvalid={errors?.bildirish_number}>
                <FormLabel>BILDIRISHNOMA №</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  placeholder="Bildirishnoma Raqami"
                  type="number"
                  defaultValue={updateData?.bildirish_number}
                  {...register("bildirish_number", { required: true })}
                />
              </FormControl>
              <FormControl isInvalid={errors?.yuk_vagon_tamir_turi}>
                <FormLabel>Yuk vagonining qabul qilingan ta’mir turi</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  placeholder="Mukammal , davriy , joriy va boshqa ta’mir turi"
                  defaultValue={updateData?.yuk_vagon_tamir_turi}
                  type="text"
                  {...register("yuk_vagon_tamir_turi", { required: true })}
                />
              </FormControl>
              <FormControl isInvalid={errors?.tamir_turi_kodi}>
                <FormLabel>Kodi</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  placeholder="Ta'mir turi kodi"
                  type="number"
                  defaultValue={updateData?.tamir_turi_kodi}
                  {...register("tamir_turi_kodi", { required: true })}
                />
              </FormControl>
            </Flex>
            <Flex
              gap={3}
              flexWrap={["wrap", "nowrap"]}
              alignItems={"center"}
              justifyContent={"center"}
              my={8}
            >
              <FormControl
                display={"flex"}
                gap={3}
                flexWrap={["wrap", "nowrap"]}
                alignItems={"center"}
                isInvalid={errors?.tamir_turi_date}
              >
                <Text as={"h1"} fontWeight={500} whiteSpace={"nowrap"}>
                  Vaqt va sanasi. sana
                </Text>
                <Input
                  borderColor={"gray.600"}
                  {...register("tamir_turi_date", { required: true })}
                  defaultValue={updateData?.tamir_turi_date}
                  type="date"
                />
              </FormControl>
              <Text as={"h1"} fontWeight={500} textAlign={"center"} my="4">
                soat
              </Text>
              <NumberInput
                maxW="100px"
                mr="1rem"
                max={23}
                defaultValue={updateData?.tamir_turi_hour}
                min={0}
                borderColor={"gray.600"}
              >
                <NumberInputField {...register("tamir_turi_hour")} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>

              <Text as={"h1"} fontWeight={500} textAlign={"center"} my="4">
                daqiqa.
              </Text>
              <NumberInput
                maxW="100px"
                mr="1rem"
                max={59}
                defaultValue={updateData?.tamir_turi_minute}
                min={0}
                borderColor={"gray.600"}
              >
                <NumberInputField {...register("tamir_turi_minute")} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Flex>

            <Flex
              flexWrap={["wrap", "nowrap"]}
              justifyContent={"center"}
              alignItems={"center"}
              my="4"
              gap={3}
            >
              <FormControl isInvalid={errors?.korxona_tamir_yuli}>
                <FormLabel> Korxona uchun maxsus ta‘mir yo‘li </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  defaultValue={updateData?.korxona_tamir_yuli}
                  placeholder="Korxona uchun maxsus ta‘mir yo‘li"
                  type="text"
                  {...register("korxona_tamir_yuli", { required: true })}
                />
              </FormControl>

              <FormControl isInvalid={errors?.korxona_kodi}>
                <FormLabel> korhona kodi</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  placeholder="korhona kodi"
                  type="number"
                  defaultValue={updateData?.korxona_kodi}
                  {...register("korxona_kodi", { required: true })}
                />
              </FormControl>
              <FormControl isInvalid={errors?.ega_kodi}>
                <FormLabel>Ega kodi</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  placeholder="korhona kodi"
                  defaultValue={updateData?.ega_kodi}
                  type="number"
                  {...register("ega_kodi", { required: true })}
                />
              </FormControl>
            </Flex>

            <Flex
              gap={3}
              flexWrap={["wrap", "nowrap"]}
              alignItems={"center"}
              justifyContent={"center"}
              my={8}
            >
              <FormControl
                display={"flex"}
                gap={3}
                flexWrap={["wrap", "nowrap"]}
                alignItems={"center"}
                isInvalid={errors?.tamir_date}
              >
                <Text as={"h1"} fontWeight={500} whiteSpace={"nowrap"}>
                  Ta&apos;mir sanasi va vaqti
                </Text>
                <Input
                  borderColor={"gray.600"}
                  defaultValue={updateData?.tamir_date}
                  {...register("tamir_date", { required: true })}
                  type="date"
                />
              </FormControl>
              <Text as={"h1"} fontWeight={500} textAlign={"center"} my="4">
                soat
              </Text>
              <NumberInput
                maxW="100px"
                mr="1rem"
                max={23}
                defaultValue={updateData?.tamir_hour}
                min={0}
                borderColor={"gray.600"}
              >
                <NumberInputField {...register("tamir_hour")} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>

              <Text as={"h1"} fontWeight={500} textAlign={"center"} my="4">
                daqiqa.
              </Text>
              <NumberInput
                maxW="100px"
                mr="1rem"
                max={59}
                defaultValue={updateData?.tamir_minute}
                min={0}
                borderColor={"gray.600"}
              >
                <NumberInputField {...register("tamir_minute")} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Flex>

            <Flex
              flexWrap={["wrap", "nowrap"]}
              justifyContent={"center"}
              alignItems={"center"}
              my="4"
              gap={3}
            >
              <FormControl isInvalid={errors?.kod_moder_1}>
                <FormLabel>Ko‘d maderniyzatsiya</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  placeholder="Ko‘d maderniyzatsiya"
                  defaultValue={updateData?.kod_moder_1}
                  type="text"
                  {...register("kod_moder_1", { required: true })}
                />
              </FormControl>
              <FormControl isInvalid={errors?.kod_moder_2}>
                <FormLabel>Ko‘d maderniyzatsiya</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  placeholder="Ko‘d maderniyzatsiya"
                  defaultValue={updateData?.kod_moder_2}
                  type="text"
                  {...register("kod_moder_2", { required: true })}
                />
              </FormControl>
              <FormControl isInvalid={errors?.kod_moder_3}>
                <FormLabel>Ko‘d maderniyzatsiya</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  placeholder="Ko‘d maderniyzatsiya"
                  defaultValue={updateData?.kod_moder_3}
                  type="text"
                  {...register("kod_moder_3", { required: true })}
                />
              </FormControl>
              <FormControl isInvalid={errors?.kod_moder_4}>
                <FormLabel>Ko‘d maderniyzatsiya</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  placeholder="Ko‘d maderniyzatsiya"
                  type="text"
                  {...register("kod_moder_4", { required: true })}
                  defaultValue={updateData?.kod_moder_4}
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
