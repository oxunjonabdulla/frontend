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
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
  useToast,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SearchTrain } from "../../../utils";
import { Signatur } from "../../Signature/Signatur";
import UserApi from "../../../Service/module/userModule.api";
import { mockHeaderFraza } from "../../../utils/mock_heads";

export const Fraza_wheel_model = ({ onClose, isOpen }) => {
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

    const { response, error } = await new UserApi().postPhraseWheel(
      serachingResult,
      data
    );
    setLoading(false);
    if (response) {
      toast({
        status: "success",
        title: "Fraza muvaffaqiyatli yaratildi.",
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
        title: !error?.error
          ? "Vagon raqami kiritilmadi yoki bu turdagi vagon raqami mavjud emas."
          : "Bu vagon raqami uchun Fraza jurnali mavjud.",
        duration: 4000,
        isClosable: true,
        position: "top-right",
        fontSize: "3xl",
      });
    }
  };
  const localDate = new Date();

  return (
    <Modal
      isOpen={isOpen}
      w={"100%"}
      onClose={onClose}
      size={["full"]}
      motionPreset="slideInLeft"
    >
      <ModalOverlay backdropFilter="blur(10px) hue-rotate(10deg)" />
      <ModalContent overflow={"auto"}>
        <ModalHeader textAlign={"center"}>СЛУЖЕБНАЯ ФРАЗА</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <SearchTrain setSerachingResult={setSerachingResult} />
            <br />
            <TableContainer>
              <Table variant="striped" colorScheme="gray">
                <Tbody>
                  <Tr>
                    {mockHeaderFraza?.headers?.map((item) => (
                      <Td
                        fontSize={"10px"}
                        textAlign={"center"}
                        key={item.label}
                        whiteSpace={"pre-wrap"}
                        rowSpan={item.rowspan}
                        fontWeight={700}
                        colSpan={item.colspan}
                      >
                        {item.label}
                      </Td>
                    ))}
                  </Tr>
                  <Tr>
                    {mockHeaderFraza?.nestedHeaders?.map((item) => (
                      <Td
                        fontSize={"10px"}
                        fontWeight={700}
                        textAlign={"center"}
                        whiteSpace={"pre-wrap"}
                        key={item.label}
                        rowSpan={item.rowspan}
                        colSpan={item.colspan}
                      >
                        {item.label}
                      </Td>
                    ))}
                  </Tr>
                  <Tr>
                    <Td textAlign={"center"}>1</Td>
                    <Td textAlign={"center"}>2</Td>
                    <Td textAlign={"center"}>3</Td>
                    <Td textAlign={"center"}>4</Td>
                    <Td textAlign={"center"}>5</Td>
                    <Td textAlign={"center"}>6</Td>
                    <Td textAlign={"center"}>7</Td>
                    <Td textAlign={"center"}>8</Td>
                    <Td textAlign={"center"}>9</Td>
                    <Td textAlign={"center"}>10</Td>
                    <Td textAlign={"center"}>11</Td>
                    <Td textAlign={"center"}>-</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign={"center"} fontWeight={700}>
                      51
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      0
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      29
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl isInvalid={errors?.c51_code_builder}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c51_code_builder", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl isInvalid={errors?.c51_num_zavod}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c51_num_zavod", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c51_year_build}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c51_year_build", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c51_num_depo}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c51_num_depo", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c51_work_date}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c51_work_date", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c51_work_num}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c51_work_num", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c51_left_wheel}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c51_left_wheel", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c51_right_wheel}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c51_right_wheel", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      :
                    </Td>
                  </Tr>
                  <Tr>
                    <Td textAlign={"center"} fontWeight={700}>
                      52
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      0
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      29
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl isInvalid={errors?.c52_code_builder}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c52_code_builder", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl isInvalid={errors?.c52_num_zavod}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c52_num_zavod", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c52_year_build}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c52_year_build", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c52_num_depo}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c52_num_depo", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c52_work_date}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c52_work_date", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c52_work_num}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c52_work_num", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c52_left_wheel}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c52_left_wheel", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c52_right_wheel}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c52_right_wheel", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      :
                    </Td>
                  </Tr>
                  <Tr>
                    <Td textAlign={"center"} fontWeight={700}>
                      53
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      0
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      29
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl isInvalid={errors?.c53_code_builder}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c53_code_builder", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl isInvalid={errors?.c53_num_zavod}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c53_num_zavod", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c53_year_build}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c53_year_build", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c53_num_depo}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c53_num_depo", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c53_work_date}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c53_work_date", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c53_work_num}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c53_work_num", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c53_left_wheel}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c53_left_wheel", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c53_right_wheel}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c53_right_wheel", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      :
                    </Td>
                  </Tr>
                  <Tr>
                    <Td textAlign={"center"} fontWeight={700}>
                      54
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      0
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      29
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl isInvalid={errors?.c54_code_builder}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c54_code_builder", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl isInvalid={errors?.c54_num_zavod}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c54_num_zavod", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c54_year_build}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c54_year_build", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c54_num_depo}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c54_num_depo", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c54_work_date}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c54_work_date", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c54_work_num}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c54_work_num", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c54_left_wheel}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c54_left_wheel", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c54_right_wheel}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c54_right_wheel", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      :
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>

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
                fontSize={"md"}
                fontWeight={700}
                whiteSpace={"nowrap"}
              >
                Сдал бригадир колесного цеха: <br />
                Мейлиев К.
              </Text>
              <FormControl isInvalid={errors?.nosoz_kirish_date}>
                <FormLabel fontSize={"10px"}>sana:</FormLabel>
                <Input borderColor={"gray.600"} type="date" />
              </FormControl>
              <FormControl isInvalid={errors?.nosoz_kirish_hour}>
                <FormLabel fontSize={"10px"}>soat:</FormLabel>
                <NumberInput
                  borderColor={"gray.600"}
                  mr="1rem"
                  max={23}
                  defaultValue={localDate.getHours()}
                  min={0}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <FormControl isInvalid={errors?.nosoz_kirish_minute}>
                <FormLabel fontSize={"10px"}>daqiqa:</FormLabel>
                <NumberInput
                  mr="1rem"
                  max={59}
                  defaultValue={localDate.getMinutes()}
                  min={0}
                  borderColor={"gray.600"}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <Flex w={"100%"}>
                <Signatur />
              </Flex>
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
Fraza_wheel_model.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};
