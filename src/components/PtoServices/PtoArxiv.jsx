import {
  Box,
  Button,
  Divider,
  Flex,
  Spinner,
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
} from "@chakra-ui/react";
import {
  faChevronLeft,
  faChevronRight,
  faDownload,
  faPenToSquare,
  faTrainSubway,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { timeClear } from "../../utils/timeClear";
import { Link } from "react-router-dom";

import UserApi from "../../Service/module/userModule.api";
import { PtopUpdate } from "./PtoUpdate";
import { Deleteted } from "../Deletete";

const itemsPerPage = 10;

export const PtoArxiv = ({ deleateCarriage }) => {
  const [isLoadingData, setisLoadingData] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);
  const [updateData, setUpdateData] = useState(null);
  const [getTableData, setGetinfTableData] = useState(null);

  const [gettingCarriageData, setGettingCarriageData] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [currentPage, setCurrentPage] = useState(0);

  const handleCheckAndDelete = (deletedID) => {
    onOpen();
    setGetinfTableData(deletedID);
  };

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };
  const fetchData = async (page) => {
    setisLoadingData(true);
    const { response } = await new UserApi().getCarriagePage(page);
    if (response) {
      setisLoadingData(false);

      setGettingCarriageData(response?.data);
    }
  };

  const handleDowland = async (carriageID) => {
    try {
      const { response } = await new UserApi().downloadVu23(carriageID);

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;

      link.setAttribute("download", `vu-23-${carriageID}.docx`);

      document.body.appendChild(link);
      link.click();

      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Ошибка при скачивании файла: ", error);
    }
  };

  const handleUpdate = (selectedItem) => {
    setUpdateData(selectedItem);
    setUpdateOpen(true);
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  return (
    <Box
      as="div"
      bg={"#ffff"}
      my={8}
      p={8}
      mx="auto"
      rounded={"lg"}
      position={"relative"}
      display={"flex"}
      flexDir={"column"}
      justifyContent={"space-between"}
    >
      <TableContainer
        borderRadius={10}
        border={"1px solid #eeeee"}
        shadow={"lg"}
        position={"relative"}
      >
        {isLoadingData && (
          <Box
            width={"100%"}
            height={"100%"}
            bg={"rgba(255,255,255,0.3)"}
            backdropFilter={"blur(4px)"}
            position={"absolute"}
            left={0}
            zIndex={2}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Spinner color="green" size={"xl"} />
          </Box>
        )}
        <Table
          size={"sm"}
          whiteSpace={"wrap"}
          variant={"striped"}
          overflow={"hidden"}
          colorScheme="gray"
        >
          <Thead bg={"#0c6170"} rounded={10}>
            <Tr>
              <Th textAlign={"center"} color={"#ffff"} border={"gray"}>
                T/R
              </Th>
              <Th textAlign={"center"} color={"#ffff"} border={"gray"}>
                Vagon №
              </Th>
              <Th textAlign={"center"} color={"#ffff"} border={"gray"}>
                Bekat
              </Th>
              <Th textAlign={"center"} color={"#ffff"} border={"gray"}>
                Xabarnoma raqami
              </Th>
              <Th textAlign={"center"} color={"#ffff"} border={"gray"}>
                Biriktirilgan
              </Th>
              <Th textAlign={"center"} color={"#ffff"} border={"gray"}>
                Qabul qilingan poyezd raqami va vaqti
              </Th>
              <Th textAlign={"center"} color={"#ffff"} border={"gray"}>
                Aniqlangan vaqti
              </Th>
              <Th textAlign={"center"} color={"#ffff"} border={"gray"}>
                Yul raqami
              </Th>
              <Th textAlign={"center"} color={"#ffff"} border={"gray"}>
                Yukli yoki yuksiz
              </Th>
              <Th textAlign={"center"} color={"#ffff"} border={"gray"}>
                Oxirgi rejaviy ta’mir turi, joyi va qurilgan yili
              </Th>
              <Th textAlign={"center"} color={"#ffff"} border={"gray"}>
                Nosozlik turi
              </Th>
              <Th textAlign={"center"} color={"#ffff"} border={"gray"}>
                Talab qilingan ta’mir turi
              </Th>
              <Th textAlign={"center"} color={"#ffff"} border={"gray"}>
                Vagon qayerga ta’mir uchun jo‘natiladi
              </Th>
              {/* <Th textAlign={"center"} color={"#ffff"} border={"gray"}>
                Vagon ko‘ruvchi imzosi (Vagon operatori)
              </Th> */}
              <Th
                colSpan={2}
                textAlign={"center"}
                color={"#ffff"}
                border={"gray"}
              >
                Bekat navbatchisi ogohlantirildi sana va vaqti
              </Th>
            </Tr>
          </Thead>

          <Tbody>
            {gettingCarriageData?.results &&
              gettingCarriageData?.results?.map((item, index) => (
                <Tr key={index}>
                  <Td>{index + 1}</Td>
                  <Td color={"green.800"} fontWeight={"800"}>
                    <Link
                      to={`/pto-unit/carriage-${item.carriage_number}`}
                      className="hover_carriage"
                    >
                      {item.carriage_number}
                    </Link>
                  </Td>
                  <Td>{item.station}</Td>
                  <Td>{item.newsletter}</Td>
                  <Td>{item.combined}</Td>
                  <Td>
                    <ul>
                      <li>
                        {" "}
                        <b>{item.train_number} </b>
                      </li>
                      <Divider colorScheme="gray" />
                      <li>
                        {timeClear(item.accept_hour)} :{" "}
                        {timeClear(item.accept_minute)}
                      </li>
                    </ul>
                  </Td>
                  <Td textAlign={"center"}>
                    {timeClear(item.detect_hour)} :{" "}
                    {timeClear(item.detect_minute)}
                  </Td>
                  <Td>{item.way_number}</Td>
                  <Td>{item.is_freight ? "Yukli" : "Yuksiz"}</Td>
                  <Td whiteSpace={"pre-wrap"}>
                    <Tooltip label={item.last_repair} placement={"left-start"}>
                      {item.last_repair.slice(0, 30) +
                        (item.last_repair.length > 30 ? "..." : "")}
                    </Tooltip>
                  </Td>
                  <Td>
                    <Tooltip
                      label={item.breakdown_type}
                      placement={"left-start"}
                    >
                      {item.breakdown_type.slice(0, 15) +
                        (item.breakdown_type.length > 15 ? "..." : "")}
                    </Tooltip>
                  </Td>
                  <Td>{item.repair_type?.toUpperCase()}</Td>
                  <Td>{item.carriage_workshop}</Td>

                  <Td whiteSpace={"nowrap"}>
                    <ul>
                      <li>
                        {" "}
                        <b>Sana: </b> {item.warning_date}
                      </li>
                      <li>
                        <b>Vaqti: </b> {timeClear(item.warning_hour)} :{" "}
                        {timeClear(item.warning_minute)}
                      </li>
                    </ul>
                  </Td>
                  <Td>
                    <Flex gap={2}>
                      <Button
                        float={"right"}
                        borderColor={"blue.400"}
                        variant={"solid"}
                        bgColor={"blue.400"}
                        minW={"30px"}
                        p={0}
                        _hover={{ bgColor: "blue.400", opacity: "0.7" }}
                        onClick={() => handleDowland(item?.carriage_number)}
                      >
                        <FontAwesomeIcon icon={faDownload} />
                      </Button>
                      <Button
                        float={"right"}
                        borderColor={"green.400"}
                        variant={"solid"}
                        bgColor={"green.400"}
                        p={0}
                        minW={"30px"}
                        _hover={{ bgColor: "green.500", opacity: "0.7" }}
                        onClick={() => handleUpdate(item)}
                      >
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </Button>
                      <Button
                        float={"right"}
                        borderColor={"red"}
                        minW={"30px"}
                        variant={"solid"}
                        bgColor={"red"}
                        onClick={() => handleCheckAndDelete(item)}
                        p={0}
                        _hover={{ bgColor: "red", opacity: "0.7" }}
                      >
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </Button>
                    </Flex>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>

      {!isLoadingData && !gettingCarriageData?.results?.length && (
        <Flex align={"center"} flexDir={"column"} mt={12} gap={4}>
          <FontAwesomeIcon
            icon={faTrainSubway}
            fontSize={"70px"}
            opacity={"0.4"}
          />
          <Text as={"h1"} fontWeight={600} fontSize={"2xl"}>
            VU-23 Vagonlar topilmadi
          </Text>
        </Flex>
      )}
      <ReactPaginate
        pageCount={Math.ceil(
          (gettingCarriageData?.count ? gettingCarriageData?.count : 0) /
            itemsPerPage
        )}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        activeClassName="active"
        previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
        nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
      />
      {updateOpen && (
        <PtopUpdate
          updateData={updateData}
          isOpen={updateOpen}
          onClose={setUpdateOpen}
        />
      )}
      <Deleteted
        isOpen={isOpen}
        onClose={onClose}
        carriageNumber={getTableData?.carriage_number}
        deletedFunction={deleateCarriage}
      />
    </Box>
  );
};

PtoArxiv.propTypes = {
  data: PropTypes.object,
  isLoading: PropTypes.bool,
  deleateCarriage: PropTypes.func,
};
