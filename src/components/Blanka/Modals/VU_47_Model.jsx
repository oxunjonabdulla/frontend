import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  List,
  ListItem,
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
export const VU_47_Model = ({ onClose, isOpen }) => {
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
        <ModalHeader textAlign={"center"}>
          VU-47 Jurnalini qo&apos;shish
        </ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <SearchTrain setSerachingResult={setSerachingResult} />

              <FormControl isInvalid={errors?.Tormoz}>
                <FormLabel>Дата </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("Tormoz", { required: true })}
                  type="date"
                />
              </FormControl>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Тип прибора{" "}
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Заводской номер прибор год и месяц выпуска{" "}
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
                  type="text"
                />
              </FormControl>
            </Flex>

            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel>
                  {" "}
                  Время зарядки золотниковой камеры и запасного резервуара, с{" "}
                </FormLabel>
                <FormLabel> ЗК до 1,2 кгс/см2</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel>
                  {" "}
                  Время зарядки золотниковой камеры и запасного резервуара, с{" "}
                </FormLabel>
                <FormLabel> ЗР от 4,0 кгс/см2 4,5 кгс/см2</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
                  type="text"
                />
              </FormControl>
            </Flex>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel>
                  {" "}
                  Отпуск медленным темпом через калиброванные отверстия
                  диаметром 0,8 или 0,65 мм{" "}
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
                  type="text"
                />
              </FormControl>
            </Flex>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel>
                  {" "}
                  Время наполнения тормоз цилиндра до 3; 5 кгс/см2 при экстрен .
                  Или полном служебном торможении, с{" "}
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
              Давление в тормозном цилиндре (ТЦ) на режимах кгс/см2 при экстр.
              торможении (ЭТ) и полном служебном (ПСТ)
            </Text>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel>порожнем</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel>среднем </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel>груженом </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
                  type="text"
                />
              </FormControl>
            </Flex>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel>
                  Время отпуска до 0,4 кгс/см2 в ТЦ после ПСТ на равниином
                  режиме{" "}
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel>Фамилия и подпис производишего ремонт </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel>Подпись принявшего прибор </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
                  type="text"
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

VU_47_Model.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};
