import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Select,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";

import { FindText } from "@/components";
import { BreadCumbs } from "@/utils";
import { useState } from "react";
// import { VU_31_Archive } from "../../components/Archive";

const allCategoryDoc = [
  // {
  //   doc_name: "VU-22",
  //   path: "",
  // },
  // {
  //   doc_name: "VU-23",
  //   path: "",
  // },
  {
    doc_name: "VU-31",
    path: "",
  },
  // {
  //   doc_name: "VU-32",
  //   path: "",
  // },
  // {
  //   doc_name: "VU-36",
  //   path: "",
  // },
  // {
  //   doc_name: "VU-68",
  //   path: "",
  // },
  // {
  //   doc_name: "VU-50",
  //   path: "",
  // },
  // {
  //   doc_name: "VU-51",
  //   path: "",
  // },
  // {
  //   doc_name: "VU-53",
  //   path: "",
  // },
  // {
  //   doc_name: "VU-54",
  //   path: "",
  // },
  // {
  //   doc_name: "VU-90",
  //   path: "",
  // },
  // {
  //   doc_name: "VU-91",
  //   path: "",
  // },
  // {
  //   doc_name: "VU-92",
  //   path: "",
  // },
  // {
  //   doc_name: "VU-93",
  //   path: "",
  // },
];

export const StatistikaArchive = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [optionValue, setOptionValue] = useState(null);
  const [optionResult, setOptionResult] = useState({
    isLoading: false,
    searchValue: "",
  });
  const handleSearachTables = () => {
    onClose();
    setOptionResult({
      isLoading: true,
      searchValue: "",
    });
    setTimeout(() => {
      setOptionResult({
        isLoading: false,
        searchValue: optionValue,
      });
    }, 2000);
  };

  const renderComponent = () => {
    switch (optionResult?.searchValue) {
      default:
        return <FindText />;
    }
  };

  return (
    <Container maxW="container.2xl">
      <BreadCumbs
        path={{ title: "Statistika", link: "/statistics" }}
        current={{ title: "Arxiv", link: "/statistics" }}
      />
      <Heading size={"xl"} textAlign={"center"} fontWeight={500}>
        Statistika arxivi
      </Heading>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInLeft"
      >
        <ModalOverlay backdropFilter="blur(10px) hue-rotate(10deg)" />
        <ModalContent p={8}>
          <ModalCloseButton />{" "}
          <Flex flexDir={"column"}>
            <Text textAlign={"center"} fontSize={"xl"} fontWeight={500}>
              Filtirlash <FontAwesomeIcon icon={faSliders} />
            </Text>

            <FormControl mt={3}>
              <FormLabel>Shakl yoki jurnal turini tanlang</FormLabel>
              <Select
                placeholder="Shakl, Jurnal turini tanlang"
                borderColor={"gray.600"}
                onChange={(e) => setOptionValue(e.target.value)}
              >
                {allCategoryDoc.map((item, idx) => (
                  <option value={item.doc_name} key={idx + 1}>
                    {item.doc_name}
                  </option>
                ))}
              </Select>
            </FormControl>
            <Button
              onClick={handleSearachTables}
              mt={3}
              w={"100%"}
              colorScheme="teal"
              type="submit"
            >
              Qidirish
            </Button>
          </Flex>
        </ModalContent>
      </Modal>

      <Flex mt={10} gap={4} flexDir={"column"}>
        <Flex
          as="div"
          width={["50px", "auto"]}
          height={["50px", "auto"]}
          bgColor={"#fff"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"5px"}
          borderRadius={50}
          shadow={"lg"}
          fontSize={"xl"}
          cursor={"pointer"}
          onClick={onOpen}
          alignSelf={"end"}
          mr={5}
          p={"10px 20px"}
          transition={"0.3s"}
          _hover={{
            shadow: "sm",
          }}
        >
          <Text display={["none", "inherit"]} as="span">
            Filtirlash
          </Text>
          <FontAwesomeIcon icon={faSliders} />
        </Flex>

        <Box
          as="div"
          bg={"#ffff"}
          p={8}
          mx="auto"
          rounded={"lg"}
          position={"relative"}
          w={"100%"}
        >
          {optionResult?.isLoading ? (
            <Flex justifyContent={"center"}>
              <Spinner color="green" size={"xl"} />
            </Flex>
          ) : (
            renderComponent()
          )}
        </Box>
      </Flex>
    </Container>
  );
};
