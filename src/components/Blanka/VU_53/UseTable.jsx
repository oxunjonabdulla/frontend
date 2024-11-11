import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Table, Tbody, Td, Thead, Tr } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { vu_53_form2, vu_53_form_second2 } from "../../../utils/mock_heads";
import { timeMoment } from "../../../utils/roleTest";
import { useEffect, useState } from "react";
import { ImageSignature } from "../../ImageSignature";

export const UseTable = ({ data, isOpen, onClose }) => {

  const [vu53Table, setVu53Table] = useState([]);

  useEffect(() => {
    setVu53Table([]);
    setVu53Table([
      [{ label: "Kiritilgan vaqti", rowspan: 5 }, ...vu_53_form_second2[0]],
      ...vu_53_form_second2.slice(1)
    ]);
  }, []);

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
              {vu53Table?.map((list, idx) => ( // lists
                <Tr key={idx}>
                  {list?.map((item, idx) => ( // objects
                    <Td
                      fontSize={"15px"}
                      key={idx}
                      textAlign={"center"}
                      rowSpan={item?.rowspan}
                      colSpan={item?.colspan}
                      whiteSpace={"pre-wrap"}
                      style={{ minWidth: "150px", color: "white" }}
                    >
                      {item?.label}
                    </Td>
                  ))}
                </Tr>
              ))}

            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  {timeMoment(data?.created_at)?.day}
                </Td>
                {vu_53_form2.map((item, idx) => (
                  <Td key={idx}>{data[item?.key]}</Td>
                ))}
                <Td>
                  <ImageSignature
                    signatureImage={data?.wheel_signature_user_info?.signature_image}
                  />
                </Td>
                <Td>
                  <ImageSignature
                    signatureImage={data?.provided_wheel_signature_user_info?.signature_image}
                  />
                </Td>
                <Td>{data?.comment}</Td>
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