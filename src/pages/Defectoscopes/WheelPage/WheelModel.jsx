import { Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import UserApi from "../../../Service/module/userModule.api";

export const WheelModel = ({ onClose, isOpen }) => {
    const [isLoading, setLoading] = useState(false);
    const [defestoskopUser, setDefestoskopUser] = useState([]);
    const toast = useToast();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        setLoading(true);

        const { response, error } = await new UserApi().postWheelDefc(data);
        setLoading(false);
        if (response) {
            toast({
                status: "success",
                title: "G'ildirak muvaffaqiyatli yaratildi.",
                duration: 4000,
                isClosable: true,
                position: "top-right",
                fontSize: "3xl",
            });

            window.location.reload();
        }
        if (error) toast({
            status: "error",
            title: "Xatolik yuz berdi",
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
            size={["4xl"]}
            isCentered
            motionPreset="slideInLeft">
            <ModalOverlay backdropFilter="blur(10px) hue-rotate(10deg)" />
            <ModalContent overflow={"auto"}>
                <ModalHeader textAlign={"center"}>G&#39;ildirak q&#39;shish</ModalHeader>
                <ModalCloseButton />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ModalBody>
                        <Flex gap={3} flexWrap={["wrap", "nowrap"]} alignItems={"flex-end"}>
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
                            <FormControl isInvalid={errors?.serial_number}>
                                <FormLabel>Tartib raqami</FormLabel>
                                <Input
                                    borderColor={"gray.600"}
                                    {...register("serial_number")}
                                    placeholder={"Tartib raqami"}
                                    type="number"
                                />
                            </FormControl>
                            <FormControl isInvalid={errors?.wheelset_axle_number}>
                                <FormLabel>G'ildirak juft o'q raqami</FormLabel>
                                <Input
                                    borderColor={"gray.600"}
                                    {...register("wheelset_axle_number")}
                                    placeholder={"G'ildirak juft o'q raqami"}
                                    type="number"
                                />
                            </FormControl>
                        </Flex>
                        <Flex gap={3} flexWrap={["wrap", "nowrap"]} alignItems={"flex-end"}>
                            <FormControl isInvalid={errors?.wheel_cast_number}>
                                <FormLabel>G'ildirak quyma raqami</FormLabel>
                                <Input
                                    borderColor={"gray.600"}
                                    {...register("wheel_cast_number")}
                                    placeholder={"G'ildirak quyma raqami"}
                                    type="number"
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