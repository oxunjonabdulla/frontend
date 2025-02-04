import {
  Badge,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  useDisclosure
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
import UserApi from "../../Service/module/userModule.api";
import { reverseDateFormat, SliderMock } from "../../utils";
import { vu_22_assabmle } from "../../utils/mock_heads";

import { VU_22_Show } from "../../pages/AssemblyPage/VU_22/VU_22_Show";
import { timeClear } from "../../utils/timeClear";
import { Deleteted } from "../Deletete";
import { IsImzo } from "../IsImzo";
import { Pagination } from "../pagination/Pagination";
import { VU_22_Model } from "./Modals/VU_22_Model";
import { useDebounce } from "../../hooks/useDebounce";

export const VU_22 = () => {
  const [isLoadingFulStatistik, setIsLoading] = useState(true);
  const [getTableData, setGetinfTableData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [gettingData, setGettingData] = useState([]);
  const [delateModal, setDelateModal] = useState(false);
  const [showModelData, setShowModelData] = useState([]);
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
    setShowModelData(data);
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
      p={4}
    >
      <Heading as={"h3"} size={"lg"} mb={0} textAlign={"center"}>
        VU-22 Shakl
      </Heading>
      <Modal isOpen={isOpenShowModel} onClose={onCloseShowModel} size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ma'lumotlarni ko'rish</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {[
              { data: showModelData.collect_data, title: "Yig'uv bo'limi" },
              {
                data: showModelData.avtobirikma_data,
                title: "Avtobirikma bo'limi",
              },
              { data: showModelData.aravalar_data, title: "Aravalar bo'limi" },
              {
                data: showModelData.avtotomoz_data,
                title: "Avtotomoz bo'limi",
              },
              { data: showModelData.wheel_data, title: "G'ildirak bo'limi" },
            ].map((section, index) => {
              const qismlar = (section.data || []).reduce((acc, curr) => {
                if (curr.qismlar && curr.qismlar.length > 0) acc.push(...curr.qismlar);
                return acc;
              }, []);

              return (
                <Box key={index} mb={6}>
                  <Heading as="h4" size="md" mb={3}>
                    {section.title}
                  </Heading>
                  {qismlar.length > 0 ? (
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
                          {qismlar.map((item, idx) => (
                            <Tr key={idx}>
                              <Td>{idx + 1}</Td>
                              <Td>{item.title}</Td>
                              <Td>{item.vu22_section}</Td>
                              <Td>{item.works_quantity}</Td>
                              <Td>{item.additional_text}</Td>
                              <Td>{item.worker_lastname}</Td>
                            </Tr>
                          ))}
                        </Tbody>
                      </Table>
                    </TableContainer>
                  ) : (
                    <Text color="red.500">
                      Bu ma'lumot hozircha to'ldirilmagan
                    </Text>
                  )}
                </Box>
              );
            })}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" onClick={onCloseShowModel}>
              Yopish
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Tooltip
        label="VU-22 Shaklni qo'shish"
        placement="top"
        color={"teal.700"}
        bg={"white"}
      >
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
      </Tooltip>
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
      {!isLoadingFulStatistik ? (
        gettingData?.results?.length ? (
          <TableContainer p={4} pt={0} border={"1px solid #eeeee"} rounded="md">
            <Table
              borderRadius={10}
              size={"sm"}
              whiteSpace={"pre-wrap"}
              variant={"striped"}
              overflow={"hidden"}
              colorScheme="blackAlpha"
            >
              <Thead bg={"#0c6170"} color="white" rounded={10}>
                <Tr>
                  {vu_22_assabmle?.map((item) => (
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
                {gettingData?.results?.map((item, idx) => {
                  const data_array_compaltes = [
                    {
                      data_check: item.wheel_data,
                      title: "G'ildirak bo'limi",
                    },
                    {
                      data_check: item.avtotomoz_data,
                      title: "Avtotomoz bo'limi",
                    },
                    {
                      data_check: item.aravalar_data,
                      title: "Aravalar bo'limi",
                    },
                    {
                      data_check: item.avtobirikma_data,
                      title: "Avtobirikma bo'limi",
                    },
                    {
                      data_check: item.collect_data,
                      title: "Yig'uv bo'limi",
                    },
                  ];

                  return (
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
                        <Stack align="flex-start">
                          {data_array_compaltes.map((e) => {
                            let checkIsHave = e?.data_check?.length;

                            return (
                              <Tooltip
                                key={e.title}
                                placement="auto-start"
                                colorScheme="red"
                                label={
                                  !checkIsHave
                                    ? "To'ldirilmagan"
                                    : "To'ldirilgan"
                                }
                              >
                                <Badge
                                  cursor={"pointer"}
                                  variant="solid"
                                  borderRadius={"10px"}
                                  padding={"5px 10px"}
                                  colorScheme={checkIsHave ? "green" : "red"}
                                >
                                  <FontAwesomeIcon
                                    style={{ margin: "0 5px" }}
                                    icon={checkIsHave ? faCheck : faX}
                                  />
                                  {e.title}
                                </Badge>
                              </Tooltip>
                            );
                          })}
                        </Stack>
                      </Td>
                      <Td>
                        <IsImzo isImzo={item?.author_info?.user_signature_url} />
                      </Td>
                      <Td>
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
                      </Td>
                      <Td>
                        <Flex gap={2} justifyContent={"center"}>
                          <IconButton
                            colorScheme="linkedin"
                            icon={<FontAwesomeIcon icon={faDownload} />}
                            aria-label="Download"
                          />
                          <IconButton
                            colorScheme="red"
                            onClick={() => handleCheckAndDelete(item?.carriage)}
                            icon={<FontAwesomeIcon icon={faTrashAlt} />}
                            aria-label="Delete"
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
                  );
                })}
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
              VU-22 Shakl qo&apos;shish
            </Button>
          </Flex>
        )
      ) : (
        <SliderMock setIsLoading={setIsLoading} />
      )}
      <VU_22_Show
        onClose={onCloseShowAll}
        isOpen={isOpenShowAll}
        data={showAllData}
      />
      <Pagination
        onPageChange={handlePageClick}
        pageCount={gettingData?.count}
      />
      <Deleteted
        isOpen={delateModal}
        onClose={() => setDelateModal(false)}
        carriageNumber={getTableData}
        deletedFunction={handleDelate}
        text={"id raqamiga tegishli vagon ma'lumotini o'chirmoqdasiz."}
        placeholder={"id raqamini kirting"}
      />
      <VU_22_Model onClose={onClose} isOpen={isOpen} />
    </Box>
  );
};
