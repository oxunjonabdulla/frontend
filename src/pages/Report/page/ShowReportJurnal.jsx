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
            return typeof item[key(item)] === "object" && item[key(item)]?.length > 2;
        }) || false;
    }

    const key = item => Object.keys(item)[1];

    const tdValue = item => {
        if (item[key(item)] == null) return "";
        // if the type is list and the value is time.
        // target time format
        if (typeof item[key(item)] === "object" && item?.time != null) {
            const firstKey = Object.keys(item?.time)[0];
            return item?.time[firstKey] + ":" + item?.time[firstKey];
        } else {
            if (typeof item[key(item)] === "string") {
                if (item[key(item)].startsWith("/media/")) // if the value is the image address
                    return <ImageSignature signatureImage={item[key(item)]} />;
                else if (item[key(item)].endsWith("+05:00")) // if the value is a date
                    return timeMoment(item[key(item)])?.day;
            }
            return item[key(item)]; // if the value is not a string
        }
    }

    const isBackAndFort = item =>
        item?.field_name === "JURNALNING OLD QISMI"
        || item?.field_name === "JURNALNING ORQA QISMI"
        || item?.field_name === "Taftish Tafsilotlari";

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
                                                    rowSpan={isBackAndFort(item) ? 1 : 2}
                                                    colSpan={isBackAndFort(item) ? item[key(item)].length : 1}
                                                >
                                                    {item?.field_name}
                                                </Td>
                                            ))}
                                        </Tr>
                                        <Tr>
                                            {data[0].map(item => {
                                                if (isBackAndFort(item)) {
                                                    // TODO hali sozlanmagan
                                                    if (item[key(item)].length > 2 && item[key(item)] === "Taftish Tafsilotlari")
                                                        return Object.keys(item[key(item)][0]).map(key =>
                                                            (key != "id" && key != "updated_at")
                                                            && <Td key={key}>{key}</Td>);
                                                    return item[key(item)].map((item, index) => (
                                                        <Td key={index + "-2"}>{item.field_name}</Td>
                                                    ));
                                                }
                                            })}
                                        </Tr>
                                        <Tr>
                                            {data[0].map((item, index) => {
                                                const thValue = item =>
                                                    // Checks if the value is a string and the word ends with +05:00 to format the target hour
                                                    typeof item[key(item)] === "string" && item[key(item)].endsWith("+05:00")
                                                        ? timeMoment(item[key(item)])?.day // if it meets the condition, it formats the clock
                                                        : item[key(item)]; // otherwise, it returns the original value

                                                // scrolling the internal list
                                                const sumList = (item, idx) => item?.map(item2 => {
                                                    // TODO tuliq sozlanmagan 
                                                    return <Td key={idx}>{thValue(item2)}</Td>
                                                });

                                                return item[key(item)] != null && typeof item[key(item)] === "object"
                                                    ? sumList(item[key(item)])
                                                    : (<Td key={index}>{tdValue(item)}</Td>)
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
                                                <Td key={index + ".6"}>{tdValue(item)}</Td>
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
