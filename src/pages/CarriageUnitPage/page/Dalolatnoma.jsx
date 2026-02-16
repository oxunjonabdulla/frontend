import {
  Box,
  Button,
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faTrashAlt,
  faEye,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

import { useEffect, useMemo, useState } from "react";

import UserApi from "@/Service/module/userModule.api";
import { useDebounce } from "../../../hooks/useDebounce";

import { Pagination,  Deleteted } from "../../../components";
import { Dalolatnoma_Show } from "./Dalolatnoma_show";

import { Oldi } from "./modal/AutoDalolatnoma/Oldi";
import { Orqa } from "./modal/AutoDalolatnoma/Orqa";
import {ShowBack} from "@/pages/CarriageUnitPage/page/modal/AutoDalolatnoma/ShowBack.jsx";
import {ShowFront} from "@/pages/CarriageUnitPage/page/modal/AutoDalolatnoma/ShowFront.jsx";


// ================= STATUS =================

const STATUS_MAP = {
  draft: { text: "Boshlanmagan", color: "gray" },
  collect_done: { text: "Yig‘uv tugadi", color: "blue" },
  in_progress: { text: "Jarayonda", color: "orange" },
  completed: { text: "Yakunlandi", color: "green" },
  archived: { text: "Arxiv", color: "purple" },
};


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
    >
      {conf.text}
    </Badge>
  );
};


// ================= HELPERS =================

const hasFront = (act) =>
  !!act?.arava_act?.[0]?.front_detail;

const hasBack = (act) =>
  !!act?.arava_act?.[0]?.back_detail;


// ================= MAIN =================

export const CarriageDalolatnoma = () => {

  // ===== MODALS =====

  const actModal = useDisclosure();
  const oldiModal = useDisclosure();
  const orqaModal = useDisclosure();

  const showBackModal = useDisclosure();
  const [selectedBack, setSelectedBack] = useState(null);

  const showFrontModal = useDisclosure();
  const [selectedFront, setSelectedFront] = useState(null);


  const openShowBack = (act) => {
  const backData = act?.arava_act?.[0]?.back_detail;
      setSelectedBack(backData);
      showBackModal.onOpen();
    };

  const openShowFront = (act) => {
  const frontData = act?.arava_act?.[0]?.front_detail;
      setSelectedFront(frontData);
      showFrontModal.onOpen();
    };


  // ===== STATE =====

  const [loading, setLoading] = useState(true);
  const [acts, setActs] = useState({ count: 0, results: [] });

  const [currentPage, setCurrentPage] = useState(0);
  const [selectedAct, setSelectedAct] = useState(null);

  const [deleteID, setDeleteID] = useState(null);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);


  // ===== LOAD =====

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


  useEffect(() => {
    loadActs();
  }, [currentPage, debouncedSearch]);


  // ===== OPENERS =====

  const openAct = (act) => {
    setSelectedAct(act);
    actModal.onOpen();
  };

  const openOldi = (act) => {
    setSelectedAct(act);
    oldiModal.onOpen();
  };

  const openOrqa = (act) => {
    setSelectedAct(act);
    orqaModal.onOpen();
  };


  // ===== STATUS TEXT =====

  const aravaStatus = useMemo(() => {
    return (act) => {

      const f = hasFront(act);
      const b = hasBack(act);

      if (f && b) return { label: "To‘liq", scheme: "green" };
      if (f || b) return { label: "Qisman", scheme: "orange" };

      return { label: "Yo‘q", scheme: "red" };
    };
  }, []);


  return (
    <Box bg="white" p={6} rounded="lg" boxShadow="sm">

      <Heading textAlign="center" mb={6}>
        Kirish va chiqish dalolatnomasi
      </Heading>


      {/* SEARCH */}

      <FormControl maxW="300px" mb={4}>
        <FormLabel>Vagon bo‘yicha qidirish</FormLabel>

        <Input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(0);
          }}
          placeholder="Vagon raqami"
        />
      </FormControl>


      {/* TABLE */}

      {loading ? (

        <Flex justify="center" my={10}>
          Yuklanmoqda...
        </Flex>

      ) : acts.results.length ? (

        <TableContainer border="1px solid #eee" rounded="lg">

          <Table size="sm" variant="striped">

            <Thead bg="#0c6170">

              <Tr >
                <Th color="white">T/r</Th>
                <Th color="white">Vagon Raqami</Th>
                <Th color="white">Holati</Th>
                <Th color="white">Aravalar</Th>
                <Th color="white" >Amallar</Th>
              </Tr>

            </Thead>


            <Tbody>

              {acts.results.map((act, idx) => {
                const st = aravaStatus(act);
                return (

                  <Tr key={act.id}>

                    <Td>{currentPage * 10 + idx + 1}</Td>

                    <Td fontWeight="600">
                      {act.carriage_number}
                    </Td>


                    <Td textAlign="center">
                      <StatusBadge status={act.status} />
                    </Td>


                    <Td>
                      <Badge colorScheme={st.scheme}>
                        {st.label}
                      </Badge>
                    </Td>




                    <Td>

                      <Flex gap={2} justify="center" flexWrap="wrap">



             {/* FRONT (OLDI) */}
{!hasFront(act) ? (
  <Button
    size="sm"
    leftIcon={<FontAwesomeIcon icon={faPenToSquare} />}
    colorScheme="orange"
    onClick={() => openOldi(act)}
  >
    Old
  </Button>
) : (
  <Button
    size="sm"
    leftIcon={<FontAwesomeIcon icon={faEye} />}
    colorScheme="blue"
    onClick={() => openShowFront(act)}
  >
   Old
  </Button>
)}


{/* BACK (ORQA) */}
{!hasBack(act) ? (
  <Button
    size="sm"
    leftIcon={<FontAwesomeIcon icon={faPenToSquare} />}
    colorScheme="orange"
onClick={() => openOrqa(act)}
  >
    Orqa
  </Button>
) : (
  <Button
    size="sm"
    leftIcon={<FontAwesomeIcon icon={faEye} />}
    colorScheme="blue"
    onClick={() => openShowBack(act)}   // ✅ correct
  >
   Orqa
  </Button>
)}





                        {/* DELETE */}
                        <IconButton
                          size="sm"
                          colorScheme="red"
                          icon={<FontAwesomeIcon icon={faTrashAlt} />}
                          onClick={() => {
                            setDeleteID(act.carriage_number);
                            setDeleteOpen(true);
                          }}
                        />

                      </Flex>

                    </Td>

                  </Tr>
                );
              })}

            </Tbody>

          </Table>

        </TableContainer>

      ) : (

        <Flex direction="column" align="center" my={12}>

          <FontAwesomeIcon icon={faBook} size="3x" opacity={0.4} />

          <Text fontSize="xl" mt={3}>
            ACT topilmadi
          </Text>

        </Flex>

      )}


      {/* PAGINATION */}

      <Pagination
        pageCount={acts.count}
        onPageChange={(d) => setCurrentPage(d.selected)}
      />


      {/* ================= MODALS ================= */}




      {/* FRONT = OLDI */}
      <Modal isOpen={oldiModal.isOpen} onClose={oldiModal.onClose} size="6xl">

        <ModalOverlay />
        <ModalContent>

          <ModalHeader>Old qismi</ModalHeader>
          <ModalCloseButton />

          <Oldi onClose={oldiModal.onClose} />

        </ModalContent>

      </Modal>


      {/* BACK = ORQA */}
      <Orqa
        isOpen={orqaModal.isOpen}
        onClose={orqaModal.onClose}
        carriageID={selectedAct?.carriage_number}
      />


      {/* DELETE */}
      <Deleteted
        isOpen={deleteOpen}
        onClose={setDeleteOpen}
        carriageNumber={deleteID}
      />

      <ShowBack
          isOpen={showBackModal.isOpen}
          onClose={showBackModal.onClose}
          dataBack={selectedBack}
        />

        <ShowFront
          isOpen={showFrontModal.isOpen}
          onClose={showFrontModal.onClose}
          dataFront={selectedFront}
        />

    </Box>
  );
};

export default CarriageDalolatnoma;


