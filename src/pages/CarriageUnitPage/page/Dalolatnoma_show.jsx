import { Divider, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { ImageSignature } from "../../../components";
import { repairTypesName } from "../../../utils";
import { carriage_dalolatnoma_head_show } from "../../../utils/mock_heads";

export const Dalolatnoma_Show = ({ isOpen, onClose, data }) => {
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
                                {carriage_dalolatnoma_head_show?.map((item) => (
                                    <Th
                                        textAlign={"center"}
                                        key={item.label}
                                        colSpan={item.colspan}
                                    >
                                        {item.label}
                                    </Th>
                                ))}
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td fontWeight={700}>{data?.carriage}</Td>
                                <Td>{repairTypesName(data?.front_detail.repair_type)}</Td>
                                <Td>{data?.front_detail.yon_raqam_1}</Td>
                                <Td>{data?.front_detail.yon_raqam_2}</Td>
                                <Td>{data?.front_detail.yon_raqam_3}</Td>
                                <Td>{data?.front_detail.yon_raqam_4}</Td>
                                <Td>{data?.front_detail.auto_zavod_1}</Td>
                                <Td>{data?.front_detail.auto_zavod_2}</Td>
                                <Td>{data?.front_detail.auto_zavod_3}</Td>
                                <Td>{data?.front_detail.auto_zavod_4}</Td>
                                <Td>{data?.front_detail.mavjud_kod_1}</Td>
                                <Td>{data?.front_detail.mavjud_kod_2}</Td>
                                <Td>{data?.front_detail.mavjud_kod_3}</Td>
                                <Td>{data?.front_detail.mavjud_kod_4}</Td>
                                <Td>
                                    Yon №1: {data?.front_detail.restor_balka_yon_1}
                                    <Divider my={2} />
                                    Yon №2: {data?.front_detail.restor_balka_yon_2}
                                </Td>
                                <Td>
                                    Zavod Tamgasi №1:{" "}
                                    {data?.front_detail.restor_balka_zavod_1}
                                    <Divider my={2} />
                                    Zavod Tamgasi №2:{" "}
                                    {data?.front_detail.restor_balka_zavod_2}
                                </Td>
                                <Td>
                                    Mavjudlik Kodi №1: {data?.front_detail.restor_balka_kod_1}
                                    <Divider my={2} />
                                    Mavjudlik Kodi №2: {data?.front_detail.restor_balka_kod_2}
                                </Td>
                                <Td>
                                    <ImageSignature
                                        signatureImage={data?.avto_connector_plumber_signature_user}
                                    />
                                </Td>
                                <Td>
                                    <ImageSignature
                                        signatureImage={data?.avto_connector_defektospopistr_signature_user}
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