import {
  Divider,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { vu_51 } from "../../../utils/mock_heads";
import { imageGet } from "../../../utils/imageGet";

export const AccaptedTable = ({ data, isOpen, onClose }) => {
  const { accepted_detail } = data;
  return (
    <Modal
      isOpen={isOpen}
      w={"100%"}
      onClose={onClose}
      size={"full"}
      isCentered
      motionPreset="slideInLeft"
    >
      <ModalOverlay backdropFilter="blur(10px) hue-rotate(10deg)" />
      <ModalContent>
        <ModalHeader textAlign={"center"}>
          VU-51 Jurnalini orqa qismi ko&#39;rinsihini
        </ModalHeader>
        <ModalCloseButton />{" "}
        <ModalBody>
          <Table
            borderRadius={10}
            size={"sm"}
            whiteSpace={"pre-wrap"}
            variant={"striped"}
            overflow={"hidden"}
            colorScheme="blackAlpha"
          >
            <Thead bg={"#0c6170"} rounded={10}>
              <Tr>
                {vu_51?.accepted?.headers?.map((item) => (
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
                {vu_51?.accepted?.nestedHeaders?.map((item) => (
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
                {vu_51?.accepted?.nestedDeepHeaders?.map((item) => (
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
            </Thead>
            <Tbody>
              <Tr>
                <Td rowSpan={2} textAlign={"center"} fontSize={"lg"}>
                  {1}
                </Td>

                <Td rowSpan={2}>{accepted_detail?.last_formation}</Td>
                <Td rowSpan={2}>{accepted_detail?.full_inspaction}</Td>
                <Td rowSpan={2}>{accepted_detail?.carriage_using_number}</Td>
                <Td rowSpan={2}>{accepted_detail?.shipped_vchd}</Td>
                <Td rowSpan={2}>{accepted_detail?.referance_number}</Td>
                <Td rowSpan={2}>{accepted_detail?.repair_perfomed}</Td>
                <Td> O`ng</Td>
                <Td> {accepted_detail?.arrow_neck_length_right}</Td>
                <Td> {accepted_detail?.arrow_neck_diametr_right}</Td>
                <Td> {accepted_detail?.neck_stupitsa_type_right}</Td>
                <Td> {accepted_detail?.neck_stupitsa_diametr_right}</Td>
                <Td> {accepted_detail?.shaft_diametr_right}</Td>
                <Td> {accepted_detail?.wheel_thickness_right}</Td>
                <Td> {accepted_detail?.wheel_rolling_right}</Td>
                <Td> {accepted_detail?.wheel_diametr_right}</Td>
                <Td> {accepted_detail?.wheel_distance_between_right}</Td>
                <Td rowSpan={2}>
                  {accepted_detail?.date_of_repair}
                  <Divider my={2} />

                  {accepted_detail?.user_signature_url ? (
                    <Image
                      width={"100px"}
                      src={imageGet(accepted_detail?.user_signature_url)}
                    />
                  ) : (
                    <Text as={"p"} color={"teal"}>
                      Imzo Tadiqlangan
                    </Text>
                  )}
                </Td>
                <Td rowSpan={2}>
                  {accepted_detail?.invited_date}
                  <Divider my={2} />

                  {accepted_detail?.user_signature_url ? (
                    <Image
                      width={"100px"}
                      src={imageGet(accepted_detail?.user_signature_url)}
                    />
                  ) : (
                    <Text as={"p"} color={"teal"}>
                      Imzo Tadiqlangan
                    </Text>
                  )}
                </Td>
              </Tr>

              <Tr>
                <Td> Chap</Td>
                <Td> {accepted_detail?.arrow_neck_length_left}</Td>
                <Td> {accepted_detail?.arrow_neck_diametr_chap}</Td>
                <Td> {accepted_detail?.neck_stupitsa_type_left}</Td>
                <Td> {accepted_detail?.neck_stupitsa_diametr_left}</Td>
                <Td> {accepted_detail?.shaft_diametr_left}</Td>
                <Td> {accepted_detail?.wheel_thickness_left}</Td>
                <Td> {accepted_detail?.wheel_rolling_left}</Td>
                <Td> {accepted_detail?.wheel_diametr_left}</Td>
                <Td> {accepted_detail?.wheel_distance_between_left}</Td>
              </Tr>
            </Tbody>
          </Table>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
