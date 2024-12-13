import { Img, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { vu_90 } from "../../utils/mock_heads";
import { reverseDateFormat } from "../../utils";
import { ImageSignature } from "../ImageSignature";

export const VU_90_Show = ({ isOpen, onClose, data }) => {
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
                    VU-90 Jurnalini ko&#39;rish
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
                                {vu_90?.show?.map((item) => (
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
                                {vu_90?.nestedHeaders?.map((item, idx) => (
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
                            <Tr>
                                {vu_90?.nestedDeepHeaders?.map((item, idx) => (
                                    <Th fontSize={"10px"} key={idx} textAlign={"center"}>
                                        {item?.label}
                                    </Th>
                                ))}
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td rowSpan={2} whiteSpace={"nowrap"}>
                                    {reverseDateFormat(data?.collection_date)}
                                </Td>
                                <Td rowSpan={2}>{data?.wheel_pair}</Td>
                                <Td rowSpan={2}>{data?.wheel_pair_medal}</Td>
                                <Td>O&apos;ng</Td>
                                <Td>{data?.neck_stumb_right_d1}</Td>
                                <Td>{data?.neck_stumb_right_dc1}</Td>
                                <Td>{data?.neck_stumb_right_d2}</Td>
                                <Td>{data?.neck_stumb_right_dc2}</Td>
                                <Td>{data?.neck_stumb_right_d3}</Td>
                                <Td>{data?.neck_stumb_right_dc3}</Td>
                                <Td rowSpan={2}>{data?.part_of_neck}</Td>
                                <Td rowSpan={2}>{data?.large_cone_part}</Td>
                                <Td rowSpan={2}>
                                    <ul>
                                        <li>D4: {data?.labyrinth_ring_d4}</li>
                                        <li>D`4: {data?.labyrinth_ring_dc4}</li>
                                    </ul>
                                </Td>
                                <Td rowSpan={2}>
                                    <ul>
                                        <li>D3: {data?.labyrinth_ring_another_d3}</li>
                                        <li>D`3: {data?.labyrinth_ring_another_dc3}</li>
                                        <li>D4: {data?.labyrinth_ring_another_d4}</li>
                                        <li>D`4: {data?.labyrinth_ring_another_dc4}</li>
                                    </ul>
                                </Td>
                                <Td rowSpan={2}>
                                    <li>Oldi 1: {data?.radial_free_front}</li>
                                    <li>Oldi 2: {data?.radial_free_front1}</li>
                                    <li>Orqa 1: {data?.radial_free_back}</li>
                                    <li>Orqa 2: {data?.radial_free_back1}</li>
                                </Td>
                                <Td>{data?.fasad_buks_d1}</Td>
                                <Td>{data?.fasad_buks_dc1}</Td>
                                <Td>{data?.fasad_buks_d2}</Td>
                                <Td>{data?.fasad_buks_dc2}</Td>
                                <Td rowSpan={2} whiteSpace={"nowrap"}>
                                    <li>Orqa 1: {data?.maded_factory_creating_back}</li>
                                    <li>Orqa 2: {data?.maded_factory_creating_back2}</li>
                                    <li>Orqa 1: {data?.maded_factory_creating_back3}</li>
                                    <li>Orqa 2: {data?.maded_factory_creating_back4}</li>
                                </Td>
                                <Td rowSpan={2} whiteSpace={"nowrap"}>
                                    <li>Orqa 1: {data?.maded_factory_creating_front}</li>
                                    <li>Orqa 2: {data?.maded_factory_creating_front2}</li>
                                    <li>Orqa 1: {data?.maded_factory_creating_front3}</li>
                                    <li>Orqa 2: {data?.maded_factory_creating_front4}</li>
                                </Td>
                                <Td rowSpan={2} whiteSpace={"nowrap"}>
                                    <li> 1: {data?.bushing_clearance}</li>
                                    <li> 2: {data?.bushing_clearance2}</li>
                                    <li> 1: {data?.bushing_clearance3}</li>
                                    <li> 2: {data?.bushing_clearance4}</li>
                                </Td>
                                <Td rowSpan={2} whiteSpace={"nowrap"}>
                                    <li> 1: {data?.next_fasad_vtuk}</li>
                                    <li> 2: {data?.next_fasad_vtuk2}</li>
                                    <li> 1: {data?.next_fasad_vtuk3}</li>
                                    <li> 2: {data?.next_fasad_vtuk4}</li>
                                </Td>
                                <Td rowSpan={2}>{data?.gass_pass_wheel}</Td>
                                <Td rowSpan={2} whiteSpace={"nowrap"}>
                                    <li> 1: {data?.lzsini_1}</li>
                                    <li> 2: {data?.lzsini_2}</li>
                                </Td>
                                <Td rowSpan={2}>Imzo</Td>
                                <Td rowSpan={2}>
                                    <ImageSignature
                                        signatureImage={data?.wheel_signature_user_info?.signature_image}
                                    />
                                </Td>
                                <Td rowSpan={2}>
                                    <ImageSignature
                                        signatureImage={data?.wheel_plumber_user_info?.signature_image}
                                    />
                                </Td>
                                <Td rowSpan={2}>{data?.comment}</Td>
                            </Tr>
                            <Tr>
                                <Td>Chap</Td>
                                <Td>{data?.neck_stumb_left_d1}</Td>
                                <Td>{data?.neck_stumb_left_dc1}</Td>
                                <Td>{data?.neck_stumb_left_d2}</Td>
                                <Td>{data?.neck_stumb_left_dc2}</Td>
                                <Td>{data?.neck_stumb_left_d3}</Td>
                                <Td>{data?.neck_stumb_left_dc3}</Td>
                                <Td>{data?.fasad_buks_d1_1}</Td>
                                <Td>{data?.fasad_buks_dc1_1}</Td>
                                <Td>{data?.fasad_buks_d2_1}</Td>
                                <Td>{data?.fasad_buks_dc2_1}</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};