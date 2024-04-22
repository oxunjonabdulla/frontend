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
import { Fraza_wheel_model } from "./FrazaWheel/Fraza_wheel_model";
import { mockHeaderFraza } from "../../utils/mock_heads";
import UserApi from "../../Service/module/userModule.api";
import ReactPaginate from "react-paginate";
import { Deleteted } from "../Deletete";
import { imageGet } from "../../utils/imageGet";

export const Fraza_wheel = () => {
  const [isLoadingFulStatistik, setIsLoading] = useState(true);
  const [getTableData, setGetinfTableData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [gettingData, setGettingData] = useState([]);
  // const [updatedData, setUpdateData] = useState(null);
  // const [updateOpen, setUpdateOpen] = useState(false);
  const [delateModal, setDelateModal] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();
  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };
  const fetchData = async (page) => {
    setIsLoading(true);
    const { response } = await new UserApi().getPhraseWheelList(page);
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
    const { response, error } = await new UserApi().deletePhraseWheel(
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

  // const handleUpdate = (selectedItem) => {
  //   setUpdateData(selectedItem);
  //   setUpdateOpen(true);
  // };
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
      {!isLoadingFulStatistik ? (
        !gettingData?.results?.length ? (
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
                </Tr>
              </Thead>

              <Tbody>
                {gettingData?.results.map((item, idx) => (
                  <Fragment key={item?.id}>
                    <Tr>
                      <Td rowSpan={4}>{idx + 1}</Td>
                      <Td
                        rowSpan={4}
                        height={"100%"}
                        fontWeight={700}
                        color={"green"}
                      >
                        {item?.carriage}
                      </Td>
                      <Td>51</Td>
                      <Td>0</Td>
                      <Td>29</Td>
                      <Td>{item?.c51_code_builder}</Td>
                      <Td>{item?.c51_num_zavod}</Td>
                      <Td>{item?.c51_year_build}</Td>
                      <Td>{item?.c51_num_depo}</Td>
                      <Td>{item?.c51_work_date}</Td>
                      <Td>{item?.c51_work_num}</Td>
                      <Td>{item?.c51_left_wheel}</Td>
                      <Td>{item?.c51_right_wheel}</Td>
                      <Td rowSpan={4}>
                        {item?.user_signature_url ? (
                          <Image
                            w={"100px"}
                            src={imageGet(item?.user_signature_url)}
                          />
                        ) : (
                          <Text color={"red"}>Imzo o`chirilgan</Text>
                        )}
                      </Td>
                      <Td rowSpan={4}>
                        <Flex gap={2} m={0} flexDir={"column"}>
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
                    </Tr>
                    <Tr>
                      <Td>52</Td>
                      <Td>0</Td>
                      <Td>29</Td>
                      <Td>{item?.c52_code_builder}</Td>
                      <Td>{item?.c52_num_zavod}</Td>
                      <Td>{item?.c52_year_build}</Td>
                      <Td>{item?.c52_num_depo}</Td>
                      <Td>{item?.c52_work_date}</Td>
                      <Td>{item?.c52_work_num}</Td>
                      <Td>{item?.c52_left_wheel}</Td>
                      <Td>{item?.c52_right_wheel}</Td>
                    </Tr>
                    <Tr>
                      <Td>53</Td>
                      <Td>0</Td>
                      <Td>29</Td>
                      <Td>{item?.c53_code_builder}</Td>
                      <Td>{item?.c53_num_zavod}</Td>
                      <Td>{item?.c53_year_build}</Td>
                      <Td>{item?.c53_num_depo}</Td>
                      <Td>{item?.c53_work_date}</Td>
                      <Td>{item?.c53_work_num}</Td>
                      <Td>{item?.c53_left_wheel}</Td>
                      <Td>{item?.c53_right_wheel}</Td>
                    </Tr>
                    <Tr>
                      <Td>54</Td>
                      <Td>0</Td>
                      <Td>29</Td>
                      <Td>{item?.c54_code_builder}</Td>
                      <Td>{item?.c54_num_zavod}</Td>
                      <Td>{item?.c54_year_build}</Td>
                      <Td>{item?.c54_num_depo}</Td>
                      <Td>{item?.c54_work_date}</Td>
                      <Td>{item?.c54_work_num}</Td>
                      <Td>{item?.c54_left_wheel}</Td>
                      <Td>{item?.c54_right_wheel}</Td>
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
            <Button colorScheme="teal" onClick={onOpen}>
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
      <Fraza_wheel_model isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
