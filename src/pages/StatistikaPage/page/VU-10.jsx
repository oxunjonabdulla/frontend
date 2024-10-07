import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import {
  faBook,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import UserApi from "@/Service/module/userModule.api";
import ReactPaginate from "react-paginate";
import { BrendCrumbs } from "@/components";
import { SimpleLoader } from "@/components";
import { useDebounce } from "../../../hooks/useDebounce";

export const VU_10 = () => {
  const [isLoadingData, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState(null);
  const carriageSerach = useDebounce(searchValue);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentPage, setCurrentPage] = useState(0);
  const [gettingData, setGettingData] = useState([]);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };
  const fetchData = async (page) => {
    setIsLoading(true);
    const { response } = await new UserApi().getVu10(page);
    if (response) {
      setIsLoading(false);
      setGettingData(response?.data);
    }
  };

  useEffect(() => {
    const params = {
      page: currentPage + 1,
      ...(carriageSerach && { search: carriageSerach }),
    };

    fetchData(params);
  }, [carriageSerach, currentPage]);
  const memoData = useMemo(() => gettingData, [gettingData]);

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
        VU-10 Jurnali
      </Heading>
      <BrendCrumbs />

      <Box my={3}>
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
      {gettingData?.results?.length ? (
        <TableContainer p={4} border={"1px solid #eeeee"}>
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
            borderRadius={10}
            size={"sm"}
            whiteSpace={"pre-wrap"}
            variant={"striped"}
            overflow={"hidden"}
            colorScheme="blackAlpha"
          >
            <Thead bg={"#0c6170"} rounded={10}>
              <Tr></Tr>
            </Thead>

            <Tbody>
              {gettingData?.results?.map((item, idx) => (
                <Tr key={item.carriage}>
                  <Td>{currentPage * 10 + idx + 1}</Td>
                  <Td fontWeight={700} color={"green.900"}>
                    {item.carriage_number}
                  </Td>
                  <Td
                    fontWeight={700}
                    color={"green.900"}
                    whiteSpace={"nowrap"}
                  >
                    <ul>
                      <li>
                        Kun: {timeMoment(item?.created_at)?.day} <br />
                      </li>
                      <li> Soat:{timeMoment(item?.created_at)?.time}</li>
                    </ul>
                  </Td>
                  <Td>{item.is_freight ? "Yukli" : "Yuksiz"}</Td>
                  <Td>{item.train_number}</Td>
                  <Td>{item.last_repair}</Td>
                  <Td>{item.buksa}</Td>
                  <Td>{item.rolik_podshipnik}</Td>
                  <Td>{item.boshqa_tech_error}</Td>
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
      ) : !isLoadingData ? (
        <Flex align={"center"} flexDir={"column"} my={12} gap={4}>
          <FontAwesomeIcon icon={faBook} fontSize={"70px"} opacity={"0.4"} />
          <Text
            as={"h1"}
            fontWeight={600}
            textAlign={"center"}
            fontSize={"2xl"}
          >
            VU-10 jurnali topilmadi
          </Text>
        </Flex>
      ) : (
        <SimpleLoader />
      )}
    </Box>
  );
};
VU_10.propTypes = {
  data: PropTypes.array,
};
