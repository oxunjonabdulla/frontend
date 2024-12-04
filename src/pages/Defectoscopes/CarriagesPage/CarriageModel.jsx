import { Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import UserApi from "../../../Service/module/userModule.api";
import { SearchTrain, repairTypes } from "../../../utils";

export const CarriageModel = ({ onClose, isOpen }) => {
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

        const { response, error } = await new UserApi().postCarriageDefc(
            serachingResult,
            data
        );
        setLoading(false);
        if (response) {
            toast({
                status: "success",
                title: "Arava muvaffaqiyatli yaratildi.",
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
                <ModalHeader textAlign={"center"}>Arava q&#39;shish</ModalHeader>
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
                            <FormControl isInvalid={errors?.part_name}>
                                <FormLabel>Qism nomi</FormLabel>
                                <Input
                                    borderColor={"gray.600"}
                                    {...register("part_name")}
                                    placeholder={"Qism nomi"}
                                />
                            </FormControl>
                            <FormControl isInvalid={errors?.part_number}>
                                <FormLabel>Qism raqami</FormLabel>
                                <Input
                                    borderColor={"gray.600"}
                                    {...register("part_number")}
                                    placeholder={"Qism raqami"}
                                    type="number"
                                />
                            </FormControl>
                            <FormControl isInvalid={errors?.factory_number}>
                                <FormLabel>Ishlab chiqargan zavod raqami</FormLabel>
                                <Input
                                    borderColor={"gray.600"}
                                    {...register("factory_number")}
                                    placeholder={"Ishlab chiqargan zavod raqami"}
                                    type="number"
                                />
                            </FormControl>
                        </Flex>
                        <Flex gap={3} flexWrap={["wrap", "nowrap"]} alignItems={"flex-end"}>
                            <FormControl isInvalid={errors?.manufacture_year}>
                                <FormLabel>Ishlab chiqargan yili</FormLabel>
                                <Input
                                    borderColor={"gray.600"}
                                    {...register("manufacture_year")}
                                    placeholder={"Ishlab chiqargan yili"}
                                />
                            </FormControl>
                            <FormControl isInvalid={errors?.part_validity_conclusion}>
                                <FormLabel>Qism yaroqlilik xulosasi</FormLabel>
                                <Input
                                    borderColor={"gray.600"}
                                    {...register("part_validity_conclusion")}
                                    placeholder={"Qism yaroqlilik xulosasi"}
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