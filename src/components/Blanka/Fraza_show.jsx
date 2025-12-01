import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { mockHeaderFraza } from "../../utils/mock_heads";
import { timeMoment } from "../../utils/roleTest";
import { ImageSignature } from "../ImageSignature";

export const Fraza_show = ({ isOpen, onClose, data }) => {
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
                                <Th
                                    fontSize={"10px"}
                                    textAlign={"center"}
                                    whiteSpace={"pre-wrap"}
                                    rowSpan={"3"}
                                    fontWeight={700}
                                >
                                    Вагон Номер
                                </Th>
                            </Tr>
                            <Tr>
                                {mockHeaderFraza?.headers?.map((item) => (
                                    <Th
                                        fontSize={"10px"}
                                        textAlign={"center"}
                                        key={item.label}
                                        whiteSpace={"pre-wrap"}
                                        rowSpan={item.rowspan}
                                        fontWeight={700}
                                        colSpan={item.colspan}
                                    >
                                        {item.label}
                                    </Th>
                                ))}
                                <Th rowSpan={3} textAlign={"center"}>
                                    Qabul qiluvchi imzosi
                                </Th>
                                <Th rowSpan={3}>Ma&#39;lumot yozilgan vaqti</Th>
                            </Tr>
                            <Tr>
                                {mockHeaderFraza?.nestedHeaders?.map((item) => (
                                    <Th
                                        fontSize={"10px"}
                                        fontWeight={700}
                                        textAlign={"center"}
                                        whiteSpace={"pre-wrap"}
                                        key={item.label}
                                        rowSpan={item.rowspan}
                                        colSpan={item.colspan}
                                    >
                                        {item.label}
                                    </Th>
                                ))}
                            </Tr>
                            <Tr>
                                <Th textAlign={"center"}></Th>
                                <Th textAlign={"center"}>1</Th>
                                <Th textAlign={"center"}>2</Th>
                                <Th textAlign={"center"}>3</Th>
                                <Th textAlign={"center"}>4</Th>
                                <Th textAlign={"center"}>5</Th>
                                <Th textAlign={"center"}>6</Th>
                                <Th textAlign={"center"}>7</Th>
                                <Th textAlign={"center"}>8</Th>
                                <Th textAlign={"center"}>9</Th>
                                <Th textAlign={"center"}>10</Th>
                                <Th textAlign={"center"}>11</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td
                                    rowSpan={4}
                                    height={"100%"}
                                    fontWeight={700}
                                    color={"green"}
                                >
                                    {data?.carriage}
                                </Td>
                                <Td>51</Td>
                                <Td>0</Td>
                                <Td>29</Td>
                                <Td>{data?.c51_code_builder}</Td>
                                <Td>{data?.c51_num_zavod}</Td>
                                <Td>{data?.c51_year_build}</Td>
                                <Td>{data?.c51_num_depo}</Td>
                                <Td>{data?.c51_work_date}</Td>
                                <Td>{data?.c51_work_num}</Td>
                                <Td>{data?.c51_left_wheel}</Td>
                                <Td>{data?.c51_right_wheel}</Td>
                                <Td rowSpan={4}>
                                    <ImageSignature signatureImage={data?.wheel_signature_user_info?.signature_image} />
                                </Td>
                                <Td
                                    rowSpan={4}
                                    fontWeight={700}
                                    color={"green.900"}
                                    whiteSpace={"nowrap"}
                                >
                                    <ul>
                                        <li>
                                            Kun: {timeMoment(data?.created_at)?.day} <br />
                                        </li>
                                        <li> Soat:{timeMoment(data?.created_at)?.time}</li>
                                    </ul>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>52</Td>
                                <Td>0</Td>
                                <Td>29</Td>
                                <Td>{data?.c52_code_builder}</Td>
                                <Td>{data?.c52_num_zavod}</Td>
                                <Td>{data?.c52_year_build}</Td>
                                <Td>{data?.c52_num_depo}</Td>
                                <Td>{data?.c52_work_date}</Td>
                                <Td>{data?.c52_work_num}</Td>
                                <Td>{data?.c52_left_wheel}</Td>
                                <Td>{data?.c52_right_wheel}</Td>
                            </Tr>
                            <Tr>
                                <Td>53</Td>
                                <Td>0</Td>
                                <Td>29</Td>
                                <Td>{data?.c53_code_builder}</Td>
                                <Td>{data?.c53_num_zavod}</Td>
                                <Td>{data?.c53_year_build}</Td>
                                <Td>{data?.c53_num_depo}</Td>
                                <Td>{data?.c53_work_date}</Td>
                                <Td>{data?.c53_work_num}</Td>
                                <Td>{data?.c53_left_wheel}</Td>
                                <Td>{data?.c53_right_wheel}</Td>
                            </Tr>
                            <Tr>
                                <Td>54</Td>
                                <Td>0</Td>
                                <Td>29</Td>
                                <Td>{data?.c54_code_builder}</Td>
                                <Td>{data?.c54_num_zavod}</Td>
                                <Td>{data?.c54_year_build}</Td>
                                <Td>{data?.c54_num_depo}</Td>
                                <Td>{data?.c54_work_date}</Td>
                                <Td>{data?.c54_work_num}</Td>
                                <Td>{data?.c54_left_wheel}</Td>
                                <Td>{data?.c54_right_wheel}</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};