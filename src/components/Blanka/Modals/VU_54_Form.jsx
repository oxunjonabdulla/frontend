import { Button, Flex, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";

export const VU_50_Form = memo(function VU_50_Form({
    register,
    remove,
    idx,
    errors,
}) {

    return (
        <>
            <hr />
            <div style={{ textAlign: "center", fontSize: "20px" }}>{idx + 1}</div>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
                <FormControl isInvalid={errors?.wheel_pair_number}>
                    <FormLabel whiteSpace={["wrap", "nowrap"]}>
                        Ғилдирак жуфтлиги тури
                    </FormLabel>
                    <Input
                        borderColor={"gray.600"}
                        {...register(`${idx}.wheel_pair_number`)}
                        type="text"
                    />
                </FormControl>
                <FormControl isInvalid={errors?.grph_3_4_plus}>
                    <FormLabel whiteSpace={["wrap", "nowrap"]}>
                        Хаммаси (3-графа = 4- ва 10-гача бўлган графалар йиғиндиси)
                    </FormLabel>
                    <Input
                        borderColor={"gray.600"}
                        {...register(`${idx}.grph_3_4_plus`)}
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
                        {...register(`${idx}.vkm_get_new`)}
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
                        {...register(`${idx}.vkm_get_depot_new`)}
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
                        {...register(`${idx}.not_change_elements`)}
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
                        {...register(`${idx}.change_elements`)}
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
                        {...register(`${idx}.defective`)}
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
                        {...register(`${idx}.is_defect_not_change`)}
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
                        {...register(`${idx}.is_defect_change`)}
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
                        {...register(`${idx}.grph_11_12_13_plus`)}
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
                        {...register(`${idx}.new_elements`)}
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
                        {...register(`${idx}.new_point_enter`)}
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
                        {...register(`${idx}.new_wheel_enter`)}
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
                        {...register(`${idx}.expired_elements_made`)}
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
                        {...register(`${idx}.buks_circle_face_repair`)}
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
                        {...register(`${idx}.buks_circle_face_repair_not_turn`)}
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
                        {...register(`${idx}.three_typeof_wheel_turn`)}
                        type="text"
                    />
                </FormControl>
                <FormControl isInvalid={errors?.rolls_gun_repair}>
                    <FormLabel>
                        3-турдаги ғилдирак жуфтлиги ўқлари бўйнини буриш билан
                    </FormLabel>
                    <Input
                        borderColor={"gray.600"}
                        {...register(`${idx}.rolls_gun_repair`)}
                        type="text"
                    />
                </FormControl>
                <FormControl isInvalid={errors?.rolls_neeg_with_repair}>
                    <FormLabel>
                        Роликли ўқнинг бўйни резбасини тиклаш билан{" "}
                    </FormLabel>
                    <Input
                        borderColor={"gray.600"}
                        {...register(`${idx}.rolls_neeg_with_repair`)}
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
                        {...register(`${idx}.rolls_circle_face_repair`)}
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
                        {...register(`${idx}.rolls_circle_face_repair_not_turn`)}
                        type="text"
                    />
                </FormControl>
                <FormControl isInvalid={errors?.antoher_works}>
                    <FormLabel whiteSpace={["wrap", "nowrap"]}>
                        Бошқа бажарилган ишлар
                    </FormLabel>
                    <Input
                        borderColor={"gray.600"}
                        {...register(`${idx}.antoher_works`)}
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
                        {...register(`${idx}.grph_24_25_28_plus`)}
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
                        {...register(`${idx}.after_repair_send_way`)}
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
                        {...register(`${idx}.under_carriage_number`)}
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
                        {...register(`${idx}.invetor_sended`)}
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
                        {...register(`${idx}.vkm_with_changes`)}
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
                        {...register(`${idx}.vkm_without_changes`)}
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
                        {...register(`${idx}.grph_30_31_32_plus`)}
                        type="text"
                    />
                </FormControl>
                <FormControl isInvalid={errors?.is_use}>
                    <FormLabel whiteSpace={["wrap", "nowrap"]}>Яроқли </FormLabel>
                    <Input
                        borderColor={"gray.600"}
                        {...register(`${idx}.is_use`)}
                        type="text"
                    />
                </FormControl>
                <FormControl isInvalid={errors?.grph_32_33_34_plus}>
                    <FormLabel whiteSpace={["wrap", "nowrap"]}>
                        Яроқсиз (32- графа= 33- ва 34- графалар йиғиндиси){" "}
                    </FormLabel>
                    <Input
                        borderColor={"gray.600"}
                        {...register(`${idx}.grph_32_33_34_plus`)}
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
                        {...register(`${idx}.do_repair_with_changes`)}
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
                        {...register(`${idx}.do_repair_without_changes`)}
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
                        {...register(`${idx}.grph_35_36_38_plus`)}
                        type="text"
                    />
                </FormControl>
                <FormControl isInvalid={errors?.sheyk_type}>
                    <FormLabel whiteSpace={["wrap", "nowrap"]}>
                        Шейка қисмида
                    </FormLabel>
                    <Input
                        borderColor={"gray.600"}
                        {...register(`${idx}.sheyk_type`)}
                        type="text"
                    />
                </FormControl>
                <FormControl isInvalid={errors?.stupid_under_type}>
                    <FormLabel whiteSpace={["wrap", "nowrap"]}>
                        Ступица ости қисмида
                    </FormLabel>
                    <Input
                        borderColor={"gray.600"}
                        {...register(`${idx}.stupid_under_type`)}
                        type="text"
                    />
                </FormControl>
                <FormControl isInvalid={errors?.between_type}>
                    <FormLabel whiteSpace={["wrap", "nowrap"]}>
                        Ўрта қисмида
                    </FormLabel>
                    <Input
                        borderColor={"gray.600"}
                        {...register(`${idx}.between_type`)}
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
                        {...register(`${idx}.resba_is_break`)}
                        type="text"
                    />
                </FormControl>
                <FormControl isInvalid={errors?.is_energy_uq}>
                    <FormLabel whiteSpace={["wrap", "nowrap"]}>
                        Ўқда электр учқунлари мавжудлиги
                    </FormLabel>
                    <Input
                        borderColor={"gray.600"}
                        {...register(`${idx}.is_energy_uq`)}
                        type="text"
                    />
                </FormControl>
                <Button type="button" marginTop={"30px"} colorScheme="red" onClick={() => remove(idx)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </Button>
            </Flex>
        </>
    );
});
