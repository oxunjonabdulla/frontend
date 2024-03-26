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
import { Signatur } from "../../../../components/Signature/Signatur";
import { mockHeaderFraza } from "../../../../utils/mock_heads";
import UserApi from "../../../../Service/module/userModule.api";

export const Fraza_model = ({ onClose, isOpen, updatedData }) => {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);

    const { response, error } = await new UserApi().postPhrase(
      updatedData?.carriage,
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
        <ModalHeader textAlign={"center"}>
          СЛУЖЕБНАЯ ФРАЗА ВАГОН{" "}
          <Text as={"span"} fontWeight={700}>
            {updatedData?.carriage}
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <TableContainer>
              <Table variant="striped" colorScheme="gray">
                <Tbody>
                  <Tr>
                    {mockHeaderFraza?.topHeader?.map((item) => (
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
                    <Td textAlign={"center"}>-</Td>
                    <Td textAlign={"center"}>1</Td>
                    <Td textAlign={"center"}>2</Td>
                    <Td textAlign={"center"}>3</Td>
                    <Td textAlign={"center"}>4</Td>
                    <Td textAlign={"center"}>5</Td>
                    <Td textAlign={"center"}>6</Td>
                    <Td textAlign={"center"}>7</Td>
                    <Td textAlign={"center"}>8</Td>
                    <Td textAlign={"center"}>9</Td>
                  </Tr>
                  <Tr>
                    <Td>:4634</Td>
                    <Td>408</Td>
                    <Td>73314</Td>
                    <Td>1</Td>
                    <Td>
                      {" "}
                      <FormControl isInvalid={errors?.date_send_message}>
                        <Input
                          borderColor={"gray.600"}
                          placeholder="dd/mm/yyyy"
                          defaultValue={updatedData?.date_send_message}
                          {...register("date_send_message", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td>704</Td>
                    <Td>73314</Td>
                    <Td>
                      <FormControl isInvalid={errors?.date_operation_carriage}>
                        <Input
                          borderColor={"gray.600"}
                          placeholder="dd/mm/yyyy"
                          defaultValue={updatedData?.date_operation_carriage}
                          {...register("date_operation_carriage", {
                            required: true,
                          })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td>
                      <FormControl isInvalid={errors?.code_operation_carriage}>
                        <Input
                          borderColor={"gray.600"}
                          defaultValue={updatedData?.code_operation_carriage}
                          {...register("code_operation_carriage", {
                            required: true,
                          })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td fontWeight={700} color={"green.600"}>
                      {updatedData?.carriage}
                    </Td>
                  </Tr>

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
                      {updatedData?.phrase_gildirak?.c51_code_builder}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_gildirak?.c51_num_zavod}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_gildirak?.c51_year_build}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_gildirak?.c51_num_depo}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_gildirak?.c51_work_date}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_gildirak?.c51_work_num}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_gildirak?.c51_left_wheel}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_gildirak?.c51_right_wheel}
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
                      {updatedData?.phrase_gildirak?.c52_code_builder}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_gildirak?.c52_num_zavod}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_gildirak?.c52_year_build}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_gildirak?.c52_num_depo}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_gildirak?.c52_work_date}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_gildirak?.c52_work_num}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_gildirak?.c52_left_wheel}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_gildirak?.c52_right_wheel}
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
                      {updatedData?.phrase_gildirak?.c53_code_builder}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_gildirak?.c53_num_zavod}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_gildirak?.c53_year_build}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_gildirak?.c53_num_depo}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_gildirak?.c53_work_date}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_gildirak?.c53_work_num}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_gildirak?.c53_left_wheel}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_gildirak?.c53_right_wheel}
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
                      {updatedData?.phrase_gildirak?.c54_code_builder}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_gildirak?.c54_num_zavod}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_gildirak?.c54_year_build}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_gildirak?.c54_num_depo}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_gildirak?.c54_work_date}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_gildirak?.c54_work_num}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_gildirak?.c54_left_wheel}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_gildirak?.c54_right_wheel}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td textAlign={"center"} fontWeight={700}>
                      61
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      0
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      29
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c61_code_builder}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c61_num_zavod}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c61_year_build}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c61_num_depo}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c61_work_date}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c61_work_num}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c61_left_wheel}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c61_right_wheel}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td textAlign={"center"} fontWeight={700}>
                      62
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      0
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      29
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c62_code_builder}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c62_num_zavod}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c62_year_build}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c62_num_depo}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c62_work_date}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c62_work_num}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c62_left_wheel}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c62_right_wheel}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td textAlign={"center"} fontWeight={700}>
                      63
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      0
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      29
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c63_code_builder}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c63_num_zavod}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c63_year_build}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c63_num_depo}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c63_work_date}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c63_work_num}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c63_left_wheel}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c63_right_wheel}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td textAlign={"center"} fontWeight={700}>
                      64
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      0
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      29
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c64_code_builder}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c64_num_zavod}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c64_year_build}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c64_num_depo}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c64_work_date}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c64_work_num}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c64_left_wheel}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c64_right_wheel}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td textAlign={"center"} fontWeight={700}>
                      71
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      0
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      29
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c71_code_builder}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c71_num_zavod}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c71_year_build}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c71_num_depo}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c71_work_date}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c71_work_num}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c71_left_wheel}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c71_right_wheel}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td textAlign={"center"} fontWeight={700}>
                      72
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      0
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      29
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c72_code_builder}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c72_num_zavod}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c72_year_build}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c72_num_depo}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c72_work_date}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c72_work_num}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c72_left_wheel}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c72_right_wheel}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td textAlign={"center"} fontWeight={700}>
                      73
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      0
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      29
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c73_code_builder}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c73_num_zavod}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c73_year_build}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c73_num_depo}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c73_work_date}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c73_work_num}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c73_left_wheel}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c73_right_wheel}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td textAlign={"center"} fontWeight={700}>
                      74
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      0
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      29
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c74_code_builder}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c74_num_zavod}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c74_year_build}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c74_num_depo}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c74_work_date}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c74_work_num}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c74_left_wheel}
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {updatedData?.phrase_arava?.c74_right_wheel}
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
                Принял диспетчер: <br />
                Сувонов Л.
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
            {updatedData?.phrase_gildirak && updatedData?.phrase_arava && (
              <Button
                variant={"outline"}
                isLoading={isLoading}
                loadingText="Saqlash"
                spinnerPlacement="end"
                type="submit"
              >
                Saqlash
              </Button>
            )}
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};
Fraza_model.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  updatedData: PropTypes.object,
};
