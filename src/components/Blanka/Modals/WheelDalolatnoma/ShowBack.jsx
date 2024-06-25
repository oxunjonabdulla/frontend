import {
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
import PropTypes from "prop-types";
export const ShowBack = ({ isOpen, onClose, dataBack }) => {
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
                    <Td>G`ildirak juftligi raqami</Td>
                    <Td>Ishlab chiqarilishi,zavod</Td>
                    <Td>Mavjudlik kodi</Td>
                  </Tr>
                  <Tr>
                    <Td>1</Td>
                    <Td>{dataBack.koleso_raqam_1}</Td>
                    <Td>{dataBack.koleso_zavod_1}</Td>
                    <Td>{dataBack.mavjud_kod_1}</Td>
                  </Tr>
                  <Tr>
                    <Td>2</Td>
                    <Td>{dataBack.koleso_raqam_2}</Td>
                    <Td>{dataBack.koleso_zavod_2}</Td>
                    <Td>{dataBack.mavjud_kod_2}</Td>
                  </Tr>
                  <Tr>
                    <Td>3</Td>
                    <Td>{dataBack.koleso_raqam_3}</Td>
                    <Td>{dataBack.koleso_zavod_3}</Td>
                    <Td>{dataBack.mavjud_kod_3}</Td>
                  </Tr>
                  <Tr>
                    <Td>4</Td>
                    <Td>{dataBack.koleso_raqam_4}</Td>
                    <Td>{dataBack.koleso_zavod_4}</Td>
                    <Td>{dataBack.mavjud_kod_4}</Td>
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
