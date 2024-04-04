import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
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
  Select,
  Text,
  useToast,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { option_kodpaa_data } from "../../utils/mock_heads";
import { imageGet } from "../../utils/imageGet";
import UserApi from "../../Service/module/userModule.api";
export const PtopUpdate = ({ onClose, isOpen, updateData }) => {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const obj = { ...data, carriage_number: updateData?.carriage_number };

    setLoading(true);

    const { response, error } = await new UserApi().ptoCarriageUpdate(
      updateData?.carriage_number,
      obj
    );
    setLoading(false);
    if (response) {
      toast({
        status: "success",
        title:
          updateData?.carriage_number +
          "vagon raqami muvaffaqiyatli yangilandi",
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
        title:
          "Vagon raqami kiritilmadi yoki bu turdagi vagon raqami mavjud emas.",
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
      <ModalContent p={"10px 0"}>
        <ModalHeader textAlign={"center"}>
          <Text as={"span"} textDecor={"underline"} fontWeight={700}>
            {" "}
            {updateData?.carriage_number}
          </Text>{" "}
          vagona raqami bo`yicha VU-23 jurnalini tahrirlash
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex
              gap={3}
              flexWrap={["wrap", "nowrap"]}
              alignItems={"center"}
              my="4"
            >
              <FormControl isInvalid={errors?.station}>
                <FormLabel as={"h1"} fontWeight={500}>
                  <Text as={"span"} color={"crimson"}>
                    *
                  </Text>
                  Bekat / &quot;O&apos;TY&quot; AJ
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  placeholder="Vagonni ta’mirga jo‘natish"
                  defaultValue={updateData?.station}
                  type="text"
                  {...register("station", { required: true })}
                />
              </FormControl>
              <FormControl isInvalid={errors?.newsletter}>
                <FormLabel as={"h1"} fontWeight={600}>
                  <Text as={"span"} color={"crimson"}>
                    *
                  </Text>
                  Xabarnoma №
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  type="text"
                  defaultValue={updateData?.newsletter}
                  placeholder="Xabarnoma №"
                  {...register("newsletter", { required: true })}
                />
              </FormControl>
            </Flex>
            <Flex
              gap={3}
              flexWrap={["wrap", "nowrap"]}
              alignItems={"center"}
              my="4"
            >
              <FormControl isInvalid={errors?.carriage_number}>
                <FormLabel as={"h1"} fontWeight={500}>
                  <Text as={"span"} color={"crimson"}>
                    *
                  </Text>
                  Vagon №
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  type="number"
                  defaultValue={updateData?.carriage_number}
                  disabled
                  {...register("carriage_number")}
                />
              </FormControl>
              <FormControl isInvalid={errors?.combined}>
                <FormLabel as={"h1"} fontWeight={500}>
                  <Text as={"span"} color={"crimson"}>
                    *
                  </Text>
                  biriktirilgan
                </FormLabel>

                <Input
                  borderColor={"gray.600"}
                  type="text"
                  defaultValue={updateData?.combined}
                  placeholder="biriktirilgan"
                  {...register("combined", { required: true })}
                />
              </FormControl>
            </Flex>
            <Flex
              gap={3}
              flexWrap={["wrap", "nowrap"]}
              alignItems={"center"}
              my="4"
            >
              <FormControl isInvalid={errors?.train_number}>
                <FormLabel as={"h1"} fontWeight={500} whiteSpace="nowrap">
                  <Text as={"span"} color={"crimson"}>
                    *
                  </Text>
                  Qabul qilingan poyezd №
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  type="text"
                  defaultValue={updateData?.train_number}
                  placeholder="Qabul qilingan poyezd №"
                  {...register("train_number", { required: true })}
                />
              </FormControl>
              <FormControl>
                <FormLabel as={"h1"} fontWeight={500}>
                  <Text as={"span"} color={"crimson"}>
                    *
                  </Text>
                  soat
                </FormLabel>
                <NumberInput
                  borderColor={"gray.600"}
                  max={23}
                  defaultValue={Number(updateData?.accept_hour)}
                  min={0}
                >
                  <NumberInputField {...register("accept_hour")} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>{" "}
              <FormControl>
                <FormLabel as={"h1"} fontWeight={500}>
                  <Text as={"span"} color={"crimson"}>
                    *
                  </Text>
                  daqiqa
                </FormLabel>
                <NumberInput
                  max={59}
                  defaultValue={updateData?.accept_minute}
                  min={0}
                  borderColor={"gray.600"}
                >
                  <NumberInputField {...register("accept_minute")} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <FormControl>
                <FormLabel as={"h1"} fontWeight={500} whiteSpace="nowrap">
                  <Text as={"span"} color={"crimson"}>
                    *
                  </Text>
                  Aniqlangan soat
                </FormLabel>
                <NumberInput
                  max={23}
                  defaultValue={updateData?.detect_hour}
                  min={0}
                  borderColor={"gray.600"}
                >
                  <NumberInputField {...register("detect_hour")} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <FormControl>
                <FormLabel as={"h1"} fontWeight={500}>
                  <Text as={"span"} color={"crimson"}>
                    *
                  </Text>
                  Aniqlangan daqiqa
                </FormLabel>
                <NumberInput
                  max={59}
                  defaultValue={updateData?.detect_minute}
                  min={0}
                  borderColor={"gray.600"}
                >
                  <NumberInputField {...register("detect_minute")} />
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
              my="4"
            >
              <FormControl isInvalid={errors?.way_number}>
                <FormLabel as={"h1"} fontWeight={500}>
                  <Text as={"span"} color={"crimson"}>
                    *
                  </Text>
                  Yul raqami:{" "}
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  type="number"
                  placeholder="Yul raqami"
                  defaultValue={updateData?.way_number}
                  {...register("way_number", { required: true })}
                />
              </FormControl>

              <FormControl as={"h1"} fontWeight={500}>
                <FormLabel>
                  <Text as={"span"} color={"crimson"}>
                    *
                  </Text>
                  Yukli yoki Yuksiz:
                </FormLabel>
                <Select
                  borderColor={"gray.600"}
                  defaultValue={updateData?.is_freight}
                  {...register("is_freight")}
                >
                  <option value="true">Yukli</option>
                  <option value="false">Yuksiz</option>
                </Select>
              </FormControl>
            </Flex>

            <Flex
              gap={3}
              flexWrap={["wrap", "nowrap"]}
              alignItems={"center"}
              my="4"
            >
              <FormControl isInvalid={errors?.last_repair}>
                <FormLabel as={"h1"} fontWeight={500}>
                  <Text as={"span"} color={"crimson"}>
                    *
                  </Text>
                  Oxirgi rejaviy ta’mir turi, joyi va qurilgan yili
                </FormLabel>
                <Input
                  placeholder="Oxirgi rejaviy ta’mir turi, joyi va qurilgan yili"
                  {...register("last_repair", { required: true })}
                  borderColor={"gray.600"}
                  defaultValue={updateData?.last_repair}
                  type="text"
                  w={"100%"}
                />
              </FormControl>

              <FormControl>
                <FormLabel as={"h1"} fontWeight={500} whiteSpace={"nowrap"}>
                  <Text as={"span"} color={"crimson"}>
                    *
                  </Text>
                  Nosozlik turi va kodi{" "}
                </FormLabel>

                <Select
                  borderColor={"gray.600"}
                  defaultValue={updateData?.breakdown_type}
                  {...register("breakdown_type")}
                >
                  {option_kodpaa_data.map((item, idx) => (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </Flex>
            <Flex
              gap={3}
              flexWrap={["wrap", "nowrap"]}
              my={4}
              alignItems={"center"}
            >
              <FormControl>
                <FormLabel as={"h1"} fontWeight={500} whiteSpace={"nowrap"}>
                  <Text as={"span"} color={"crimson"}>
                    *
                  </Text>
                  Talab qilingan ta’mir turi:
                </FormLabel>
                <Select
                  borderColor={"gray.600"}
                  defaultValue={updateData?.repair_type}
                  {...register("repair_type")}
                >
                  <option value="tr">&apos;ТР&apos;(JT)</option>
                  <option value="dr">&apos;ДР&apos; (DТ)</option>
                  <option value="kp">&apos;КР&apos; (KТ)</option>
                  <option value="krp">&apos;KРП&apos; (KTP)</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={errors?.carriage_workshop}>
                <FormLabel as={"h1"} fontWeight={500} whiteSpace={"nowrap"}>
                  <Text as={"span"} color={"crimson"}>
                    *
                  </Text>
                  Vagon qayerga ta’mir uchun jo‘natiladi
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  defaultValue={updateData?.carriage_workshop}
                  placeholder="Vagon qayerga ta’mir uchun jo‘natiladi"
                  {...register("carriage_workshop", { required: true })}
                  type="text"
                />
              </FormControl>
            </Flex>

            <Flex gap={3} flexWrap={["wrap", "nowrap"]} alignItems={"center"}>
              <Text>Vagon operatori imzosi</Text>
              <Image
                w={"150px"}
                src={imageGet(updateData?.user_signature_url)}
              />
            </Flex>
            <Flex
              gap={3}
              flexWrap={["wrap", "nowrap"]}
              alignItems={"center"}
              my={8}
            >
              <FormControl isInvalid={errors?.warning_date}>
                <FormLabel as={"h1"} fontWeight={500}>
                  <Text as={"span"} color={"crimson"}>
                    *
                  </Text>
                  Bekat navbatchisi ogohlantirildi. sana
                </FormLabel>
                <Input
                  defaultValue={updateData?.warning_date}
                  borderColor={"gray.600"}
                  {...register("warning_date", { required: true })}
                  type="date"
                />
              </FormControl>
              <FormControl>
                <FormLabel as={"h1"} fontWeight={500}>
                  <Text as={"span"} color={"crimson"}>
                    *
                  </Text>
                  soat
                </FormLabel>
                <NumberInput
                  max={23}
                  defaultValue={updateData?.warning_hour}
                  min={0}
                  borderColor={"gray.600"}
                >
                  <NumberInputField {...register("warning_hour")} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>

              <FormControl>
                <FormLabel as={"h1"} fontWeight={500}>
                  <Text as={"span"} color={"crimson"}>
                    *
                  </Text>
                  daqiqa.
                </FormLabel>
                <NumberInput
                  max={59}
                  defaultValue={updateData?.warning_minute}
                  min={0}
                  borderColor={"gray.600"}
                >
                  <NumberInputField {...register("warning_minute")} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </Flex>

            <ModalFooter>
              <Button colorScheme="red" mr={3} onClick={() => onClose(false)}>
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
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

PtopUpdate.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  updateData: PropTypes.object,
};
