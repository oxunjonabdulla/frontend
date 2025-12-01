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
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import UserApi from "@/Service/module/userModule.api";
import { useState } from "react";
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

    const { response, error } = await new UserApi().postAravaActBack(
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
          Kirish va chiqish dalolatnomasi Aravalar bo‘linmasi Ta’mirdan keyingi ma’lumotlarni
          qo&apos;shish!{" "}
        </ModalHeader>

        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <Text my={3} textAlign={"center"}>
              {" "}
              <b>{carriageID} </b>
              Vagon raqami b&apos;yicha ta’mirdan keyingi dalolatnomani qo&apos;shish
            </Text>

            <TableContainer>
              <Table variant="striped" colorScheme="gray">
                <Tbody>
                  <Tr>
                    <Td>№</Td>
                    <Td>Yon rama raqami</Td>
                    <Td>Ishlab chiqarilishi,zavod tamg’asi</Td>
                    <Td>Mavjudlik kodi</Td>
                  </Tr>
                  <Tr>
                    <Td>1</Td>
                    <Td>
                      <FormControl isInvalid={errors?.yon_raqam_1}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("yon_raqam_1", { required: true })}
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
                      <FormControl isInvalid={errors?.yon_raqam_2}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("yon_raqam_2", { required: true })}
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
                    <Td>3</Td>
                    <Td>
                      <FormControl isInvalid={errors?.yon_raqam_3}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("yon_raqam_3", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td>
                      <FormControl isInvalid={errors?.auto_zavod_3}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("auto_zavod_3", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td>
                      <FormControl isInvalid={errors?.mavjud_kod_3}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("mavjud_kod_3", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>4</Td>
                    <Td>
                      <FormControl isInvalid={errors?.yon_raqam_4}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("yon_raqam_4", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td>
                      <FormControl isInvalid={errors?.auto_zavod_4}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("auto_zavod_4", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td>
                      <FormControl isInvalid={errors?.mavjud_kod_4}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("mavjud_kod_4", { required: true })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                  </Tr>

                  <Tr>
                    <Td colSpan={4} textAlign={"center"}>
                      Ressor usti balkasi
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>1</Td>
                    <Td>
                      <FormControl isInvalid={errors?.restor_balka_yon_1}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("restor_balka_yon_1", {
                            required: true,
                          })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td>
                      <FormControl isInvalid={errors?.restor_balka_zavod_1}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("restor_balka_zavod_1", {
                            required: true,
                          })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td>
                      <FormControl isInvalid={errors?.restor_balka_kod_1}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("restor_balka_kod_1", {
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
                      <FormControl isInvalid={errors?.restor_balka_yon_2}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("restor_balka_yon_2", {
                            required: true,
                          })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td>
                      <FormControl isInvalid={errors?.restor_balka_zavod_2}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("restor_balka_zavod_2", {
                            required: true,
                          })}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td>
                      <FormControl isInvalid={errors?.restor_balka_kod_2}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("restor_balka_kod_2", {
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
  );
};
Orqa.propTypes = {
  onClose: PropTypes.func,
};
