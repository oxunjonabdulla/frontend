import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
  useToast,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { vu_53_form_second } from "../../../../utils/mock_heads";
import UserApi from "../../../../Service/module/userModule.api";

export const UseForm = ({ onClose, isOpen, vu53Id }) => {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const { response, error } = await new UserApi().postVu53Rasxod(data, vu53Id);
    setLoading(false);
    if (response) {
      toast({
        status: "success",
        title: "VU-53 Rasxod shakliga vagon muvaffaqiyatli qo'shildi.",
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
          : "Bu vagon raqami uchun VU-50 shakli mavjud.",
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
      size={"full"}
      isCentered
      motionPreset="slideInLeft"
    >
      <ModalOverlay backdropFilter="blur(10px) hue-rotate(10deg)" />
      <ModalContent>
        <ModalHeader textAlign={"center"}>
          VU-53 Jurnalini orqa qismini qo&apos;shish
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody>
              <TableContainer>
                <Table variant="striped" colorScheme="gray">
                  <Tbody>
                    <Tr>
                      {vu_53_form_second?.secondHeader &&
                        vu_53_form_second?.secondHeader?.map((item, idx) => (
                          <Td
                            fontSize={"10px"}
                            key={idx}
                            textAlign={"center"}
                            rowSpan={item?.rowspan}
                            colSpan={item?.colspan}
                          >
                            {item?.label}
                          </Td>
                        ))}
                    </Tr>
                    <Tr>
                      {vu_53_form_second?.wheelHeader &&
                        vu_53_form_second?.wheelHeader?.map((item, idx) => (
                          <Td
                            fontSize={"10px"}
                            key={idx}
                            textAlign={"center"}
                            rowSpan={item?.rowspan}
                            colSpan={item?.colspan}
                          >
                            {item?.label}
                          </Td>
                        ))}
                    </Tr>
                    <Tr>
                      {vu_53_form_second?.threeRows &&
                        vu_53_form_second?.threeRows?.map((item, idx) => (
                          <Td
                            fontSize={"10px"}
                            key={idx}
                            textAlign={"center"}
                            rowSpan={item?.rowspan}
                            colSpan={item?.colspan}
                          >
                            {item?.label}
                          </Td>
                        ))}
                    </Tr>
                    <Tr>
                      {vu_53_form_second?.fourRows &&
                        vu_53_form_second?.fourRows?.map((item, idx) => (
                          <Td
                            fontSize={"10px"}
                            key={idx}
                            textAlign={"center"}
                            rowSpan={item?.rowspan}
                            colSpan={item?.colspan}
                          >
                            {item?.label}
                          </Td>
                        ))}
                    </Tr>
                    <Tr>
                      
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
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
        </ModalBody>
      </ModalContent>
    </Modal >
  );
};

UseForm.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  vu53Id: PropTypes.number,
};
