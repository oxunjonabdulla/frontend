import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import {
  faBook,
  faEye,
  faPlus,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { repairTypesName, SliderMock } from "../../utils";
import { Dalolatnoma_Model } from "./Modals/Dalolatnoma/Dalolatnoma_Model";
import { dalolatnoma_head } from "../../utils/mock_heads";
import UserApi from "../../Service/module/userModule.api";
import { Orqa } from "./Modals/Dalolatnoma/Orqa";
import ShowBack from "./Modals/Dalolatnoma/ShowBack";
import { Deleteted } from "../Deletete";
import { useDebounce } from "../../hooks/useDebounce";
import { Pagination } from "../pagination/Pagination";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { Update_Dalolatnoma } from "./Modals/Dalolatnoma/UpdateDalolatnoma";
import { Dalolatnoma_show } from "../../pages/AssemblyPage/Dalolatnoma_show";
import { IsImzo } from "../IsImzo";

export const Dalolatnoma = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isOPenBack,
    onClose: onCloseBack,
    onOpen: onOpenBack,
  } = useDisclosure();
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
  const {
    isOpen: isOpenShowAll,
    onClose: onCloseShowAll,
    onOpen: onOpenShowAll,
  } = useDisclosure();
  const [isLoadingData, setIsLoading] = useState(true);
  const [deletedId, setDeletedId] = useState(null);
  const [delateModal, setDelateModal] = useState(false);
  const [updateData, setUpdateData] = useState(null);

  const [currentPage, setCurrentPage] = useState(0);
  const [gettingData, setGettingData] = useState([]);
  const [backId, setBackId] = useState(0);
  const [showBack, setShowBackData] = useState(0);

  const [searchValue, setSearchValue] = useState(null);
  const carriageSerach = useDebounce(searchValue);
  const [showAllData, setShowAllData] = useState(null);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };
  const handleShowAll = (data) => {
    onOpenShowAll();
    setShowAllData(data);
  };
  const handleBack = (data) => {
    onOpenBack();
    setBackId(data);
  };
  const handleShowBack = (data) => {
    onOpenShowBack();
    setShowBackData(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const paramsPage = {
        page: currentPage + 1,
        ...(carriageSerach && { search: carriageSerach }),
      };
      setIsLoading(true);
      const { response } = await new UserApi().getALlCollectAct(paramsPage);
      if (response) {
        setIsLoading(false);
        setGettingData(response?.data);
      }
    };
    fetchData();
  }, [currentPage, carriageSerach]);

  const handleCheckAndDelete = (deletedID) => {
    setDelateModal(true);
    setDeletedId(deletedID?.carriage);
  };
  const handleCheckAndUpdate = (data) => {
    onOpenUpdate(true);
    setUpdateData(data);
  };

  const handleDelate = async (carriageID) => {
    const { response } = await new UserApi().deleteAct(carriageID);
    if (response) {
      window.location.reload();
    }
  };

  return (
    <Box
      as="div"
      bg={"#ffff"}
      my={8}
      mx="auto"
      rounded={"lg"}
      position={"relative"}
    >
      <Heading as={"h3"} size={"lg"} mb={5} textAlign={"center"}>
        Кириш ва чиқиш далолатномаси
      </Heading>
      <Button
        borderRadius={"50%"}
        colorScheme="teal"
        width={"50px"}
        height={"50px"}
        position={"absolute"}
        right={3}
        top={-12}
        onClick={onOpen}
      >
        +
      </Button>
      <Box my={3}>
        <FormControl w={"250px"}>
          <FormLabel>Vagon nomer bo&apos;yicha qidirish</FormLabel>
          <Input
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Vagon Raqami Yozing"
            borderColor={"gray.600"}
            type="text"
          />
        </FormControl>
      </Box>
      {!isLoadingData ? (
        gettingData?.results?.length ? (
          <TableContainer p={4} border={"1px solid #eeeee"}>
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
                  {dalolatnoma_head?.map((item) => (
                    <Th textAlign={"center"} key={item.label}>
                      {item.label}
                    </Th>
                  ))}
                  <Th textAlign={"center"}>Aravalar brigadiri imzosi</Th>
                  <Th textAlign={"center"}>Orqa qismi statusi</Th>
                  <Th colSpan={2}></Th>
                </Tr>
              </Thead>
              <Tbody>
                {gettingData?.results?.map((item, idx) => (
                  <Tr key={item.carriage}>
                    <Td>{currentPage * 10 + idx + 1}</Td>
                    <Td fontWeight={700}>{item.carriage}</Td>
                    <Td>{item?.front_detail?.created_act_date}</Td>
                    <Td>{item?.front_detail?.train_number_act}</Td>
                    <Td>{item?.front_detail?.station_act}</Td>
                    <Td>{item?.front_detail?.number_act}</Td>
                    <Td>
                      {repairTypesName(
                        item?.front_detail?.telegramma_repair_act
                      )}
                    </Td>
                    <Td>{item?.front_detail?.carriage_number_act}</Td>
                    <Td>{item?.front_detail?.made_date}</Td>
                    <Td>
                      Kod: {item?.front_detail?.kod_act} <Divider my={2} />
                      Tegishli qismi {item?.front_detail?.whom_act}
                    </Td>

                    <Td color={"teal"}>
                      <IsImzo isImzo={item?.wheel_signature_user_signature} />
                    </Td>
                    <Td color={"teal"}>
                      <IsImzo isImzo={item?.traffic_safety_depot_duty_officer_user_signature} />
                    </Td>
                    <Td color={"teal"}>
                      <IsImzo isImzo={item?.head_vtxkb_user_signature} />
                    </Td>
                    <Td color={"teal"}>
                      <IsImzo isImzo={item?.receiving_master_user_signature} />
                    </Td>
                    <Td color={"teal"}>
                      <IsImzo isImzo={item?.collect_workshop_master_signature} />
                    </Td>
                    <Td color={"teal"}>
                      <IsImzo isImzo={item?.avto_connector_brigadr_or_master_user_signature} />
                    </Td>
                    <Td color={"teal"}>
                      <IsImzo isImzo={item?.deputy_head_signature} />
                    </Td>
                    <Td color={"teal"}>
                      <IsImzo isImzo={item?.aravalar_brigadr_or_master_user_signature} />
                    </Td>
                    <Td color={"teal"}>
                      {!item?.back_detail ? (
                        <Flex justify={"center"} align={"center"} gap={2} m={0}>
                          <Text>Orqa tomonini kiritish:</Text>
                          <IconButton
                            onClick={() => handleBack(item?.carriage)}
                            colorScheme="messenger"
                            icon={<FontAwesomeIcon icon={faPlus} />}
                          />
                        </Flex>
                      ) : (
                        <Flex justify={"center"} gap={2} m={0}>
                          <IconButton
                            colorScheme="whatsapp"
                            onClick={() => handleShowBack(item?.back_detail)}
                            icon={<FontAwesomeIcon icon={faEye} />}
                          />
                        </Flex>
                      )}
                    </Td>
                    <Td>
                      <Flex gap={2} m={0}>
                        <IconButton
                          colorScheme="green"
                          onClick={() => handleCheckAndUpdate(item)}
                          icon={<FontAwesomeIcon icon={faEdit} />}
                        />
                        <IconButton
                          colorScheme="red"
                          onClick={() => handleCheckAndDelete(item)}
                          icon={<FontAwesomeIcon icon={faTrashAlt} />}
                        />
                      </Flex>
                    </Td>
                    <Td>
                      <Flex justify={"center"} gap={2} m={0}>
                        <IconButton
                          colorScheme="whatsapp"
                          onClick={() => handleShowAll(item)}
                          icon={<FontAwesomeIcon icon={faEye} />}
                        />
                      </Flex>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        ) : (
          <Flex align={"center"} flexDir={"column"} my={12} gap={4}>
            <FontAwesomeIcon icon={faBook} fontSize={"70px"} opacity={"0.4"} />
            <Text
              as={"h1"}
              fontWeight={600}
              textAlign={"center"}
              fontSize={"2xl"}
            >
              Кириш ва чиқиш назорати далолатномаси топилмади
            </Text>
            <Button colorScheme="teal" onClick={onOpen}>
              Қўшиш
            </Button>
          </Flex>
        )
      ) : (
        <SliderMock setIsLoading={setIsLoading} />
      )}

        <Pagination
          pageCount={gettingData?.count}
          onPageChange={handlePageClick}
        />

      <Dalolatnoma_show 
        isOpen={isOpenShowAll}
        onClose={onCloseShowAll}
        data={showAllData}
      />

      <ShowBack
        isOpen={isOpenShowBack}
        onClose={onCloseShowBack}
        dataBack={showBack}
      />
      <Deleteted
        carriageNumber={deletedId}
        isOpen={delateModal}
        onClose={setDelateModal}
        deletedFunction={handleDelate}
      />
      <Orqa isOpen={isOPenBack} onClose={onCloseBack} carriageID={backId} />
      <Dalolatnoma_Model isOpen={isOpen} onClose={onClose} />
      <Update_Dalolatnoma
        isOpen={isOpenUpdate}
        onClose={onCloseUpdate}
        updateData={updateData}
      />
    </Box>
  );
};
