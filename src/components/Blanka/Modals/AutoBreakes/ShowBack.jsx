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
                    <Td>Avtobirikma raqami</Td>
                    <Td>Ishlab chiqarilishi,zavod tamg’asi</Td>
                    <Td>Mavjudlik kodi</Td>
                  </Tr>
                  <Tr>
                    <Td>1</Td>
                    <Td>{dataBack.auto_number_1}</Td>
                    <Td>{dataBack.auto_zavod_1}</Td>
                    <Td>{dataBack.mavjud_kod_1}</Td>
                  </Tr>
                  <Tr>
                    <Td>2</Td>
                    <Td>{dataBack.auto_number_2}</Td>
                    <Td>{dataBack.auto_zavod_2}</Td>
                    <Td>{dataBack.mavjud_kod_2}</Td>
                  </Tr>

                  <Tr>
                    <Td colSpan={4} textAlign={"center"}>
                      Yutish apparati
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>1</Td>
                    <Td>{dataBack?.yutish_auto_number_1}</Td>
                    <Td>{dataBack?.yutish_auto_zavod_1}</Td>
                    <Td>{dataBack?.yutish_mavjud_kod_1}</Td>
                  </Tr>
                  <Tr>
                    <Td>2</Td>
                    <Td>{dataBack?.yutish_auto_number_2}</Td>
                    <Td>{dataBack?.yutish_auto_zavod_2}</Td>
                    <Td>{dataBack?.yutish_mavjud_kod_2}</Td>
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
