import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { ImageSignature } from "../../../components";
import { mockHeaderCarriage } from "../../../utils/mock_heads";
import { timeMoment } from "../../../utils/roleTest";

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
                    Fraza Jurnalini ko&#39;rish
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
                                    Ma&#39;lumot yozilgan vaqti
                                </Th>
                                <Th
                                    fontSize={"10px"}
                                    textAlign={"center"}
                                    whiteSpace={"pre-wrap"}
                                    rowSpan={"3"}
                                    fontWeight={700}
                                >
                                    Вагон Номер
                                </Th>
                                <Th
                                    fontSize={"10px"}
                                    textAlign={"center"}
                                    whiteSpace={"pre-wrap"}
                                    rowSpan={"3"}
                                    fontWeight={700}
                                >
                                    Mad 3108
                                </Th>
                            </Tr>
                            <Tr>
                                {mockHeaderCarriage?.headers?.map((item) => (
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
                                    Imzo
                                </Th>
                            </Tr>
                            <Tr>
                                {mockHeaderCarriage?.nestedHeaders?.map((item) => (
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
                                <Th textAlign={"center"}></Th>
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
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td
                                    rowSpan={6}
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
                                <Td
                                    rowSpan={6}
                                    height={"100%"}
                                    fontWeight={700}
                                    color={"green"}
                                >
                                    {data?.carriage}
                                </Td>
                                <Td rowSpan={6} textAlign={"center"}>
                                    {data?.mad_3108 ? data?.mad_3108 : "N/A"}
                                </Td>
                                <Td>61</Td>
                                <Td>0</Td>
                                <Td>29</Td>
                                <Td>{data?.c61_code_builder}</Td>
                                <Td>{data?.c61_num_zavod}</Td>
                                <Td>{data?.c61_year_build}</Td>
                                <Td>{data?.c61_num_depo}</Td>
                                <Td>{data?.c61_work_date}</Td>
                                <Td>{data?.c61_work_num}</Td>
                                <Td rowSpan={6}>
                                    <ImageSignature ImageSignature={data?.signature_image_url} />
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>62</Td>
                                <Td>0</Td>
                                <Td>29</Td>
                                <Td>{data?.c62_code_builder}</Td>
                                <Td>{data?.c62_num_zavod}</Td>
                                <Td>{data?.c62_year_build}</Td>
                                <Td>{data?.c62_num_depo}</Td>
                                <Td>{data?.c62_work_date}</Td>
                                <Td>{data?.c62_work_num}</Td>
                            </Tr>
                            <Tr>
                                <Td>71</Td>
                                <Td>0</Td>
                                <Td>29</Td>
                                <Td>{data?.c71_code_builder}</Td>
                                <Td>{data?.c71_num_zavod}</Td>
                                <Td>{data?.c71_year_build}</Td>
                                <Td>{data?.c71_num_depo}</Td>
                                <Td>{data?.c71_work_date}</Td>
                                <Td>{data?.c71_work_num}</Td>
                            </Tr>
                            <Tr>
                                <Td>72</Td>
                                <Td>0</Td>
                                <Td>29</Td>
                                <Td>{data?.c72_code_builder}</Td>
                                <Td>{data?.c72_num_zavod}</Td>
                                <Td>{data?.c72_year_build}</Td>
                                <Td>{data?.c72_num_depo}</Td>
                                <Td>{data?.c72_work_date}</Td>
                                <Td>{data?.c72_work_num}</Td>
                            </Tr>
                            <Tr>
                                <Td>73</Td>
                                <Td>0</Td>
                                <Td>29</Td>
                                <Td>{data?.c73_code_builder}</Td>
                                <Td>{data?.c73_num_zavod}</Td>
                                <Td>{data?.c73_year_build}</Td>
                                <Td>{data?.c73_num_depo}</Td>
                                <Td>{data?.c73_work_date}</Td>
                                <Td>{data?.c73_work_num}</Td>
                            </Tr>
                            <Tr>
                                <Td>74</Td>
                                <Td>0</Td>
                                <Td>29</Td>
                                <Td>{data?.c74_code_builder}</Td>
                                <Td>{data?.c74_num_zavod}</Td>
                                <Td>{data?.c74_year_build}</Td>
                                <Td>{data?.c74_num_depo}</Td>
                                <Td>{data?.c74_work_date}</Td>
                                <Td>{data?.c74_work_num}</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};