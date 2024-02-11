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
import { SearchTrain } from "../../../utils";
export const VU_54_Model = ({ onClose, isOpen }) => {
  const [trainFixType, setTrainFixType] = useState(null);
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
          VU-54 Shaklini qo&apos;shish
        </ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <SearchTrain setSerachingResult={setSerachingResult} />
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>Sana</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
                  type="date"
                />
              </FormControl>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Ғилдирак жуфтлиги тури
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
              Кунлик қабул қилинган
            </Text>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Хаммаси (3-графа = 4- ва 10-гача бўлган графалар йиғиндиси)
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
                <FormLabel fontWeight={"700"} whiteSpace={["wrap", "nowrap"]}>
                  Бошка ташкилотлардан{" "}
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Завод ва ВКМ дан олинган янги
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel fontWeight={"700"} whiteSpace={["wrap", "nowrap"]}>
                  Бошка ташкилотлардан{" "}
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Завод, ВКМ ва деполарда янгиланган{" "}
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
                <FormLabel fontWeight={"700"} whiteSpace={["wrap", "nowrap"]}>
                  Таьмир учун деполардан{" "}
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Ўзгармас элементлар билан{" "}
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel fontWeight={"700"} whiteSpace={["wrap", "nowrap"]}>
                  Таьмир учун деполардан{" "}
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Ўзгарувчан элементлар билан
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
                <FormLabel fontWeight={"700"} whiteSpace={["wrap", "nowrap"]}>
                  Вагон остидан олинган{" "}
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>Носоз</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel fontWeight={"700"} whiteSpace={["wrap", "nowrap"]}>
                  Вагон остидан олинган{" "}
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Яроқли (Ўзгармас элементлар билан)
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel fontWeight={"700"} whiteSpace={["wrap", "nowrap"]}>
                  Вагон остидан олинган{" "}
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Яроқли (Ўзгарувчан элементлар билан )
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
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Хаммаси (11-графа=12-ва 13-графа йиғиндисига)
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
              Тайёрланган
            </Text>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel fontWeight={"700"} whiteSpace={["wrap", "nowrap"]}>
                  Шаклланган
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Янги элементлардан
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel fontWeight={"700"} whiteSpace={["wrap", "nowrap"]}>
                  Шаклланган
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Янги ўқ ўрнатиш билан
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
              Янгиланган (Тайёрланган)
            </Text>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel fontWeight={"700"} whiteSpace={["wrap", "nowrap"]}>
                  Ўзгарувчан элементлар{" "}
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Янги ғилдиракларни ўрнатиш билан
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel fontWeight={"700"} whiteSpace={["wrap", "nowrap"]}>
                  Ўзгарувчан элементлар{" "}
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Эски элементлардан тайёрланган
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
                <FormLabel fontWeight={"700"} whiteSpace={["wrap", "nowrap"]}>
                  Ўзгармас элементлар (Буксанинг тўлиқ кўрилиши)
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Айланиш юзасига ишлов бериш
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel fontWeight={"700"} whiteSpace={["wrap", "nowrap"]}>
                  Ўзгармас элементлар (Буксанинг тўлиқ кўрилиши)
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Айланиш юзасини йўнмасдан{" "}
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
                  3- турдаги ғилдирак жуфтлигининг айланиш юзасини йўниш йўли
                  билан
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel>
                  3-турдаги ғилдирак жуфтлиги ўқлари бўйнини буриш билан
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel>
                  Роликли ўқнинг бўйни резбасини тиклаш билан{" "}
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
                <FormLabel fontWeight={"700"} whiteSpace={["wrap", "nowrap"]}>
                  Роликли буксани оралиқ кўриб чиқиш
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Айланиш юзасига ишлов бериш
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel fontWeight={"700"} whiteSpace={["wrap", "nowrap"]}>
                  Роликли буксани оралиқ кўриб чиқиш
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Айланиш юзасини йўнмасдан
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Бошқа бажарилган ишлар
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
              Ҳисобдан чиқарилган{" "}
            </Text>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Хаммаси (24-графа=25 – дан 28 – гача графалар йиғиндиси)
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
                <FormLabel fontWeight={"700"} whiteSpace={["wrap", "nowrap"]}>
                  Яроқли
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Таьмирдан кейин бошқа депога жўнатилган
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel fontWeight={"700"} whiteSpace={["wrap", "nowrap"]}>
                  Яроқли
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Вагон остига берилган
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
                <FormLabel fontWeight={"700"} whiteSpace={["wrap", "nowrap"]}>
                  Яроқсиз
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Инвентаризациядан чиқарилган
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel fontWeight={"700"}>
                  Яроқсиз (Завод, КВМ ёки деполарга таьмирга жўнатилган)
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Ўзгарувчан элементлар билан
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel fontWeight={"700"}>
                  Яроқсиз (Завод, КВМ ёки деполарга таьмирга жўнатилган)
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Ўзгармас элементлар билан
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
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Хаммаси (30-графа= = 31- ва 32-графалар йиғиндиси){" "}
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>Яроқли </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Яроқсиз (32- графа= 33- ва 34- графалар йиғиндиси){" "}
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
                <FormLabel fontWeight={"700"}>
                  Улардан таьмирлаш талаб этилади
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Ўзгарувчан элементлар билан
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel fontWeight={"700"}>
                  Улардан таьмирлаш талаб этилади
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Ўзгармас элементлар билан
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
              Ўқда ёриқлари бор ғилдирак жуфтликлари сони
            </Text>

            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Хаммаси (35- графа=36-дан 38-гача графалар йиғиндиси ){" "}
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Шейка қисмида
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Ступица ости қисмида
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Ўрта қисмида
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
              Яроқсиз ҳисобланган ғилдирак жуфтликлари сони
            </Text>

            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Резбаси носозлиги сабабли{" "}
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("sinovi", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.sinovi}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Ўқда электр учқунлари мавжудлиги
                </FormLabel>
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

VU_54_Model.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};
