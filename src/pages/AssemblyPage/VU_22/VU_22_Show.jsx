import { Badge, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Table, Tbody, Td, Th, Thead, Tooltip, Tr } from "@chakra-ui/react";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ImageSignature } from "../../../components";
import { reverseDateFormat } from "../../../utils";
import { vu_22_assabmle_show } from "../../../utils/mock_heads";
import { timeClear } from "../../../utils/timeClear";


export const VU_22_Show = ({ isOpen, onClose, data }) => {
    const data_array_compaltes = [
        {
            data_check: data?.wheel_data,
            title: "G'ildirak bo'limi",
        },
        {
            data_check: data?.avtotomoz_data,
            title: "Avtotomoz bo'limi",
        },
        {
            data_check: data?.aravalar_data,
            title: "Aravalar bo'limi",
        },
        {
            data_check: data?.avtobirikma_data,
            title: "Avtobirikma bo'limi",
        },
        {
            data_check: data?.collect_data,
            title: "Yig'uv bo'limi",
        },
    ];

    return (
        <Modal
            isOpen={isOpen}
            w={"100%"}
            onClose={onClose}
            size={["6xl"]}
            isCentered
            motionPreset="slideInLeft">
            <ModalOverlay backdropFilter="blur(10px) hue-rotate(10deg)" />
            <ModalContent>
                <ModalHeader textAlign={"center"}>
                    VU-22 Jurnalini ko&#39;rish
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
                                {vu_22_assabmle_show?.map((item, idx) => (
                                    <Th fontSize={"10px"} textAlign={"center"} key={idx}>
                                        {item.label}
                                    </Th>
                                ))}
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr key={data?.id}>
                                <Td fontWeight={"bold"}>{data?.carriage}</Td>
                                <Td>{data?.carrying_capacity}</Td>
                                <Td>{data?.cladding_material}</Td>
                                <Td>{data?.place_last_repair}</Td>
                                <Td>{reverseDateFormat(data?.date_last_repair)}</Td>
                                <Td>
                                    {reverseDateFormat(data?.date_of_repair)}
                                    <br />
                                    {timeClear(data?.hour_of_repair) +
                                        ":" +
                                        timeClear(data?.minute_of_repair)}
                                </Td>
                                <Td>
                                    {reverseDateFormat(data?.repair_completion_date)}
                                    <br />
                                    {timeClear(data?.repair_completion_hour) +
                                        ":" +
                                        timeClear(data?.repair_completion_minute)}
                                </Td>
                                <Td>
                                    <Stack align="flex-start">
                                        {data_array_compaltes.map((e) => {
                                            let checkIsHave = e?.data_check?.length;

                                            return (
                                                <Tooltip
                                                    key={e.title}
                                                    placement="auto-start"
                                                    colorScheme="red"
                                                    label={
                                                        !checkIsHave
                                                            ? "To'ldirilmagan"
                                                            : "To'ldirilgan"
                                                    }
                                                >
                                                    <Badge
                                                        cursor={"pointer"}
                                                        variant="solid"
                                                        borderRadius={"10px"}
                                                        padding={"5px 10px"}
                                                        colorScheme={checkIsHave ? "green" : "red"}
                                                    >
                                                        <FontAwesomeIcon
                                                            style={{ margin: "0 5px" }}
                                                            icon={checkIsHave ? faCheck : faX}
                                                        />
                                                        {e.title}
                                                    </Badge>
                                                </Tooltip>
                                            );
                                        })}
                                    </Stack>
                                </Td>
                                <Td>
                                    <ImageSignature signatureImage={data?.author_info?.user_signature_url} />
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose} colorScheme="red">Yopish</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};