import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import {
  faBook,
  faCheck,
  faDownload,
  faEye,
  faTrashAlt,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

import { VU_22_Model } from "./VU_22_Modal";
import UserApi from "../../../Service/module/userModule.api";
import { vu_22_assabmle } from "../../../utils/mock_heads";
import { reverseDateFormat, SliderMock } from "../../../utils";
import { timeClear } from "../../../utils/timeClear";
import { imageGet } from "../../../utils/imageGet";
import { Deleteted, Pagination } from "../../../components";
import { VU_22_Show } from "../VU_22/VU_22_Show";
import { useDebounce } from "../../../hooks/useDebounce";

export const VU_22 = () => {
  const [isLoadingFulStatistik, setIsLoading] = useState(true);
  const [getTableData, setGetinfTableData] = useState(null);
  const [maintanceRecordId, setMaintanceRecordId] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [gettingData, setGettingData] = useState([]);
  const [delateModal, setDelateModal] = useState(false);
  const [showModel, setShowModel] = useState([]);
  const [showAllData, setShowAllData] = useState(null);
  const [searchValue, setSearchValue] = useState(null);
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const carriageSerach = useDebounce(searchValue);


  const {
    isOpen: isOpenShowModel,
    onOpen: onOpenShowModel,
    onClose: onCloseShowModel,
  } = useDisclosure();
  const {
    isOpen: isOpenShowAll,
    onClose: onCloseShowAll,
    onOpen: onOpenShowAll,
  } = useDisclosure();

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  const handleShowAll = (data) => {
    onOpenShowAll();
    setShowAllData(data);
  };

  const fetchData = async (page) => {
    setIsLoading(true);
    const paramsPage = {
      page: page + 1,
      ...(carriageSerach && { search: carriageSerach }),
    };
    const { response } = await new UserApi().getVu22(paramsPage);
    if (response) {
      setIsLoading(false);
      setGettingData(response?.data);
    }
  };

  const handleCheckAndDelete = (deletedID) => {
    setDelateModal(true);
    setGetinfTableData(deletedID);
  };

  const handleDelate = async (carriageID) => {
    const { response } = await new UserApi().deleteVu22(carriageID);
    if (response) window.location.reload();
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, carriageSerach]);

  const handleOpenEye = (data) => {
    setShowModel(data.collect_data || []);
    onOpenShowModel();
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
        Yig'uv bo'limida yaratilgan VU-22 Shakli Yig'uv qo'shish bo'limi
      </Heading>
      <Box my={3} mt={0}>
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
      <Modal isOpen={isOpenShowModel} onClose={onCloseShowModel} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Yig'uv bo'limi ma'lumotlari</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {showModel.length > 0 ? (
              <TableContainer>
                <Table variant="simple">
                  <Thead bg={"gray.200"}>
                    <Tr>
                      <Th>T/R</Th>
                      <Th>Sarlavha</Th>
                      <Th>Bo'lim</Th>
                      <Th>Ishlar soni</Th>
                      <Th>Qo'shimcha matn</Th>
                      <Th>Ishchi Familiyasi</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {showModel.flatMap((item) =>
                      item.qismlar.map((qism, idx) => (
                        <Tr key={idx}>
                          <Td>{idx + 1}</Td>
                          <Td>{qism.title}</Td>
                          <Td>{qism.vu22_section}</Td>
                          <Td>{qism.works_quantity}</Td>
                          <Td>{qism.additional_text}</Td>
                          <Td>{qism.worker_lastname}</Td>
                        </Tr>
                      ))
                    )}
                  </Tbody>
                </Table>
              </TableContainer>
            ) : (
              <Text color="red.500">
                Bu bo'lim uchun ma'lumot hozircha to'ldirilmagan
              </Text>
            )}
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onCloseShowModel}>
              Yopish
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {!isLoadingFulStatistik ? (
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
                  {vu_22_assabmle?.map((item) => (
                    <Th
                      fontSize={"10px"}
                      textAlign={"center"}
                      key={item.label}
                      rowSpan={item.rowspan}
                      colSpan={item.colspan}>
                      {item.label}
                    </Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                {gettingData?.results?.map((item, idx) => (
                  <Tr key={item?.id}>
                    <Td>{currentPage * 10 + idx + 1}</Td>
                    <Td fontWeight={"bold"}>{item?.carriage}</Td>
                    <Td>{item?.carrying_capacity}</Td>
                    <Td>{item?.cladding_material}</Td>
                    <Td>{item?.place_last_repair}</Td>
                    <Td>{reverseDateFormat(item?.date_last_repair)}</Td>
                    <Td>
                      {reverseDateFormat(item?.date_of_repair)}
                      <br />
                      {timeClear(item?.hour_of_repair) +
                        ":" +
                        timeClear(item?.minute_of_repair)}
                    </Td>
                    <Td>
                      {reverseDateFormat(item?.repair_completion_date)}
                      <br />
                      {timeClear(item?.repair_completion_hour) +
                        ":" +
                        timeClear(item?.repair_completion_minute)}
                    </Td>
                    <Td>
                      <Tooltip
                        placement="auto-start"
                        colorScheme={item.collect_data?.length ? "green" : "red"}
                        label={
                          !item.collect_data?.length
                            ? "To'ldirilmagan"
                            : "To'ldirilgan"
                        }
                      >
                        <Badge
                          cursor={"pointer"}
                          variant="solid"
                          borderRadius={"10px"}
                          padding={"10px"}
                          colorScheme={
                            item.collect_data?.length ? "green" : "red"
                          }
                        >
                          <FontAwesomeIcon
                            style={{ margin: "0 5px" }}
                            icon={item.collect_data?.length ? faCheck : faX}
                          />
                          Yig'uv bo'limi
                        </Badge>
                      </Tooltip>
                    </Td>
                    <Td>
                      <Image
                        width={"100px"}
                        src={imageGet(item?.author_info?.user_signature_url)}
                      />
                    </Td>
                    <Td>
                      {!item.collect_data?.length ? (
                        <Box
                          colorScheme="teal"
                          fontSize={"13px"}
                          bgColor={"blue.500"}
                          p={"10px"}
                          mt={"5px"}
                          cursor={"pointer"}
                          rounded={"5"}
                          color={"#fff"}
                          fontWeight={700}
                          whiteSpace={"nowrap"}
                          textAlign={"center"}
                          onClick={() => {
                            setMaintanceRecordId(item?.id);
                            onOpen();
                          }}
                        >
                          To'ldirish
                        </Box>
                      ) : (
                        <Button
                          colorScheme="messenger"
                          onClick={() => handleOpenEye(item)}
                        >
                          <FontAwesomeIcon
                            icon={faEye}
                            style={{ margin: "0 10px" }}
                          />
                          <span>Ma'lumotlarni ko'rish</span>
                        </Button>
                      )}
                    </Td>
                    <Td>
                      <Flex gap={2} justifyContent={"center"}>
                        <IconButton
                          colorScheme="linkedin"
                          icon={<FontAwesomeIcon icon={faDownload} />}
                        />
                        <IconButton
                          colorScheme="red"
                          onClick={() => handleCheckAndDelete(item?.carriage)}
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
              VU-22 Shakl topilmadi
            </Text>
            <Button colorScheme="teal" onClick={onOpen}>
              {" "}
              VU-22 Shakl qo&apos;shish
            </Button>
          </Flex>
        )
      ) : (
        <SliderMock setIsLoading={setIsLoading} />
      )}
      <Pagination
        onPageChange={handlePageClick}
        pageCount={gettingData?.count}
      />
      <VU_22_Show
        isOpen={isOpenShowAll}
        onClose={onCloseShowAll}
        data={showAllData}
      />
      <Deleteted
        isOpen={delateModal}
        onClose={() => setDelateModal(false)}
        carriageNumber={getTableData}
        deletedFunction={handleDelate}
      />
      <VU_22_Model
        onClose={onClose}
        isOpen={isOpen}
        maintanceRecordId={maintanceRecordId}
      />
    </Box>
  );
};
