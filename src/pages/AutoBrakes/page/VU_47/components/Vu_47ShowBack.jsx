import {
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";

import { vu_47, vu_47_show } from "../../../../../utils/mock_heads";
import { useState } from "react";
import { reverseDateFormat } from "../../../../../utils";

export const Vu_47ShowBack = ({ isOpen, onClose, showData }) => {
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
        <ModalHeader mb={3}>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          <Table
            borderRadius={10}
            size={"sm"}
            whiteSpace={"pre-wrap"}
            variant={"striped"}
            overflow={"hidden"}
            colorScheme="blackAlpha"
            shadow={"lg"}
          >
            <Thead bg={"#0c6170"} rounded={10}>
              <Tr>
                {vu_47_show?.map((item) => (
                  <Th
                    fontSize={"10px"}
                    textAlign={"center"}
                    key={item.label}
                    rowSpan={item.rowspan}
                    colSpan={item.colspan}
                  >
                    {item}
                  </Th>
                ))}
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td whiteSpace={"nowrap"}>
                  {reverseDateFormat(showData?.date)}
                </Td>
                <Td>{showData?.device_type}</Td>
                <Td>{showData?.serial_number}</Td>
                <Td>{showData?.charging_time_40}</Td>
                <Td>{showData?.brake_cylinder_fill_time}</Td>
                <Td>{showData?.cylinder_pressure_empty}</Td>
                <Td>{showData?.cylinder_pressure_normal}</Td>
                <Td>{showData?.cylinder_pressure_full}</Td>
                <Td>{showData?.acceptor_signature}</Td>
              </Tr>
            </Tbody>
          </Table>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
