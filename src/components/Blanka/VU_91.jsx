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
import { vu_91 } from "../../utils/mock_heads";
import { VU_91_Model } from "./Modals/VU_91_Model";
import UserApi from "../../Service/module/userModule.api";
import ReactPaginate from "react-paginate";
import { imageGet } from "../../utils/imageGet";
import { Deleteted } from "../Deletete";

export const VU_91 = () => {
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
    const { response } = await new UserApi().getVu91(page);
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
    const { response } = await new UserApi().delVu91(carriageID);
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
        VU-91 Shakl
      </Heading>
      <Tooltip
        label="VU-91 Shaklini qo'shish"
        placement="top"
        color={"teal.700"}
        bg={"white"}
      >
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
              colorScheme="blackAlpha"
              shadow={"lg"}
            >
              <Thead bg={"#0c6170"} rounded={10}>
                <Tr>
                  {vu_91.map((item, idx) => (
                    <Th fontSize={"10px"} textAlign={"center"} key={idx}>
                      {item}
                    </Th>
                  ))}
                </Tr>
              </Thead>

              <Tbody>
                {gettingData?.results.map((item, idx) => (
                  <Tr key={item.id}>
                    <Td>{idx + 1}</Td>
                    <Td fontWeight={700}>{item?.carriage}</Td>
                    <Td>{item?.seen_date}</Td>
                    <Td>{item?.chartley_model}</Td>
                    <Td>{item?.chartley_made_and_year}</Td>
                    <Td>{item?.chartley_number}</Td>
                    <Td>{item?.defect_appearance}</Td>

                    <Td>
                      <Image
                        width={"100px"}
                        src={imageGet(item?.user_signature_url)}
                      />
                    </Td>

                    <Td>
                      {" "}
                      <Flex gap={2} justifyContent={"center"}>
                        <Button
                          float={"right"}
                          borderColor={"blue.400"}
                          variant={"solid"}
                          bgColor={"blue.400"}
                          p={0}
                          _hover={{ bgColor: "blue.400", opacity: "0.7" }}
                        >
                          <FontAwesomeIcon icon={faDownload} />
                        </Button>
                        <Button
                          float={"right"}
                          borderColor={"red"}
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
              VU-91 Shakli topilmadi
            </Text>
            <Button variant={"solid"} onClick={onOpen}>
              VU-91 Shakl qo&apos;shish
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

      <VU_91_Model onClose={onClose} isOpen={isOpen} />
    </Box>
  );
};
