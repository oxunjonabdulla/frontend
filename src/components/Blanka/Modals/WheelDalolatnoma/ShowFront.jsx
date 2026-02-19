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
  Divider,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

export const ShowFront = ({ isOpen, onClose, dataFront }) => {
  if (!dataFront) return null;

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
          Kirish va chiqish dalolatnomasi g‘ildirak bo‘linmasi OLD tomoni
        </ModalHeader>

        <ModalCloseButton />

        <ModalBody>

          {/* CREATED INFO */}
          {/*<Text fontSize="sm" color="gray.500" mb={3}>*/}
          {/*  Yaratilgan sana: {dataFront?.created_at}*/}
          {/*</Text>*/}

          <Divider mb={4} />

          <TableContainer>
            <Table variant="striped" colorScheme="gray">
              <Tbody>

                <Tr>
                  <Td fontWeight="600">№</Td>
                  <Td fontWeight="600">G‘ildirak juftligi raqami</Td>
                  <Td fontWeight="600">Ishlab chiqarilishi (zavod)</Td>
                  <Td fontWeight="600">Mavjudlik kodi</Td>
                </Tr>

                <Tr>
                  <Td>1</Td>
                  <Td>{dataFront?.koleso_raqam_1 || "-"}</Td>
                  <Td>{dataFront?.koleso_zavod_1 || "-"}</Td>
                  <Td>{dataFront?.mavjud_kod_1 || "-"}</Td>
                </Tr>

                <Tr>
                  <Td>2</Td>
                  <Td>{dataFront?.koleso_raqam_2 || "-"}</Td>
                  <Td>{dataFront?.koleso_zavod_2 || "-"}</Td>
                  <Td>{dataFront?.mavjud_kod_2 || "-"}</Td>
                </Tr>

                <Tr>
                  <Td>3</Td>
                  <Td>{dataFront?.koleso_raqam_3 || "-"}</Td>
                  <Td>{dataFront?.koleso_zavod_3 || "-"}</Td>
                  <Td>{dataFront?.mavjud_kod_3 || "-"}</Td>
                </Tr>

                <Tr>
                  <Td>4</Td>
                  <Td>{dataFront?.koleso_raqam_4 || "-"}</Td>
                  <Td>{dataFront?.koleso_zavod_4 || "-"}</Td>
                  <Td>{dataFront?.mavjud_kod_4 || "-"}</Td>
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
