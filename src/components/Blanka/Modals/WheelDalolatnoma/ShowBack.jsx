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
  Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

export const ShowBack = ({ isOpen, onClose, dataBack }) => {

  // ✅ PROTECT FROM NULL
  if (!dataBack) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={["sm", "md", "lg", "6xl"]}
      isCentered
      motionPreset="slideInLeft"
    >
      <ModalOverlay backdropFilter="blur(10px) hue-rotate(10deg)" />

      <ModalContent>

        <ModalHeader textAlign="center">
          Kirish va chiqish dalolatnomasi g‘ildirak bo‘linmasi ORQA tomoni
        </ModalHeader>

        <ModalCloseButton />

        <ModalBody>

          <TableContainer>
            <Table variant="striped" colorScheme="gray">

              <Tbody>

                <Tr>
                  <Td fontWeight="600">№</Td>
                  <Td fontWeight="600">G‘ildirak raqami</Td>
                  <Td fontWeight="600">Zavod</Td>
                  <Td fontWeight="600">Kod</Td>
                </Tr>

                <Tr>
                  <Td>1</Td>
                  <Td>{dataBack?.koleso_raqam_1 || "-"}</Td>
                  <Td>{dataBack?.koleso_zavod_1 || "-"}</Td>
                  <Td>{dataBack?.mavjud_kod_1 || "-"}</Td>
                </Tr>

                <Tr>
                  <Td>2</Td>
                  <Td>{dataBack?.koleso_raqam_2 || "-"}</Td>
                  <Td>{dataBack?.koleso_zavod_2 || "-"}</Td>
                  <Td>{dataBack?.mavjud_kod_2 || "-"}</Td>
                </Tr>

                <Tr>
                  <Td>3</Td>
                  <Td>{dataBack?.koleso_raqam_3 || "-"}</Td>
                  <Td>{dataBack?.koleso_zavod_3 || "-"}</Td>
                  <Td>{dataBack?.mavjud_kod_3 || "-"}</Td>
                </Tr>

                <Tr>
                  <Td>4</Td>
                  <Td>{dataBack?.koleso_raqam_4 || "-"}</Td>
                  <Td>{dataBack?.koleso_zavod_4 || "-"}</Td>
                  <Td>{dataBack?.mavjud_kod_4 || "-"}</Td>
                </Tr>

              </Tbody>

            </Table>
          </TableContainer>

        </ModalBody>

      </ModalContent>
    </Modal>
  );
};

ShowBack.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  dataBack: PropTypes.object,
};
