import {
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
import PropTypes from "prop-types";
import { timeMoment } from "../../../utils/roleTest";

export const AccaptedTable = ({ data, isOpen, onClose }) => {
  const { vu51_rasxod } = data;

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
        <ModalBody style={{ overflow: "auto" }}>
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
            </Thead>
            <Tbody>
              <Tr>
                <Td>{timeMoment(vu51_rasxod?.created_at)?.day}</Td>
                <Td>{vu51_rasxod?.date_of_release_from_repair}</Td>
                <Td>{vu51_rasxod?.date_of_sending}</Td>
                <Td>{vu51_rasxod?.place_of_sending}</Td>
                <Td>{vu51_rasxod?.preservation_number}</Td>
                <Td>{vu51_rasxod?.given_to_wagon}</Td>
                <Td>{vu51_rasxod?.substep_part_diameter}</Td>
                <Td>{vu51_rasxod?.rotation_surface_diameter}</Td>
                <Td>{vu51_rasxod?.hub_thickness}</Td>
                <Td>{vu51_rasxod?.tooth_thickness}</Td>
                <Td>{vu51_rasxod?.prokat}</Td>
                <Td>{vu51_rasxod?.distance_between_wheels}</Td>
                <Td>{vu51_rasxod?.wheel_pair_formation_date_factory_number}</Td>
                <Td>{vu51_rasxod?.full_inspection_and_assembly_of_bushing}</Td>
                <Td>{vu51_rasxod?.current_inspection}</Td>
                <Td>{vu51_rasxod?.wheel_rotation_surface_alignment}</Td>
                <Td>{vu51_rasxod?.wheel_surface_alignment_and_greben_filling}</Td>
                <Td>{vu51_rasxod?.m110_thread_restoration_shaft_neck}</Td>
                <Td>{vu51_rasxod?.thread_restoration_shaft_neck}</Td>
                <Td>
                  {vu51_rasxod?.user_signature_url ? (
                    <Image
                      width={"100px"}
                      src={imageGet(vu51_rasxod?.user_signature_url)}
                    />
                  ) : (
                    <Text as={"p"} color={"teal"}>
                      Imzo qo&#39;yilmagan
                    </Text>
                  )}
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

AccaptedTable.propTypes = {
  data: PropTypes.object,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};