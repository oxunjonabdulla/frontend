import {
  Divider,
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
  Text,
} from "@chakra-ui/react";

import { ImageSignature } from "../../../components";
import { repairTypesName } from "../../../utils";
import { carriage_dalolatnoma_head_show } from "../../../utils/mock_heads";

export const Dalolatnoma_Show = ({ isOpen, onClose, data }) => {
  // If no data → prevent crash
  if (!data) {
    return (
      <Modal isOpen={isOpen} onClose={onClose} size="full" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Dalolatnoma Jurnalini ko‘rish</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text color="gray.500">Ma’lumot yuklanmoqda...</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }

  const front = data?.front_detail || {};

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="full"
      isCentered
      motionPreset="slideInLeft"
    >
      <ModalOverlay backdropFilter="blur(10px) hue-rotate(10deg)" />

      <ModalContent>
        <ModalHeader textAlign="center">
          Dalolatnoma Jurnalini
        </ModalHeader>

        <ModalCloseButton />

        <ModalBody overflow="auto">
          <Table
            borderRadius={10}
            size="sm"
            whiteSpace="pre-wrap"
            variant="striped"
            colorScheme="blackAlpha"
          >
            <Thead bg="#0c6170">
              <Tr>
                {carriage_dalolatnoma_head_show?.map((item) => (
                  <Th
                    textAlign="center"
                    key={item.label}
                    colSpan={item.colspan}
                    color="white"
                  >
                    {item.label}
                  </Th>
                ))}
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td fontWeight={700}>{data?.carriage || "-"}</Td>

                <Td>
                  {repairTypesName(front?.repair_type) || "-"}
                </Td>

                <Td>{front?.yon_raqam_1 || "-"}</Td>
                <Td>{front?.yon_raqam_2 || "-"}</Td>
                <Td>{front?.yon_raqam_3 || "-"}</Td>
                <Td>{front?.yon_raqam_4 || "-"}</Td>

                <Td>{front?.auto_zavod_1 || "-"}</Td>
                <Td>{front?.auto_zavod_2 || "-"}</Td>
                <Td>{front?.auto_zavod_3 || "-"}</Td>
                <Td>{front?.auto_zavod_4 || "-"}</Td>

                <Td>{front?.mavjud_kod_1 || "-"}</Td>
                <Td>{front?.mavjud_kod_2 || "-"}</Td>
                <Td>{front?.mavjud_kod_3 || "-"}</Td>
                <Td>{front?.mavjud_kod_4 || "-"}</Td>

                <Td>
                  Yon №1: {front?.restor_balka_yon_1 || "-"}
                  <Divider my={2} />
                  Yon №2: {front?.restor_balka_yon_2 || "-"}
                </Td>

                <Td>
                  Zavod Tamgasi №1:{" "}
                  {front?.restor_balka_zavod_1 || "-"}
                  <Divider my={2} />
                  Zavod Tamgasi №2:{" "}
                  {front?.restor_balka_zavod_2 || "-"}
                </Td>

                <Td>
                  Mavjudlik Kodi №1: {front?.restor_balka_kod_1 || "-"}
                  <Divider my={2} />
                  Mavjudlik Kodi №2: {front?.restor_balka_kod_2 || "-"}
                </Td>

                <Td>
                  <ImageSignature
                    signatureImage={
                      data?.avto_connector_plumber_signature_user
                    }
                  />
                </Td>

                <Td>
                  <ImageSignature
                    signatureImage={
                      data?.avto_connector_defektospopistr_signature_user
                    }
                  />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
