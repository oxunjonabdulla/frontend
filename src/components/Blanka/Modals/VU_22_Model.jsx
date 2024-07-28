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
  useToast,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import UserApi from "../../../Service/module/userModule.api";
import { SearchTrain } from "../../../utils";
export const VU_22_Model = ({ onClose, isOpen }) => {
  const [serachingResult, setSerachingResult] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);

    const { response, error } = await new UserApi().postVu22(serachingResult, {
      carriage_master_signature: "kimdur",
      ...data,
    });
    setLoading(false);
    if (response) {
      toast({
        status: "success",
        title: "VU-22 shakliga vagon muvaffaqiyatli qo'shildi.",
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
          : "Bu vagon raqami uchun VU-22 shakli mavjud.",
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
          VU-22 Shakli qo&apos;shish
        </ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <SearchTrain setSerachingResult={setSerachingResult} />

              <FormControl isInvalid={errors?.carrying_capacity}>
                <FormLabel> Yuk ko'tara olishi</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("carrying_capacity", { required: true })}
                  type="number"
                />
              </FormControl>
              <FormControl isInvalid={errors?.cladding_material}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  {" "}
                  Kuzov qoplamasi materiali
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("cladding_material", { required: true })}
                  type="text"
                />
              </FormControl>
            </Flex>

            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.place_last_repair}>
                <FormLabel>Oxirgi rejali ta'mir joyi</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("place_last_repair", { required: true })}
                  type="text"
                />
              </FormControl>

              <FormControl isInvalid={errors?.date_last_repair}>
                <FormLabel> Oxirgi rejali ta'mir sanasi</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("date_last_repair", { required: true })}
                  type="date"
                />
              </FormControl>
            </Flex>

            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.date_of_repair}>
                <FormLabel> Ta'mirga olingan sanasi </FormLabel>
                <Input
                  type="date"
                  {...register("date_of_repair", { required: true })}
                  borderColor={"gray.600"}
                />
              </FormControl>
              <FormControl isInvalid={errors?.hour_of_repair}>
                <FormLabel>Ta'mirga olingan soati:</FormLabel>
                <NumberInput
                  borderColor={"gray.600"}
                  mr="1rem"
                  max={23}
                  defaultValue={0}
                  min={0}
                >
                  <NumberInputField
                    {...register("hour_of_repair", {
                      setValueAs: (value) => value.toString(),
                    })}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <FormControl isInvalid={errors?.minute_of_repair}>
                <FormLabel>Ta'mirga olingan daqiqasi:</FormLabel>
                <NumberInput
                  mr="1rem"
                  max={59}
                  defaultValue={0}
                  min={0}
                  borderColor={"gray.600"}
                >
                  <NumberInputField
                    {...register("minute_of_repair", {
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
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.repair_completion_date}>
                <FormLabel> Ta'mirga tugashi sanasi </FormLabel>
                <Input
                  type="date"
                  {...register("repair_completion_date", { required: true })}
                  borderColor={"gray.600"}
                />
              </FormControl>
              <FormControl isInvalid={errors?.repair_completion_hour}>
                <FormLabel>Ta'mirga tugashi soati:</FormLabel>
                <NumberInput
                  borderColor={"gray.600"}
                  mr="1rem"
                  max={23}
                  defaultValue={0}
                  min={0}
                >
                  <NumberInputField
                    {...register("repair_completion_hour", {
                      setValueAs: (value) => value.toString(),
                    })}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <FormControl isInvalid={errors?.repair_completion_minute}>
                <FormLabel>Ta'mirga tugashi daqiqasi:</FormLabel>
                <NumberInput
                  mr="1rem"
                  max={59}
                  defaultValue={0}
                  min={0}
                  borderColor={"gray.600"}
                >
                  <NumberInputField
                    {...register("repair_completion_minute", {
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

VU_22_Model.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};
