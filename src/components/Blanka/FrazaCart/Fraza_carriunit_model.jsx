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
import { mockHeaderCarriage } from "../../../utils/mock_heads";

export const Fraza_carriage_model = ({ onClose, isOpen }) => {
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

    const { response, error } = await new UserApi().postPhraseCart(
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
                    {mockHeaderCarriage?.headers?.map((item) => (
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
                    {mockHeaderCarriage?.nestedHeaders?.map((item) => (
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
                      <FormControl isInvalid={errors?.c61_code_builder}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c61_code_builder", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl isInvalid={errors?.c61_num_zavod}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c61_num_zavod", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c61_year_build}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c61_year_build", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c61_num_depo}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c61_num_depo", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c61_work_date}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c61_work_date", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c61_work_num}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c61_work_num", { required: true })}
                          type="text"
                        />
                      </FormControl>
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
                      <FormControl isInvalid={errors?.c62_code_builder}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c62_code_builder", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl isInvalid={errors?.c62_num_zavod}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c62_num_zavod", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c62_year_build}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c62_year_build", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c62_num_depo}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c62_num_depo", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c62_work_date}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c62_work_date", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c62_work_num}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c62_work_num", { required: true })}
                          type="text"
                        />
                      </FormControl>
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
                      <FormControl isInvalid={errors?.c63_code_builder}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c63_code_builder")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl isInvalid={errors?.c63_num_zavod}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c63_num_zavod")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c63_year_build}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c63_year_build")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c63_num_depo}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c63_num_depo")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c63_work_date}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c63_work_date")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c63_work_num}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c63_work_num")}
                          type="text"
                        />
                      </FormControl>
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
                      <FormControl isInvalid={errors?.c64_code_builder}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c64_code_builder")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl isInvalid={errors?.c64_num_zavod}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c64_num_zavod")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c64_year_build}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c64_year_build")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c64_num_depo}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c64_num_depo")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c64_work_date}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c64_work_date")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c64_work_num}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c64_work_num")}
                          type="text"
                        />
                      </FormControl>
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
                      <FormControl isInvalid={errors?.c71_code_builder}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c71_code_builder", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl isInvalid={errors?.c71_num_zavod}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c71_num_zavod", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c71_year_build}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c71_year_build", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c71_num_depo}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c71_num_depo", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c71_work_date}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c71_work_date", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c71_work_num}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c71_work_num", { required: true })}
                          type="text"
                        />
                      </FormControl>
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
                      <FormControl isInvalid={errors?.c72_code_builder}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c72_code_builder", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl isInvalid={errors?.c72_num_zavod}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c72_num_zavod", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c72_year_build}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c72_year_build", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c72_num_depo}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c72_num_depo", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c72_work_date}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c72_work_date", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c72_work_num}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c72_work_num", { required: true })}
                          type="text"
                        />
                      </FormControl>
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
                      <FormControl isInvalid={errors?.c73_code_builder}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c73_code_builder", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl isInvalid={errors?.c73_num_zavod}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c73_num_zavod", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c73_year_build}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c73_year_build", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c73_num_depo}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c73_num_depo", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c73_work_date}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c73_work_date", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c73_work_num}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c73_work_num", { required: true })}
                          type="text"
                        />
                      </FormControl>
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
                      <FormControl isInvalid={errors?.c74_code_builder}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c74_code_builder", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl isInvalid={errors?.c74_num_zavod}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c74_num_zavod", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c74_year_build}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c74_year_build", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c74_num_depo}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c74_num_depo", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c74_work_date}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c74_work_date", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      {" "}
                      <FormControl isInvalid={errors?.c74_work_num}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("c74_work_num", { required: true })}
                          type="text"
                        />
                      </FormControl>
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
                Сдал бригадир тележечного цеха: <br />
                Турсунов О.
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
Fraza_carriage_model.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};
