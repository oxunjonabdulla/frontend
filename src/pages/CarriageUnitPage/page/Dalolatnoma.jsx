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
  Badge,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faPlus, faTrashAlt, faEye } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";
import UserApi from "@/Service/module/userModule.api";
import { useDebounce } from "../../../hooks/useDebounce";

import { Pagination, IsImzo, Deleteted } from "../../../components";
import { Dalolatnoma_Show } from "./Dalolatnoma_show";
import { Orqa } from "./modal/AutoDalolatnoma/Orqa";
import { ShowBack } from "./modal/AutoDalolatnoma/ShowBack";
const STATUS_MAP = {
  draft: { text: "Boshlanmagan", color: "gray" },
  collect_done: { text: "Yig‘uv tugadi", color: "blue" },
  in_progress: { text: "Jarayonda", color: "orange" },
  completed: { text: "Yakunlandi", color: "green" },
  archived: { text: "Arxiv", color: "purple" },
};

export const CarriageDalolatnoma = () => {
  // ===== MODALS =====
  const actPreview = useDisclosure();
  const aravaCreate = useDisclosure();
  const aravaShow = useDisclosure();
const StatusBadge = ({ status }) => {
  const conf = STATUS_MAP[status] || STATUS_MAP.draft;

  const GRADIENTS = {
    gray: "linear(to-r, gray.400, gray.600)",
    blue: "linear(to-r, blue.400, blue.600)",
    orange: "linear(to-r, orange.400, orange.600)",
    green: "linear(to-r, green.400, green.600)",
    purple: "linear(to-r, purple.400, purple.600)",
  };

  return (
    <Badge
      px={3}
      py={1}
      rounded="full"
      bgGradient={GRADIENTS[conf.color]}
      color="white"
      fontSize="0.7rem"
      fontWeight="600"
      boxShadow="sm"
      textTransform="uppercase"
    >
      {conf.text}
    </Badge>
  );
};
  // ===== STATE =====
  const [loading, setLoading] = useState(true);
  const [acts, setActs] = useState({ count: 0, results: [] });
  const [currentPage, setCurrentPage] = useState(0);

  const [selectedAct, setSelectedAct] = useState(null);
  const [selectedArava, setSelectedArava] = useState(null);

  const [deleteID, setDeleteID] = useState(null);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);


  // ===== LOAD ACTS =====
  useEffect(() => {
    const loadActs = async () => {
      setLoading(true);

      const params = {
        page: currentPage + 1,
        department: "arava",
        ...(debouncedSearch && { search: debouncedSearch }),
      };

      const { response } = await new UserApi().getActs(params);
      if (response) setActs(response.data);

      setLoading(false);
    };

    loadActs();
  }, [currentPage, debouncedSearch]);

  // ===== HANDLERS =====
  const openAct = (act) => {
    setSelectedAct(act);
    actPreview.onOpen();
  };

  const addArava = (act) => {
    setSelectedAct(act);
    aravaCreate.onOpen();
  };

  const showArava = (arava) => {
    setSelectedArava(arava);
    aravaShow.onOpen();
  };

  // ===== UI =====
  return (
    <Box bg="white" p={6} rounded="lg" boxShadow="sm">

      <Heading textAlign="center" mb={6}>
        Aravalar bo‘limi (Kirish-chiqish dalolatnomasi)
      </Heading>

      {/* SEARCH */}
      <FormControl maxW="300px" mb={4}>
        <FormLabel>Vagon raqam bo‘yicha qidirish</FormLabel>
        <Input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(0);
          }}
          placeholder="Vagon raqamini yozing"
        />
      </FormControl>

      {/* TABLE */}
      {loading ? (
        <Flex justify="center" my={10}>Yuklanmoqda...</Flex>
      ) : acts.results.length ? (

        <TableContainer border="1px solid #eee" rounded="lg">
          <Table size="sm" variant="striped">

            <Thead bg="#0c6170">
              <Tr>
                <Th color="white">T/r</Th>
                <Th color="white">Vagon</Th>
                <Th color="white">Dalolatnoma holati</Th>
                <Th color="white">Arava holati</Th>
                <Th color="white">Imzolar</Th>
                <Th color="white">Amallar</Th>
              </Tr>
            </Thead>

            <Tbody>
              {acts.results.map((act, idx) => (
                <Tr key={act.id}>

                  <Td>{currentPage * 10 + idx + 1}</Td>
                  <Td fontWeight="600">{act.carriage_number}</Td>



                   <Td textAlign="center">
                        <StatusBadge status={act.status} />
                     </Td>


                  <Td>
                    {act.arava_act ? (
                      <Badge colorScheme="red">To‘ldirilgamagan</Badge>
                    ) : (
                      <Badge colorScheme="red">Yo‘q</Badge>
                    )}
                  </Td>

                  <Td>
                    <IsImzo isImzo={act.arava_act?.repair_master_signature} />
                  </Td>

                  <Td>
                    <Flex gap={2} justify="center">

                      {/* VIEW ACT */}
                      <IconButton
                        size="sm"
                        colorScheme="teal"
                            icon={<FontAwesomeIcon icon={faPlus} />}
                        onClick={() => openAct(act)}
                      />

                      {/* ADD / VIEW ARAVA */}
                      {!act.arava_act ? (
                        <IconButton
                          size="sm"
                          colorScheme="blue"
                          icon={<FontAwesomeIcon icon={faPlus} />}
                          onClick={() => addArava(act)}
                        />
                      ) : (
                        <IconButton
                          size="sm"
                          colorScheme="blue"
                          icon={<FontAwesomeIcon icon={faEye} />}
                          onClick={() => showArava(act.arava_act)}
                        />
                      )}

                      {/* DELETE */}
                      <IconButton
                        size="sm"
                        colorScheme="red"
                        icon={<FontAwesomeIcon icon={faTrashAlt} />}
                        onClick={() => {
                          setDeleteID(act.id);
                          setDeleteOpen(true);
                        }}
                      />
                    </Flex>
                  </Td>

                </Tr>
              ))}
            </Tbody>

          </Table>
        </TableContainer>

      ) : (
        <Flex direction="column" align="center" my={12}>
          <FontAwesomeIcon icon={faBook} size="3x" opacity={0.4} />
          <Text fontSize="xl" mt={3}>ACT topilmadi</Text>
        </Flex>
      )}

      {/* PAGINATION */}
      <Pagination
        pageCount={acts.count}
        onPageChange={(d) => setCurrentPage(d.selected)}
      />

      {/* MODALS */}
      <Dalolatnoma_Show
        isOpen={actPreview.isOpen}
        onClose={actPreview.onClose}
        data={selectedAct}
      />

      <Orqa
        isOpen={aravaCreate.isOpen}
        onClose={aravaCreate.onClose}
        act={selectedAct}
      />

      <ShowBack
        isOpen={aravaShow.isOpen}
        onClose={aravaShow.onClose}
        dataBack={selectedArava}
      />

      <Deleteted
        isOpen={deleteOpen}
        onClose={setDeleteOpen}
        carriageNumber={deleteID}
      />

    </Box>
  );
};

export default CarriageDalolatnoma;
