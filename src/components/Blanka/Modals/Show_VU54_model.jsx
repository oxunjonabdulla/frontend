import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Table,
    TableContainer,
    Tbody,
    Td,
    Tr,
} from "@chakra-ui/react";
import { vu_54 } from "../../../utils/mock_heads";

const Show_VU54_model = ({ isOpen, onClose, showData }) => {
    console.log(showData);
    
    return (
        <Modal
            isOpen={isOpen}
            // w={"100%"}
            onClose={onClose}
            size={["full"]}
        >
            <ModalOverlay backdropFilter="blur(10px) hue-rotate(10deg)" />
            <ModalContent>
                <ModalHeader textAlign={"center"}>VU-50 ko'rinishi</ModalHeader>
                <ModalCloseButton />
                <ModalBody style={{ overflow: "auto" }}>
                    <TableContainer>
                        <Table variant="striped" colorScheme="gray">
                            <Tbody>
                                <Tr>
                                    {vu_54.map((item) => (
                                        <Td
                                            textAlign={"center"}
                                            key={item.label}
                                            whiteSpace={"pre-wrap"}
                                            fontWeight={700}
                                        >
                                            {item.label}
                                        </Td>
                                    ))}
                                </Tr>

                                {showData?.vu54_fields?.map((item, idx) => (
                                    <Tr key={idx}>
                                        <Td>{idx + 1}</Td>
                                        <Td>{item?.wheel_pair_number}</Td>
                                        <Td>{item?.grph_3_4_plus}</Td>
                                        <Td>{item?.vkm_get_new}</Td>
                                        <Td>{item?.vkm_get_depot_new}</Td>
                                        <Td>{item?.not_change_elements}</Td>
                                        <Td>{item?.change_elements}</Td>
                                        <Td>{item?.defective}</Td>
                                        <Td>{item?.is_defect_not_change}</Td>
                                        <Td>{item?.is_defect_change}</Td>
                                        <Td>{item?.grph_11_12_13_plus}</Td>
                                        <Td>{item?.new_elements}</Td>
                                        <Td>{item?.new_point_enter}</Td>
                                        <Td>{item?.new_wheel_enter}</Td>
                                        <Td>{item?.expired_elements_made}</Td>
                                        <Td>{item?.buks_circle_face_repair}</Td>
                                        <Td>{item?.buks_circle_face_repair_not_turn}</Td>
                                        <Td>{item?.three_typeof_wheel_turn}</Td>
                                        <Td>{item?.rolls_gun_repair}</Td>
                                        <Td>{item?.rolls_neeg_with_repair}</Td>
                                        <Td>{item?.rolls_circle_face_repair}</Td>
                                        <Td>{item?.rolls_circle_face_repair_not_turn}</Td>
                                        <Td>{item?.antoher_works}</Td>
                                        <Td>{item?.grph_24_25_28_plus}</Td>
                                        <Td>{item?.after_repair_send_way}</Td>
                                        <Td>{item?.under_carriage_number}</Td>
                                        <Td>{item?.invetor_sended}</Td>
                                        <Td>{item?.vkm_with_changes}</Td>
                                        <Td>{item?.vkm_without_changes}</Td>
                                        <Td>{item?.grph_30_31_32_plus}</Td>
                                        <Td>{item?.is_use}</Td>
                                        <Td>{item?.grph_32_33_34_plus}</Td>
                                        <Td>{item?.do_repair_with_changes}</Td>
                                        <Td>{item?.do_repair_without_changes}</Td>
                                        <Td>{item?.grph_35_36_38_plus}</Td>
                                        <Td>{item?.sheyk_type}</Td>
                                        <Td>{item?.stupid_under_type}</Td>
                                        <Td>{item?.between_type}</Td>
                                        <Td>{item?.resba_is_break}</Td>
                                        <Td>{item?.is_energy_uq}</Td>
                                        <Td>{item?.is_energy_uq}</Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default Show_VU54_model;
