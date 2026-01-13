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
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import {
  faBook,
  faEye,
  faPlus,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { SliderMock } from "../../utils";
import { wheel_dalolatnoma_head } from "../../utils/mock_heads";
import UserApi from "../../Service/module/userModule.api";
import { Orqa } from "./Modals/WheelDalolatnoma/Orqa";
import { ShowBack } from "./Modals/WheelDalolatnoma/ShowBack";
import { Deleteted } from "../Deletete";
import { Pagination } from "../pagination/Pagination";
import { WheelDalolatnomaModal } from "./Modals/WheelDalolatnoma/WheelDalolatnomaModal";

export const WheelDalolatnoma = () => {
  const [isLoadingData, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(0);
  const [gettingData, setGettingData] = useState([]);
  const [backId, setBackId] = useState(0);
  const [deleteID, setDeleteID] = useState(null);
  const [deleteModel, setDeleteModal] = useState(false);
  const [showBack, setShowBackData] = useState(0);

  const {
    isOpen: isOpenShowBack,
    onClose: onCloseShowBack,
    onOpen: onOpenShowBack,
  } = useDisclosure();

  const { isOpen, onClose, onOpen } = useDisclosure();

  const {
    isOpen: isOPenBack,
    onClose: onCloseBack,
    onOpen: onOpenBack,
  } = useDisclosure();

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };
  const handleShowBack = (data) => {
    onOpenShowBack();
    setShowBackData(data);
  };
  const handleBack = (data) => {
    onOpenBack();
    setBackId(data);
  };

  const handleDelate = async (carriageID) => {
    const { response } = await new UserApi().deleteWheelAct(carriageID);
    if (response) {
      window.location.reload();
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const paramsPage = {
        page: currentPage + 1,
      };
      setIsLoading(true);
      const { response } = await new UserApi().getWheelAll(paramsPage);
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
        Kirish va chiqish dalolatnomasi
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
                  {wheel_dalolatnoma_head?.map((item) => (
                    <Th
                      textAlign={"center"}
                      key={item.label}
                      colSpan={item.colspan}
                    >
                      {item.label}
                    </Th>
                  ))}
                  <Th>Imzo</Th>
                  <Th>Ta’mirdan keyingi ma’lumotlar</Th>
                  <Th>Amallar</Th>
                </Tr>
              </Thead>

              <Tbody>
                {gettingData?.results?.map((item, idx) => (
                  <Tr key={item.carriage}>
                    <Td>{currentPage * 10 + idx + 1}</Td>
                    <Td fontWeight={700}>{item.carriage}</Td>
                    <Td>{item?.front_detail.koleso_raqam_1}</Td>
                    <Td>{item?.front_detail.koleso_raqam_2}</Td>
                    <Td>{item?.front_detail.koleso_raqam_3}</Td>
                    <Td>{item?.front_detail.koleso_raqam_4}</Td>
                    <Td>{item?.front_detail.koleso_zavod_1}</Td>
                    <Td>{item?.front_detail.koleso_zavod_2}</Td>
                    <Td>{item?.front_detail.koleso_zavod_3}</Td>
                    <Td>{item?.front_detail.koleso_zavod_4}</Td>
                    <Td>{item?.front_detail.mavjud_kod_1}</Td>
                    <Td>{item?.front_detail.mavjud_kod_2}</Td>
                    <Td>{item?.front_detail.mavjud_kod_3}</Td>
                    <Td>{item?.front_detail.mavjud_kod_4}</Td>
                    <Td color={"teal"}>Imzo tasdiqlangan</Td>
                    <Td color={"teal"}>
                      {!item?.back_detail ? (
                        <Flex justify={"center"} align={"center"} gap={2} m={0}>
                          <Text>Qo'shish</Text>
                          <IconButton
                            onClick={() => handleBack(item?.carriage)}
                            colorScheme="blue"
                            icon={<FontAwesomeIcon icon={faPlus} />}
                          />
                        </Flex>
                      ) : (
                        <Flex justify={"center"} gap={2} m={0}>
                          <IconButton
                            bg="blue.500"
                            color="white"
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
          onPageChange={handlePageClick}
          pageCount={gettingData?.count}
        />
      ) : null}
      <ShowBack
        isOpen={isOpenShowBack}
        onClose={onCloseShowBack}
        dataBack={showBack}
      />
      <Orqa isOpen={isOPenBack} onClose={onCloseBack} carriageID={backId} />
      <WheelDalolatnomaModal isOpen={isOpen} onClose={onClose} />

      <Deleteted
        isOpen={deleteModel}
        onClose={setDeleteModal}
        carriageNumber={deleteID}
        deletedFunction={handleDelate}
      />
    </Box>
  );
};
