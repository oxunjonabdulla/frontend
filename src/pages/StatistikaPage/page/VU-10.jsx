import { BrendCrumbs, SimpleLoader } from "@/components";
import UserApi from "@/Service/module/userModule.api";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Textarea,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import {
  faBook,
  faChevronLeft,
  faChevronRight,
  faPenToSquare,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Deleteted } from "../../../components";
import { useDebounce } from "../../../hooks/useDebounce";
import { timeMoment } from "../../../utils/roleTest";
import { timeClear } from "../../../utils/timeClear";

export const VU_10 = () => {
  const [isLoadingData, setIsLoading] = useState(true);

  const [updateData, setUpdateData] = useState(null);
  const [telegrammaText, setTelegrammaText] = useState("");
  const [searchValue, setSearchValue] = useState(null);
  const [delateModal, setDelateModal] = useState(false);
  const [getTableData, setGetinfTableData] = useState(null);
  const carriageSerach = useDebounce(searchValue);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentPage, setCurrentPage] = useState(0);
  const [gettingData, setGettingData] = useState([]);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };
  const handleCheckAndDelete = (deletedID) => {
    setDelateModal(true);
    setGetinfTableData(deletedID);
  };
  const handleDelate = async (carriageID) => {
    const { response } = await new UserApi().deleteVu10(carriageID);
    if (response) window.location.reload();
  };
  const fetchData = async (page) => {
    setIsLoading(true);
    const { response } = await new UserApi().getVu10(page);
    if (response) {
      setIsLoading(false);
      setGettingData(response?.data);
    }
  };
  const handleUpdateAndSubmit = async () => {
    setIsLoading(true);
    const { response } = await new UserApi().updateVu10(updateData?.id, {
      telegramma: telegrammaText,
    });
    if (response) {
      window.location.reload();
    }
  };

  useEffect(() => {
    const params = {
      page: currentPage + 1,
      ...(carriageSerach && { search: carriageSerach }),
    };

    fetchData(params);
  }, [carriageSerach, currentPage]);
  const handleUpdate = (data) => {
    onOpen();
    setUpdateData(data);
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
      <Modal
        isOpen={isOpen}
        w={"100%"}
        onClose={onClose}
        size={["sm", "md", "lg"]}
        isCentered
        motionPreset="slideInLeft"
      >
        <ModalOverlay backdropFilter="blur(10px) hue-rotate(10deg)" />
        <ModalContent>
          <ModalHeader textAlign={"center"}>
            VU-10 Telegramma qo'shish
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={2} fontSize="lg" fontWeight="medium">
              Telegramma kiriting
            </Text>
            <Textarea
              placeholder="Telegramma matnini kiriting..."
              size="md"
              value={telegrammaText}
              onChange={(e) => setTelegrammaText(e.target.value)}
              resize="vertical"
              rows={10}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme={"teal"} onClick={handleUpdateAndSubmit}>
              Saqlash
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

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
              <Tr>
                <Th>T/R</Th>
                <Th>Vagon raqami</Th>
                <Th>VU-10 bulgan vaqti</Th>
                <Th> Yukli | yuksiz</Th>
                <Th> Poyezd nomeri|yoki nosoz parkga o'tkazilgan yo'l</Th>
                <Th> Oxirgi ta'mir</Th>
                <Th> Telegramma</Th>
                <Th> Nosoz holdagi hisobi sanasi va vaqti </Th>
                <Th> </Th>
              </Tr>
            </Thead>

            <Tbody>
              {gettingData?.results?.map((item, idx) => (
                <Tr key={item.carriage_number}>
                  <Td>{currentPage * 10 + idx + 1}</Td>
                  <Td fontWeight={700} color={"green.900"}>
                    {item.carriage_number}
                  </Td>
                  <Td>{timeMoment(item.created_at)?.day}</Td>

                  <Td>{item.is_freight ? "Yukli" : "Yuksiz"}</Td>
                  <Td>{item.train_number}</Td>
                  <Td>{timeMoment(item.nosoz_kirish_date)?.day}</Td>
                  <Td>{item?.telegramma}</Td>
                  <Td>
                    {timeClear(item.nosoz_kirish_hour) +
                      ":" +
                      timeClear(item.nosoz_kirish_minute)}
                  </Td>
                  <Td>
                    <Flex gap={2}>
                      <IconButton
                        colorScheme="whatsapp"
                        icon={<FontAwesomeIcon icon={faPenToSquare} />}
                        onClick={() => handleUpdate(item)}
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
      <Deleteted
        isOpen={delateModal}
        onClose={() => setDelateModal(false)}
        carriageNumber={getTableData}
        deletedFunction={handleDelate}
        text={"id raqamiga tegishli vagon ma'lumotini o'chirmoqdasiz."}
      />
    </Box>
  );
};
VU_10.propTypes = {
  data: PropTypes.array,
};
