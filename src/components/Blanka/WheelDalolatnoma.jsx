import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
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

import { useEffect, useMemo, useState } from "react";

import UserApi from "@/Service/module/userModule.api";

import { Pagination } from "../pagination/Pagination";
import { Deleteted } from "../Deletete";

// MODALS
import { ShowFront } from "./Modals/WheelDalolatnoma/ShowFront";
import { ShowBack } from "./Modals/WheelDalolatnoma/ShowBack";
import { WheelDalolatnomaModal } from "./Modals/WheelDalolatnoma/WheelDalolatnomaModal";
import {Orqa} from "@/components/Blanka/Modals/WheelDalolatnoma/Orqa.jsx";
import {Oldi} from "@/components/Blanka/Modals/WheelDalolatnoma/Oldi.jsx";


// ================= HELPERS =================

const hasFront = (item) => !!item?.front_detail;
const hasBack = (item) => !!item?.back_detail;

const wheelStatus = (item) => {
  const f = hasFront(item);
  const b = hasBack(item);

  if (f && b) return { label: "To‘liq", scheme: "green" };
  if (f || b) return { label: "Qisman", scheme: "orange" };

  return { label: "Yo‘q", scheme: "red" };
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

  const [data, setData] = useState({ count: 0, results: [] });
  const [currentPage, setCurrentPage] = useState(0);

  const [selectedCarriage, setSelectedCarriage] = useState(null);

  const [selectedFront, setSelectedFront] = useState(null);
  const [selectedBack, setSelectedBack] = useState(null);

  const [deleteID, setDeleteID] = useState(null);
  const [deleteOpen, setDeleteOpen] = useState(false);


  // ===== LOAD DATA =====

  const loadData = async () => {
    setLoading(true);

    const params = {
      page: currentPage + 1,
    };

    const { response } = await new UserApi().getWheelAll(params);

    if (response) {
      setData(response.data);
    }

    setLoading(false);
  };


  useEffect(() => {
    loadData();
  }, [currentPage]);


  // ===== OPENERS =====

  const openOldi = (item) => {
    setSelectedCarriage(item?.carriage);
    oldiModal.onOpen();
  };

  const openOrqa = (item) => {
    setSelectedCarriage(item?.carriage);
    orqaModal.onOpen();
  };

  const openShowFront = (item) => {
    setSelectedFront(item?.front_detail);
    showFrontModal.onOpen();
  };

  const openShowBack = (item) => {
    setSelectedBack(item?.back_detail);
    showBackModal.onOpen();
  };


  // ===== DELETE =====

  const handleDelete = async (id) => {
    const { response } = await new UserApi().deleteWheelAct(id);

    if (response) {
      loadData();
      setDeleteOpen(false);
    }
  };


  // ================= UI =================

  return (
    <Box bg="white" p={6} rounded="lg" boxShadow="sm" my={8}>

      <Heading textAlign="center" mb={6}>
        G‘ildirak Dalolatnomasi
      </Heading>


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

      ) : data?.results?.length ? (

        <TableContainer border="1px solid #eee" rounded="lg">

          <Table size="sm" variant="striped">

            <Thead bg="#0c6170">

              <Tr>
                <Th color="white">T/r</Th>
                <Th color="white">Vagon</Th>
                <Th color="white">Holati</Th>
                <Th color="white">Amallar</Th>
              </Tr>

            </Thead>


            <Tbody>

              {data.results.map((item, idx) => {

                const st = wheelStatus(item);

                return (

                  <Tr key={item.id || item.carriage}>

                    <Td>{currentPage * 10 + idx + 1}</Td>

                    <Td fontWeight="600">
                      {item.carriage}
                    </Td>


                    {/* STATUS */}
                    <Td>
                      <Badge colorScheme={st.scheme}>
                        {st.label}
                      </Badge>
                    </Td>


                    {/* ACTIONS */}
                    <Td>

                      <Flex gap={2} justify="center" flexWrap="wrap">


                        {/* FRONT */}
                        {!hasFront(item) ? (
                          <Button
                            size="sm"
                            leftIcon={<FontAwesomeIcon icon={faPenToSquare} />}
                            colorScheme="orange"
                            onClick={() => openOldi(item)}
                          >
                            Old
                          </Button>
                        ) : (
                          <Button
                            size="sm"
                            leftIcon={<FontAwesomeIcon icon={faEye} />}
                            colorScheme="blue"
                            onClick={() => openShowFront(item)}
                          >
                            Old Ko‘rish
                          </Button>
                        )}


                        {/* BACK */}
                        {!hasBack(item) ? (
                          <Button
                            size="sm"
                            leftIcon={<FontAwesomeIcon icon={faPenToSquare} />}
                            colorScheme="orange"
                            onClick={() => openOrqa(item)}
                          >
                            Orqa
                          </Button>
                        ) : (
                          <Button
                            size="sm"
                            leftIcon={<FontAwesomeIcon icon={faEye} />}
                            colorScheme="green"
                            onClick={() => openShowBack(item)}
                          >
                            Orqa Ko‘rish
                          </Button>
                        )}


                        {/* DELETE */}
                        <IconButton
                          size="sm"
                          colorScheme="red"
                          icon={<FontAwesomeIcon icon={faTrashAlt} />}
                          onClick={() => {
                            setDeleteID(item?.carriage);
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
            Dalolatnoma topilmadi
          </Text>

          <Button colorScheme="teal" onClick={createModal.onOpen}>
            Qo‘shish
          </Button>

        </Flex>

      )}


      {/* PAGINATION */}

      <Pagination
        pageCount={data?.count}
        onPageChange={(d) => setCurrentPage(d.selected)}
      />


      {/* ================= MODALS ================= */}


      {/* CREATE */}
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
            carriageID={selectedCarriage}
          />

        </ModalContent>
      </Modal>


      {/* BACK CREATE */}
      <Orqa
        isOpen={orqaModal.isOpen}
        onClose={orqaModal.onClose}
        carriageID={selectedCarriage}
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
