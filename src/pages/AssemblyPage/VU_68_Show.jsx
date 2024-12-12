import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { ImageSignature } from "../../components";
import { vu_68 } from "../../utils/mock_heads";

export const VU_68_Show = ({ isOpen, onClose, data }) => {
    return (
        <Modal
            isOpen={isOpen}
            w={"100%"}
            onClose={onClose}
            size={["full"]}
            isCentered
            motionPreset="slideInLeft">
            <ModalOverlay backdropFilter="blur(10px) hue-rotate(10deg)" />
            <ModalContent>
                <ModalHeader textAlign={"center"}>
                    VU-68 Jurnalini ko&#39;rish
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody style={{ overflow: "auto" }}>
                    <Table
                        borderRadius={10}
                        size={"sm"}
                        whiteSpace={"pre-wrap"}
                        variant={"striped"}
                        overflow={"hidden"}
                        colorScheme="blackAlpha">
                        <Thead bg={"#0c6170"} rounded={10}>
                            <Tr>
                                {vu_68?.show?.map((item, idx) => (
                                    <Th
                                        fontSize={"10px"}
                                        textAlign={"center"}
                                        key={item.label}
                                        rowSpan={item.rowspan}
                                        colSpan={item.colspan}
                                    >
                                        {item.label}
                                    </Th>
                                ))}
                            </Tr>
                            <Tr>
                                {vu_68?.nestedTwo.map((item, idx) => (
                                    <Th fontSize={"10px"} key={idx} textAlign={"center"}>
                                        {item}
                                    </Th>
                                ))}
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr key={data?.id}>
                                <Td fontWeight={700} color={"green.900"}>
                                    {data?.carriage}
                                </Td>
                                <Td>{data?.stop_remont_date}</Td>
                                <Td>{data?.air_dropper_type}</Td>
                                <Td>{data?.last_remont_stop_date}</Td>
                                <Td>{data?.air_pipe}</Td>
                                <Td>{data?.stop_silindr}</Td>
                                <Td>{data?.cargo}</Td>
                                <Td>{data?.medium}</Td>
                                <Td>{data?.not_cargo}</Td>
                                <Td>{data?.air_test_date}</Td>
                                <Td>
                                    <ImageSignature
                                        signatureImage={data?.author_info?.user_signature_url} />
                                </Td>
                                <Td>
                                    <ImageSignature
                                        signatureImage={data?.collect_workshop_master_signature}
                                    />
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};