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


// WHEEL MODALS (your wheel ones)
import { Oldi } from "@/components/Blanka/Modals/WheelDalolatnoma/Oldi.jsx";
import { Orqa } from "@/components/Blanka/Modals/WheelDalolatnoma/Orqa.jsx";
import { ShowFront } from "./Modals/WheelDalolatnoma/ShowFront";
import { ShowBack } from "./Modals/WheelDalolatnoma/ShowBack";
import { WheelDalolatnomaModal } from "./Modals/WheelDalolatnoma/WheelDalolatnomaModal";
import {useDebounce} from "@/hooks/useDebounce.js";
import {Deleteted, Pagination} from "@/components/index.js";


// ================= HELPERS =================

// IMPORTANT: now we read from ACT like arava
const getWheelObj = (act) => act?.koleso_act?.[0] || null;

const hasFront = (act) => !!getWheelObj(act)?.front_detail;
const hasBack = (act) => !!getWheelObj(act)?.back_detail;

const wheelStatus = (act) => {
  const f = hasFront(act);
  const b = hasBack(act);

  if (f && b) return { label: "To‘liq", scheme: "green" };
  if (f || b) return { label: "Qisman", scheme: "orange" };
  return { label: "Yo‘q", scheme: "red" };
};


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

// ================= MAIN =================

export const WheelDalolatnoma = () => {

  // ===== MODALS =====
  const createModal = useDisclosure();

  const oldiModal = useDisclosure();
  const orqaModal = useDisclosure();

  const showFrontModal = useDisclosure();
  const showBackModal = useDisclosure();

  // ===== STATE =====
  const [loading, setLoading] = useState(true);

  // act list like arava page
  const [acts, setActs] = useState({ count: 0, results: [] });
  const [currentPage, setCurrentPage] = useState(0);

  const [selectedAct, setSelectedAct] = useState(null);

  const [selectedFront, setSelectedFront] = useState(null);
  const [selectedBack, setSelectedBack] = useState(null);

  const [deleteID, setDeleteID] = useState(null);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);


  // ===== LOAD ACTS =====
  const loadActs = async () => {
    setLoading(true);

    const params = {
      page: currentPage + 1,
      department: "koleso", // ✅ IMPORTANT: adjust if your backend uses "wheel" or "koleso_act"
      ...(debouncedSearch && { search: debouncedSearch }),
    };

    const { response } = await new UserApi().getActs(params);

    if (response) setActs(response.data);

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

  const openShowFront = (act) => {
    const front = getWheelObj(act)?.front_detail || null;
    setSelectedFront(front);
    showFrontModal.onOpen();
  };

  const openShowBack = (act) => {
    const back = getWheelObj(act)?.back_detail || null;
    setSelectedBack(back);
    showBackModal.onOpen();
  };


  // ===== DELETE =====
  const handleDelete = async (carriageNumber) => {
    const { response } = await new UserApi().deleteWheelAct(carriageNumber);
    if (response) {
      loadActs();
      setDeleteOpen(false);
    }
  };


  return (
    <Box bg="white" p={6} rounded="lg" boxShadow="sm">

      <Heading textAlign="center" mb={6}>
        G‘ildirak Dalolatnomasi
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

      {/* ADD BUTTON */}
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

      {/* TABLE */}
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
                <Th color="white">Vagon Raqami</Th>
                <Th color="white">Holati</Th>
                <Th color="white">G‘ildirak holati</Th>
                <Th color="white">Amallar</Th>
              </Tr>
            </Thead>

            <Tbody>
              {acts.results.map((act, idx) => {
                const st = wheelStatus(act);

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
          <Text fontSize="xl">ACT topilmadi</Text>
        </Flex>
      )}

      {/* PAGINATION */}
      <Pagination
        pageCount={acts?.count}
        onPageChange={(d) => setCurrentPage(d.selected)}
      />

      {/* ================= MODALS ================= */}

      {/* CREATE (if you need it) */}
      <WheelDalolatnomaModal
        isOpen={createModal.isOpen}
        onClose={createModal.onClose}
      />

      {/* FRONT CREATE */}
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

      {/* SHOW FRONT */}
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

export default WheelDalolatnoma;
