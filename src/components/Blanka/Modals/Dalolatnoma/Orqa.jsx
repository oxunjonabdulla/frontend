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
import { useForm } from "react-hook-form";
import { SearchTrain } from "../../../../utils";
import { useState } from "react";
import PropTypes from "prop-types";
import UserApi from "../../../../Service/module/userModule.api";

export const Orqa = ({ onClose, isOpen, carriageID }) => {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);

    const { response, error } = await new UserApi().postCollectActBack(
      carriageID,
      data
    );
    setLoading(false);
    if (response) {
      toast({
        status: "success",
        title: "Dalolatnoma tuzildi!",
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
          ? error?.detail
          : "Bu vagon raqami uchun Dalolatnoma shakli mavjud.",
        duration: 4000,
        isClosable: true,
        position: "top-right",
        fontSize: "3xl",
      });
    }
  };
  return (
    <>
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
            Kirish va chiqish dalolatnomasi Aravalar bo‘linmasi Orqa tomonini
            qo&apos;shish!{" "}
          </ModalHeader>

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
                <Text my={3} textAlign={"center"}>
                  {" "}
                  <b>{carriageID} </b>
                  Vagon raqami b&apos;yicha orqa dalolatnomani qo&apos;shish
                </Text>
                <FormControl isInvalid={errors?.created_act_date}>
                  <FormLabel>Dalolatnoma tuzilgan sana</FormLabel>
                  <Input
                    borderColor={"gray.600"}
                    {...register("created_act_date	", { required: true })}
                    type="text"
                  />
                </FormControl>
                <FormControl isInvalid={errors?.station_act}>
                  <FormLabel>Ta’mirdan o’tgan </FormLabel>
                  <Input
                    borderColor={"gray.600"}
                    type="text"
                    isReadOnly
                    value={"Qarshi Vagon Depo"}
                    {...register("station_act", { required: true })}
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
                <FormControl isInvalid={errors?.carriage_number_act}>
                  <FormLabel whiteSpace={"nowrap"}>
                    Tekshiruv davomida aniqlandi: vagon №
                  </FormLabel>
                  <Input
                    borderColor={"gray.600"}
                    type="text"
                    defaultValue={carriageID}
                    {...register("carriage_number_act", { required: true })}
                  />
                </FormControl>
                <FormControl isInvalid={errors?.made_date}>
                  <FormLabel>ishlab chiqarilgan</FormLabel>
                  <Input
                    borderColor={"gray.600"}
                    type="number"
                    {...register("made_date", { required: true })}
                  />
                </FormControl>
                <FormControl isInvalid={errors?.kod_act}>
                  <FormLabel>kod</FormLabel>
                  <Input
                    borderColor={"gray.600"}
                    type="number"
                    {...register("kod_act", { required: true })}
                  />
                </FormControl>
                <FormControl isInvalid={errors?.whom_act}>
                  <FormLabel>tegishligi</FormLabel>
                  <Input
                    borderColor={"gray.600"}
                    type="number"
                    {...register("whom_act", { required: true })}
                  />
                </FormControl>
              </Flex>
            </ModalBody>

            <ModalFooter>
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
    </>
  );
};

Orqa.propTypes = {
  onClose: PropTypes.func,
};
