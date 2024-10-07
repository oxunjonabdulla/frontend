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
import { vu_92 } from "../../utils/mock_heads";
import { VU_92_Model } from "./Modals/VU_92_Model";
import ReactPaginate from "react-paginate";
import UserApi from "../../Service/module/userModule.api";
import { imageGet } from "../../utils/imageGet";
import { Deleteted } from "../Deletete";
import { ImageSignature } from "../ImageSignature";

export const VU_92 = () => {
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
    const { response } = await new UserApi().getVu92(page);
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
    const { response } = await new UserApi().delVu92(carriageID);
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
        VU-92 Shakl
      </Heading>
      <Tooltip
        label="VU-92 Shaklini qo'shish"
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
              colorScheme="blackAlpha"
              shadow={"lg"}
            >
              <Thead bg={"#0c6170"} rounded={10}>
                <Tr>
                  {vu_92?.headers?.map((item) => (
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
                <Tr>
                  {vu_92?.nestedHeaders?.map((item, idx) => (
                    <Th key={idx} textAlign={"center"}>
                      {item?.label}
                    </Th>
                  ))}
                </Tr>
              </Thead>

              <Tbody>
                {gettingData?.results.map((item, idx) => (
                  <Tr key={item.id}>
                    <Td textAlign={"center"} fontSize={"lg"}>
                      {currentPage * 10 + idx + 1}
                    </Td>
                    <Td>{item?.inspection_date}</Td>
                    <Td fontWeight={700}>{item?.carriage}</Td>

                    <Td>
                      <ul>
                        {item?.inspection_details?.map((item, id) => (
                          <li key={id}>
                            {id + 1}.{" "}
                            <Box as="span" fontWeight={700}>
                              {" "}
                              {item?.wheel_pair_number}
                            </Box>
                          </li>
                        ))}
                      </ul>
                    </Td>
                    <Td>
                      <ul>
                        {item?.inspection_details?.map((item, id) => (
                          <li key={id}>
                            {id + 1}.{" "}
                            <Box as="span" fontWeight={700}>
                              {" "}
                              {item?.buttock_parts}
                            </Box>
                          </li>
                        ))}
                      </ul>
                    </Td>
                    <Td>
                      <ul>
                        {item?.inspection_details?.map((item, id) => (
                          <li key={id}>
                            {id + 1}.{" "}
                            <Box as="span" fontWeight={700}>
                              {" "}
                              {item?.execution_inspection}
                            </Box>
                          </li>
                        ))}
                      </ul>
                    </Td>
                    <Td>
                      <ImageSignature
                        signatureImage={item?.wheel_signature_user_signature}
                      />
                    </Td>
                    <Td>
                      <Image
                        width={"100px"}
                        src={imageGet(item?.user_signature_url)}
                      />
                    </Td>
                    <Td>
                      <ImageSignature
                        signatureImage={item?.wheel_plumber_user_signature}
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
                          onClick={() => handleCheckAndDelete(item)}
                          icon={<FontAwesomeIcon icon={faTrashAlt} />}
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
              VU-92 Shakl topilmadi
            </Text>
            <Button colorScheme="teal" onClick={onOpen}>
              VU-92 Shakl qo&apos;shish
            </Button>
          </Flex>
        )
      ) : (
        <SliderMock setIsLoading={setIsLoading} />
      )}
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
      <Deleteted
        isOpen={delateModal}
        onClose={setDelateModal}
        carriageNumber={getTableData?.carriage}
        deletedFunction={handleDelate}
      />
      <VU_92_Model onClose={onClose} isOpen={isOpen} />
    </Box>
  );
};
