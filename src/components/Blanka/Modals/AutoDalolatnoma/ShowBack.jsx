import {
  Button,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
export const ShowBack = ({ isOpen, onClose, dataBack }) => {
  const {
    register,
    formState: { errors },
  } = useForm();

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
          Kirish va chiqish dalolatnomasi aravalar bo‘linmasi orqa tomoni.
        </ModalHeader>

        <ModalCloseButton />
        <form>
          <ModalBody>
            <TableContainer>
              <Table variant="striped" colorScheme="gray">
                <Tbody>
                  <Tr>
                    <Td>№</Td>
                    <Td>Yon rama raqami</Td>
                    <Td>Ishlab chiqarilishi,zavod tamg’asi</Td>
                    <Td>Mavjudlik kodi</Td>
                  </Tr>
                  <Tr>
                    <Td>1</Td>
                    <Td>{dataBack?.yon_raqam_1}</Td>
                    <Td>{dataBack?.auto_zavod_1}</Td>
                    <Td>{dataBack?.mavjud_kod_1}</Td>
                  </Tr>
                  <Tr>
                    <Td>2</Td>
                    <Td>{dataBack?.yon_raqam_2}</Td>
                    <Td>{dataBack?.auto_zavod_2}</Td>
                    <Td>{dataBack?.mavjud_kod_2}</Td>
                  </Tr>
                  <Tr>
                    <Td>3</Td>
                    <Td>{dataBack?.yon_raqam_3}</Td>
                    <Td>{dataBack?.auto_zavod_3}</Td>
                    <Td>{dataBack?.mavjud_kod_3}</Td>
                  </Tr>
                  <Tr>
                    <Td>4</Td>
                    <Td>{dataBack?.yon_raqam_4}</Td>
                    <Td>{dataBack?.auto_zavod_4}</Td>
                    <Td>{dataBack?.mavjud_kod_4}</Td>
                  </Tr>

                  <Tr>
                    <Td colSpan={4} textAlign={"center"}>
                      Ressor usti balkasi
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>1</Td>
                    <Td>{dataBack?.restor_balka_yon_1}</Td>
                    <Td>{dataBack?.restor_balka_zavod_1}</Td>
                    <Td>{dataBack?.restor_balka_kod_1}</Td>
                  </Tr>
                  <Tr>
                    <Td>2</Td>
                    <Td>{dataBack?.restor_balka_yon_2}</Td>
                    <Td>{dataBack?.restor_balka_zavod_2}</Td>
                    <Td>{dataBack?.restor_balka_kod_2}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </ModalBody>
        </form>
      </ModalContent>
    </Modal>
  );
};
ShowBack.propTypes = {
  onClose: PropTypes.func,
};
