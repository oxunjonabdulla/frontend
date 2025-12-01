import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
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
  faEye,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { SliderMock } from "../../utils";
import { VU_54_Model } from "./Modals/VU_54_model";
import UserApi from "../../Service/module/userModule.api";
import ReactPaginate from "react-paginate";
import { Deleteted } from "../Deletete";
import { vu_54, vu_54_keys } from "../../utils/mock_heads";
import Show_VU54_model from "./Modals/Show_VU54_model";

export const VU_54 = () => {
  const [isLoadingFulStatistik, setIsLoading] = useState(true);
  const [getTableData, setGetinfTableData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [gettingData, setGettingData] = useState([]);
  const [delateModal, setDelateModal] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showModel, setShowModel] = useState(false);
  const {
    isOpen: isOpenShowModel,
    onOpen: onOpenShowModel,
    onClose: onCloseShowModel,
  } = useDisclosure();

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  const handleOpenEye = (data) => {
    setShowModel(data);
    onOpenShowModel();
  };

  const fetchData = async (page) => {
    setIsLoading(true);
    const { response } = await new UserApi().getVu54All(page);
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
    const { response } = await new UserApi().deleteVu54(carriageID);
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
        VU-54 Shakl
      </Heading>
      <Tooltip
        label=" VU-54 Shaklni qo'shish"
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
            >
              <Thead bg={"#0c6170"} rounded={10}>
                <Tr>
                  {vu_54?.map((item, idx) => (
                    <Th
                      fontSize={"10px"}
                      textAlign={"center"}
                      key={idx}
                      rowSpan={item?.rowspan}
                      colSpan={item?.colspan}
                    >
                      {item.label}
                    </Th>
                  ))}
                  <Th
                    fontSize={"10px"}
                    textAlign={"center"}
                    colSpan={2}
                  >
                    Amallar
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {gettingData?.results?.map((item, idx) => (
                  <Tr key={idx}>
                    <Td>{currentPage * 10 + idx + 1}</Td>
                    <Td>{item?.date}</Td>
                    {vu_54_keys.map((item2, idx) => (
                      <Td key={idx}>{item?.vu54_fields[0][item2]}</Td>
                    ))}
                    <Td>
                      <IconButton
                        size={"lg"}
                        onClick={() => handleOpenEye(item)}
                        bg="blue.500"
                        color="white"
                        icon={<FontAwesomeIcon icon={faEye} />}
                      />
                    </Td>
                    <Td>
                      <Flex gap={2} justifyContent={"center"}>
                        <IconButton
                          colorScheme="red"
                          onClick={() => handleCheckAndDelete(item?.id)}
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
              VU-54 Shakl topilmadi
            </Text>
            <Button colorScheme="teal" onClick={onOpen}>
              {" "}
              VU-54 Shakl qo&apos;shish
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
        carriageNumber={String(getTableData)}
        deletedFunction={handleDelate}
      />
      <VU_54_Model onClose={onClose} isOpen={isOpen} />

      <Show_VU54_model
        isOpen={isOpenShowModel}
        onClose={onCloseShowModel}
        showData={showModel}
      />
    </Box>
  );
};
