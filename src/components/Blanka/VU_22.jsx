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
  faDownload,
  faEye,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { reverseDateFormat, SliderMock } from "../../utils";
import { vu_22_assabmle } from "../../utils/mock_heads";
import UserApi from "../../Service/module/userModule.api";

import { Deleteted } from "../Deletete";
import { VU_22_Model } from "./Modals/VU_22_Model";
import { timeClear } from "../../utils/timeClear";
import { imageGet } from "../../utils/imageGet";
import { Pagination } from "../pagination/Pagination";
export const VU_22 = () => {
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
    const { response } = await new UserApi().getVu22(page);
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
    const { response } = await new UserApi().deleteVu22(carriageID);
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
        VU-22 Shakl
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
                  {vu_22_assabmle?.map((item) => (
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

                    <Td fontWeight={"bold"}>{item?.carriage}</Td>
                    <Td>{item?.carrying_capacity}</Td>
                    <Td>{item?.cladding_material}</Td>
                    <Td>{item?.place_last_repair}</Td>
                    <Td>{reverseDateFormat(item?.date_last_repair)}</Td>
                    <Td>
                      {reverseDateFormat(item?.date_of_repair)}
                      <br />
                      {timeClear(item?.hour_of_repair) +
                        ":" +
                        timeClear(item?.minute_of_repair)}
                    </Td>
                    <Td>
                      {reverseDateFormat(item?.repair_completion_date)}
                      <br />
                      {timeClear(item?.repair_completion_hour) +
                        ":" +
                        timeClear(item?.repair_completion_minute)}
                    </Td>
                    <Td>
                      <Image
                        width={"100px"}
                        src={imageGet(item?.author_info?.user_signature_url)}
                      />
                    </Td>
                    <Td>
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
                          onClick={() => handleCheckAndDelete(item?.carriage)}
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
              VU-22 Shakl topilmadi
            </Text>
            <Button colorScheme="teal" onClick={onOpen}>
              {" "}
              VU-22 Shakl qo&apos;shish
            </Button>
          </Flex>
        )
      ) : (
        <SliderMock setIsLoading={setIsLoading} />
      )}
      <Pagination
        onPageChange={handlePageClick}
        pageCount={Math.ceil(
          (gettingData?.count ? gettingData?.count : 0) / 10
        )}
      />
      <Deleteted
        isOpen={delateModal}
        onClose={setDelateModal}
        carriageNumber={getTableData}
        deletedFunction={handleDelate}
      />
      <VU_22_Model onClose={onClose} isOpen={isOpen} />

      {/* <Show_VU50_model
        isOpen={isOpenShowModel}
        onClose={onCloseShowModel}
        showData={showModel}
      /> */}
    </Box>
  );
};
