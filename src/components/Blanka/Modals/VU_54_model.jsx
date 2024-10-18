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
import UserApi from "../../../Service/module/userModule.api";
export const VU_54_Model = ({ onClose, isOpen }) => {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);

    const { response, error } = await new UserApi().postVu54(data);
    setLoading(false);
    if (response) {
      toast({
        status: "success",
        title: "VU-54 jurnaliga vagon muvaffaqiyatli qo'shildi.",
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
          : "Bu vagon raqami uchun VU-68 jurnali mavjud.",
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
          VU-54 Shaklini qo&apos;shish
        </ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.wheel_pair_number}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Ғилдирак жуфтлиги тури
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("wheel_pair_number")}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.grph_3_4_plus}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Хаммаси (3-графа = 4- ва 10-гача бўлган графалар йиғиндиси)
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("grph_3_4_plus")}
                  type="text"
                />
              </FormControl>{" "}
            </Flex>

            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.vkm_get_new}>
                <FormLabel fontWeight={"700"} whiteSpace={["wrap", "nowrap"]}>
                  Бошка ташкилотлардан{" "}
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Завод ва ВКМ дан олинган янги
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("vkm_get_new")}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.vkm_get_depot_new}>
                <FormLabel fontWeight={"700"} whiteSpace={["wrap", "nowrap"]}>
                  Бошка ташкилотлардан{" "}
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Завод, ВКМ ва деполарда янгиланган{" "}
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("vkm_get_depot_new")}
                  type="text"
                />
              </FormControl>
            </Flex>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.not_change_elements}>
                <FormLabel fontWeight={"700"} whiteSpace={["wrap", "nowrap"]}>
                  Таьмир учун деполардан{" "}
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Ўзгармас элементлар билан{" "}
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("not_change_elements")}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.change_elements}>
                <FormLabel fontWeight={"700"} whiteSpace={["wrap", "nowrap"]}>
                  Таьмир учун деполардан{" "}
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Ўзгарувчан элементлар билан
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("change_elements")}
                  type="text"
                />
              </FormControl>
            </Flex>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.defective}>
                <FormLabel fontWeight={"700"} whiteSpace={["wrap", "nowrap"]}>
                  Вагон остидан олинган{" "}
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>Носоз</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("defective")}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.is_defect_not_change}>
                <FormLabel fontWeight={"700"} whiteSpace={["wrap", "nowrap"]}>
                  Вагон остидан олинган{" "}
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Яроқли (Ўзгармас элементлар билан)
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("is_defect_not_change")}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.is_defect_change}>
                <FormLabel fontWeight={"700"} whiteSpace={["wrap", "nowrap"]}>
                  Вагон остидан олинган{" "}
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Яроқли (Ўзгарувчан элементлар билан )
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("is_defect_change")}
                  type="text"
                />
              </FormControl>
            </Flex>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.grph_11_12_13_plus}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Хаммаси (11-графа=12-ва 13-графа йиғиндисига)
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("grph_11_12_13_plus")}
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
              <FormControl isInvalid={errors?.new_elements}>
                <FormLabel fontWeight={"700"} whiteSpace={["wrap", "nowrap"]}>
                  Шаклланган
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Янги элементлардан
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("new_elements")}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.new_point_enter}>
                <FormLabel fontWeight={"700"} whiteSpace={["wrap", "nowrap"]}>
                  Шаклланган
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Янги ўқ ўрнатиш билан
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("new_point_enter")}
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
              <FormControl isInvalid={errors?.new_wheel_enter}>
                <FormLabel fontWeight={"700"} whiteSpace={["wrap", "nowrap"]}>
                  Ўзгарувчан элементлар{" "}
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Янги ғилдиракларни ўрнатиш билан
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("new_wheel_enter")}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.expired_elements_made}>
                <FormLabel fontWeight={"700"} whiteSpace={["wrap", "nowrap"]}>
                  Ўзгарувчан элементлар{" "}
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Эски элементлардан тайёрланган
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("expired_elements_made")}
                  type="text"
                />
              </FormControl>
            </Flex>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.buks_circle_face_repair}>
                <FormLabel fontWeight={"700"} whiteSpace={["wrap", "nowrap"]}>
                  Ўзгармас элементлар (Буксанинг тўлиқ кўрилиши)
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Айланиш юзасига ишлов бериш
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("buks_circle_face_repair")}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.buks_circle_face_repair_not_turn}>
                <FormLabel fontWeight={"700"} whiteSpace={["wrap", "nowrap"]}>
                  Ўзгармас элементлар (Буксанинг тўлиқ кўрилиши)
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Айланиш юзасини йўнмасдан{" "}
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("buks_circle_face_repair_not_turn")}
                  type="text"
                />
              </FormControl>
            </Flex>

            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.three_typeof_wheel_turn}>
                <FormLabel>
                  3- турдаги ғилдирак жуфтлигининг айланиш юзасини йўниш йўли
                  билан
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("three_typeof_wheel_turn")}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.rolls_gun_repair}>
                <FormLabel>
                  3-турдаги ғилдирак жуфтлиги ўқлари бўйнини буриш билан
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("rolls_gun_repair")}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.rolls_neeg_with_repair}>
                <FormLabel>
                  Роликли ўқнинг бўйни резбасини тиклаш билан{" "}
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("rolls_neeg_with_repair")}
                  type="text"
                />
              </FormControl>
            </Flex>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.rolls_circle_face_repair}>
                <FormLabel fontWeight={"700"} whiteSpace={["wrap", "nowrap"]}>
                  Роликли буксани оралиқ кўриб чиқиш
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Айланиш юзасига ишлов бериш
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("rolls_circle_face_repair")}
                  type="text"
                />
              </FormControl>
              <FormControl
                isInvalid={errors?.rolls_circle_face_repair_not_turn}
              >
                <FormLabel fontWeight={"700"} whiteSpace={["wrap", "nowrap"]}>
                  Роликли буксани оралиқ кўриб чиқиш
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Айланиш юзасини йўнмасдан
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("rolls_circle_face_repair_not_turn")}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.antoher_works}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Бошқа бажарилган ишлар
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("antoher_works")}
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
              <FormControl isInvalid={errors?.grph_24_25_28_plus}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Хаммаси (24-графа=25 – дан 28 – гача графалар йиғиндиси)
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("grph_24_25_28_plus")}
                  type="text"
                />
              </FormControl>
            </Flex>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.after_repair_send_way}>
                <FormLabel fontWeight={"700"} whiteSpace={["wrap", "nowrap"]}>
                  Яроқли
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Таьмирдан кейин бошқа депога жўнатилган
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("after_repair_send_way")}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.under_carriage_number}>
                <FormLabel fontWeight={"700"} whiteSpace={["wrap", "nowrap"]}>
                  Яроқли
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Вагон остига берилган
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("under_carriage_number")}
                  type="text"
                />
              </FormControl>
            </Flex>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.invetor_sended}>
                <FormLabel fontWeight={"700"} whiteSpace={["wrap", "nowrap"]}>
                  Яроқсиз
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Инвентаризациядан чиқарилган
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("invetor_sended")}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.vkm_with_changes}>
                <FormLabel fontWeight={"700"}>
                  Яроқсиз (Завод, КВМ ёки деполарга таьмирга жўнатилган)
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Ўзгарувчан элементлар билан
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("vkm_with_changes")}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.vkm_without_changes}>
                <FormLabel fontWeight={"700"}>
                  Яроқсиз (Завод, КВМ ёки деполарга таьмирга жўнатилган)
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Ўзгармас элементлар билан
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("vkm_without_changes")}
                  type="text"
                />
              </FormControl>
            </Flex>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.grph_30_31_32_plus}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Хаммаси (30-графа= = 31- ва 32-графалар йиғиндиси){" "}
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("grph_30_31_32_plus")}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.is_use}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>Яроқли </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("is_use")}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.grph_32_33_34_plus}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Яроқсиз (32- графа= 33- ва 34- графалар йиғиндиси){" "}
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("grph_32_33_34_plus")}
                  type="text"
                />
              </FormControl>
            </Flex>

            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.do_repair_with_changes}>
                <FormLabel fontWeight={"700"}>
                  Улардан таьмирлаш талаб этилади
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Ўзгарувчан элементлар билан
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("do_repair_with_changes")}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.do_repair_without_changes}>
                <FormLabel fontWeight={"700"}>
                  Улардан таьмирлаш талаб этилади
                </FormLabel>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Ўзгармас элементлар билан
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("do_repair_without_changes")}
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
              <FormControl isInvalid={errors?.grph_35_36_38_plus}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Хаммаси (35- графа=36-дан 38-гача графалар йиғиндиси ){" "}
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("grph_35_36_38_plus")}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.sheyk_type}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Шейка қисмида
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("sheyk_type")}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.stupid_under_type}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Ступица ости қисмида
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("stupid_under_type")}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.between_type}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Ўрта қисмида
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("between_type")}
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
              <FormControl isInvalid={errors?.resba_is_break}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Резбаси носозлиги сабабли{" "}
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("resba_is_break")}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.is_energy_uq}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Ўқда электр учқунлари мавжудлиги
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("is_energy_uq")}
                  type="text"
                />
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

VU_54_Model.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};
