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
import { vu_50_show_head } from "../../../utils/mock_heads";

const Show_VU50_model = ({ isOpen, onClose, showData }) => {
  console.log(showData);
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
        <ModalHeader textAlign={"center"}>VU-50 ko'rinishi</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <TableContainer>
            <Table variant="striped" colorScheme="gray">
              <Tbody>
                <Tr>
                  {vu_50_show_head?.map((item) => (
                    <Td
                      textAlign={"center"}
                      key={item.label}
                      whiteSpace={"pre-wrap"}
                      fontWeight={700}
                    >
                      {item.label}
                    </Td>
                  ))}
                </Tr>

                {showData?.wheel_pairs?.map((item, idx) => (
                  <Tr key={idx}>
                    <Td>{idx + 1}</Td>
                    <Td>{item?.wheel_pair_number}</Td>
                    <Td>{item?.wheel_pair_type}</Td>
                    <Td>{item?.wheels_pair_priice_list}</Td>
                    <Td>{item?.condition_servicable_defects}</Td>
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

export default Show_VU50_model;
