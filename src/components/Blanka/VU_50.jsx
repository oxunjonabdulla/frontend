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
  faDownload,
  faEye,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { SliderMock } from "../../utils";
import { VU_50_Model } from "./Modals/VU_50_Model";
import { vu_50 } from "../../utils/mock_heads";
import UserApi from "../../Service/module/userModule.api";
import ReactPaginate from "react-paginate";
import { Deleteted } from "../Deletete";
import Show_VU50_model from "./Modals/Show_VU50_model";
import { ImageSignature } from "../ImageSignature";
import { timeMoment } from "../../utils/roleTest";

export const VU_50 = () => {
  const [isLoadingFulStatistik, setIsLoading] = useState(true);
  const [getTableData, setGetinfTableData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [gettingData, setGettingData] = useState([]);
  const [delateModal, setDelateModal] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenShowModel,
    onOpen: onOpenShowModel,
    onClose: onCloseShowModel,
  } = useDisclosure();

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  const fetchData = async (page) => {
    setIsLoading(true);
    const { response } = await new UserApi().getVu50(page);
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
    const { response } = await new UserApi().delVu50(carriageID);
    if (response) {
      window.location.reload();
    }
  };
  
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handleOpenEye = (data) => {
    setShowModel(data);
    onOpenShowModel();
  };

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
        VU-50 Shakl
      </Heading>
      <Tooltip
        label=" VU-50 Shaklni qo'shish"
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
                  {vu_50?.headers?.map((item) => (
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
                    <Td>{item?.referral_number}</Td>
                    <Td>{item?.wheels_send_pair}</Td>
                    <Td>{item?.sanding_station_railway}</Td>
                    <Td>{item?.sending_station_name}</Td>
                    <Td>{item?.receiving_station_railway}</Td>
                    <Td>{item?.receiving_station_name}</Td>
                    <Td>
                      <ImageSignature
                        signatureImage={item?.wheel_signature_user_info?.signature_image}
                      />
                    </Td>
                    <Td colSpan={4}>
                      <IconButton
                        size={"lg"}
                        onClick={() => handleOpenEye(item)}
                        colorScheme="whatsapp"
                        icon={<FontAwesomeIcon icon={faEye} />}
                      />
                    </Td>

                    <Td>
                      <Flex gap={2} justifyContent={"center"}>
                        <IconButton
                          colorScheme="linkedin"
                          icon={<FontAwesomeIcon icon={faDownload} />}
                        />
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
              VU-50 Shakl topilmadi
            </Text>
            <Button colorScheme="teal" onClick={onOpen}>
              {" "}
              VU-50 Shakl qo&apos;shish
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
      <VU_50_Model onClose={onClose} isOpen={isOpen} />

      <Show_VU50_model
        isOpen={isOpenShowModel}
        onClose={onCloseShowModel}
        showData={showModel}
      />
    </Box>
  );
};
