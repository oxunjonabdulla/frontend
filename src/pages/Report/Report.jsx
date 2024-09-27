import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { SliderMock } from "../../utils";
import { Pagination } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faEye, faPlus } from "@fortawesome/free-solid-svg-icons";
import { ReportModal } from "./ReportModal";
import UserApi from "../../Service/module/userModule.api";
import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { timeMoment } from "../../utils/roleTest";
import { useNavigate } from "react-router";

export const Reports = () => {
  const [isLoadingData, setIsLoading] = useState(true);
  const [gettingData, setGettingData] = useState([]);

  const [searchValue, setSearchValue] = useState(null);
  const carriageSerach = useDebounce(searchValue);
  const [currentPage, setCurrentPage] = useState(0);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const fetchData = async (page) => {
    setIsLoading(true);
    const { response } = await new UserApi().getReportData(page);
    if (response) {
      setIsLoading(false);
      setGettingData(response?.data);
    }
  };
  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };
  const navigate = useNavigate();
  useEffect(() => {
    const params = {
      page: currentPage + 1,
      ...(carriageSerach && { search: carriageSerach }),
    };

    fetchData(params);
  }, [carriageSerach, currentPage]);

  return (
    <Container maxW="container.2xl">
      <Heading size={"xl"} textAlign={"center"} mt={14} fontWeight={500}>
        Hisbotlar
      </Heading>

      <Box
        as="div"
        bg={"#ffff"}
        my={8}
        mx="auto"
        rounded={"lg"}
        position={"relative"}
      >
        <Heading as={"h3"} size={"md"} mb={5} textAlign={"center"} mx={"auto"}>
          Jurnallar hisbotlar ro'yxati
        </Heading>

        <Flex justifyContent={"flex-end"}>
          <Button
            colorScheme="teal"
            my={10}
            float={"right"}
            rightIcon={<FontAwesomeIcon icon={faPlus} />}
            onClick={onOpen}
          >
            Hisobot olish
          </Button>
        </Flex>
        {/* <Box my={3}>
        <FormControl w={"250px"}>
          <FormLabel>Vagon nomer bo&apos;yicha qidirish</FormLabel>
          <Input
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Vagon Raqami Yozing"
            borderColor={"gray.600"}
            type="text"
          />
        </FormControl>
      </Box> */}
        {!isLoadingData ? (
          gettingData?.all_reports?.length > 0 ? (
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
                    <Th>T/R</Th>
                    <Th>vagon raqami</Th>
                    <Th>Jurnal turi</Th>
                    <Th>Hisobot yaratilgan vaqti</Th>
                    <Th>Holati</Th>
                    <Th>Harakatlar</Th>
                  </Tr>
                </Thead>

                <Tbody>
                  {gettingData?.all_reports?.map((item, idx) => (
                    <Tr key={item?.archive_id}>
                      <Td>{currentPage * 10 + idx + 1}</Td>
                      <Td fontWeight={700} color={"green.900"}>
                        {item?.carriage_number}
                      </Td>
                      <Td>{item?.journal_type}</Td>
                      <Td>{timeMoment(item?.archive_created_at)?.day}</Td>
                      <Td>
                        <Tag size="lg" colorScheme="green">
                          Hisbot chiqarilgan
                        </Tag>
                      </Td>
                      <Td>
                        <IconButton
                          onClick={() =>
                            navigate(`/report/${item?.archive_id}`)
                          }
                          colorScheme="messenger"
                          icon={<FontAwesomeIcon icon={faEye} />}
                        />
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          ) : (
            <Flex align={"center"} flexDir={"column"} my={12} gap={4}>
              <FontAwesomeIcon
                icon={faBook}
                fontSize={"70px"}
                opacity={"0.4"}
              />
            </Flex>
          )
        ) : (
          <SliderMock setIsLoading={false} />
        )}

        <Pagination pageCount={10} onPageChange={handlePageClick} />
        <ReportModal onClose={onClose} isOpen={isOpen} />
        {/* 
      <Deleteted
        isOpen={delateModal}
        onClose={setDelateModal}
        carriageNumber={deletedID}
        deletedFunction={handleDelate}
      /> */}
      </Box>
    </Container>
  );
};
