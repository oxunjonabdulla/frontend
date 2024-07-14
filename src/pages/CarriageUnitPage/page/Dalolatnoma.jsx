import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
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
import { faBook, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { SliderMock } from "@/utils";
import { carriage_dalolatnoma_head } from "@/utils/mock_heads";
import { Auto_dalolatnoma_model } from "./modal/AutoDalolatnoma/Auto_dalolatnoma_model";
import UserApi from "@/Service/module/userModule.api";

import { faEye } from "@fortawesome/free-regular-svg-icons";
import { Orqa } from "./modal/AutoDalolatnoma/Orqa";
import { ShowBack } from "./modal/AutoDalolatnoma/ShowBack";
import { Deleteted, Pagination } from "../../../components";
import { repairTypesName } from "../../../utils";
import { useDebounce } from "../../../hooks/useDebounce";

export const CarriageDalolatnoma = () => {
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
  const [deleteID, setDeleteID] = useState(null);
  const [deleteModel, setDeleteModal] = useState(false);
  const [showBack, setShowBackData] = useState(0);

  const [searchValue, setSearchValue] = useState(null);
  const carriageSerach = useDebounce(searchValue);

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
  const handleDelate = async (carriageID) => {
    const { response } = await new UserApi().deleteAravaAct(carriageID);
    if (response) {
      window.location.reload();
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const paramsPage = {
        page: currentPage + 1,

        ...(carriageSerach && { search: carriageSerach }),
      };
      setIsLoading(true);
      const { response } = await new UserApi().getALlAravaAct(paramsPage);
      if (response) {
        setIsLoading(false);
        setGettingData(response?.data);
      }
    };
    fetchData();
  }, [carriageSerach, currentPage]);

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
              shadow={"lg"}
            >
              <Thead bg={"#0c6170"} rounded={10}>
                <Tr>
                  {carriage_dalolatnoma_head?.map((item) => (
                    <Th
                      textAlign={"center"}
                      key={item.label}
                      colSpan={item.colspan}
                    >
                      {item.label}
                    </Th>
                  ))}
                </Tr>
              </Thead>

              <Tbody>
                {gettingData?.results?.map((item, idx) => (
                  <Tr key={item.carriage}>
                    <Td>{currentPage * 10 + idx + 1}</Td>
                    <Td fontWeight={700}>{item.carriage}</Td>
                    <Td>{repairTypesName(item?.front_detail.repair_type)}</Td>
                    <Td>{item?.front_detail.yon_raqam_1}</Td>
                    <Td>{item?.front_detail.yon_raqam_2}</Td>
                    <Td>{item?.front_detail.yon_raqam_3}</Td>
                    <Td>{item?.front_detail.yon_raqam_4}</Td>
                    <Td>{item?.front_detail.auto_zavod_1}</Td>
                    <Td>{item?.front_detail.auto_zavod_2}</Td>
                    <Td>{item?.front_detail.auto_zavod_3}</Td>
                    <Td>{item?.front_detail.auto_zavod_4}</Td>
                    <Td>{item?.front_detail.mavjud_kod_1}</Td>
                    <Td>{item?.front_detail.mavjud_kod_2}</Td>
                    <Td>{item?.front_detail.mavjud_kod_3}</Td>
                    <Td>{item?.front_detail.mavjud_kod_4}</Td>
                    <Td>
                      Yon №1: {item?.front_detail.restor_balka_yon_1}
                      <Divider my={2} />
                      Yon №2: {item?.front_detail.restor_balka_yon_2}
                    </Td>
                    <Td>
                      Zavod Tamgasi №1:{" "}
                      {item?.front_detail.restor_balka_zavod_1}
                      <Divider my={2} />
                      Zavod Tamgasi №2:{" "}
                      {item?.front_detail.restor_balka_zavod_2}
                    </Td>
                    <Td>
                      Mavjudlik Kodi №1: {item?.front_detail.restor_balka_kod_1}
                      <Divider my={2} />
                      Mavjudlik Kodi №2: {item?.front_detail.restor_balka_kod_2}
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
                          colorScheme="red"
                          onClick={() => {
                            setDeleteID(item?.carriage);
                            setDeleteModal(true);
                          }}
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
        <Pagination
          pageCount={gettingData?.count}
          onPageChange={handlePageClick}
        />
      ) : null}

      <Orqa isOpen={isOPenBack} onClose={onCloseBack} carriageID={backId} />
      <ShowBack
        isOpen={isOpenShowBack}
        onClose={onCloseShowBack}
        dataBack={showBack}
      />
      <Deleteted
        isOpen={deleteModel}
        onClose={setDeleteModal}
        carriageNumber={deleteID}
        deletedFunction={handleDelate}
      />
      <Auto_dalolatnoma_model isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
