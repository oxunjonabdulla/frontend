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
  Image,
  Input,
  Spinner,
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
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Deleteted, ImageSignature, IsImzo, Pagination } from "../../../components";
import { useDebounce } from "../../../hooks/useDebounce";
import { imageGet } from "../../../utils/imageGet";
import { timeMoment } from "../../../utils/roleTest";
import { VU_32Modal } from "./modal/VU_32Modal";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { VU_32_Show } from "./VU_32_show";

export const VU_32 = () => {
  const [isLoadingData, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState(null);
  const carriageSerach = useDebounce(searchValue);
  const [currentPage, setCurrentPage] = useState(0);
  const [gettingData, setGettingData] = useState([]);
  const [deleteID, setDeleteID] = useState(null);
  const [deleteModel, setDeleteModal] = useState(false);
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
    const { response } = await new UserApi().getVu32All(page);
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
    const { response } = await new UserApi().deleteVu32(carriageID);
    if (response) {
      window.location.reload();
    }
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
        VU-32 Jurnali
      </Heading>
      <BrendCrumbs />

      <Tooltip
        label="VU-32 Jurnalini qo'shish"
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
          <FormLabel>Vagon raqam bo&apos;yicha qidirish</FormLabel>
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
            shadow={"lg"}
          >
            <Thead bg={"#0c6170"} rounded={10}>
              <Tr>
                <Th>Sana</Th>
                <Th>Telejka uzatilgan vagonning raqami</Th>
                <Th>Ma'lumot yaratilgan vaqti</Th>
                <Th>Vagon qurilgan sanasi</Th>
                <Th>Vagon ostidagi telejkaning tartib raqami</Th>
                <Th>Yon ramaning raqami</Th>
                <Th>Ishlab - chiqaruvchi zavod (tamg’asi)</Th>
                <Th> Ishlab chiqarilgan yili </Th>
                <Th> M o’lchami - “ Yon ramasining bazasi”, mm.</Th>
                <Th> Tayanch yuzasining tiklanishi (ha/yo’q)</Th>
                <Th> Xizmat muddati uzaytirilish belgisi ( ha/yo’q)</Th>
                <Th> Yangi xizmat muddati tugagan yili</Th>
                <Th> Xizmat muddatini uzytirgan tashkilotning tamg’asi </Th>
                <Th> Ressor usti to’sini-ning raqami</Th>
                <Th> Ishlab- chiqaruvchi zavod (tamg’asi)</Th>
                <Th> Ishlab chiqarilgan yili</Th>
                <Th> Pyatnik osti quril-masining chuqurligi, mm.</Th>
                <Th>
                  Ressor usti to’sini -dagi pyatnik osti qurilmasining
                  di-ametri,mm{" "}
                </Th>
                <Th>Pyatnik osti qurilmasini tiklash</Th>
                <Th>Xizmat muddati uzaytirilish belgisi ( ha/yo’q )</Th>
                <Th>Yangi xizmat muddati tugashining yili</Th>
                <Th>Xizmat muddatini uzytirgan tashkilot--ning tamg’asi</Th>
                <Th colSpan={2}>
                  {" "}
                  Friktsion ponаsining yuqorilаshishi (+) yoki quyilаshishi (-),
                  mm.
                </Th>
                <Th colSpan={2}>
                  {" "}
                  Telejkа yon rаmаsining yonаltiruvchilаri vа buksа korpusi
                  o‘rtаsidаgi umumiy bo’ylаmа orаlig‘i
                </Th>
                <Th colSpan={2}>
                  Telejkа yon rаmаsi-ning yo‘nаltiruv-chilаri vа buksа korpusi
                  o‘rtаsidаgi umumiy kundаlаng orаlig‘i
                </Th>
                <Th>
                  Telejkа vа vаgon sirpаngich-lаri o‘rtаsidаgi orаliq, mm.
                </Th>
                <Th>
                  Telejkаdа bаjаrilgаn tаhmir turi: KR-1, DR-2; M-1698-3
                  modernizаtsiyalаnishi; “А.stаki”- 4 turdаgi tebrаnishlаr
                  friktsion so‘ndirgichlаri bilаn jihozlаnishi
                </Th>
                <Th>Bog‘lovchi bаlkаning raqаmi </Th>
                <Th>Ishlаb - chiqаruvchi zаvod (tаmg’аsi) </Th>
                <Th>Ishlаb chiqаrilgаn yili</Th>
                <Th>
                  Bog’lovchi bаlkаsi pyatnik osti qurilmаsining diаmetri, mm.
                </Th>
                <Th>Defektoskopchining imzosi </Th>
                <Th>Brigаdir imzosi </Th>
                <Th>TTNB vаgon qаbul qiluvchisining imzosi </Th>
                <Th>Korxonа rаhbаrining imzosi yoki muovinining </Th>
                <Th colSpan={2} textAlign={"center"}>Amallar</Th>
              </Tr>
              <Tr>
                <Th>1</Th>
                <Th>2</Th>
                <Th>3</Th>
                <Th>4</Th>
                <Th>5</Th>
                <Th>6</Th>
                <Th>7 </Th>
                <Th>8</Th>
                <Th>9</Th>
                <Th>10</Th>
                <Th>11</Th>
                <Th>12</Th>
                <Th>13</Th>
                <Th>14</Th>
                <Th>15</Th>
                <Th>16</Th>
                <Th>17</Th>
                <Th>18</Th>
                <Th>19</Th>
                <Th>20</Th>
                <Th>21</Th>
                <Th>22</Th>
                <Th>23</Th>
                <Th>24</Th>
                <Th>25</Th>
                <Th>26</Th>
                <Th>27</Th>
                <Th>28</Th>
                <Th>29</Th>
                <Th>30</Th>
                <Th>31</Th>
                <Th>32</Th>
                <Th>33</Th>
                <Th>34</Th>
                <Th>35</Th>
                <Th>36</Th>
                <Th>37</Th>
                <Th>38</Th>
                <Th colSpan={2}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {gettingData?.results?.map((e) => (
                <>
                  <Tr>
                    <Td rowSpan={8} whiteSpace={"nowrap"}>
                      {timeMoment(e?.date)?.day}
                    </Td>
                    <Td rowSpan={8} fontWeight={"bold"}>
                      {e?.carriage}
                    </Td>
                    <Td
                      rowSpan={8}
                      fontWeight={700}
                      color={"green.900"}
                      whiteSpace={"nowrap"}
                    >
                      <ul>
                        <li>
                          Kun: {timeMoment(e?.created_at)?.day} <br />
                        </li>
                        <li> Soat:{timeMoment(e?.created_at)?.time}</li>
                      </ul>
                    </Td>
                    <Td rowSpan={8} whiteSpace={"nowrap"}>
                      {e?.carriage_build_date}
                    </Td>
                    <Td rowSpan={4}>1</Td>
                    <Td colSpan={8} textAlign={"center"}>
                      Chаp yon rаmаsi
                    </Td>

                    <Td rowSpan={4}>{e?.ressor_number}</Td>
                    <Td rowSpan={4}>{e?.ressor_factory_medal}</Td>
                    <Td rowSpan={4}>{e?.ressor_made_year}</Td>
                    <Td rowSpan={4}>{e?.ressor_pyatnik_deep}</Td>
                    <Td rowSpan={4}>{e?.ressor_pyatnik_deep_diametr}</Td>
                    <Td rowSpan={4}>{e?.ressor_reverse}</Td>
                    <Td rowSpan={4}>{e?.ressor_service_life}</Td>
                    <Td rowSpan={4}>{e?.ressor_new_year_expired}</Td>
                    <Td rowSpan={4}>{e?.ressor_extend_factory}</Td>

                    <Td colSpan={6} textAlign={"center"}>
                      Chap yon rаmаsi
                    </Td>
                    <Td>Chap</Td>
                    <Td rowSpan={8}>{e?.telejka_repair_type}</Td>
                    <Td rowSpan={8}>{e?.balka_number}</Td>
                    <Td rowSpan={8}>{e?.balka_factory}</Td>
                    <Td rowSpan={8}>{e?.balka_made_year}</Td>
                    <Td rowSpan={8}>{e?.balka_pyatnik}</Td>
                    <Td rowSpan={8}>
                      <IsImzo isImzo={e?.defestoskop_signature_user_signature} />
                    </Td>
                    <Td rowSpan={8}>
                      <IsImzo isImzo={e?.signature_image_url} />
                    </Td>
                    <Td rowSpan={8}>
                      <IsImzo isImzo={e?.receiving_master_user_signature} />
                    </Td>
                    <Td rowSpan={8}>
                      <IsImzo isImzo={e?.deputy_head_signature} />
                    </Td>
                    <Td rowSpan={8}>
                      <Flex gap={2} m={0}>
                        <IconButton
                          colorScheme="red"
                          onClick={() => {
                            setDeleteID(e?.carriage);
                            setDeleteModal(true);
                          }}
                          icon={<FontAwesomeIcon icon={faTrashAlt} />}
                        />
                      </Flex>
                    </Td>
                    <Td rowSpan={8}>
                      <Flex justify={"center"} gap={2} m={0}>
                        <IconButton
                          bg="blue.500"
                          color="white"
                          onClick={() => handleShowAll(e)}
                          icon={<FontAwesomeIcon icon={faEye} />}
                        />
                      </Flex>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>{e?.side_number_first_levaya}</Td>
                    <Td>{e?.factory_medal_first_levaya}</Td>
                    <Td>{e?.created_year_first_levaya}</Td>
                    <Td>{e?.side_baza_first_levaya}</Td>
                    <Td>{e?.stump_stend_first_levaya}</Td>
                    <Td>{e?.service_life_first_levaya}</Td>
                    <Td>{e?.new_service_first_levaya}</Td>
                    <Td>{e?.service_extend_first_levaya}</Td>

                    <Td>{e?.friktsion_upper_left_first_levaya}</Td>
                    <Td>{e?.friktsion_upper_right_first_levaya}</Td>
                    <Td>{e?.telejka_side_left_first_levaya}</Td>
                    <Td>{e?.telejka_side_right_first_levaya}</Td>
                    <Td>{e?.telejka_wayto_left_first_levaya}</Td>
                    <Td>{e?.telejka_wayto_right_first_levaya}</Td>
                    <Td>{e?.telejka_carriage_slip_left_first_levaya}</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign={"center"} colSpan="8">
                      On'g Yon ramasi
                    </Td>
                    <Td textAlign={"center"} colSpan="6">
                      On'g Yon ramasi
                    </Td>
                    <Td>On'g</Td>
                  </Tr>
                  <Tr>
                    <Td>{e?.side_number_first_bokavaya}</Td>
                    <Td>{e?.factory_medal_first_bokavaya}</Td>
                    <Td>{e?.created_year_first_bokavaya}</Td>
                    <Td>{e?.side_baza_first_bokavaya}</Td>
                    <Td>{e?.stump_stend_first_bokavaya}</Td>
                    <Td>{e?.service_life_first_bokavaya}</Td>
                    <Td>{e?.new_service_first_bokavaya}</Td>
                    <Td>{e?.service_extend_first_bokavaya}</Td>

                    <Td>{e?.friktsion_upper_left_first_bokavaya}</Td>
                    <Td>{e?.friktsion_upper_right_first_bokavaya}</Td>
                    <Td>{e?.telejka_side_left_first_bokavaya}</Td>
                    <Td>{e?.telejka_side_right_first_bokavaya}</Td>
                    <Td>{e?.telejka_wayto_left_first_bokavaya}</Td>
                    <Td>{e?.telejka_wayto_right_first_bokavaya}</Td>
                    <Td>{e?.telejka_carriage_slip_left_first_bokavaya}</Td>
                  </Tr>
                  <Tr>
                    <Td rowSpan={4}>2</Td>
                    <Td colSpan={8} textAlign={"center"}>
                      Chаp yon rаmаsi
                    </Td>
                    <Td rowSpan={4}>{e?.ressor_number_copy}</Td>
                    <Td rowSpan={4}>{e?.ressor_factory_medal_copy}</Td>
                    <Td rowSpan={4}>{e?.ressor_made_year_copy}</Td>
                    <Td rowSpan={4}>{e?.ressor_pyatnik_deep_copy}</Td>
                    <Td rowSpan={4}>{e?.ressor_pyatnik_deep_diametr_copy}</Td>
                    <Td rowSpan={4}>{e?.ressor_reverse_copy}</Td>
                    <Td rowSpan={4}>{e?.ressor_service_life_copy}</Td>
                    <Td rowSpan={4}>{e?.ressor_new_year_expired_copy}</Td>
                    <Td rowSpan={4}>{e?.ressor_extend_factory_copy}</Td>
                    <Td colSpan={6} textAlign={"center"}>
                      Chap yon rаmаsi
                    </Td>
                    <Td>Chap</Td>
                  </Tr>
                  <Tr>
                    <Td>{e?.side_number_second_levaya}</Td>
                    <Td>{e?.factory_medal_second_levaya}</Td>
                    <Td>{e?.created_year_second_levaya}</Td>
                    <Td>{e?.side_baza_second_levaya}</Td>
                    <Td>{e?.stump_stend_second_levaya}</Td>
                    <Td>{e?.service_life_second_levaya}</Td>
                    <Td>{e?.new_service_second_levaya}</Td>
                    <Td>{e?.service_extend_second_levaya}</Td>

                    <Td>{e?.friktsion_upper_left_second_levaya}</Td>
                    <Td>{e?.friktsion_upper_right_second_levaya}</Td>
                    <Td>{e?.telejka_side_left_second_levaya}</Td>
                    <Td>{e?.telejka_side_right_second_levaya}</Td>
                    <Td>{e?.telejka_wayto_left_second_levaya}</Td>
                    <Td>{e?.telejka_wayto_right_second_levaya}</Td>
                    <Td>{e?.telejka_carriage_slip_left_second_levaya}</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign={"center"} colSpan="8">
                      On'g Yon ramasi
                    </Td>
                    <Td textAlign={"center"} colSpan="6">
                      On'g Yon ramasi
                    </Td>
                    <Td>On'g</Td>
                  </Tr>
                  <Tr>
                    <Td>{e?.side_number_second_bokavaya}</Td>
                    <Td>{e?.factory_medal_second_bokavaya}</Td>
                    <Td>{e?.created_year_second_bokavaya}</Td>
                    <Td>{e?.side_baza_second_bokavaya}</Td>
                    <Td>{e?.stump_stend_second_bokavaya}</Td>
                    <Td>{e?.service_life_second_bokavaya}</Td>
                    <Td>{e?.new_service_second_bokavaya}</Td>
                    <Td>{e?.service_extend_second_bokavaya}</Td>

                    <Td>{e?.friktsion_upper_left_second_bokavaya}</Td>
                    <Td>{e?.friktsion_upper_right_second_bokavaya}</Td>
                    <Td>{e?.telejka_side_left_second_bokavaya}</Td>
                    <Td>{e?.telejka_side_right_second_bokavaya}</Td>
                    <Td>{e?.telejka_wayt_left_second_bokavaya}</Td>
                    <Td>{e?.telejka_wayt_right_seond_bokavaya}</Td>
                    <Td>{e?.telejka_carriage_slip_seond_bokavaya}</Td>
                  </Tr>
                </>
              ))}
            </Tbody>
          </Table>
          <Pagination
            pageCount={gettingData?.count}
            onPageChange={handlePageClick}
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
            VU-32 jurnali topilmadi
          </Text>
          <Button colorScheme="teal" onClick={onOpen}>
            VU-32 qo&apos;shish
          </Button>
        </Flex>
      ) : (
        <SimpleLoader />
      )}
      <VU_32_Show
        isOpen={isOpenShowAll}
        onClose={onCloseShowAll}
        data={showAllData}
      />
      <Deleteted
        isOpen={deleteModel}
        onClose={setDeleteModal}
        carriageNumber={deleteID}
        deletedFunction={handleDelate}
      />
      <VU_32Modal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
VU_32.propTypes = {
  data: PropTypes.array,
};
