import { Button, CloseButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { vu_91_show } from "../../utils/mock_heads";
import { ImageSignature } from "../ImageSignature";

export const VU_91_Show = ({ isOpen, onClose, data }) => {
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
                    VU-91 Jurnalini ko&#39;rish
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
                                {vu_91_show.map((item, idx) => (
                                    <Th fontSize={"10px"} textAlign={"center"} key={idx}>
                                        {item}
                                    </Th>
                                ))}
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>{data?.seen_date}</Td>
                                <Td>{data?.chartley_model}</Td>
                                <Td>{data?.chartley_made_and_year}</Td>
                                <Td>{data?.chartley_number}</Td>
                                <Td>{data?.defect_appearance}</Td>
                                <Td >
                                    <ImageSignature
                                        signatureImage={data?.user_signature_url}
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
                <ModalFooter>
                    <Button onClick={onClose} colorScheme="red">Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};