import {
  Button,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
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
import UserApi from "../../../../Service/module/userModule.api";
export const Orqa = ({ isOpen, onClose, carriageID }) => {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);

    const { response, error } = await new UserApi().postBirikmaActBack(
      carriageID,
      data
    );
    setLoading(false);
    if (response) {
      toast({
        status: "success",
        title: "Dalolatnoma tuzildi!",
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
          ? error?.detail
          : "Bu vagon raqami uchun Dalolatnoma shakli mavjud.",
        duration: 4000,
        isClosable: true,
        position: "top-right",
        fontSize: "3xl",
      });
    }
  };
  return (
    <>
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
            Kirish va chiqish dalolatnomasi Avtobirikma bo‘linmasi Orqa tomonini
            qo&apos;shish!{" "}
          </ModalHeader>

          <ModalCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody>
              <Text my={3} textAlign={"center"}>
                {" "}
                <b>{carriageID} </b>
                Vagon raqami b&apos;yicha orqa dalolatnomani qo&apos;shish
              </Text>
              <TableContainer>
                <Table variant="striped" colorScheme="gray">
                  <Tbody>
                    <Tr>
                      <Td>№</Td>
                      <Td>Avtobirikma raqami</Td>
                      <Td>Ishlab chiqarilishi,zavod tamg’asi</Td>
                      <Td>Mavjudlik kodi</Td>
                    </Tr>
                    <Tr>
                      <Td>1</Td>
                      <Td>
                        <FormControl isInvalid={errors?.auto_number_1}>
                          <Input
                            borderColor={"gray.600"}
                            {...register("auto_number_1", { required: true })}
                            type="text"
                          />
                        </FormControl>
                      </Td>
                      <Td>
                        <FormControl isInvalid={errors?.auto_zavod_1}>
                          <Input
                            borderColor={"gray.600"}
                            {...register("auto_zavod_1", { required: true })}
                            type="text"
                          />
                        </FormControl>
                      </Td>
                      <Td>
                        <FormControl isInvalid={errors?.mavjud_kod_1}>
                          <Input
                            borderColor={"gray.600"}
                            {...register("mavjud_kod_1", { required: true })}
                            type="text"
                          />
                        </FormControl>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>2</Td>
                      <Td>
                        <FormControl isInvalid={errors?.auto_number_2}>
                          <Input
                            borderColor={"gray.600"}
                            {...register("auto_number_2", { required: true })}
                            type="text"
                          />
                        </FormControl>
                      </Td>
                      <Td>
                        <FormControl isInvalid={errors?.auto_zavod_2}>
                          <Input
                            borderColor={"gray.600"}
                            {...register("auto_zavod_2", { required: true })}
                            type="text"
                          />
                        </FormControl>
                      </Td>
                      <Td>
                        <FormControl isInvalid={errors?.mavjud_kod_2}>
                          <Input
                            borderColor={"gray.600"}
                            {...register("mavjud_kod_2", { required: true })}
                            type="text"
                          />
                        </FormControl>
                      </Td>
                    </Tr>

                    <Tr>
                      <Td colSpan={4} textAlign={"center"}>
                        Yutish apparati
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>1</Td>
                      <Td>
                        <FormControl isInvalid={errors?.yutish_auto_number_1}>
                          <Input
                            borderColor={"gray.600"}
                            {...register("yutish_auto_number_1", {
                              required: true,
                            })}
                            type="text"
                          />
                        </FormControl>
                      </Td>
                      <Td>
                        <FormControl isInvalid={errors?.yutish_auto_zavod_1}>
                          <Input
                            borderColor={"gray.600"}
                            {...register("yutish_auto_zavod_1", {
                              required: true,
                            })}
                            type="text"
                          />
                        </FormControl>
                      </Td>
                      <Td>
                        <FormControl isInvalid={errors?.yutish_mavjud_kod_1}>
                          <Input
                            borderColor={"gray.600"}
                            {...register("yutish_mavjud_kod_1", {
                              required: true,
                            })}
                            type="text"
                          />
                        </FormControl>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>2</Td>
                      <Td>
                        <FormControl isInvalid={errors?.yutish_auto_number_2}>
                          <Input
                            borderColor={"gray.600"}
                            {...register("yutish_auto_number_2", {
                              required: true,
                            })}
                            type="text"
                          />
                        </FormControl>
                      </Td>
                      <Td>
                        <FormControl isInvalid={errors?.yutish_auto_zavod_2}>
                          <Input
                            borderColor={"gray.600"}
                            {...register("yutish_auto_zavod_2", {
                              required: true,
                            })}
                            type="text"
                          />
                        </FormControl>
                      </Td>
                      <Td>
                        <FormControl isInvalid={errors?.yutish_mavjud_kod_2}>
                          <Input
                            borderColor={"gray.600"}
                            {...register("yutish_mavjud_kod_2", {
                              required: true,
                            })}
                            type="text"
                          />
                        </FormControl>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
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
    </>
  );
};
Orqa.propTypes = {
  onClose: PropTypes.func,
};
