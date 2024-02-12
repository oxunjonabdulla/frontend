import {
  Box,
  Button,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import {
  faBook,
  faChevronLeft,
  faChevronRight,
  faDownload,
  faEye,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { SliderMock } from "../../utils";
import { mockHeaderFraza } from "../../utils/mock_heads";
import UserApi from "../../Service/module/userModule.api";
import ReactPaginate from "react-paginate";
import { Deleteted } from "../Deletete";
import { Fraza_model } from "./Modals/Fraza_model";

export const Fraza = () => {
  const [isLoadingFulStatistik, setIsLoading] = useState(true);
  const [getTableData, setGetinfTableData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [gettingData, setGettingData] = useState([]);

  const [updatedData, setUpdateData] = useState(null);

  const [delateModal, setDelateModal] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();
  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };
  const fetchData = async (page) => {
    setIsLoading(true);
    const { response } = await new UserApi().getPhraseList(page);
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
    const { response, error } = await new UserApi().deletePhrase(carriageID);
    if (response) {
      window.location.reload();
    } else {
      toast({
        status: "error",
        title:
          error?.detail &&
          carriageID + " vagon raqami ma'lumoti avval o'chirilgan",
        duration: 4000,
        isClosable: true,
        position: "top-right",
        fontSize: "3xl",
      });
    }
  };

  const handleUpdate = (selectedItem) => {
    setUpdateData(selectedItem);

    onOpen();
  };

  const handleDownload = async (carriageID) => {
    try {
      const { response } = await new UserApi().downloadPhrase(carriageID);

      const blob = new Blob([response.data], {
        type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `Фраза-${carriageID}.docx`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); // Remove the link after download
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file: ", error);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

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
        ФРАЗА
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
              colorscheme="gray"
              shadow={"lg"}
            >
              <Thead bg={"#0c6170"} rounded={10}>
                <Tr>
                  <Th
                    fontSize={"10px"}
                    textAlign={"center"}
                    whiteSpace={"pre-wrap"}
                    rowSpan={"3"}
                    fontWeight={700}
                  >
                    Tartib raqami
                  </Th>
                </Tr>

                <Tr>
                  {mockHeaderFraza?.topHeader?.map((item) => (
                    <Th
                      fontSize={"10px"}
                      fontWeight={700}
                      textAlign={"center"}
                      whiteSpace={"pre-wrap"}
                      key={item.label}
                      rowSpan={item.rowspan}
                      colSpan={item.colspan}
                    >
                      {item.label}
                    </Th>
                  ))}

                  <Th textAlign={"center"} rowSpan={2} fontSize={"10px"}>
                    Jarayon
                  </Th>
                  <Th textAlign={"center"} rowSpan={2} fontSize={"10px"}></Th>
                </Tr>
                <Tr>
                  <Th textAlign={"center"}>-</Th>
                  <Th textAlign={"center"}>1</Th>
                  <Th textAlign={"center"}>2</Th>
                  <Th textAlign={"center"}>3</Th>
                  <Th textAlign={"center"}>4</Th>
                  <Th textAlign={"center"}>5</Th>
                  <Th textAlign={"center"}>6</Th>
                  <Th textAlign={"center"}>7</Th>
                  <Th textAlign={"center"}>8</Th>
                  <Th textAlign={"center"}>9</Th>
                  <Th textAlign={"center"}>10</Th>
                  <Th textAlign={"center"}>11</Th>
                </Tr>
              </Thead>

              <Tbody>
                {gettingData?.results?.map((item, idx) => (
                  <Tr key={item?.id}>
                    <Td>{idx + 1}</Td>
                    <Td>:4634</Td>
                    <Td>408</Td>
                    <Td>73314</Td>
                    <Td>1</Td>
                    <Td>{item?.date_send_message}</Td>
                    <Td>704</Td>
                    <Td>7314</Td>
                    <Td>{item?.date_operation_carriage}</Td>
                    <Td>{item?.code_operation_carriage}</Td>
                    <Td height={"100%"} fontWeight={700} color={"green"}>
                      {item?.carriage}
                    </Td>
                    <Td></Td>
                    <Td>0</Td>
                    <Td>
                      {/* {item?.user_signature_url ? (
                        <Image src={imageGet(item?.user_signature_url)} />
                      ) : (
                        <Text color={"red"}>Imzo o`chirilgan</Text>
                      )} */}

                      {!item?.date_operation_carriage
                        ? item?.phrase_gildirak &&
                          item?.phrase_arava && (
                            <Box
                              colorscheme="yellow"
                              borderColor={"orange.400"}
                              variant={"solid"}
                              fontSize={"13px"}
                              bgColor={"orange.400"}
                              p={"10px"}
                              rounded={"5"}
                              color={"#fff"}
                              fontWeight={700}
                              textAlign={"center"}
                            >
                              Tasdiqlanmagan
                            </Box>
                          )
                        : null}
                      {(!item?.phrase_gildirak || !item?.phrase_arava) && (
                        <Box
                          borderColor={"red.500"}
                          variant={"solid"}
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
                      )}
                      {item?.date_operation_carriage && (
                        <Box
                          borderColor={"green.500"}
                          variant={"solid"}
                          fontSize={"13px"}
                          bgColor={"green.500"}
                          p={"10px"}
                          rounded={"5"}
                          color={"#fff"}
                          fontWeight={700}
                          textAlign={"center"}
                          whiteSpace={"nowrap"}
                        >
                          Tasdiqlangan
                        </Box>
                      )}
                    </Td>
                    <Td>
                      <Flex gap={2} m={0}>
                        <Button
                          float={"right"}
                          borderColor={"blue.400"}
                          variant={"solid"}
                          bgColor={"blue.400"}
                          minW={"30px"}
                          p={0}
                          _hover={{ bgColor: "blue.400", opacity: "0.7" }}
                          onClick={() => handleDownload(item?.carriage)}
                        >
                          <FontAwesomeIcon icon={faDownload} />
                        </Button>
                        <Button
                          float={"right"}
                          borderColor={"blue.400"}
                          variant={"solid"}
                          bgColor={"blue.600"}
                          p={0}
                          minW={"30px"}
                          _hover={{ bgColor: "blue.500", opacity: "0.7" }}
                          onClick={() => handleUpdate(item)}
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </Button>
                        <Button
                          float={"right"}
                          borderColor={"red"}
                          minW={"30px"}
                          variant={"solid"}
                          bgColor={"red"}
                          onClick={() => handleCheckAndDelete(item?.carriage)}
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
            <ReactPaginate
              pageCount={Math.ceil(
                (gettingData?.count ? gettingData?.count : 0) / 10
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
              ФРАЗА мфлумотларини юкланг
            </Text>
            <Button variant={"solid"} onClick={onOpen}>
              ФРАЗА мфлумотларини қушиш
            </Button>
          </Flex>
        )
      ) : (
        <SliderMock setIsLoading={setIsLoading} />
      )}

      <Deleteted
        isOpen={delateModal}
        onClose={setDelateModal}
        carriageNumber={getTableData}
        deletedFunction={handleDelate}
      />

      {isOpen && (
        <Fraza_model
          isOpen={isOpen}
          onClose={onClose}
          updatedData={updatedData}
        />
      )}
    </Box>
  );
};
