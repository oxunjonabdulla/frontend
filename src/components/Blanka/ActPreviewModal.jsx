import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Flex,
  Box,
  Text,
  Badge,
  Divider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";


// ================= FIELD LABEL MAP =================

const FIELD_LABELS = {
  // Common
  created_act_date: "Dalolatnoma tuzilgan sana",
  train_number_act: "Poyezddan kelgan №",
  station_act: "Tuzilgan dalolatnoma bekati tarkib",
  number_act: "Raqami №",
  telegramma_repair_act: "Ta’mirga “V” № 823 17.10.2016 yildagi telegramma asosida.",
  carriage_number_act: "Uzilgan vagon raqami",
  made_date: "Ishlab chiqarilgan sana",
  kod_act: "Kod",
  whom_act: "Tegishli qismi",

  // Avtobirikma
  auto_number_1: "Avto raqam 1",
  auto_number_2: "Avto raqam 2",
  auto_zavod_1: "Avto zavod 1",
  auto_zavod_2: "Avto zavod 2",

  // Koleso
  koleso_raqam_1: "G‘ildirak raqami 1",
  koleso_raqam_2: "G‘ildirak raqami 2",
  koleso_zavod_1: "G‘ildirak zavodi 1",
  koleso_zavod_2: "G‘ildirak zavodi 2",

  // Arava
  yon_raqam_1: "Yon raqam 1",
  yon_raqam_2: "Yon raqam 2",
  yon_raqam_3: "Yon raqam 3",
  yon_raqam_4: "Yon raqam 4",

  repair_type: "Ta’mir turi",

  // Dates
  created_at: "Yaratilgan sana",
  updated_at: "Yangilangan sana",
};


// ================= STATUS UI MAP =================

const STATUS_UI = {
  draft: {
    text: "Boshlanmagan",
    gradient: "linear(to-r, gray.400, gray.600)",
  },
  collect_done: {
    text: "Yig‘uv tugadi",
    gradient: "linear(to-r, blue.400, blue.600)",
  },
  in_progress: {
    text: "Jarayonda",
    gradient: "linear(to-r, orange.400, orange.600)",
  },
  completed: {
    text: "Yakunlandi",
    gradient: "linear(to-r, green.400, green.600)",
  },
  archived: {
    text: "Arxiv",
    gradient: "linear(to-r, purple.400, purple.600)",
  },
};
// Format date nicely
const formatDate = (date) => {
  if (!date) return "—";

  return new Date(date).toLocaleString("uz-UZ", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
};

// Modern Status Badge
const StatusPill = ({ status }) => {

  const conf = STATUS_UI[status] || STATUS_UI.draft;

  return (
    <Badge
      px={3}
      py={1}
//       rounded="full"
      bgGradient={conf.gradient}
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


// ================= MAIN MODAL =================

const ActPreviewModal = ({ isOpen, onClose, data }) => {



  if (!data) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: "full", md: "6xl" }}
      scrollBehavior="inside"
      isCentered
    >

      <ModalOverlay />

      <ModalContent>

        <ModalHeader>
          Dalolatnoma Tafsilotlari
        </ModalHeader>

        <ModalCloseButton />


        <ModalBody pb={6}>


          {/* ================= BASIC INFO ================= */}

          <Section title="Asosiy ma’lumot">

           <SimpleTable
  data={{
    "Vagon raqami": data.carriage_number,

    "Holati": (
      <StatusPill status={data.status} />
    ),

    "Yaratilgan sana": formatDate(data.created_at),

    "Yangilangan sana": formatDate(data.updated_at),

    "Mas’ul shaxs": data.created_by?.name || "Noma’lum",
  }}
/>


          </Section>


          {/* ================= DEPARTMENTS ================= */}

          <Section title="Bo‘limlar ma’lumoti">

            <DepartmentBlock
              title="Yig‘uv bo‘limi"
              data={data.collect_act}
            />

            <DepartmentBlock
              title="G‘ildirak bo‘limi"
              data={data.koleso_act}
            />

            <DepartmentBlock
              title="Arava bo‘limi"
              data={data.arava_act}
            />

            <DepartmentBlock
              title="Avtobirikma bo‘limi"
              data={data.avtobirikma_act}
            />

          </Section>


          {/*/!* ================= SIGNATURE ================= *!/*/}

          {/*{data.created_by?.user_signature_url && (*/}

          {/*  <Section title="Mas’ul shaxs imzosi">*/}

          {/*    <Box*/}
          {/*      border="1px solid"*/}
          {/*      borderColor="gray.300"*/}
          {/*      p={3}*/}
          {/*      rounded="md"*/}
          {/*      maxW="240px"*/}
          {/*    >*/}

          {/*      <img*/}
          {/*        src={data.created_by.user_signature_url}*/}
          {/*        alt="signature"*/}
          {/*        width="100%"*/}
          {/*      />*/}

          {/*    </Box>*/}

          {/*  </Section>*/}

          {/*)}*/}

        </ModalBody>

      </ModalContent>

    </Modal>
  );
};

export default ActPreviewModal;





// ================= SUB COMPONENTS =================


// Section Wrapper
const Section = ({ title, children }) => (
  <Box mb={8}>

    <Text fontWeight="600" fontSize="lg" mb={3}>
      {title}
    </Text>

    {children}

    <Divider mt={4} />

  </Box>
);




// Simple 2-column table (like Excel)
const SimpleTable = ({ data }) => {

  return (

    <TableContainer>

      <Table
        size="sm"
        variant="simple"
        border="1px solid"
        borderColor="gray.200"
      >

        <Tbody>

          {Object.entries(data).map(([key, value]) => (

            <Tr key={key}>

              <Td
                fontWeight="600"
                bg="gray.50"
                width="35%"
                border="1px solid"
                borderColor="gray.200"
              >
                {key}
              </Td>

              <Td
                border="1px solid"
                borderColor="gray.200"
              >
                {value}
              </Td>

            </Tr>

          ))}

        </Tbody>

      </Table>

    </TableContainer>

  );
};





// Department Block (Excel style)
const DepartmentBlock = ({ title, data }) => {

  if (!data || !data.length) {
    return (
      <Box mb={4}>

        <Text fontWeight="600">
               <Badge
          px={3}
          py={1}
          bgGradient="linear(to-r, blue.400, blue.600)"
          color="white"
          fontSize="0.75rem"
          fontWeight="700"
          boxShadow="md"
        >
            {title}
            </Badge>
            </Text>


        <Badge
          bgGradient="linear(to-r, red.400, red.600)"
          color="white"
          boxShadow="md"
        >
            Ma’lumot yo‘q
            </Badge>


      </Box>
    );
  }


  return (

    <Box mb={6}>


      <Flex justify="space-between" mb={2}>

        <Badge
  px={3}
  py={1}
  bgGradient="linear(to-r, blue.400, blue.600)"
  color="white"
  fontSize="0.75rem"
  fontWeight="700"
  boxShadow="md"
  rounded="md"
>
  {title}
</Badge>


        <Badge
  px={20}
  py={1}
//   rounded="full"
  bgGradient="linear(to-r, green.400, green.600)"
  color="white"
  fontSize="0.75rem"
  fontWeight="700"
  boxShadow="md"
  textTransform="uppercase"
>
  Tayyor
</Badge>


      </Flex>


      {data.map((item, index) => (

        <Box key={index} mb={5}>


          {/* FRONT */}
          {item.front_detail && (

            <ExcelTable
              title="Old qismi"
              data={item.front_detail}
            />

          )}


          {/* BACK */}
          {item.back_detail && (

            <ExcelTable
              title="Orqa qismi"
              data={item.back_detail}
            />

          )}


          {/* CREATED */}
          {item.created_at && (
           <SimpleTable
              data={{
                "Yaratilgan sana": formatDate(item.created_at),
                "Yangilangan sana": formatDate(item.updated_at),
              }}
            />
          )}

        </Box>

      ))}

    </Box>
  );
};





// Excel-like table for detail objects
const ExcelTable = ({ title, data }) => {

  return (

    <Box mb={4}>


      <Text fontWeight="600" mb={2}>
        {title}
      </Text>


      <TableContainer>

        <Table
          size="sm"
          variant="simple"
          border="1px solid"
          borderColor="gray.300"
        >

          <Thead  bg="#0c6170">

            <Tr>

              <Th border="1px solid" borderColor="gray.300">
                Maydon
              </Th>

              <Th border="1px solid" borderColor="gray.300">
                Qiymat
              </Th>

            </Tr>

          </Thead>


          <Tbody>

            {Object.entries(data).map(([key, value]) => {

              if (!value || key === "id") return null;

              return (

                <Tr key={key}>

                  <Td
                    border="1px solid"
                    borderColor="gray.300"
                    fontWeight="500"
                    bg="gray.50"
                  >
                    {formatKey(key)}
                  </Td>
               <Td
                  border="1px solid"
                  borderColor="gray.300">
                  {key === "created_at" || key === "updated_at"
                    ? formatDate(value)
                    : String(value)
                  }
                </Td>
                </Tr>
              );
            })}

          </Tbody>

        </Table>

      </TableContainer>

    </Box>

  );
};




// Format snake_case → Pretty text
const formatKey = (key) => {

  // If label exists → use it
  if (FIELD_LABELS[key]) {
    return FIELD_LABELS[key];
  }

  // Fallback (if not found)
  return key
    .replace(/_/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
};
