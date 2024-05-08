import {
  Box,
  Button,
  Divider,
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
} from "@chakra-ui/react";
import {
  faBook,
  faChevronLeft,
  faChevronRight,
  faDownload,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { SliderMock } from "../../utils";
import { vu_93 } from "../../utils/mock_heads";
import { VU_93_Model } from "./Modals/VU_93_Model";
import UserApi from "../../Service/module/userModule.api";
import ReactPaginate from "react-paginate";
import { imageGet } from "../../utils/imageGet";
import { Deleteted } from "../Deletete";

export const VU_93 = () => {
  const [isLoadingFulStatistik, setIsLoading] = useState(true);
  const [getTableData, setGetinfTableData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [gettingData, setGettingData] = useState([]);
  const [delateModal, setDelateModal] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };
  const fetchData = async (page) => {
    setIsLoading(true);
    const { response } = await new UserApi().getVu93(page);
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
    const { response } = await new UserApi().delVu93(carriageID);
    if (response) {
      window.location.reload();
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
        VU-93 Shakl
      </Heading>
      <Tooltip
        label="VU-93 Shaklini qo'shish"
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
      {!isLoadingFulStatistik ? (
        gettingData?.results?.length ? (
          <TableContainer p={4} border={"1px solid #eeeee"}>
            <Table
              borderRadius={10}
              size={"sm"}
              whiteSpace={"pre-wrap"}
              variant={"striped"}
              overflow={"hidden"}
              shadow={"lg"}
              colorScheme="blackAlpha"
            >
              <Thead bg={"#0c6170"} rounded={10}>
                <Tr>
                  {vu_93?.headers?.map((item) => (
                    <Th
                      textAlign={"center"}
                      fontSize={"10px"}
                      key={item.label}
                      rowSpan={item.rowspan}
                      colSpan={item.colspan}
                    >
                      {item.label}
                    </Th>
                  ))}
                </Tr>
                <Tr>
                  {vu_93?.nestedHeaders?.map((item, idx) => (
                    <Th fontSize={"10px"} key={idx} textAlign={"center"}>
                      {item?.label}
                    </Th>
                  ))}
                </Tr>
              </Thead>

              <Tbody>
                {gettingData?.results.map((item, idx) => (
                  <Tr key={item.id}>
                    <Td>{currentPage * 10 + idx + 1}</Td>
                    <Td fontWeight={700}>{item?.carriage}</Td>
                    <Td>{item?.chartley_rapair_date}</Td>
                    <Td>
                      {item?.chartley_model_chartley_number} <Divider my={2} />
                      {item?.made_in} / {item?.made_date}
                    </Td>
                    <Td>{item?.not_allowed}</Td>
                    <Td>{item?.rapair_works}</Td>

                    <Td>
                      <Image
                        width={"100px"}
                        src={imageGet(item?.user_signature_url)}
                      />
                    </Td>
                    <Td>
                      <Image
                        width={"100px"}
                        src={imageGet(item?.user_signature_url)}
                      />
                    </Td>

                    <Td>
                      {" "}
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
              VU-93 Shakl topilmadi
            </Text>
            <Button colorScheme="teal" onClick={onOpen}>
              VU-93 Shakl qo&apos;shish
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
      <VU_93_Model isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
