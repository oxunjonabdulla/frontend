import {
  Button,
  Flex,
  FormControl,
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
import { SearchTrain } from "../../../utils";

export const Carriage_dalolatnoma_model = ({ onClose, isOpen }) => {
  const [isLoading, setLoading] = useState(false);
  const [serachingResult, setSerachingResult] = useState(null);
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {};

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
        <ModalHeader textAlign={"center"}>Aravalar dalolatnomasi</ModalHeader>
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
              <SearchTrain setSerachingResult={setSerachingResult} />
            </Flex>
            <Text
              as={"h1"}
              textAlign={"center"}
              m={0}
              fontSize={"xl"}
              fontWeight={700}
            >
              Yon rama raqami
            </Text>
            <Flex
              flexWrap={["wrap", "nowrap"]}
              justifyContent={"center"}
              alignItems={"center"}
              my="4"
              gap={3}
            >
              <FormControl isInvalid={errors?.bildirish_number}>
                <Input
                  borderColor={"gray.600"}
                  placeholder="1"
                  type="number"
                  {...register("bildirish_number", { required: true })}
                />
              </FormControl>
              <FormControl isInvalid={errors?.bildirish_number}>
                <Input
                  borderColor={"gray.600"}
                  placeholder="2"
                  type="number"
                  {...register("bildirish_number", { required: true })}
                />
              </FormControl>
              <FormControl isInvalid={errors?.bildirish_number}>
                <Input
                  borderColor={"gray.600"}
                  placeholder="3"
                  type="number"
                  {...register("bildirish_number", { required: true })}
                />
              </FormControl>
              <FormControl isInvalid={errors?.bildirish_number}>
                <Input
                  borderColor={"gray.600"}
                  placeholder="4"
                  type="number"
                  {...register("bildirish_number", { required: true })}
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
              Ishlab chiqarilishi,zavod tamg’asi
            </Text>
            <Flex
              flexWrap={["wrap", "nowrap"]}
              justifyContent={"center"}
              alignItems={"center"}
              my="4"
              gap={3}
            >
              <FormControl isInvalid={errors?.bildirish_number}>
                <Input
                  borderColor={"gray.600"}
                  placeholder="1"
                  type="number"
                  {...register("bildirish_number", { required: true })}
                />
              </FormControl>
              <FormControl isInvalid={errors?.bildirish_number}>
                <Input
                  borderColor={"gray.600"}
                  placeholder="2"
                  type="number"
                  {...register("bildirish_number", { required: true })}
                />
              </FormControl>
              <FormControl isInvalid={errors?.bildirish_number}>
                <Input
                  borderColor={"gray.600"}
                  placeholder="3"
                  type="number"
                  {...register("bildirish_number", { required: true })}
                />
              </FormControl>
              <FormControl isInvalid={errors?.bildirish_number}>
                <Input
                  borderColor={"gray.600"}
                  placeholder="4"
                  type="number"
                  {...register("bildirish_number", { required: true })}
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
              Mavjudlik kodi
            </Text>
            <Flex
              flexWrap={["wrap", "nowrap"]}
              justifyContent={"center"}
              alignItems={"center"}
              my="4"
              gap={3}
            >
              <FormControl isInvalid={errors?.bildirish_number}>
                <Input
                  borderColor={"gray.600"}
                  placeholder="1"
                  type="number"
                  {...register("bildirish_number", { required: true })}
                />
              </FormControl>
              <FormControl isInvalid={errors?.bildirish_number}>
                <Input
                  borderColor={"gray.600"}
                  placeholder="2"
                  type="number"
                  {...register("bildirish_number", { required: true })}
                />
              </FormControl>
              <FormControl isInvalid={errors?.bildirish_number}>
                <Input
                  borderColor={"gray.600"}
                  placeholder="3"
                  type="number"
                  {...register("bildirish_number", { required: true })}
                />
              </FormControl>
              <FormControl isInvalid={errors?.bildirish_number}>
                <Input
                  borderColor={"gray.600"}
                  placeholder="4"
                  type="number"
                  {...register("bildirish_number", { required: true })}
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
              Ressor usti balkasi
            </Text>
            <Flex
              flexWrap={["wrap", "nowrap"]}
              justifyContent={"center"}
              alignItems={"center"}
              my="4"
              gap={3}
            >
              <FormControl isInvalid={errors?.bildirish_number}>
                <Input
                  borderColor={"gray.600"}
                  placeholder="1"
                  type="number"
                  {...register("bildirish_number", { required: true })}
                />
              </FormControl>
              <FormControl isInvalid={errors?.bildirish_number}>
                <Input
                  borderColor={"gray.600"}
                  placeholder="2"
                  type="number"
                  {...register("bildirish_number", { required: true })}
                />
              </FormControl>
              <FormControl isInvalid={errors?.bildirish_number}>
                <Input
                  borderColor={"gray.600"}
                  placeholder="3"
                  type="number"
                  {...register("bildirish_number", { required: true })}
                />
              </FormControl>
              <FormControl isInvalid={errors?.bildirish_number}>
                <Input
                  borderColor={"gray.600"}
                  placeholder="4"
                  type="number"
                  {...register("bildirish_number", { required: true })}
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
                <Input
                  borderColor={"gray.600"}
                  placeholder="1"
                  type="number"
                  {...register("bildirish_number", { required: true })}
                />
              </FormControl>
              <FormControl isInvalid={errors?.bildirish_number}>
                <Input
                  borderColor={"gray.600"}
                  placeholder="2"
                  type="number"
                  {...register("bildirish_number", { required: true })}
                />
              </FormControl>
              <FormControl isInvalid={errors?.bildirish_number}>
                <Input
                  borderColor={"gray.600"}
                  placeholder="3"
                  type="number"
                  {...register("bildirish_number", { required: true })}
                />
              </FormControl>
              <FormControl isInvalid={errors?.bildirish_number}>
                <Input
                  borderColor={"gray.600"}
                  placeholder="4"
                  type="number"
                  {...register("bildirish_number", { required: true })}
                />
              </FormControl>
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
Carriage_dalolatnoma_model.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};
