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
import { useForm } from "react-hook-form";
import { Signatur } from "../../Signature/Signatur";
import { SearchTrain } from "../../../utils";
export const VU_90_Model = ({ onClose, isOpen }) => {
  const [trainFixType, setTrainFixType] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [serachingResult, setSerachingResult] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);
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
          VU-90 Jurnalini qo&apos;shish
        </ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <SearchTrain setSerachingResult={setSerachingResult} />
              <FormControl isInvalid={errors?.Tormoz}>
                <FormLabel>Yig‘ilgan sana </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("Tormoz", { required: true })}
                  type="date"
                />
              </FormControl>
            </Flex>

            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.Tormoz}>
                <FormLabel>Qo’yish va g’ildirak juftligi raqami </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("Tormoz", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel>
                  G‘ildirak juftligining o‘rta ta’mir tamg‘asi
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
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
              O‘qning sheyka va stupisa o‘tiradigan qismdan oldingi qismining
              diametri (mm)
            </Text>

            <Flex
              justifyContent={"space-between"}
              flexWrap={["wrap"]}
              gap={3}
              mt={4}
            >
              <Flex flexDir={"column"} w={"100%"}>
                <Text
                  as={"h1"}
                  textAlign={"center"}
                  m={0}
                  fontSize={"xl"}
                  fontWeight={700}
                >
                  O‘ng O‘q sheykasi
                </Text>
                <Flex
                  gap={3}
                  flexWrap={["wrap", "nowrap"]}
                  align={"center"}
                  my={4}
                >
                  <FormControl isInvalid={errors?.sinovi}>
                    <FormLabel>d1</FormLabel>
                    <Input
                      borderColor={"gray.600"}
                      {...register("sinovi", { required: true })}
                      type="text"
                    />
                  </FormControl>
                  <FormControl isInvalid={errors?.sinovi}>
                    <FormLabel>dc1</FormLabel>
                    <Input
                      borderColor={"gray.600"}
                      {...register("sinovi", { required: true })}
                      type="text"
                    />
                  </FormControl>
                  <FormControl isInvalid={errors?.sinovi}>
                    <FormLabel>d2</FormLabel>
                    <Input
                      borderColor={"gray.600"}
                      {...register("sinovi", { required: true })}
                      type="text"
                    />
                  </FormControl>
                  <FormControl isInvalid={errors?.sinovi}>
                    <FormLabel>dc2</FormLabel>
                    <Input
                      borderColor={"gray.600"}
                      {...register("sinovi", { required: true })}
                      type="text"
                    />
                  </FormControl>
                  <FormControl isInvalid={errors?.sinovi}>
                    <FormLabel>d3</FormLabel>
                    <Input
                      borderColor={"gray.600"}
                      {...register("sinovi", { required: true })}
                      type="text"
                    />
                  </FormControl>
                  <FormControl isInvalid={errors?.sinovi}>
                    <FormLabel>dc3</FormLabel>
                    <Input
                      borderColor={"gray.600"}
                      {...register("sinovi", { required: true })}
                      type="text"
                    />
                  </FormControl>
                </Flex>
              </Flex>
              <Flex flexDir={"column"} w={"100%"}>
                <Text
                  as={"h1"}
                  textAlign={"center"}
                  m={0}
                  fontSize={"xl"}
                  fontWeight={700}
                >
                  Chap O‘q sheykasi
                </Text>
                <Flex
                  gap={3}
                  flexWrap={["wrap", "nowrap"]}
                  align={"center"}
                  my={4}
                >
                  <FormControl isInvalid={errors?.sinovi}>
                    <FormLabel>d1</FormLabel>
                    <Input
                      borderColor={"gray.600"}
                      {...register("sinovi", { required: true })}
                      type="text"
                    />
                  </FormControl>
                  <FormControl isInvalid={errors?.sinovi}>
                    <FormLabel>dc1</FormLabel>
                    <Input
                      borderColor={"gray.600"}
                      {...register("sinovi", { required: true })}
                      type="text"
                    />
                  </FormControl>
                  <FormControl isInvalid={errors?.sinovi}>
                    <FormLabel>d2</FormLabel>
                    <Input
                      borderColor={"gray.600"}
                      {...register("sinovi", { required: true })}
                      type="text"
                    />
                  </FormControl>
                  <FormControl isInvalid={errors?.sinovi}>
                    <FormLabel>dc2</FormLabel>
                    <Input
                      borderColor={"gray.600"}
                      {...register("sinovi", { required: true })}
                      type="text"
                    />
                  </FormControl>
                  <FormControl isInvalid={errors?.sinovi}>
                    <FormLabel>d3</FormLabel>
                    <Input
                      borderColor={"gray.600"}
                      {...register("sinovi", { required: true })}
                      type="text"
                    />
                  </FormControl>
                  <FormControl isInvalid={errors?.sinovi}>
                    <FormLabel>dc3</FormLabel>
                    <Input
                      borderColor={"gray.600"}
                      {...register("sinovi", { required: true })}
                      type="text"
                    />
                  </FormControl>
                </Flex>
              </Flex>
            </Flex>

            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.Tormoz}>
                <FormLabel> Sheykaning eng katta oval qismi (mm)</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("Tormoz", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel>Sheykaning eng katta konus qismi (mm) </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
                  type="text"
                />
              </FormControl>
            </Flex>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.Tormoz}>
                <FormLabel>
                  Labirint halqasini o‘rnatilish diametri (mm)
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("Tormoz", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel>
                  Labirint halqasini o‘rnatishdagi farqi (mm)
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel whiteSpace={["pre-wrap", "nowrap"]}>
                  Erkin yoki sheykadagi to‘g‘ridan to‘g‘ri radial oraliq (mm)
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
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
              Buksani o‘rnatilish diametrlari (mm)
            </Text>

            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.Tormoz}>
                <FormLabel>d1, dc1</FormLabel>
                <Input
                  placeholder="O‘q"
                  borderColor={"gray.600"}
                  {...register("Tormoz", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel>d2, dc2</FormLabel>

                <Input
                  placeholder="O‘q"
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
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
              Podshipnikni ishlab chikargan zavodi, belgisi, raqami, ishlab
              chiqarilgan oyi va yili
            </Text>

            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.Tormoz}>
                <FormLabel>Orqa</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("Tormoz", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel>Oldi</FormLabel>

                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
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
              ___________{" "}
            </Text>

            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.Tormoz}>
                <FormLabel>
                  Qotirish vtulkasini chiqishi yoki minimal osevoy oraliq (mm)
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("Tormoz", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel>
                  Qotirish vtulkasini siljishi yoki ichki halqaning o‘rnatilish
                  diametri (mm)
                </FormLabel>

                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
                  type="text"
                />
              </FormControl>
            </Flex>

            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.Tormoz}>
                <FormLabel>
                  Vtulkani bosim yordamida preslash yoki ichki halqani
                  o‘rnatishdagi farqi (mm){" "}
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("Tormoz", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel>Yog‘ (rusumi, zavod, partiya) </FormLabel>

                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
                  type="text"
                />
              </FormControl>
            </Flex>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <Signatur
                title={"TNB ustasi yoki podshipnikni o‘lchovchi texnik"}
              />
              <Signatur title={"Smena ustasi	"} />
            </Flex>

            <FormControl isInvalid={errors?.sinovi}>
              <FormLabel>Izoh </FormLabel>

              <Input
                borderColor={"gray.600"}
                {...register("sinovi", { required: true })}
                type="text"
              />
            </FormControl>
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

VU_90_Model.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};
