import {
  Flex,
  IconButton,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";

import { vu_53, vu_53_table } from "../../../utils/mock_heads";
import UserApi from "../../../Service/module/userModule.api";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SliderMock } from "../../../utils";
import { faBook, faEye, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Deleteted } from "../../Deletete";
import { UseForm } from "../Modals/VU_53_model/UseForm";
import { UseTable } from "./UseTable";
import { timeMoment } from "../../../utils/roleTest";


export const InviteTable = () => {
  const [isLoadingFulStatistik, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [gettingData, setGettingData] = useState([]);
  const [delateModal, setDelateModal] = useState(null);
  const [deletedID, setDeleteID] = useState(null);
  const [createBackId, setBackId] = useState(null);
  const [showBack, setShowBackData] = useState({});

  const {
    isOpen: isOpenShowBack,
    onClose: onCloseShowBack,
    onOpen: onOpenShowBack,
  } = useDisclosure();

  const {
    isOpen: isOpenCreate,
    onClose: onCloseCreate,
    onOpen: onOpenCreate,
  } = useDisclosure();
  
  const fetchData = async (page) => {
    setIsLoading(true);
    const { response } = await new UserApi().getVu53All(page);
    if (response) {
      setIsLoading(false);
      setGettingData(response?.data);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handleDelate = async (carriageID) => {
    const { response } = await new UserApi().deleteVu53(carriageID);
    if (response) window.location.reload();
  };

  const handleCheckAndDelete = (deletedID) => {
    setDelateModal(true);
    setDeleteID(deletedID);
  };

  const handleBackCreate = (data) => {
    onOpenCreate();
    setBackId(data);
  };
  const handleShowBack = (data) => {
    onOpenShowBack();
    setShowBackData(data);
  };

  return (
    <>
      {!isLoadingFulStatistik ? (
        gettingData?.results?.length ? (
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
                <Th fontSize={"10px"} colSpan={33} textAlign={"center"}>
                  Qabul
                </Th>
              </Tr>
              {vu_53_table?.map((item, idx) => (
                <Tr key={idx}>
                  {item?.map((e, idx) => (
                    <Th
                      fontSize={"10px"}
                      textAlign={"center"}
                      key={idx}
                      rowSpan={e?.rowspan}
                      colSpan={e?.colspan}
                      style={{ minWidth: "80px" }}
                    >
                      {e?.label}
                    </Th>
                  ))}
                </Tr>
              ))}
            </Thead>
            <Tbody>
              {gettingData?.results?.map((e, idx) => (
                <Tr key={e?.id}>
                  <Td>{currentPage * 10 + idx + 1}</Td>
                  <Td fontWeight={700} color={"green.900"}>
                    {timeMoment(e?.created_at)?.day}
                  </Td>
                  <Td>{e?.vu53_prihod?.wheelset_serial_number}</Td>
                  <Td>{e?.vu53_prihod?.wheelset_owner}</Td>
                  <Td>{e?.vu53_prihod?.wheelset_type}</Td>
                  <Td>{e?.vu53_prihod?.repair_arrival_time}</Td>
                  <Td>{e?.vu53_prihod?.origin_location}</Td>
                  <Td>{e?.vu53_prihod?.transshipment_number}</Td>
                  <Td>{e?.vu53_prihod?.carriage_repair_type}</Td>
                  <Td>{e?.vu53_prihod?.last_assembly_time}</Td>
                  <Td>{e?.vu53_prihod?.last_medium_repair_time}</Td>
                  <Td>{e?.vu53_prihod?.last_medium_repair_location}</Td>
                  <Td>{e?.vu53_prihod?.last_restoration_time_running_part}</Td>
                  <Td>{e?.vu53_prihod?.last_restoration_location_running_part}</Td>
                  <Td>{e?.vu53_prihod?.wheelset_sides}</Td>
                  <Td>{e?.vu53_prihod?.bearing_casing_type}</Td>
                  <Td>{e?.vu53_prihod?.operational_or_faulty}</Td>
                  <Td>{e?.vu53_prihod?.operational_newly_assembled_or_repaired}</Td>
                  <Td>{e?.vu53_prihod?.fault_defect_number_classifier}</Td>
                  <Td>{e?.vu53_prihod?.running_part_diameter}</Td>
                  <Td>{e?.vu53_prihod?.bushing_thickness}</Td>
                  <Td>{e?.vu53_prihod?.rim_thickness}</Td>
                  <Td>{e?.vu53_prihod?.rim_thickness_dimensions}</Td>
                  <Td>{e?.vu53_prihod?.rolling}</Td>
                  <Td>{e?.vu53_prihod?.distance_between_inner_surfaces}</Td>
                  <Td>{e?.vu53_prihod?.repair_time}</Td>
                  <Td>{e?.vu53_prihod?.time_given_to_factory_or_under_wagon}</Td>
                  <Td>{e?.vu53_prihod?.wheelset_sent_location_name}</Td>
                  <Td>{e?.vu53_prihod?.transfer_number}</Td>
                  <Td>{e?.vu53_prihod?.assigned_carriage_number}</Td>
                  <Td>{e?.vu53_prihod?.wagon_repair_type}</Td>
                  <Td>{e?.vu53_prihod?.wheelset_sides2}</Td>
                  <Td>
                    {/* TODO : Plus OR Show btn */}
                    {" "}
                    <Flex gap={2} justifyContent={"center"}>
                      {!e?.vu53_rasxod ? (
                        <Flex justify={"center"} align={"center"} gap={2} m={0}>
                          <Text>Orqa tomonini kiritish:</Text>
                          <IconButton
                            onClick={() => handleBackCreate(e?.id)}
                            colorScheme="messenger"
                            icon={<FontAwesomeIcon icon={faPlus} />}
                          />
                        </Flex>
                      ) : (
                        <Flex justify={"center"} gap={2} m={0}>
                          <IconButton
                            colorScheme="whatsapp"
                              onClick={() => handleShowBack(e?.vu53_rasxod)}
                            icon={<FontAwesomeIcon icon={faEye} />}
                          />
                        </Flex>
                      )}
                      <IconButton
                        colorScheme="red"
                        onClick={() => handleCheckAndDelete(e?.id)}
                        icon={<FontAwesomeIcon icon={faTrashAlt} />}
                      />
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        ) : (
          <Flex align={"center"} flexDir={"column"} my={12} gap={4}>
            <FontAwesomeIcon icon={faBook} fontSize={"70px"} opacity={"0.4"} />
            <Text
              as={"h1"}
              fontWeight={600}
              textAlign={"center"}
              fontSize={"2xl"}
            >
              VU-53 jurnali topilmadi
            </Text>
          </Flex>
        )
      ) : (
        <SliderMock setIsLoading={setIsLoading} />
      )}
      <UseTable
        isOpen={isOpenShowBack}
        onClose={onCloseShowBack}
        data={showBack}
      />
      <UseForm
        isOpen={isOpenCreate}
        onClose={onCloseCreate}
        vu53Id={createBackId}
      />
      <Deleteted
        isOpen={delateModal}
        onClose={setDelateModal}
        carriageNumber={String(deletedID)}
        deletedFunction={handleDelate}
      />
    </>
  );
};
