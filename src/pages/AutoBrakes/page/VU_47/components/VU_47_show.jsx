import { Divider, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { vu_47 } from "../../../../../utils/mock_heads";
import { timeMoment } from "../../../../../utils/roleTest";
import { reverseDateFormat } from "../../../../../utils";
import { ImageSignature } from "../../../../../components";

export const VU_47_Show = ({ isOpen, onClose, data }) => {
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
                    VU-47 Jurnalini ko&#39;rish
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
                                {vu_47?.show?.map((item) => (
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
                                {vu_47?.nestedHeaders?.map((item, idx) => (
                                    <Th
                                        fontSize={"10px"}
                                        key={idx}
                                        textAlign={"center"}
                                        rowSpan={item.rowspan}
                                        colSpan={item.colspan}
                                    >
                                        {item?.isImg ? (
                                            <Img src={item?.label} w={"80%"} mx={"auto"} />
                                        ) : (
                                            item?.label
                                        )}
                                    </Th>
                                ))}
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td whiteSpace={"nowrap"}>
                                    {reverseDateFormat(data?.front_detail?.date)}
                                </Td>
                                <Td>{data?.front_detail?.device_type}</Td>
                                <Td>{data?.front_detail?.serial_number}</Td>
                                <Td>{data?.front_detail?.charging_time_40}</Td>
                                <Td>{data?.back_detail?.charging_time_40}</Td>
                                <Td>
                                    {data?.front_detail?.slow_release_through_calibrated_orifices}
                                </Td>
                                <Td>{data?.back_detail?.brake_cylinder_fill_time}</Td>
                                <Td>{data?.back_detail?.cylinder_pressure_empty}</Td>
                                <Td>{data?.back_detail?.cylinder_pressure_normal}</Td>
                                <Td>{data?.back_detail?.cylinder_pressure_full}</Td>
                                <Td>{data?.front_detail?.release_time_to_04}</Td>
                                <Td>
                                    <ImageSignature
                                        signatureImage={data?.author_info?.user_signature_url}
                                    />
                                </Td>
                                <Td>{data?.front_detail?.acceptor_signature}</Td>
                                <Td>
                                    <ImageSignature
                                        signatureImage={data?.avtotormoz_signature_image_url}
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