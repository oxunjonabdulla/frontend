import { Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import UserApi from "../../../Service/module/userModule.api";
import { SearchTrain, repairTypes } from "../../../utils";

export const AutoConnectModel = ({ onClose, isOpen }) => {
    const [isLoading, setLoading] = useState(false);
    const [serachingResult, setSerachingResult] = useState(null);
    const [defestoskopUser, setDefestoskopUser] = useState([]);
    const toast = useToast();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        setLoading(true);

        const { response, error } = await new UserApi().postAutoConnect(
            serachingResult,
            data
        );
        setLoading(false);
        if (response) {
            toast({
                status: "success",
                title: "Avto burikma muvaffaqiyatli yaratildi.",
                duration: 4000,
                isClosable: true,
                position: "top-right",
                fontSize: "3xl",
            });

            window.location.reload();
        }
        if (error) toast({
            status: "error",
            title: !error?.error
                ? "Vagon raqami kiritilmadi yoki bu turdagi vagon raqami mavjud emas."
                : "Bu vagon raqami uchun Avto birikma jurnali mavjud.",
            duration: 4000,
            isClosable: true,
            position: "top-right",
            fontSize: "3xl",
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            const { response } = await new UserApi().getDefestoskopUserSignature();
            if (response) setDefestoskopUser(response?.data);
        };
        fetchData();
    }, []);

    return (
        <Modal
            isOpen={isOpen}
            w={"100%"}
            onClose={onClose}
            size={["6xl"]}
            isCentered
            motionPreset="slideInLeft">
            <ModalOverlay backdropFilter="blur(10px) hue-rotate(10deg)" />
            <ModalContent overflow={"auto"}>
                <ModalHeader textAlign={"center"}>Avto birikma q&#39;shish</ModalHeader>
                <ModalCloseButton />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ModalBody>
                        <Flex gap={3} flexWrap={["wrap", "nowrap"]} alignItems={"flex-end"}>
                            <SearchTrain setSerachingResult={setSerachingResult} />
                            <FormControl isInvalid={errors?.defestoskop_detector_user}>
                                <FormLabel>Imzolovchi xodim</FormLabel>
                                <Select
                                    borderColor={"gray.600"}
                                    placeholder="Imzolovchi xodim"
                                    {...register("defestoskop_detector_user")}
                                >
                                    {defestoskopUser?.map((item) => (
                                        <option key={item?.id} value={item?.id}>{item?.name}</option>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl isInvalid={errors?.date}>
                                <FormLabel>Sana</FormLabel>
                                <Input
                                    borderColor={"gray.600"}
                                    {...register("date")}
                                    type="date"
                                />
                            </FormControl>
                        </Flex>
                        <Flex py={6} gap={3} flexWrap={["wrap", "nowrap"]} alignItems={"flex-end"}>
                            <FormControl>
                                <FormLabel as={"h1"} fontWeight={500} whiteSpace={"nowrap"}>
                                    Talab qilingan ta’mir turi:
                                </FormLabel>
                                <Select borderColor={"gray.600"} {...register("repair_type")}>
                                    {repairTypes.map((type) => (
                                        <option key={type.value} value={type.value}>
                                            {type.label}
                                        </option>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl isInvalid={errors?.autocombination}>
                                <FormLabel>Avtobirikma</FormLabel>
                                <Input
                                    borderColor={"gray.600"}
                                    {...register("autocombination")}
                                    placeholder={"Avtobirikma"}
                                />
                            </FormControl>
                            <FormControl isInvalid={errors?.traction_clamp}>
                                <FormLabel>Tortish qisqichi</FormLabel>
                                <Input
                                    borderColor={"gray.600"}
                                    {...register("traction_clamp")}
                                    placeholder={"Tortish qisqichi"}
                                />
                            </FormControl>
                        </Flex>
                        <Flex gap={3} flexWrap={["wrap", "nowrap"]} alignItems={"flex-end"}>
                            <FormControl isInvalid={errors?.traction_clamp_clevis}>
                                <FormLabel>Tortish qisqichi kleyvi</FormLabel>
                                <Input
                                    borderColor={"gray.600"}
                                    {...register("traction_clamp_clevis")}
                                    placeholder={"Tortish qisqichi kleyvi"}
                                />
                            </FormControl>
                            <FormControl isInvalid={errors?.pendulum_suspension}>
                                <FormLabel>Mayatnikli osma</FormLabel>
                                <Input
                                    borderColor={"gray.600"}
                                    {...register("pendulum_suspension")}
                                    placeholder={"Mayatnikli osma"}
                                />
                            </FormControl>
                            <FormControl isInvalid={errors?.tension_bolt}>
                                <FormLabel>Tartibga soluvchi bolt</FormLabel>
                                <Input
                                    borderColor={"gray.600"}
                                    {...register("tension_bolt")}
                                    placeholder={"Tartibga soluvchi bolt"}
                                />
                            </FormControl>
                            <FormControl isInvalid={errors?.part_suitability_conclusion}>
                                <FormLabel>Detalning yaroqlilik xulosasi</FormLabel>
                                <Input
                                    borderColor={"gray.600"}
                                    {...register("part_suitability_conclusion")}
                                    placeholder={"Detalning yaroqlilik xulosasi"}
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
    )
}