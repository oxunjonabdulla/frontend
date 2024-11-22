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
import {
  faBook,
  faDownload,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { SliderMock } from "../../utils";
import { vu_91 } from "../../utils/mock_heads";
import { VU_91_Model } from "./Modals/VU_91_Model";
import UserApi from "../../Service/module/userModule.api";
import { imageGet } from "../../utils/imageGet";
import { Deleteted } from "../Deletete";
import { useDebounce } from "../../hooks/useDebounce";
import { Pagination } from "../pagination/Pagination";
import { ImageSignature } from "../ImageSignature";

export const VU_91 = () => {
  const [isLoadingFulStatistik, setIsLoading] = useState(true);
  const [getTableData, setGetinfTableData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [gettingData, setGettingData] = useState([]);
  const [delateModal, setDelateModal] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [searchValue, setSearchValue] = useState(null);
  const carriageSerach = useDebounce(searchValue);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };
  const fetchData = async (page) => {
    setIsLoading(true);
    const { response } = await new UserApi().getVu91(page);
    if (response) {
      setIsLoading(false);
      setGettingData(response?.data);
      console.log(response?.data);
      
    }
  };
  const handleCheckAndDelete = (deletedID) => {
    setDelateModal(true);
    setGetinfTableData(deletedID);
  };

  const handleDelate = async (carriageID) => {
    const { response } = await new UserApi().delVu91(carriageID);
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
        VU-91 Shakl
      </Heading>
      <Tooltip
        label="VU-91 Shaklini qo'shish"
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
          <FormLabel>Sana buyicha qidirish</FormLabel>
          <Input
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="yil-oy-kun"
            borderColor={"gray.600"}
            type="text"
          />
        </FormControl>
      </Box>
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
              shadow={"lg"}
            >
              <Thead bg={"#0c6170"} rounded={10}>
                <Tr>
                  {vu_91.map((item, idx) => (
                    <Th fontSize={"10px"} textAlign={"center"} key={idx}>
                      {item}
                    </Th>
                  ))}
                </Tr>
              </Thead>

              <Tbody>
                {gettingData?.results.map((item, idx) => (
                  <Tr key={item.id}>
                    <Td>{currentPage * 10 + idx + 1}</Td>
                    <Td>{item?.seen_date}</Td>
                    <Td>{item?.chartley_model}</Td>
                    <Td>{item?.chartley_made_and_year}</Td>
                    <Td>{item?.chartley_number}</Td>
                    <Td>{item?.defect_appearance}</Td>
                    <Td >
                      <ImageSignature
                        signatureImage={item?.user_signature_url}
                      />
                    </Td>
                    <Td>
                      <ImageSignature
                        signatureImage={item?.wheel_plumber_user_info?.signature_image}
                      />
                    </Td>
                    <Td>
                      {" "}
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
              VU-91 Shakli topilmadi
            </Text>
            <Button colorScheme="teal" onClick={onOpen}>
              VU-91 Shakl qo&apos;shish
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

      <VU_91_Model onClose={onClose} isOpen={isOpen} />
    </Box>
  );
};
