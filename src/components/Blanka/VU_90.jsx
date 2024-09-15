import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
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
import { faBook, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useEffect, useState } from "react";
import { reverseDateFormat, SliderMock } from "../../utils";
import { vu_90 } from "../../utils/mock_heads";
import { VU_90_Model } from "./Modals/VU_90_Model";
import UserApi from "../../Service/module/userModule.api";
import { Pagination } from "../pagination/Pagination";
import { Deleteted } from "../Deletete";
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
    const { response } = await new UserApi().deleteVu90(carriageID);
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
                      <Td rowSpan={2} whiteSpace={"nowrap"}>
                        {reverseDateFormat(e?.collection_date)}
                      </Td>
                      <Td rowSpan={2}>{e?.wheel_pair}</Td>
                      <Td rowSpan={2}>{e?.wheel_pair_medal}</Td>
                      <Td>O&apos;ng</Td>
                      <Td>{e?.neck_stumb_right_d1}</Td>
                      <Td>{e?.neck_stumb_right_dc1}</Td>
                      <Td>{e?.neck_stumb_right_d2}</Td>
                      <Td>{e?.neck_stumb_right_dc2}</Td>
                      <Td>{e?.neck_stumb_right_d3}</Td>
                      <Td>{e?.neck_stumb_right_dc3}</Td>
                      <Td rowSpan={2}>{e?.part_of_neck}</Td>
                      <Td rowSpan={2}>{e?.large_cone_part}</Td>
                      <Td rowSpan={2}>
                        <ul>
                          <li>D4: {e?.labyrinth_ring_d4}</li>
                          <li>D`4: {e?.labyrinth_ring_dc4}</li>
                        </ul>
                      </Td>
                      <Td rowSpan={2}>
                        <li>D3: {e?.labyrinth_ring_another_d3}</li>
                        <li>D`3: {e?.labyrinth_ring_another_dc3}</li>
                        <li>D4: {e?.labyrinth_ring_another_d4}</li>
                        <li>D`4: {e?.labyrinth_ring_another_dc4}</li>
                      </Td>
                      <Td rowSpan={2}>
                        <li>Oldi 1: {e?.radial_free_front}</li>
                        <li>Oldi 2: {e?.radial_free_front1}</li>
                        <li>Orqa 1: {e?.radial_free_back}</li>
                        <li>Orqa 2: {e?.radial_free_back1}</li>
                      </Td>
                      <Td>{e?.fasad_buks_d1}</Td>
                      <Td>{e?.fasad_buks_dc1}</Td>
                      <Td>{e?.fasad_buks_d2}</Td>
                      <Td>{e?.fasad_buks_dc2}</Td>
                      <Td rowSpan={2} whiteSpace={"nowrap"}>
                        <li>Orqa 1: {e?.maded_factory_creating_back}</li>
                        <li>Orqa 2: {e?.maded_factory_creating_back2}</li>
                        <li>Orqa 1: {e?.maded_factory_creating_back3}</li>
                        <li>Orqa 2: {e?.maded_factory_creating_back4}</li>
                      </Td>
                      <Td rowSpan={2} whiteSpace={"nowrap"}>
                        <li>Orqa 1: {e?.maded_factory_creating_front}</li>
                        <li>Orqa 2: {e?.maded_factory_creating_front2}</li>
                        <li>Orqa 1: {e?.maded_factory_creating_front3}</li>
                        <li>Orqa 2: {e?.maded_factory_creating_front4}</li>
                      </Td>
                      <Td rowSpan={2} whiteSpace={"nowrap"}>
                        <li> 1: {e?.bushing_clearance}</li>
                        <li> 2: {e?.bushing_clearance2}</li>
                        <li> 1: {e?.bushing_clearance3}</li>
                        <li> 2: {e?.bushing_clearance4}</li>
                      </Td>
                      <Td rowSpan={2} whiteSpace={"nowrap"}>
                        <li> 1: {e?.next_fasad_vtuk}</li>
                        <li> 2: {e?.next_fasad_vtuk2}</li>
                        <li> 1: {e?.next_fasad_vtuk3}</li>
                        <li> 2: {e?.next_fasad_vtuk4}</li>
                      </Td>
                      <Td rowSpan={2}>{e?.gass_pass_wheel}</Td>
                      <Td rowSpan={2} whiteSpace={"nowrap"}>
                        <li> 1: {e?.lzsini_1}</li>
                        <li> 2: {e?.lzsini_2}</li>
                      </Td>
                      <Td rowSpan={2}>Imzo</Td>
                      <Td rowSpan={2}>Imzo</Td>
                      <Td rowSpan={2}>{e?.comment}</Td>
                      <Td rowSpan={2}>
                        <IconButton
                          onClick={() => handleCheckAndDelete(e?.id)}
                          colorScheme="red"
                          icon={<FontAwesomeIcon icon={faTrash} />}
                        />
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Chap</Td>
                      <Td>{e?.neck_stumb_left_d1}</Td>
                      <Td>{e?.neck_stumb_left_dc1}</Td>
                      <Td>{e?.neck_stumb_left_d2}</Td>
                      <Td>{e?.neck_stumb_left_dc2}</Td>
                      <Td>{e?.neck_stumb_left_d3}</Td>
                      <Td>{e?.neck_stumb_left_dc3}</Td>
                      <Td>{e?.fasad_buks_d1_1}</Td>
                      <Td>{e?.fasad_buks_dc1_1}</Td>
                      <Td>{e?.fasad_buks_d2_1}</Td>
                      <Td>{e?.fasad_buks_dc2_1}</Td>
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

      <Deleteted
        isOpen={delateModal}
        onClose={setDelateModal}
        carriageNumber={String(getTableData)}
        deletedFunction={handleDelate}
      />
      <VU_90_Model isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
