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
import { timeMoment } from "../../../utils/roleTest";

export const ShowReportJurnal = ({ onClose, isOpen, data }) => {

    function isList() {
        if (!Array.isArray(data[0])) data = [data];
        return data[0]?.some(item => {
            return typeof item[Object.keys(item)[1]] === "object" && item[Object.keys(item)[1]]?.length > 2;
        }) || false;
    }

    console.log(data);
    

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
                                {isList() ? (
                                    <>
                                        <Tr>
                                            {data[0].map((item, index) => (
                                                <Td key={index + ".1"}
                                                    textAlign={"center"}
                                                    rowSpan={item?.field_name === "JURNALNING OLD QISMI"
                                                        || item?.field_name === "JURNALNING ORQA QISMI" ? 1 : 2}
                                                    colSpan={item?.field_name === "JURNALNING OLD QISMI"
                                                        || item?.field_name === "JURNALNING ORQA QISMI"
                                                        ? item[Object.keys(item)[1]].length : 1}
                                                >
                                                    {item?.field_name}
                                                </Td>
                                            ))}
                                        </Tr>
                                        <Tr>
                                            {data[0].map(item => {
                                                if (item?.field_name === "JURNALNING OLD QISMI"
                                                    || item?.field_name === "JURNALNING ORQA QISMI") {
                                                    return item[Object.keys(item)[1]].map((item, index) => (
                                                        <Td key={index + ".2"}>{item.field_name}</Td>
                                                    ));
                                                }
                                            })}
                                        </Tr>
                                        <Tr>
                                            {data[0].map((item, index) => {
                                                return item[Object.keys(item)[1]] != null && typeof item[Object.keys(item)[1]] === "object" ?
                                                    item[Object.keys(item)[1]]?.map(item2 => (
                                                        <Td key={index + ".3"}>
                                                            {typeof item2[Object.keys(item2)[1]] === "string" && item2[Object.keys(item2)[1]].endsWith("+05:00")
                                                                ? timeMoment(item2[Object.keys(item2)[1]])?.day
                                                                : item2[Object.keys(item2)[1]]} 
                                                        </Td>
                                                    ))
                                                    : (
                                                        <Td key={index + ".3"}>
                                                            {item[Object.keys(item)[1]] != null && typeof item[Object.keys(item)[1]] === "object"
                                                                ? item?.time != null
                                                                && item?.time[Object.keys(item?.time)[0]] + ":" + item?.time[Object.keys(item?.time)[0]]
                                                                : item[Object.keys(item)[1]] != null
                                                                    ? typeof item[Object.keys(item)[1]] === "string"
                                                                        && item[Object.keys(item)[1]].startsWith("/media/")
                                                                        ? <ImageSignature signatureImage={item[Object.keys(item)[1]]} />
                                                                        : typeof item[Object.keys(item)[1]] === "string"
                                                                            && item[Object.keys(item)[1]].endsWith("+05:00")
                                                                            ? timeMoment(item[Object.keys(item)[1]])?.day
                                                                            : item[Object.keys(item)[1]]
                                                                    : ""}
                                                        </Td>
                                                    )
                                            })}
                                        </Tr>
                                    </>
                                ) : (
                                    <>
                                        <Tr>
                                            {data[0].map((item, index) => (
                                                <Td key={index + ".5"}>{item?.field_name}</Td>
                                            ))}
                                        </Tr>
                                        <Tr>
                                            {data[0].map((item, index) => (
                                                <Td key={index + ".6"}>
                                                    {item[Object.keys(item)[1]] != null && typeof item[Object.keys(item)[1]] === "object"
                                                        ? item?.time != null
                                                        && item?.time[Object.keys(item?.time)[0]] + ":" + item?.time[Object.keys(item?.time)[0]]
                                                        : item[Object.keys(item)[1]] != null
                                                            ? typeof item[Object.keys(item)[1]] === "string"
                                                                && item[Object.keys(item)[1]].startsWith("/media/")
                                                                ? <ImageSignature signatureImage={item[Object.keys(item)[1]]} />
                                                                : typeof item[Object.keys(item)[1]] === "string"
                                                                    && item[Object.keys(item)[1]].endsWith("+05:00")
                                                                    ? timeMoment(item[Object.keys(item)[1]])?.day
                                                                    : item[Object.keys(item)[1]]
                                                            : ""}
                                                </Td>
                                            ))}
                                        </Tr>
                                    </>
                                )}
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
