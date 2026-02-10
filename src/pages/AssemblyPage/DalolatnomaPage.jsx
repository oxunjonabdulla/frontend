import {
  Box,
  Badge,
  Button,
  Flex,
  Heading,
  Input,
  Progress,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Spinner,
  IconButton,
  FormLabel,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faEye,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";
import UserApi from "../../Service/module/userModule.api";
import { useDebounce } from "../../hooks/useDebounce";
import {Pagination} from "../../components/pagination/Pagination";
import ActPreviewModal from "../../components/Blanka/ActPreviewModal";



// ================= STATUS CONFIG =================

const STATUS_MAP = {
  draft: { text: "Boshlanmagan", color: "gray" },
  collect_done: { text: "Yig‘uv tugadi", color: "blue" },
  in_progress: { text: "Jarayonda", color: "orange" },
  completed: { text: "Yakunlandi", color: "green" },
  archived: { text: "Arxiv", color: "purple" },
};


// ================= HELPERS =================

// Creator info (name + signature)
const CreatorInfo = ({ creator }) => {
  if (!creator) {
    return (
      <Text fontSize="sm" color="gray.400">
        Noma’lum
      </Text>
    );
  }

  return (
    <Flex align="center" gap={3}>
      {/* Name */}
      <Box>
        <Text fontSize="sm" fontWeight="600">
          {creator.name}
        </Text>


      </Box>

    </Flex>
  );
};


// Progress from API
const calculateProgress = (item) => {
  const steps = [
    item.collect_act?.length > 0,
    item.avtobirikma_act?.length > 0,
    item.arava_act?.length > 0,
    item.koleso_act?.length > 0,
  ];

  const done = steps.filter(Boolean).length;

  return Math.round((done / steps.length) * 100);
};


// ================= COMPONENTS =================


// Department status
const DeptStatus = ({ done, name }) => {
  return (
    <Flex
      align="center"
      justify="space-between"
      px={2}
      py={1}
      rounded="md"
      bg={done ? "green.50" : "red.50"}
      border="1px solid"
      borderColor={done ? "green.200" : "red.200"}
      maxW="230px"
    >
      <Flex align="center" gap={2}>

        <Box
          w="8px"
          h="8px"
          rounded="full"
          bg={done ? "green.400" : "red.400"}
        />

        <Text fontSize="sm" fontWeight="500" noOfLines={1}>
          {name}
        </Text>

      </Flex>

      <Badge
        colorScheme={done ? "green" : "red"}
        fontSize="0.6rem"
      >
        {done ? "Tayyor" : "Kutilmoqda"}
      </Badge>
    </Flex>
  );
};



// Status badge
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



// Progress
const ActProgress = ({ value }) => (
  <Box minW="130px">

    <Progress
      value={value}
      size="sm"
      rounded="full"
      bg="gray.100"
      sx={{
        "& > div": {
          background:
            value === 100
              ? "linear-gradient(to right,#38A169,#68D391)"
              : "linear-gradient(to right,#3182CE,#63B3ED)",
        },
      }}
    />

    <Text
      fontSize="xs"
      textAlign="center"
      mt={1}
      fontWeight="600"
      color={value === 100 ? "green.500" : "blue.500"}
    >
      {value}%
    </Text>

  </Box>
);


// ================= MAIN PAGE =================

export const DalolatnomaPage = () => {

  const [loading, setLoading] = useState(true);
  const [gettingData, setGettingData] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  const [isOpenPreview, setIsOpenPreview] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);


  const handlePreview = (item) => {
  setSelectedItem(item);
  setIsOpenPreview(true);
   };

  // ================= PAGINATION =================

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };


  // ================= LOAD DATA =================

  useEffect(() => {

    const loadActs = async () => {

      setLoading(true);

      try {

        const params = {
          page: currentPage + 1,
          ...(debouncedSearch && { search: debouncedSearch }),
        };

        const { response } = await new UserApi().getActs(params);

        if (response) {
          setGettingData(response.data);
        }

      } catch (err) {
        console.error("Load error:", err);
      }

      setLoading(false);
    };

    loadActs();

  }, [currentPage, debouncedSearch]);


  // ================= HELPERS =================

  const isLocked = (item) =>
    item.status === "completed" || item.status === "archived";


  // ================= RENDER =================

  return (

    <Box
      bg="white"
      p={{ base: 4, md: 6 }}
      rounded="lg"
      boxShadow="sm"
    >


      {/* ================= HEADER ================= */}

      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        gap={4}
        mb={6}
      >

        <Heading size="lg">
          Kirish - Chiqish Dalolatnomasi
        </Heading>

        <Button colorScheme="teal">
          + Yangi
        </Button>

      </Flex>


      {/* ================= SEARCH ================= */}

      <Flex mb={5} gap={3} align="center">

        <FormLabel mb={0}>
          Vagon bo‘yicha qidirish:
        </FormLabel>

        <Input
          placeholder="Vagon raqamini yozing..."
          maxW="260px"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </Flex>


      {/* ================= TABLE ================= */}

      {loading ? (

        <Flex justify="center" my={12}>
          <Spinner size="xl" />
        </Flex>

      ) : (

        gettingData?.results?.length ? (

          <TableContainer
            border="1px solid #eee"
            rounded="lg"
            overflowX="auto"
          >

            <Table size="sm" variant="striped" colorScheme="blackAlpha">


              {/* HEADER */}
              <Thead bg="#0c6170">

                <Tr>

                  <Th textAlign="center" color="white">T/r</Th>
                  <Th textAlign="center" color="white">Vagon</Th>
                  <Th textAlign="center" color="white">Holati</Th>
                  <Th textAlign="center" color="white">Jarayon</Th>
                  <Th textAlign="center" color="white">Bo‘limlar</Th>
                  <Th textAlign="center" color="white">Ma'sul xodim</Th>
                  <Th textAlign="center" color="white">Yaratilgan Sana</Th>
                  <Th textAlign="center" color="white">Amallar</Th>

                </Tr>

              </Thead>


              {/* BODY */}
              <Tbody>

                {gettingData.results.map((item, index) => {

                  const progress = calculateProgress(item);

                  return (

                    <Tr key={item.id}>


                      {/* Index */}
                      <Td textAlign="center">
                        {currentPage * 10 + index + 1}
                      </Td>


                      {/* Carriage */}
                      <Td textAlign="center" fontWeight="600">
                        {item.carriage_number}
                      </Td>


                      {/* Status */}
                      <Td textAlign="center">
                        <StatusBadge status={item.status} />
                      </Td>


                      {/* Progress */}
                      <Td textAlign="center">
                        <ActProgress value={progress} />
                      </Td>


                      {/* Departments */}
                      <Td>

                        <Flex direction="column" gap={2}>

                          <DeptStatus
                            done={item.collect_act?.length}
                            name="Yig‘uv"
                          />

                          <DeptStatus
                            done={item.koleso_act?.length}
                            name="G‘ildirak"
                          />

                          <DeptStatus
                            done={item.arava_act?.length}
                            name="Aravalar"
                          />

                          <DeptStatus
                            done={item.avtobirikma_act?.length}
                            name="Avtobirikma"
                          />

                        </Flex>

                      </Td>


                      {/* Creator */}
<Td>
  <CreatorInfo creator={item.created_by} />
</Td>


{/* Created Date */}
<Td textAlign="center" fontSize="sm">
  {new Date(item.created_at).toLocaleDateString()}
</Td>



                      {/* Actions */}
                      <Td>

                        <Flex gap={2} justify="center">

                          <IconButton
                      size="sm"
                      bg="blue.500"
                      color="white"
                      onClick={() => handlePreview(item)}
                      icon={<FontAwesomeIcon icon={faEye} />}
                    />


                          <IconButton
                            size="sm"
                            colorScheme="green"
                            isDisabled={isLocked(item)}
                            icon={<FontAwesomeIcon icon={faEdit} />}
                          />

                          <IconButton
                            size="sm"
                            colorScheme="red"
                            isDisabled={item.status === "archived"}
                            icon={<FontAwesomeIcon icon={faTrashAlt} />}
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

          <Flex align="center" flexDir="column" my={12} gap={4}>

            <Text fontSize="2xl" fontWeight="600">
              Maʼlumot topilmadi
            </Text>

          </Flex>

        )
      )}


      {/* ================= PAGINATION ================= */}

      <Pagination
        pageCount={gettingData?.count}
        onPageChange={handlePageClick}
      />
        <ActPreviewModal
          isOpen={isOpenPreview}
          onClose={() => setIsOpenPreview(false)}
          data={selectedItem}
        />

    </Box>
  );
};

export default DalolatnomaPage;

