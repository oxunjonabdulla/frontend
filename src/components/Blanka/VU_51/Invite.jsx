import {
  Flex,
  IconButton,
  Image,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";

import { vu_51 } from "../../../utils/mock_heads";
import { useState } from "react";
import UserApi from "../../../Service/module/userModule.api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { imageGet } from "../../../utils/imageGet";
import PropTypes from "prop-types";
import { Deleteted } from "../../Deletete";
import { AccaptedTable } from "./Accepted";
import { Acepted } from "../Modals/VU_51_model/Acepted";
import { timeMoment } from "../../../utils/roleTest";

export const InviteTable = ({ data }) => {
  const [getTableData, setGetinfTableData] = useState(null);
  const [delateModal, setDelateModal] = useState(false);

  const [updateBack, setBackId] = useState(null);
  const [showBack, setShowBackData] = useState({});
  const {
    isOpen: isOpenShowBack,
    onClose: onCloseShowBack,
    onOpen: onOpenShowBack,
  } = useDisclosure();

  const {
    isOpen: isOpenUpdate,
    onClose: onCloseUpdate,
    onOpen: onOpenUpdate,
  } = useDisclosure();
  
  const handleCheckAndDelete = (deletedID) => {
    setDelateModal(true);
    setGetinfTableData(deletedID);
  };

  const handleDelate = async () => {
    const { response } = await new UserApi().delVu51(getTableData?.id);
    if (response) {
      window.location.reload();
    }
  };

  const handleBackUpdate = (data) => {
    onOpenUpdate();
    setBackId(data);
  };
  const handleShowBack = (data) => {
    onOpenShowBack();
    setShowBackData(data);
  };

  const isAccepted = data => {
    for (const k in data) if (k !== 'id' && k !== 'uuid' && data[k] !== null) return true;
    return false;
  };

  return (
    <>
      {" "}
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
            {vu_51?.invite?.headers?.map((item) => (
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
          {data?.map((item, idx) => {
            const { vu51_prihod } = item;
            return (
              <Tr key={item.id}>
                <Td textAlign={"center"} fontSize={"lg"}>{idx + 1}</Td>
                <Td>{vu51_prihod?.serial_number}</Td>
                <Td>{timeMoment(vu51_prihod?.created_at)?.day}</Td>
                <Td>{vu51_prihod?.wagon_depot_factory}</Td>
                <Td>{vu51_prihod?.depo_text}</Td>
                <Td>{vu51_prihod?.code}</Td>
                <Td>{vu51_prihod?.wheel_pair_number}</Td>
                <Td>{timeMoment(vu51_prihod?.accepted_date)?.day}</Td>
                <Td>{vu51_prihod?.last_formulation}</Td>
                <Td>{vu51_prihod?.last_full_check_and_assembly}</Td>
                <Td>{vu51_prihod?.last_rotational_surface_aligned}</Td>
                <Td>{vu51_prihod?.axle_bearing_seat_diameter}</Td>
                <Td>{vu51_prihod?.flange_thickness}</Td>
                <Td>{vu51_prihod?.rib_thickness}</Td>
                <Td>{vu51_prihod?.rib_inclination}</Td>
                <Td>{vu51_prihod?.prokat}</Td>
                <Td>{vu51_prihod?.distance_between_wheels}</Td>
                <Td>{vu51_prihod?.arrival_place}</Td>
                <Td>{vu51_prihod?.preservation_number}</Td>
                <Td>{vu51_prihod?.wheel_pair_extracted_from_wagon_number}</Td>
                <Td>{vu51_prihod?.wagon_repair_type}</Td>
                <Td>{vu51_prihod?.is_newly_assembled_or_repaired}</Td>
                <Td>{vu51_prihod?.fault_number_classified}</Td>
                <Td>{vu51_prihod?.adjustment}</Td>
                <Td>{vu51_prihod?.defect}</Td>
                <Td>{vu51_prihod?.axle_housing_type}</Td>
                <Td>
                  {item?.wheel_signature_user_signature ? (
                    <Image
                      width={"100px"}
                      src={imageGet(item?.wheel_signature_user_signature)}
                    />
                  ) : (
                    <Text as={"p"} color={"teal"}>
                      Imzo tasdiqlangan
                    </Text>
                  )}
                </Td>
                <Td>
                  {" "}
                  <Flex gap={2} justifyContent={"center"} padding={2}>
                    {!isAccepted(item?.vu51_rasxod) ? (
                      <Flex justify={"center"} align={"center"} gap={2} m={0}>
                        <IconButton
                          onClick={() => handleBackUpdate(item)}
                          colorScheme="messenger"
                          icon={<FontAwesomeIcon icon={faPlus} />}
                        />
                      </Flex>
                    ) : (
                      <Flex justify={"center"} gap={2} m={0}>
                        <IconButton
                          colorScheme="whatsapp"
                          onClick={() => handleShowBack(item)}
                          icon={<FontAwesomeIcon icon={faEye} />}
                        />
                      </Flex>
                    )}
                    <IconButton
                      colorScheme="red"
                      onClick={() => handleCheckAndDelete(item)}
                      icon={<FontAwesomeIcon icon={faTrashAlt} />}
                    />
                  </Flex>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <Acepted
        isOpen={isOpenUpdate}
        onClose={onCloseUpdate}
        accaptedData={updateBack}
      />
      <AccaptedTable
        isOpen={isOpenShowBack}
        onClose={onCloseShowBack}
        data={showBack}
      />
      <Deleteted
        isOpen={delateModal}
        onClose={setDelateModal}
        carriageNumber={String(getTableData?.id)}
        deletedFunction={handleDelate}
      />
    </>
  );
};

InviteTable.propTypes = {
  data: PropTypes.array,
};
