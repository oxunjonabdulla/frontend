import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
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
  faDownload,
  faEye,
  faTrashAlt,
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

export const VU_22_Brakes = () => {
  const [isLoadingFulStatistik, setIsLoading] = useState(true);
  const [getTableData, setGetinfTableData] = useState(null);
  const [maintanceRecordId, setMaintanceRecordId] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [gettingData, setGettingData] = useState([]);
  const [delateModal, setDelateModal] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showAllData, setShowAllData] = useState(null);

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
    const { response } = await new UserApi().getVu22(page);
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
    if (response) {
      window.location.reload();
    }
  };
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handleOpenEye = (data) => {
    setShowModel(data);
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
        Yig'uv bulimida yaratilgan VU-22 Shakli
      </Heading>

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
                      colSpan={item.colspan}
                    >
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
                      <Image
                        width={"100px"}
                        src={imageGet(item?.author_info?.user_signature_url)}
                      />
                    </Td>
                    <Td>
                      <Box
                        borderColor={"red.500"}
                        colorScheme="teal"
                        fontSize={"13px"}
                        bgColor={"red.500"}
                        p={"10px"}
                        rounded={"5"}
                        color={"#fff"}
                        fontWeight={700}
                        whiteSpace={"nowrap"}
                        textAlign={"center"}
                      >
                        To`liq tugallanmagan
                      </Box>
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
                    </Td>

                    <Td>
                      <Flex gap={2} justifyContent={"center"}>
                            {/* <IconButton*/}
                            {/*    bg="blue.300"*/}
                            {/*    color="white"*/}
                            {/*    icon={<FontAwesomeIcon icon={faDownload} />}*/}
                            {/*    aria-label="Download VU22"*/}
                            {/*    _hover={{ opacity: 0.8 }}*/}
                            {/*    onClick={() => handleDownloadVu22(item?.carriage_number)}*/}
                            {/*/>*/}
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
      <Deleteted
        isOpen={delateModal}
        onClose={setDelateModal}
        carriageNumber={getTableData}
        deletedFunction={handleDelate}
      />
      <VU_22_Model
        onClose={onClose}
        isOpen={isOpen}
        maintanceRecordId={maintanceRecordId}
      />

      {/* <Show_VU50_model
        isOpen={isOpenShowModel}
        onClose={onCloseShowModel}
        showData={showModel}
      /> */}
    </Box>
  );
};
