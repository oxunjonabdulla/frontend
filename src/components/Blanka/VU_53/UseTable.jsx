import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { vu_53 } from "../../../utils/mock_heads";
import { timeMoment } from "../../../utils/roleTest";

export const UseTable = ({ data, isOpen, onClose }) => {

  console.log(data);
  

  return (
    <Modal
      isOpen={isOpen}
      w={"100%"}
      onClose={onClose}
      size={"full"}
      isCentered
      motionPreset="slideInTop"
    >
      <ModalOverlay backdropFilter="blur(10px) hue-rotate(10deg)" />
      <ModalContent>
        <ModalHeader textAlign={"center"}>
          VU-51 Jurnalini orqa qismi ko&#39;rinsihini
        </ModalHeader>
        <ModalCloseButton />{" "}
        <ModalBody style={{ overflow: "auto" }}>
          <Table
            borderRadius={10}
            whiteSpace={"pre-wrap"}
            variant={"striped"}
            overflow={"hidden"}
            colorScheme="blackAlpha"
          >
            <Thead bg={"#0c6170"} rounded={10}>
              <Tr>
                <Th colSpan="37" textAlign={"center"} fontSize={"10px"}>
                  IsTemol
                </Th>
              </Tr>
              <Tr>
                {vu_53?.secondHeader &&
                  vu_53?.secondHeader?.map((item, idx) => (
                    <Th
                      fontSize={"10px"}
                      key={idx}
                      textAlign={"center"}
                      rowSpan={item?.rowspan}
                      colSpan={item?.colspan}
                    >
                      {item?.label}
                    </Th>
                  ))}
              </Tr>
              <Tr>
                {vu_53?.secondHeaderNested &&
                  vu_53?.secondHeaderNested?.map((item, idx) => (
                    <Th
                      fontSize={"10px"}
                      key={idx}
                      textAlign={"center"}
                      rowSpan={item?.rowspan}
                      colSpan={item?.colspan}
                    >
                      {item?.label}
                    </Th>
                  ))}
              </Tr>
              <Tr>
                {vu_53?.secondNestedDeepHeadersNext &&
                  vu_53?.secondNestedDeepHeadersNext?.map((item, idx) => (
                    <Th
                      fontSize={"10px"}
                      key={idx}
                      textAlign={"center"}
                      rowSpan={item?.rowspan}
                      colSpan={item?.colspan}
                    >
                      {item?.label}
                    </Th>
                  ))}
              </Tr>
              <Tr>
                {vu_53?.secondDeepHeadersNext &&
                  vu_53?.secondDeepHeadersNext?.map((item, idx) => (
                    <Th fontSize={"10px"} key={idx} textAlign={"center"}>
                      {item?.label}
                    </Th>
                  ))}
              </Tr>

              
            </Thead>
            <Tbody>
              <Tr>
                <Td>{timeMoment(data?.date_of_rasxod_1)?.day}</Td>
              </Tr>
              <Tr>
                <Td>{timeMoment(data?.date_of_rasxod_2)?.day}</Td>
              </Tr>
            </Tbody>
          </Table>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

UseTable.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  data: PropTypes.object,
};