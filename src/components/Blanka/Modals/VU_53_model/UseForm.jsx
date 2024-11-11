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
  Thead,
  Tr, 
  useToast,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { vu_53_form2, vu_53_form_second2 } from "../../../../utils/mock_heads";
import UserApi from "../../../../Service/module/userModule.api";

export const UseForm = ({ onClose, isOpen, vu53Id }) => {
  const [isLoading, setLoading] = useState(false);
  const [wheelUser, setWheelUser] = useState([]);

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

  useEffect(() => {
    const fetchData = async () => {
      const { response } = await new UserApi().getWheelUserSignature();
      if (response) setWheelUser(response?.data);
    };
    fetchData();
  }, []);

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
                <Table
                  borderRadius={10}
                  whiteSpace={"pre-wrap"}
                  variant={"striped"}
                  overflow={"hidden"}
                  colorScheme="blackAlpha">
                  <Thead bg={"#0c6170"} rounded={10}>
                    {vu_53_form_second2?.map((list, idx) => ( // lists
                      <Tr key={idx}>
                        {list?.map((item, idx) => ( // objects
                          <Td
                            fontSize={"15px"}
                            key={idx}
                            textAlign={"center"}
                            rowSpan={item?.rowspan}
                            colSpan={item?.colspan}
                            style={{ minWidth: "150px", color: "white" }}
                          >
                            {item?.label}
                          </Td>
                        ))}
                      </Tr>
                    ))}
                  </Thead>
                  <Tbody>
                    <Tr>
                      {vu_53_form2.map((item, idx) => (
                        <Td key={idx}>
                          <Input
                            type="number"
                            p={1}
                            {...register(item?.key)}
                          />
                        </Td>
                      ))}
                      <Td>
                        <Select
                          borderColor={"gray.600"}
                          placeholder="Smena ustasi imzosi"
                          {...register("gildirak_user_signature")}
                        >
                          {wheelUser?.map((item) => (
                            <option key={item?.id} value={item?.id}>{item?.name}</option>
                          ))}
                        </Select>
                      </Td>
                      <Td>
                        <Select
                          borderColor={"gray.600"}
                          placeholder="Smena ustasi imzosi"
                          {...register("provided_gildirak_user_signature")}
                        >
                          {wheelUser?.map((item) => (
                            <option key={item?.id} value={item?.id}>{item?.name}</option>
                          ))}
                        </Select>
                      </Td>
                      <Td>
                        <Input
                          p={1}
                          {...register('comment')}
                        />
                      </Td>
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
