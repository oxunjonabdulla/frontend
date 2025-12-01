import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Image,
  Input,
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
import { faBook, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";

import { SliderMock } from "../../utils";
import { VU_68_Model } from "./Modals/VU_68_Model";
import { vu_68 } from "../../utils/mock_heads";
import UserApi from "../../Service/module/userModule.api";
import { imageGet } from "../../utils/imageGet";
import { Pagination } from "../pagination/Pagination";
import { Deleteted } from "../Deletete";
import { useDebounce } from "../../hooks/useDebounce";
import { ImageSignature } from "../ImageSignature";
import { VU_68_Show } from "../../pages/AssemblyPage/VU_68_Show";
import { IsImzo } from "../IsImzo";

export const VU_68 = () => {
  const [isLoadingFulStatistik, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [gettingData, setGettingData] = useState([]);
  const [delateModal, setDelateModal] = useState(null);
  const [deletedID, setDeleteID] = useState(null);

  const [searchValue, setSearchValue] = useState(null);
  const carriageSerach = useDebounce(searchValue);
  const [showAllData, setShowAllData] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenShowAll,
    onClose: onCloseShowAll,
    onOpen: onOpenShowAll,
  } = useDisclosure();
  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  const handleShowAll = (data) => {
    onOpenShowAll();
    setShowAllData(data);
  };

  const fetchData = async (page) => {
    setIsLoading(true);
    const { response } = await new UserApi().getVu68(page);
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
  const handleDelate = async (carriageID) => {
    const { response } = await new UserApi().deleteVu68(carriageID);
    if (response) {
      window.location.reload();
    }
  };
  const handleCheckAndDelete = (deletedID) => {
    setDelateModal(true);
    setDeleteID(deletedID);
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
      <Heading as={"h3"} size={"md"} mb={5} textAlign={"center"} mx={"auto"}>
        VU-68 - Таъмирдан чиқаётган вагонларнинг тормоз синовини қайд этиш
        журнали
      </Heading>
      <Tooltip
        label="VU-68 Jurnalini qo'shish"
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
                  {vu_68?.nestedHeaders.map((item) => (
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
                  <Th rowSpan={2} colSpan={2}>Amallar</Th>
                </Tr>
                <Tr>
                  {vu_68?.nestedTwo.map((item, idx) => (
                    <Th fontSize={"10px"} key={idx} textAlign={"center"}>
                      {item}
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
                      <IsImzo isImzo={item?.author_info?.user_signature_url} />
                    </Td>
                    <Td>
                      <IsImzo
                        isImzo={item?.collect_workshop_master_signature}
                      />
                    </Td>
                    <Td>
                      <IconButton
                        onClick={() => handleCheckAndDelete(item?.carriage)}
                        colorScheme="red"
                        icon={<FontAwesomeIcon icon={faTrash} />}
                      />
                    </Td>
                    <Td>
                      <Flex justify={"center"} gap={2} m={0}>
                        <IconButton
                          bg="blue.500"
                          color="white"
                          onClick={() => handleShowAll(item)}
                          icon={<FontAwesomeIcon icon={faEye} />}
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
              VU-68 jurnali topilmadi
            </Text>
            <Button colorScheme="teal" onClick={onOpen}>
              VU-68 qo&apos;shish
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
      <VU_68_Show
        onClose={onCloseShowAll}
        isOpen={isOpenShowAll}
        data={showAllData}
      />
      <VU_68_Model onClose={onClose} isOpen={isOpen} />
      <Deleteted
        isOpen={delateModal}
        onClose={setDelateModal}
        carriageNumber={deletedID}
        deletedFunction={handleDelate}
      />
    </Box>
  );
};

VU_68.propTypes = {
  data: PropTypes.object,
};
