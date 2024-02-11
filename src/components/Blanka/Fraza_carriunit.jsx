import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
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
  useToast,
} from "@chakra-ui/react";
import {
  faBook,
  faChevronLeft,
  faChevronRight,
  faDownload,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useEffect, useState } from "react";
import { SliderMock } from "../../utils";
import { mockHeaderFraza } from "../../utils/mock_heads";
import UserApi from "../../Service/module/userModule.api";
import ReactPaginate from "react-paginate";
import { Deleteted } from "../Deletete";
import { imageGet } from "../../utils/imageGet";
import { Fraza_carriage_model } from "./FrazaCart/Fraza_carriunit_model";

export const Fraza_carriunit = () => {
  const [isLoadingFulStatistik, setIsLoading] = useState(true);
  const [getTableData, setGetinfTableData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [gettingData, setGettingData] = useState([]);
  const [delateModal, setDelateModal] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();
  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };
  const fetchData = async (page) => {
    setIsLoading(true);
    const { response } = await new UserApi().getPhraseCartList(page);
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
    const { response, error } = await new UserApi().deletePhraseCart(
      carriageID
    );
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
      <Tooltip label="ФРАЗА" placement="top" color={"teal.700"} bg={"white"}>
        <Button
          borderRadius={"50%"}
          variant={"solid"}
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
      {!isLoadingFulStatistik ? (
        gettingData?.results?.length ? (
          <TableContainer p={4} border={"1px solid #eeeee"}>
            <Table
              borderRadius={10}
              size={"sm"}
              whiteSpace={"pre-wrap"}
              variant={"striped"}
              overflow={"hidden"}
              colorScheme="gray"
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
                  <Th
                    fontSize={"10px"}
                    textAlign={"center"}
                    whiteSpace={"pre-wrap"}
                    rowSpan={"3"}
                    fontWeight={700}
                  >
                    Вагон Номер
                  </Th>
                </Tr>
                <Tr>
                  {mockHeaderFraza?.headers?.map((item) => (
                    <Th
                      fontSize={"10px"}
                      textAlign={"center"}
                      key={item.label}
                      whiteSpace={"pre-wrap"}
                      rowSpan={item.rowspan}
                      fontWeight={700}
                      colSpan={item.colspan}
                    >
                      {item.label}
                    </Th>
                  ))}
                  <Th rowSpan={3} textAlign={"center"}>
                    Imzo
                  </Th>
                  <Th rowSpan={3} textAlign={"center"}></Th>
                </Tr>
                <Tr>
                  {mockHeaderFraza?.nestedHeaders?.map((item) => (
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
                </Tr>
                <Tr>
                  <Th textAlign={"center"}></Th>
                  <Th textAlign={"center"}></Th>
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
                  <Th textAlign={"center"}>-</Th>
                </Tr>
              </Thead>

              <Tbody>
                {gettingData?.results.map((item, idx) => (
                  <Fragment key={item?.id}>
                    <Tr>
                      <Td rowSpan={8}>{idx + 1}</Td>
                      <Td
                        rowSpan={8}
                        height={"100%"}
                        fontWeight={700}
                        color={"green"}
                      >
                        {item?.carriage}
                      </Td>
                      <Td>61</Td>
                      <Td>0</Td>
                      <Td>29</Td>
                      <Td>{item?.c61_code_builder}</Td>
                      <Td>{item?.c61_num_zavod}</Td>
                      <Td>{item?.c61_year_build}</Td>
                      <Td>{item?.c61_num_depo}</Td>
                      <Td>{item?.c61_work_date}</Td>
                      <Td>{item?.c61_work_num}</Td>
                      <Td>{item?.c61_left_wheel}</Td>
                      <Td>{item?.c61_right_wheel}</Td>
                      <Td rowSpan={8}>-</Td>
                      <Td rowSpan={8}>
                        {item?.user_signature_url ? (
                          <Image src={imageGet(item?.user_signature_url)} />
                        ) : (
                          <Text color={"red"}>Imzo o`chirilgan</Text>
                        )}
                      </Td>
                      <Td rowSpan={8}>
                        <Flex gap={2} m={0} flexDir={"column"}>
                          <Button
                            float={"right"}
                            borderColor={"blue.400"}
                            variant={"solid"}
                            bgColor={"blue.400"}
                            minW={"30px"}
                            p={0}
                            _hover={{ bgColor: "blue.400", opacity: "0.7" }}
                            // onClick={() => handleDowland(item?.carriage_number)}
                          >
                            <FontAwesomeIcon icon={faDownload} />
                          </Button>
                          {/* <Button
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
                            </Button> */}
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
                    <Tr>
                      <Td>62</Td>
                      <Td>0</Td>
                      <Td>29</Td>
                      <Td>{item?.c62_code_builder}</Td>
                      <Td>{item?.c62_num_zavod}</Td>
                      <Td>{item?.c62_year_build}</Td>
                      <Td>{item?.c62_num_depo}</Td>
                      <Td>{item?.c62_work_date}</Td>
                      <Td>{item?.c62_work_num}</Td>
                      <Td>{item?.c62_left_wheel}</Td>
                      <Td>{item?.c62_right_wheel}</Td>
                    </Tr>
                    <Tr>
                      <Td>63</Td>
                      <Td>0</Td>
                      <Td>29</Td>
                      <Td>{item?.c63_code_builder}</Td>
                      <Td>{item?.c63_num_zavod}</Td>
                      <Td>{item?.c63_year_build}</Td>
                      <Td>{item?.c63_num_depo}</Td>
                      <Td>{item?.c63_work_date}</Td>
                      <Td>{item?.c63_work_num}</Td>
                      <Td>{item?.c63_left_wheel}</Td>
                      <Td>{item?.c63_right_wheel}</Td>
                    </Tr>
                    <Tr>
                      <Td>64</Td>
                      <Td>0</Td>
                      <Td>29</Td>
                      <Td>{item?.c64_code_builder}</Td>
                      <Td>{item?.c64_num_zavod}</Td>
                      <Td>{item?.c64_year_build}</Td>
                      <Td>{item?.c64_num_depo}</Td>
                      <Td>{item?.c64_work_date}</Td>
                      <Td>{item?.c64_work_num}</Td>
                      <Td>{item?.c64_left_wheel}</Td>
                      <Td>{item?.c64_right_wheel}</Td>
                    </Tr>
                    <Tr>
                      <Td>71</Td>
                      <Td>0</Td>
                      <Td>29</Td>
                      <Td>{item?.c71_code_builder}</Td>
                      <Td>{item?.c71_num_zavod}</Td>
                      <Td>{item?.c71_year_build}</Td>
                      <Td>{item?.c71_num_depo}</Td>
                      <Td>{item?.c71_work_date}</Td>
                      <Td>{item?.c71_work_num}</Td>
                      <Td>{item?.c71_left_wheel}</Td>
                      <Td>{item?.c71_right_wheel}</Td>
                    </Tr>
                    <Tr>
                      <Td>72</Td>
                      <Td>0</Td>
                      <Td>29</Td>
                      <Td>{item?.c72_code_builder}</Td>
                      <Td>{item?.c72_num_zavod}</Td>
                      <Td>{item?.c72_year_build}</Td>
                      <Td>{item?.c72_num_depo}</Td>
                      <Td>{item?.c72_work_date}</Td>
                      <Td>{item?.c72_work_num}</Td>
                      <Td>{item?.c72_left_wheel}</Td>
                      <Td>{item?.c72_right_wheel}</Td>
                    </Tr>
                    <Tr>
                      <Td>73</Td>
                      <Td>0</Td>
                      <Td>29</Td>
                      <Td>{item?.c73_code_builder}</Td>
                      <Td>{item?.c73_num_zavod}</Td>
                      <Td>{item?.c73_year_build}</Td>
                      <Td>{item?.c73_num_depo}</Td>
                      <Td>{item?.c73_work_date}</Td>
                      <Td>{item?.c73_work_num}</Td>
                      <Td>{item?.c73_left_wheel}</Td>
                      <Td>{item?.c73_right_wheel}</Td>
                    </Tr>
                    <Tr>
                      <Td>74</Td>
                      <Td>0</Td>
                      <Td>29</Td>
                      <Td>{item?.c74_code_builder}</Td>
                      <Td>{item?.c74_num_zavod}</Td>
                      <Td>{item?.c74_year_build}</Td>
                      <Td>{item?.c74_num_depo}</Td>
                      <Td>{item?.c74_work_date}</Td>
                      <Td>{item?.c74_work_num}</Td>
                      <Td>{item?.c74_left_wheel}</Td>
                      <Td>{item?.c74_right_wheel}</Td>
                    </Tr>
                  </Fragment>
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
      {/* {updateOpen && (
        <Fraza_wheel_update
          updatedData={updatedData}
          isOpen={updateOpen}
          onClose={setUpdateOpen}
        />
      )} */}
      <Fraza_carriage_model isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
