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

import { vu_53 } from "../../../utils/mock_heads";
import UserApi from "../../../Service/module/userModule.api";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SliderMock } from "../../../utils";
import { faBook, faEye, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Deleteted } from "../../Deletete";
import { UseForm } from "../Modals/VU_53_model/UseForm";
import { UseTable } from "./UseTable";


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
  // const { isOpen, onOpen, onClose } = useDisclosure();

  // const handlePageClick = (data) => {
  //   const selectedPage = data.selected;
  //   setCurrentPage(selectedPage);
  // };
  const fetchData = async (page) => {
    setIsLoading(true);
    const { response } = await new UserApi().getVu53All(page);
    console.log(response?.data);
    
    if (response) {
      setIsLoading(false);
      setGettingData(response?.data);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handleDelate = async (carriageID) => {
    const { response } = await new UserApi().deleteVu53Prihod(carriageID);
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
                <Th fontSize={"10px"} colSpan={32} textAlign={"center"}>
                  Qabul
                </Th>
              </Tr>
              <Tr>
                {vu_53?.headers?.map((item) => (
                  <Th
                    fontSize={"10px"}
                    textAlign={"center"}
                    key={item.label}
                    rowSpan={item?.rowspan}
                    colSpan={item?.colspan}
                  >
                    {item.label}
                  </Th>
                ))}
              </Tr>
              <Tr>
                {vu_53?.nestedHeaders?.map((item, idx) => (
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
            </Thead>
            <Tbody>
              {gettingData?.results?.map((e, idx) => (
                <Tr key={e?.id}>
                  <Td>{currentPage * 10 + idx + 1}</Td>
                  <Td fontWeight={700} color={"green.900"}>
                    {e?.carriage}
                  </Td>
                  <Td>{e?.vu53_prihod?.wheel_pair_sostav_1}</Td>
                  <Td>{e?.vu53_prihod?.sobstva_wheel_pair_1}</Td>
                  <Td>{e?.vu53_prihod?.type_wheel_pair_1}</Td>
                  <Td>{e?.vu53_prihod?.date_of_pustupleniya_1}</Td>
                  <Td>{e?.vu53_prihod?.factory_1}</Td>
                  <Td>{e?.vu53_prihod?.vedimis_nomer_1}</Td>
                  <Td>{e?.vu53_prihod?.is_pod_carriage_number_1}</Td>
                  <Td>{e?.vu53_prihod?.repair_type_1}</Td>
                  <Td>{e?.vu53_prihod?.last_repair_date_1}</Td>
                  <Td>{e?.vu53_prihod?.last_repair_punkt_1}</Td>
                  <Td>{e?.vu53_prihod?.buks_montaj_uzel_date_1}</Td>
                  <Td>{e?.vu53_prihod?.buks_montaj_uzel_last_1}</Td>
                  <Td>{e?.vu53_prihod?.obot_pair_date_1}</Td>
                  <Td>Chap ong</Td>
                  <Td>{e?.vu53_prihod?.obot_pair_1}</Td>
                  <Td>{e?.vu53_prihod?.type_buks_1}</Td>
                  <Td>{e?.vu53_prihod?.is_repair_1 ? "Ha " : "Yo'q"}</Td>
                  <Td>{e?.vu53_prihod?.is_repair_newtype_1}</Td>
                  <Td>{e?.vu53_prihod?.is_repair_error_1}</Td>
                  <Td>{e?.vu53_prihod?.katana_diametr_1}</Td>
                  <Td>{e?.vu53_prihod?.tolshnik_obod_1}</Td>
                  <Td>{e?.vu53_prihod?.greb_setting_1}</Td>
                  <Td>{e?.vu53_prihod?.prokat_1}</Td>
                  <Td>{e?.vu53_prihod?.away_obod_1}</Td>
                  <Td>
                    {/* TODO : Plus OR Show */}
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
                  {/* <Td>
                    <IconButton
                      colorScheme="red"
                      onClick={() => handleCheckAndDelete(e?.id)}
                      icon={<FontAwesomeIcon icon={faTrashAlt} />}
                    />
                  </Td> */}
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
