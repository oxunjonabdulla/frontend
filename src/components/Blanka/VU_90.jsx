import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
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
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useEffect, useState } from "react";
import { SliderMock } from "../../utils";
import { vu_90 } from "../../utils/mock_heads";
import { VU_90_Model } from "./Modals/VU_90_Model";
import UserApi from "../../Service/module/userModule.api";
import { Pagination } from "../pagination/Pagination";
const data = [0];
export const VU_90 = () => {
  const [isLoadingFulStatistik, setIsLoading] = useState(true);
  const [getTableData, setGetinfTableData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [gettingData, setGettingData] = useState([]);
  const [delateModal, setDelateModal] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };
  const fetchData = async (page) => {
    setIsLoading(true);
    const { response } = await new UserApi().getVu90(page);
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
    const { response } = await new UserApi().delVu91(carriageID);
    if (response) {
      window.location.reload();
    }
  };
  useEffect(() => {
    fetchData(currentPage);
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
        VU-90 Shakl
      </Heading>
      <Tooltip
        label="VU-90 Shaklini qo'shish"
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
              shadow={"lg"}
            >
              <Thead bg={"#0c6170"} rounded={10}>
                <Tr>
                  {vu_90?.headers?.map((item) => (
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
                <Tr>
                  {vu_90?.nestedHeaders?.map((item, idx) => (
                    <Th
                      fontSize={"10px"}
                      key={idx}
                      textAlign={"center"}
                      rowSpan={item.rowspan}
                      colSpan={item.colspan}
                    >
                      {item?.isImg ? (
                        <Img src={item?.label} w={"80%"} mx={"auto"} />
                      ) : (
                        item?.label
                      )}
                    </Th>
                  ))}
                </Tr>
                <Tr>
                  {vu_90?.nestedDeepHeaders?.map((item, idx) => (
                    <Th fontSize={"10px"} key={idx} textAlign={"center"}>
                      {item?.label}
                    </Th>
                  ))}
                </Tr>
              </Thead>

              <Tbody>
                {gettingData?.results?.map((e, idx) => (
                  <Fragment key={e?.id}>
                    <Tr>
                      <Td rowSpan={2}>{currentPage * 10 + idx + 1}</Td>
                      <Td rowSpan={2}>{e?.collection_date}</Td>
                      <Td rowSpan={2}>{e?.wheel_pair}</Td>
                      <Td rowSpan={2}>{e?.wheel_pair_medal}</Td>
                      <Td>O&apos;ng</Td>
                      <Td colSpan={2}>{e?.neck_stumb_right_d1}</Td>
                      <Td colSpan={2}>{e?.neck_stumb_right_d2}</Td>
                      <Td colSpan={2}>{e?.neck_stumb_right_d3}</Td>
                      <Td rowSpan={2}>{e?.neck_stumb_right_d3}</Td>
                    </Tr>
                    <Tr>
                      <Td>Chap</Td>
                      <Td>asd</Td>
                      <Td>asd</Td>
                      <Td>asd</Td>
                      <Td>asd</Td>
                      <Td>asd</Td>
                      <Td>asd</Td>
                      <Td>asd</Td>
                      <Td>asd</Td>
                      <Td>asd</Td>
                      <Td>asd</Td>
                      <Td>asd</Td>
                      <Td>asd</Td>
                      <Td>asd</Td>
                      <Td>asd</Td>
                      <Td>asd</Td>
                      <Td>asd</Td>
                      <Td>asd</Td>
                      <Td>asd</Td>
                      <Td>asd</Td>
                      <Td>asd</Td>
                      <Td>asd</Td>
                      <Td>asd</Td>
                      <Td>asd</Td>
                      <Td>asd</Td>
                    </Tr>
                  </Fragment>
                ))}
              </Tbody>
            </Table>
            <Pagination
              pageCount={gettingData?.count}
              onPageChange={handlePageClick}
            />
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
              VU-90 Shakl topilmadi
            </Text>
            <Button colorScheme="teal" onClick={onOpen}>
              VU-90 Shakl qo&apos;shish
            </Button>
          </Flex>
        )
      ) : (
        <SliderMock setIsLoading={setIsLoading} />
      )}

      <VU_90_Model isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
