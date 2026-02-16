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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faEye,
  faTrashAlt,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";

import UserApi from "@/Service/module/userModule.api";
import { useDebounce } from "@/hooks/useDebounce";

import { Pagination, Deleteted } from "@/components";

// MODALS
import { Orqa } from "./Modals/AutoBreakes/Orqa";
import { Oldi } from "./Modals/AutoBreakes/Oldi.jsx";
import { ShowBack } from "./Modals/AutoBreakes/ShowBack";
import { AutoBreakes_dalolatnoma_model } from "./Modals/AutoBreakes/AutoBreakes_dalolatnoma_model";
import {ShowFront} from "@/components/Blanka/Modals/AutoBreakes/ShowFront.jsx";


// ================= HELPERS =================

// Get avtobirikma object from ACT
const getAutoObj = (act) => act?.avtobirikma_act?.[0] || null;

const hasFront = (act) => !!getAutoObj(act)?.front_detail;
const hasBack = (act) => !!getAutoObj(act)?.back_detail;

const autoStatus = (act) => {
  const f = hasFront(act);
  const b = hasBack(act);

  if (f && b) return { label: "To‘liq", scheme: "green" };
  if (f || b) return { label: "Qisman", scheme: "orange" };

  return { label: "Yo‘q", scheme: "red" };
};


// ================= MAIN =================

export const AutoDalolatnoma = () => {

  // ===== MODALS =====

  const createModal = useDisclosure();
  const oldiModal = useDisclosure();
  const orqaModal = useDisclosure();

  const showFrontModal = useDisclosure();
  const showBackModal = useDisclosure();


  // ===== STATE =====

  const [loading, setLoading] = useState(true);

  const [acts, setActs] = useState({ count: 0, results: [] });
  const [currentPage, setCurrentPage] = useState(0);

  const [selectedAct, setSelectedAct] = useState(null);
  const [selectedBack, setSelectedBack] = useState(null);

  const [deleteID, setDeleteID] = useState(null);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const [selectedFront, setSelectedFront] = useState(null);

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
  // ===== LOAD ACTS =====

  const loadActs = async () => {
    setLoading(true);

    const params = {
      page: currentPage + 1,
      department: "avtobirikma", // ✅ important
      ...(debouncedSearch && { search: debouncedSearch }),
    };

    const { response } = await new UserApi().getActs(params);

    if (response) {
      setActs(response.data);
    }

    setLoading(false);
  };


  useEffect(() => {
    loadActs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, debouncedSearch]);


  // ===== OPENERS =====

  const openOldi = (act) => {
    setSelectedAct(act);
    oldiModal.onOpen();
  };
  const openOrqa = (act) => {
    setSelectedAct(act);
    orqaModal.onOpen();
  };


  const openShowBack = (act) => {
    const back = getAutoObj(act)?.back_detail || null;
    setSelectedBack(back);
    showBackModal.onOpen();
  };

 const openShowFront = (act) => {
    const front = getAutoObj(act)?.front_detail || null;
    setSelectedFront(front);
    showFrontModal.onOpen();
  };
  // ===== DELETE =====

  const handleDelete = async (carriageNumber) => {
    const { response } = await new UserApi().deleteBirikmaAct(carriageNumber);

    if (response) {
      loadActs();
      setDeleteOpen(false);
    }
  };


  // ================= UI =================

  return (
    <Box bg="white" p={6} rounded="lg" boxShadow="sm" my={8}>

      {/* ================= TITLE ================= */}

      <Heading textAlign="center" mb={6}>
        Avtobirikma Dalolatnomasi
      </Heading>


      {/* ================= SEARCH ================= */}

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


      {/* ================= ADD ================= */}

      <Button
        colorScheme="teal"
        rounded="full"
        w="50px"
        h="50px"
        position="absolute"
        right={6}
        top={-10}
        onClick={createModal.onOpen}
      >
        +
      </Button>


      {/* ================= TABLE ================= */}

      {loading ? (

        <Flex justify="center" my={10}>
          Yuklanmoqda...
        </Flex>

      ) : acts?.results?.length ? (

        <TableContainer border="1px solid #eee" rounded="lg">

          <Table size="sm" variant="striped">

            <Thead bg="#0c6170">

              <Tr>
                <Th color="white">T/r</Th>
                <Th color="white">Vagon</Th>
                <Th color="white">Holati</Th>
                <Th color="white">Avtobirikma Holati</Th>
                <Th color="white">Amallar</Th>
              </Tr>

            </Thead>


            <Tbody>

              {acts.results.map((act, idx) => {

                const st = autoStatus(act);
                const autoObj = getAutoObj(act);

                return (

                  <Tr key={act.id}>

                    {/* INDEX */}
                    <Td>{currentPage * 10 + idx + 1}</Td>


                    {/* CARRIAGE */}
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

                    {/* ACTIONS */}
                    <Td>
                         <Flex gap={2} justify="center" flexWrap="wrap">

                        {/* FRONT */}
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

                        {/* BACK */}
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
                            onClick={() => openShowBack(act)}
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

        <Flex direction="column" align="center" my={12} gap={4}>

          <FontAwesomeIcon icon={faBook} size="3x" opacity={0.4} />

          <Text fontSize="xl">
            ACT topilmadi
          </Text>

        </Flex>

      )}


      {/* ================= PAGINATION ================= */}

      <Pagination
        pageCount={acts?.count}
        onPageChange={(d) => setCurrentPage(d.selected)}
      />


      {/* ================= MODALS ================= */}


      {/* CREATE */}
      <AutoBreakes_dalolatnoma_model
        isOpen={createModal.isOpen}
        onClose={createModal.onClose}
      />

          <Modal isOpen={oldiModal.isOpen} onClose={oldiModal.onClose} size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Old qismi</ModalHeader>
          <ModalCloseButton />

          <Oldi
            onClose={oldiModal.onClose}
            carriageID={selectedAct?.carriage_number}
          />
        </ModalContent>
      </Modal>

      {/* BACK CREATE */}
      <Orqa
        isOpen={orqaModal.isOpen}
        onClose={orqaModal.onClose}
        carriageID={selectedAct?.carriage_number}
      />

        <ShowFront
        isOpen={showFrontModal.isOpen}
        onClose={showFrontModal.onClose}
        dataFront={selectedFront}
      />

      {/* SHOW BACK */}
      <ShowBack
        isOpen={showBackModal.isOpen}
        onClose={showBackModal.onClose}
        dataBack={selectedBack}
      />


      {/* DELETE */}
      <Deleteted
        isOpen={deleteOpen}
        onClose={setDeleteOpen}
        carriageNumber={deleteID}
        deletedFunction={handleDelete}
      />

    </Box>
  );
};

export default AutoDalolatnoma;
