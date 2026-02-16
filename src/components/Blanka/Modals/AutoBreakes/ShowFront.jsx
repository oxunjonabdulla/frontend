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


export const ShowFront = ({ isOpen, onClose, dataFront }) => {

  // ✅ If no data yet → safe render
  if (!dataFront) {
    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size="lg"
      >
        <ModalOverlay />

        <ModalContent>

          <ModalHeader textAlign="center">
            Ma’lumot yuklanmoqda...
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody textAlign="center" py={10}>
            <Text color="gray.500">
              Ma’lumot mavjud emas
            </Text>
          </ModalBody>

        </ModalContent>

      </Modal>
    );
  }


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
          Kirish va chiqish dalolatnomasi avtobirikma bo‘linmasi old tomoni
        </ModalHeader>

        <ModalCloseButton />


        <ModalBody>

          <TableContainer>

            <Table variant="striped" colorScheme="gray">

              <Tbody>

                {/* HEADER */}
                <Tr>
                  <Td>№</Td>
                  <Td>Avtobirikma raqami</Td>
                  <Td>Zavod tamg‘asi</Td>
                  <Td>Mavjudlik kodi</Td>
                </Tr>


                {/* ROW 1 */}
                <Tr>
                  <Td>1</Td>
                  <Td>{dataFront?.auto_number_1 || "-"}</Td>
                  <Td>{dataFront?.auto_zavod_1 || "-"}</Td>
                  <Td>{dataFront?.mavjud_kod_1 || "-"}</Td>
                </Tr>


                {/* ROW 2 */}
                <Tr>
                  <Td>2</Td>
                  <Td>{dataFront?.auto_number_2 || "-"}</Td>
                  <Td>{dataFront?.auto_zavod_2 || "-"}</Td>
                  <Td>{dataFront?.mavjud_kod_2 || "-"}</Td>
                </Tr>


                {/* SECTION */}
                <Tr>
                  <Td colSpan={4} textAlign="center" fontWeight="600">
                    Tortish apparati
                  </Td>
                </Tr>


                {/* TORTISH 1 */}
                <Tr>
                  <Td>1</Td>
                  <Td>{dataFront?.tortish_auto_number_1 || "-"}</Td>
                  <Td>{dataFront?.tortish_auto_zavod_1 || "-"}</Td>
                  <Td>{dataFront?.tortish_mavjud_kod_1 || "-"}</Td>
                </Tr>


                {/* TORTISH 2 */}
                <Tr>
                  <Td>2</Td>
                  <Td>{dataFront?.tortish_auto_number_2 || "-"}</Td>
                  <Td>{dataFront?.tortish_auto_zavod_2 || "-"}</Td>
                  <Td>{dataFront?.tortish_mavjud_kod_2 || "-"}</Td>
                </Tr>

              </Tbody>

            </Table>

          </TableContainer>

        </ModalBody>

      </ModalContent>

    </Modal>
  );
};


ShowFront.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  dataFront: PropTypes.object,
};
