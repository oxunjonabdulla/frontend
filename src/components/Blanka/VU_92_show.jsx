import { Box, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { vu_92 } from "../../utils/mock_heads";
import { ImageSignature } from "../ImageSignature";

export const VU_92_Show = ({ isOpen, onClose, data }) => {
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
                    VU-92 Jurnalini ko&#39;rish
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
                                {vu_92?.show?.map((item) => (
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
                                {vu_92?.nestedHeaders?.map((item, idx) => (
                                    <Th key={idx} textAlign={"center"}>
                                        {item?.label}
                                    </Th>
                                ))}
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>{data?.inspection_date}</Td>
                                <Td fontWeight={700}>{data?.carriage}</Td>
                                <Td>
                                    <ul>
                                        {data?.inspection_details?.map((item, id) => (
                                            <li key={id}>
                                                {id + 1}.{" "}
                                                <Box as="span" fontWeight={700}>
                                                    {" "}
                                                    {item?.wheel_pair_number}
                                                </Box>
                                            </li>
                                        ))}
                                    </ul>
                                </Td>
                                <Td>
                                    <ul>
                                        {data?.inspection_details?.map((item, id) => (
                                            <li key={id}>
                                                {id + 1}.{" "}
                                                <Box as="span" fontWeight={700}>
                                                    {" "}
                                                    {item?.buttock_parts}
                                                </Box>
                                            </li>
                                        ))}
                                    </ul>
                                </Td>
                                <Td>
                                    <ul>
                                        {data?.inspection_details?.map((item, id) => (
                                            <li key={id}>
                                                {id + 1}.{" "}
                                                <Box as="span" fontWeight={700}>
                                                    {" "}
                                                    {item?.execution_inspection}
                                                </Box>
                                            </li>
                                        ))}
                                    </ul>
                                </Td>
                                <Td>
                                    <ImageSignature
                                        signatureImage={data?.wheel_signature_user_info?.signature_image}
                                    />
                                </Td>
                                <Td>
                                    <ImageSignature
                                        signatureImage={data?.wheel_plumber_user_info?.signature_image}
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