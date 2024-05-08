import {
  Box,
  Button,
  Divider,
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
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import {
  faBook,
  faChevronLeft,
  faChevronRight,
  faEye,
  faPlus,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { SliderMock } from "../../utils";
import { Dalolatnoma_Model } from "./Modals/Dalolatnoma/Dalolatnoma_Model";
import { dalolatnoma_head } from "../../utils/mock_heads";
import UserApi from "../../Service/module/userModule.api";
import ReactPaginate from "react-paginate";
import { Orqa } from "./Modals/Dalolatnoma/Orqa";
import ShowBack from "./Modals/Dalolatnoma/ShowBack";

export const Dalolatnoma = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isOPenBack,
    onClose: onCloseBack,
    onOpen: onOpenBack,
  } = useDisclosure();
  const {
    isOpen: isOpenShowBack,
    onClose: onCloseShowBack,
    onOpen: onOpenShowBack,
  } = useDisclosure();

  const [isLoadingData, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(0);
  const [gettingData, setGettingData] = useState([]);
  const [backId, setBackId] = useState(0);
  const [showBack, setShowBackData] = useState(0);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };
  const handleBack = (data) => {
    onOpenBack();
    setBackId(data);
  };
  const handleShowBack = (data) => {
    onOpenShowBack();
    setShowBackData(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const paramsPage = {
        page: currentPage + 1,
      };
      setIsLoading(true);
      const { response } = await new UserApi().getALlCollectAct(paramsPage);
      if (response) {
        setIsLoading(false);
        setGettingData(response?.data);
      }
    };
    fetchData();
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
        Кириш ва чиқиш далолатномаси
      </Heading>
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
      {!isLoadingData ? (
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
                  {dalolatnoma_head?.map((item) => (
                    <Th textAlign={"center"} key={item.label}>
                      {item.label}
                    </Th>
                  ))}
                  <Th textAlign={"center"}>Imzo</Th>
                  <Th textAlign={"center"}>Orqa qismi statusi</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {gettingData?.results?.map((item, idx) => (
                  <Tr key={item.carriage}>
                    <Td>{currentPage * 10 + idx + 1}</Td>
                    <Td fontWeight={700}>{item.carriage}</Td>
                    <Td>{item?.front_detail?.created_act_date}</Td>
                    <Td>{item?.front_detail?.train_number_act}</Td>
                    <Td>{item?.front_detail?.station_act}</Td>
                    <Td>{item?.front_detail?.number_act}</Td>
                    <Td>{item?.front_detail?.telegramma_repair_act}</Td>
                    <Td>{item?.front_detail?.carriage_number_act}</Td>
                    <Td>{item?.front_detail?.made_date}</Td>
                    <Td>
                      Kod: {item?.front_detail?.kod_act} <Divider my={2} />
                      Tegishli qismi {item?.front_detail?.whom_act}
                    </Td>

                    <Td color={"teal"}>Imzo tasdiqlangan</Td>
                    <Td color={"teal"}>
                      {!item?.back_detail ? (
                        <Flex justify={"center"} align={"center"} gap={2} m={0}>
                          <Text>Orqa tomonini kiritish:</Text>
                          <IconButton
                            onClick={() => handleBack(item?.carriage)}
                            colorScheme="messenger"
                            icon={<FontAwesomeIcon icon={faPlus} />}
                          />
                        </Flex>
                      ) : (
                        <Flex justify={"center"} gap={2} m={0}>
                          <IconButton
                            colorScheme="whatsapp"
                            onClick={() => handleShowBack(item?.back_detail)}
                            icon={<FontAwesomeIcon icon={faEye} />}
                          />
                        </Flex>
                      )}
                    </Td>
                    <Td>
                      <Flex gap={2} m={0}>
                        <IconButton
                          float={"right"}
                          borderColor={"red"}
                          minW={"30px"}
                          colorScheme="teal"
                          bgColor={"red"}
                          p={0}
                          _hover={{ bgColor: "red", opacity: "0.7" }}
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
              Кириш ва чиқиш назорати далолатномаси топилмади
            </Text>
            <Button colorScheme="teal" onClick={onOpen}>
              Қўшиш
            </Button>
          </Flex>
        )
      ) : (
        <SliderMock setIsLoading={setIsLoading} />
      )}

      {gettingData?.results?.length ? (
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
      ) : null}

      <ShowBack
        isOpen={isOpenShowBack}
        onClose={onCloseShowBack}
        dataBack={showBack}
      />
      <Orqa isOpen={isOPenBack} onClose={onCloseBack} carriageID={backId} />
      <Dalolatnoma_Model isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
