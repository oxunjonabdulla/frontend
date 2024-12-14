import { Divider, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { vu_93 } from "../../utils/mock_heads";
import { ImageSignature } from "../ImageSignature";

export const VU_93_Show = ({ isOpen, onClose, data }) => {
    return (
        <Modal
            isOpen={isOpen}
            w={"100%"}
            onClose={onClose}
            size={["5xl"]}
            isCentered
            motionPreset="slideInLeft">
            <ModalOverlay backdropFilter="blur(10px) hue-rotate(10deg)" />
            <ModalContent>
                <ModalHeader textAlign={"center"}>
                    VU-93 Jurnalini ko&#39;rish
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
                                {vu_93?.show?.map((item) => (
                                    <Th
                                        textAlign={"center"}
                                        fontSize={"10px"}
                                        key={item.label}
                                        rowSpan={item.rowspan}
                                        colSpan={item.colspan}
                                    >
                                        {item.label}
                                    </Th>
                                ))}
                            </Tr>
                            <Tr>
                                {vu_93?.nestedHeaders?.map((item, idx) => (
                                    <Th fontSize={"10px"} key={idx} textAlign={"center"}>
                                        {item?.label}
                                    </Th>
                                ))}
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>{data?.chartley_rapair_date}</Td>
                                <Td>{data?.chartley_model_chartley_number}</Td>
                                <Td>{data?.made_in}</Td>
                                <Td>{data?.not_allowed}</Td>
                                <Td>{data?.rapair_works}</Td>
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