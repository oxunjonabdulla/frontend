import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useToast,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import UserApi from "../../Service/module/userModule.api";
import { SearchTrain } from "../../utils";
export const ReportModal = ({ onClose, isOpen }) => {
  const [isLoading, setLoading] = useState(false);
  const [serachingResult, setSerachingResult] = useState(null);
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);

    const { response, error } = await new UserApi().createGeneralReport({
      carriage_number: serachingResult,
      log_type: data.is_repair_error_1,
    });
    setLoading(false);
    if (response) {
      toast({
        status: "success",
        title: "VU-68 jurnaliga vagon muvaffaqiyatli qo'shildi.",
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
        title: error?.error ? error?.error : "Xatolik mavjud",
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
      size={"md"}
      isCentered
      motionPreset="slideInLeft"
    >
      <ModalOverlay backdropFilter="blur(10px) hue-rotate(10deg)" />
      <ModalContent>
        <ModalHeader textAlign={"center"}>Hisobot olish</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <SearchTrain setSerachingResult={setSerachingResult} />{" "}
            </Flex>

            <Flex
              gap={3}
              flexDir={"column"}
              flexWrap={["wrap", "nowrap"]}
              align={"center"}
              justify={"center"}
              my={4}
            >
              <FormControl isInvalid={errors?.air_dropper_type}>
                <Select
                  borderColor={"gray.600"}
                  placeholder="Jurnal turi"
                  {...register("is_repair_error_1")}
                >
                  <option value={"vu31"}>VU-31 Jurnali</option>
                  <option value={"vu36"}>VU-36 Jurnali</option>
                  <option value={"collect_act"}>
                    Yiguv bo'limi dalolatnomasi
                  </option>
                </Select>
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
              Yaratish
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

ReportModal.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};
