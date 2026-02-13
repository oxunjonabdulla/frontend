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
  Badge,
  Flex,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

export const ShowFront = ({ isOpen, onClose, dataFront }) => {

  const repairTypeMap = {
    dr: { label: "Depo ta’miri", color: "blue" },
    kr: { label: "Kapital ta’mir", color: "green" },
  };

  const repairConf = repairTypeMap[dataFront?.repair_type] || {
    label: dataFront?.repair_type || "-",
    color: "gray",
  };

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
          Kirish va chiqish dalolatnomasi aravalar bo‘linmasi
          ta’mirdan oldingi ma’lumotlar
        </ModalHeader>

        <ModalCloseButton />

        <ModalBody>

          {/* REPAIR TYPE */}
          <Flex justify="center" mb={4}>
            <Badge colorScheme={repairConf.color} fontSize="0.9rem" px={3} py={1}>
              {repairConf.label}
            </Badge>
          </Flex>

          <TableContainer>
            <Table variant="striped" colorScheme="gray">
              <Tbody>

                {/* HEADER ROW */}
                <Tr fontWeight="bold">
                  <Td>№</Td>
                  <Td>Yon rama raqami</Td>
                  <Td>Ishlab chiqarilishi, zavod tamg’asi</Td>
                  <Td>Mavjudlik kodi</Td>
                </Tr>

                {/* MAIN ROWS */}
                {[1, 2, 3, 4].map((i) => (
                  <Tr key={i}>
                    <Td>{i}</Td>
                    <Td>{dataFront?.[`yon_raqam_${i}`]}</Td>
                    <Td>{dataFront?.[`auto_zavod_${i}`]}</Td>
                    <Td>{dataFront?.[`mavjud_kod_${i}`]}</Td>
                  </Tr>
                ))}

                {/* SECTION TITLE */}
                <Tr>
                  <Td colSpan={4} textAlign="center" fontWeight="600">
                    Ressor usti balkasi
                  </Td>
                </Tr>

                {/* RESTOR ROWS */}
                {[1, 2].map((i) => (
                  <Tr key={`restor-${i}`}>
                    <Td>{i}</Td>
                    <Td>{dataFront?.[`restor_balka_yon_${i}`]}</Td>
                    <Td>{dataFront?.[`restor_balka_zavod_${i}`]}</Td>
                    <Td>{dataFront?.[`restor_balka_kod_${i}`]}</Td>
                  </Tr>
                ))}

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
