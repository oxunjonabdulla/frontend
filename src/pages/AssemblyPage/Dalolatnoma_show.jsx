import { Divider, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { ImageSignature } from "../../components";
import { repairTypesName } from "../../utils";
import { dalolatnoma_head_show } from "../../utils/mock_heads";

export const Dalolatnoma_show = ({ isOpen, onClose, data }) => {
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
                    Dalolatnoma Jurnalini ko&#39;rish
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
                                {dalolatnoma_head_show?.map((item, idx) => (
                                    <Th fontSize={"10px"} textAlign={"center"} key={idx}>
                                        {item.label}
                                    </Th>
                                ))}
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td fontWeight={700}>{data?.carriage}</Td>
                                <Td>{data?.front_detail?.created_act_date}</Td>
                                <Td>{data?.front_detail?.train_number_act}</Td>
                                <Td>{data?.front_detail?.station_act}</Td>
                                <Td>{data?.front_detail?.number_act}</Td>
                                <Td>
                                    {repairTypesName(
                                        data?.front_detail?.telegramma_repair_act
                                    )}
                                </Td>
                                <Td>{data?.front_detail?.carriage_number_act}</Td>
                                <Td>{data?.front_detail?.made_date}</Td>
                                <Td>
                                    Kod: {data?.front_detail?.kod_act} <Divider my={2} />
                                    Tegishli qismi {data?.front_detail?.whom_act}
                                </Td>

                                <Td color={"teal"}>
                                    <ImageSignature
                                        signatureImage={data?.wheel_signature_user_signature}
                                    />
                                </Td>
                                <Td color={"teal"}>
                                    <ImageSignature
                                        signatureImage={data?.traffic_safety_depot_duty_officer_user_signature}
                                    />
                                </Td>
                                <Td color={"teal"}>
                                    <ImageSignature signatureImage={data?.head_vtxkb_user_signature} />
                                </Td>
                                <Td color={"teal"}>
                                    <ImageSignature
                                        signatureImage={data?.receiving_master_user_signature}
                                    />
                                </Td>
                                <Td color={"teal"}>
                                    <ImageSignature
                                        signatureImage={data?.collect_workshop_master_signature}
                                    />
                                </Td>
                                <Td color={"teal"}>
                                    <ImageSignature
                                        signatureImage={
                                            data?.avto_connector_brigadr_or_master_user_signature
                                        }
                                    />
                                </Td>
                                <Td color={"teal"}>
                                    <ImageSignature
                                        signatureImage={data?.deputy_head_signature}
                                    />
                                </Td>
                                <Td color={"teal"}>
                                    <ImageSignature
                                        signatureImage={
                                            data?.aravalar_brigadr_or_master_user_signature
                                        }
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