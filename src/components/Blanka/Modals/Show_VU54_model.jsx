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
import { vu_54, vu_54_keys } from "../../../utils/mock_heads";

const Show_VU54_model = ({ isOpen, onClose, showData }) => {
    console.log(showData);
    
    return (
        <Modal
            isOpen={isOpen}
            // w={"100%"}
            onClose={onClose}
            size={["full"]}
        >
            <ModalOverlay backdropFilter="blur(10px) hue-rotate(10deg)" />
            <ModalContent>
                <ModalHeader textAlign={"center"}>VU-50 ko'rinishi</ModalHeader>
                <ModalCloseButton />
                <ModalBody style={{ overflow: "auto" }}>
                    <TableContainer>
                        <Table variant="striped" colorScheme="gray">
                            <Tbody>
                                <Tr>
                                    {vu_54.map((item) => (
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

                                {showData?.vu54_fields?.map((item, idx) => (
                                    <Tr key={idx}>
                                        <Td>{idx + 1}</Td>
                                        {vu_54_keys.map((item2, idx) => (
                                            <Td key={idx}>{item[item2]}</Td>
                                        ))}
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

export default Show_VU54_model;
