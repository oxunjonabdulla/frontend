import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Table,
    Tbody,
    Td,
    Tr
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { ImageSignature } from "../../../components";

export const ShowReportJurnal = ({ onClose, isOpen, data }) => {
    return (
        <Modal
            isOpen={isOpen}
            w={"100%"}
            onClose={onClose}
            size={"6xl"}
            isCentered
            motionPreset="slideInLeft"
        >
            <ModalOverlay backdropFilter="blur(10px) hue-rotate(10deg)" />
            <ModalContent>
                <ModalHeader textAlign={"center"}>Hisobot olish</ModalHeader>
                <ModalCloseButton />
                <ModalBody overflow={"auto"}>
                    <Table variant={"striped"}>
                        {data?.length > 0 &&
                            <Tbody>
                                <Tr>
                                    {data[0].map((item, index) => (
                                        <Td key={index}>{item?.field_name}</Td>
                                    ))}
                                </Tr>
                                <Tr>
                                    {data[0].map((item, index) => (
                                        <Td key={index}>
                                            {item[Object.keys(item)[1]] != null && typeof item[Object.keys(item)[1]] === "object"
                                                ? item?.time != null && item?.time[Object.keys(item?.time)[0]] + ":" + item?.time[Object.keys(item?.time)[0]]
                                                : item[Object.keys(item)[1]] != null
                                                    ? typeof item[Object.keys(item)[1]] === "string" && item[Object.keys(item)[1]].startsWith("/media/users/signature")
                                                        ? <ImageSignature signatureImage={item[Object.keys(item)[1]]} />
                                                        : item[Object.keys(item)[1]]
                                                    : ""}
                                        </Td>
                                    ))}
                                </Tr>
                            </Tbody>
                        }
                    </Table>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="red" mr={3} onClick={onClose}>
                        Yopish
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

ShowReportJurnal.propTypes = {
    onClose: PropTypes.func,
    isOpen: PropTypes.bool,
};
