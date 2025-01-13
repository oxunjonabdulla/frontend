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
  faDownload,
  faEye,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import UserApi from "../../Service/module/userModule.api";
import { SliderMock } from "../../utils";
import { vu_50 } from "../../utils/mock_heads";
import { timeMoment } from "../../utils/roleTest";
import { Deleteted } from "../Deletete";
import { ImageSignature } from "../ImageSignature";
import { Pagination } from "../pagination/Pagination";
import Show_VU50_model from "./Modals/Show_VU50_model";
import { VU_50_Model } from "./Modals/VU_50_Model";

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
    const paramsPage = {
      page: page + 1,
    };
    const { response } = await new UserApi().getVu50(paramsPage);
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
              VU-50 Shakl qo&apos;shish
            </Button>
          </Flex>
        )
      ) : (
        <SliderMock setIsLoading={setIsLoading} />
      )}
      <Pagination
        pageCount={gettingData?.count}
        onPageChange={handlePageClick}
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
