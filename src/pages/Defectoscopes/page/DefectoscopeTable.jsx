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
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import { SliderMock } from "../../../utils";
import ReactPaginate from "react-paginate";
import UserApi from "../../../Service/module/userModule.api";
import { imageGet } from "../../../utils/imageGet";
import { defectoscope } from "../../../utils/mock_heads";
import { CreateDefectoscope } from "./CreateDefectoscope";

export const DefectoscopeTable = () => {
  const [isLoadingFulStatistik, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [gettingData, setGettingData] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };
  const fetchData = async (page) => {
    setIsLoading(true);
    const { response } = await new UserApi().getVu68(page);
    if (response) {
      setIsLoading(false);
      setGettingData([]);
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
      <Heading as={"h3"} size={"md"} mb={5} textAlign={"center"} mx={"auto"}>
        Defektoskoplar qayd etish jurnali
      </Heading>
      <Tooltip
        label="Defektoskoplar qayd etish"
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
          <TableContainer p={2} border={"1px solid #eeeee"}>
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
                  {defectoscope?.nestedHeaders.map((item) => (
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
                    <Td fontWeight={700} color={"green.900"}>
                      {item?.carriage}
                    </Td>
                    <Td>{item?.stop_remont_date}</Td>
                    <Td>{item?.air_dropper_type}</Td>
                    <Td>{item?.last_remont_stop_date}</Td>
                    <Td>{item?.air_pipe}</Td>
                    <Td>{item?.stop_silindr}</Td>
                    <Td>{item?.cargo}</Td>
                    <Td>{item?.medium}</Td>
                    <Td>{item?.not_cargo}</Td>
                    <Td>{item?.air_test_date}</Td>
                    <Td>
                      <Image
                        width={"100px"}
                        src={imageGet(item?.author_info?.user_signature_url)}
                      />
                    </Td>
                    <Td></Td>
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
              Defektoskoplar jurnali topilmadi
            </Text>
            <Button colorScheme="teal" onClick={onOpen}>
              Defektoskoplar qo&apos;shish
            </Button>
          </Flex>
        )
      ) : (
        <SliderMock setIsLoading={setIsLoading} />
      )}
      {gettingData?.count > 0 && (
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
      )}
      <CreateDefectoscope onClose={onClose} isOpen={isOpen} />
    </Box>
  );
};

DefectoscopeTable.propTypes = {
  data: PropTypes.object,
};
