import { Divider, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { ImageSignature } from "../../../../components";
import { reverseDateFormat } from "../../../../utils";
import { vu_36_Show } from "../../../../utils/mock_heads";
import { timeMoment } from "../../../../utils/roleTest";
import { timeClear } from "../../../../utils/timeClear";

export const VU_36_Show = ({ isOpen, onClose, data }) => {
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
                    VU-36 Jurnalini ko&#39;rish
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
                                {vu_36_Show?.nestedHeaders?.map((item, idx) => (
                                    <Th fontSize={"10px"} textAlign={"center"} key={idx}>
                                        {item.label}
                                    </Th>
                                ))}
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td fontWeight={700} color={"green.900"}>
                                    {data?.carriage}
                                </Td>
                                <Td fontWeight={700} color={"green.900"} whiteSpace={"nowrap"}>
                                    <ul>
                                        <li>
                                            Kun: {timeMoment(data?.created_at)?.day} <br />
                                        </li>
                                        <li> Soat:{timeMoment(data?.created_at)?.time}</li>
                                    </ul>
                                </Td>
                                <Td>{data?.yuk_vagon_tamir_turi}</Td>
                                <Td>{data?.bildirish_number}</Td>
                                <Td>
                                    {data?.yuk_vagon_tamir_turi}
                                    <Divider bgColor={"gray.400"} my={2} />
                                    {data?.tamir_turi_kodi}
                                </Td>

                                <Td whiteSpace={"nowrap"}>
                                    {reverseDateFormat(data?.tamir_turi_date)}
                                    <Divider bgColor={"gray.400"} my={2} />
                                    {timeClear(data?.tamir_turi_hour) +
                                        ":" +
                                        timeClear(data?.tamir_turi_minute)}
                                </Td>
                                <Td>
                                    {data?.korxona_tamir_yuli}
                                    <Divider bgColor={"gray.400"} my={2} />
                                    {data?.korxona_kodi}
                                </Td>

                                <Td whiteSpace={"nowrap"}>{data?.ega_kodi}</Td>

                                <Td whiteSpace={"nowrap"}>
                                    {reverseDateFormat(data?.tamir_date)}
                                    <Divider bgColor={"gray.400"} my={2} />
                                    {timeClear(data?.tamir_hour) + ":" + timeClear(data?.tamir_minute)}
                                </Td>

                                <Td>{data?.kod_moder_1}</Td>
                                <Td>{data?.kod_moder_2}</Td>
                                <Td>{data?.kod_moder_3}</Td>
                                <Td>{data?.kod_moder_4}</Td>
                                <Td>
                                    <ImageSignature
                                        signatureImage={data?.receiving_master_user_signature}
                                    />
                                </Td>
                                <Td>
                                    <ImageSignature
                                        signatureImage={data?.technical_control_worker_user_signature}
                                    />
                                </Td>
                                <Td>
                                    <ImageSignature
                                        signatureImage={data?.collect_workshop_master_signature}
                                    />
                                </Td>
                                <Td>
                                    <ImageSignature signatureImage={data?.deputy_head_signature} />
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};