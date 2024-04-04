import { memo, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faEye,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import UserApi from "@/Service/module/userModule.api";
import { Deleteted } from "@/components";
import { mockHeaderFraza } from "@/utils/mock_heads";
import { Fraza_model } from "../modals/Fraza_model";
const FrazaTable = memo(function FrazaTable({ gettingData }) {
  const [getTableData, setGetinfTableData] = useState(null);
  const {
    isOpen: openDelateModal,
    onOpen: onOpenDelateModal,
    onClose: onCloseDelateModal,
  } = useDisclosure();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [updatedData, setUpdateData] = useState(null);
  const toast = useToast();
  const handleCheckAndDelete = (deletedID) => {
    onOpenDelateModal();
    setGetinfTableData(deletedID);
  };
  const handleDelate = async (carriageID) => {
    const { response, error } = await new UserApi().deletePhrase(carriageID);
    if (response) {
      window.location.reload();
    } else {
      toast({
        status: "error",
        title:
          error?.detail &&
          carriageID + " vagon raqami ma'lumoti avval o'chirilgan",
        duration: 4000,
        isClosable: true,
        position: "top-right",
        fontSize: "3xl",
      });
    }
  };

  const handleUpdate = (selectedItem) => {
    setUpdateData(selectedItem);

    onOpen();
  };

  const handleDownload = async (carriageID) => {
    try {
      const { response } = await new UserApi().downloadPhrase(carriageID);

      const blob = new Blob([response.data], {
        type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `Фраза-${carriageID}.docx`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); // Remove the link after download
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file: ", error);
    }
  };
  return (
    <>
      <Table
        borderRadius={10}
        size={"sm"}
        whiteSpace={"pre-wrap"}
        variant={"striped"}
        overflow={"hidden"}
        colorscheme="gray"
        shadow={"lg"}
      >
        <Thead bg={"#0c6170"} rounded={10}>
          <Tr>
            <Th
              fontSize={"10px"}
              textAlign={"center"}
              whiteSpace={"pre-wrap"}
              rowSpan={"3"}
              fontWeight={700}
            >
              Tartib raqami
            </Th>
          </Tr>

          <Tr>
            {mockHeaderFraza?.topHeader?.map((item) => (
              <Th
                fontSize={"10px"}
                fontWeight={700}
                textAlign={"center"}
                whiteSpace={"pre-wrap"}
                key={item.label}
                rowSpan={item.rowspan}
                colSpan={item.colspan}
              >
                {item.label}
              </Th>
            ))}

            <Th textAlign={"center"} rowSpan={2} fontSize={"10px"}>
              Jarayon
            </Th>
            <Th textAlign={"center"} rowSpan={2} fontSize={"10px"}></Th>
          </Tr>
          <Tr>
            <Th textAlign={"center"}>-</Th>
            <Th textAlign={"center"}>1</Th>
            <Th textAlign={"center"}>2</Th>
            <Th textAlign={"center"}>3</Th>
            <Th textAlign={"center"}>4</Th>
            <Th textAlign={"center"}>5</Th>
            <Th textAlign={"center"}>6</Th>
            <Th textAlign={"center"}>7</Th>
            <Th textAlign={"center"}>8</Th>
            <Th textAlign={"center"}>9</Th>
            <Th textAlign={"center"}>10</Th>
            <Th textAlign={"center"}>11</Th>
          </Tr>
        </Thead>

        <Tbody>
          {gettingData?.results?.map((item, idx) => (
            <Tr key={item?.id}>
              <Td>{idx + 1}</Td>
              <Td>:4634</Td>
              <Td>408</Td>
              <Td>73314</Td>
              <Td>1</Td>
              <Td>{item?.date_send_message}</Td>
              <Td>704</Td>
              <Td>7314</Td>
              <Td>{item?.date_operation_carriage}</Td>
              <Td>{item?.code_operation_carriage}</Td>
              <Td height={"100%"} fontWeight={700} color={"green"}>
                {item?.carriage}
              </Td>
              <Td></Td>
              <Td>0</Td>
              <Td>
                {/* {item?.user_signature_url ? (
              <Image src={imageGet(item?.user_signature_url)} />
            ) : (
              <Text color={"red"}>Imzo o`chirilgan</Text>
            )} */}

                {!item?.date_operation_carriage
                  ? item?.phrase_gildirak &&
                    item?.phrase_arava && (
                      <Box
                        colorscheme="yellow"
                        borderColor={"orange.400"}
                        colorScheme="teal"
                        fontSize={"13px"}
                        bgColor={"orange.400"}
                        p={"10px"}
                        rounded={"5"}
                        color={"#fff"}
                        fontWeight={700}
                        textAlign={"center"}
                      >
                        Tasdiqlanmagan
                      </Box>
                    )
                  : null}
                {(!item?.phrase_gildirak || !item?.phrase_arava) && (
                  <Box
                    borderColor={"red.500"}
                    colorScheme="teal"
                    fontSize={"13px"}
                    bgColor={"red.500"}
                    p={"10px"}
                    rounded={"5"}
                    color={"#fff"}
                    fontWeight={700}
                    whiteSpace={"nowrap"}
                    textAlign={"center"}
                  >
                    To`liq tugallanmagan
                  </Box>
                )}
                {item?.date_operation_carriage && (
                  <Box
                    borderColor={"green.500"}
                    colorScheme="teal"
                    fontSize={"13px"}
                    bgColor={"green.500"}
                    p={"10px"}
                    rounded={"5"}
                    color={"#fff"}
                    fontWeight={700}
                    textAlign={"center"}
                    whiteSpace={"nowrap"}
                  >
                    Tasdiqlangan
                  </Box>
                )}
              </Td>
              <Td>
                <Flex gap={2} m={0}>
                  <Button
                    float={"right"}
                    borderColor={"blue.400"}
                    colorScheme="teal"
                    bgColor={"blue.400"}
                    minW={"30px"}
                    p={0}
                    _hover={{ bgColor: "blue.400", opacity: "0.7" }}
                    onClick={() => handleDownload(item?.carriage)}
                  >
                    <FontAwesomeIcon icon={faDownload} />
                  </Button>
                  <Button
                    float={"right"}
                    borderColor={"blue.400"}
                    colorScheme="teal"
                    bgColor={"blue.600"}
                    p={0}
                    minW={"30px"}
                    _hover={{ bgColor: "blue.500", opacity: "0.7" }}
                    onClick={() => handleUpdate(item)}
                  >
                    <FontAwesomeIcon icon={faEye} />
                  </Button>
                  <Button
                    float={"right"}
                    borderColor={"red"}
                    minW={"30px"}
                    colorScheme="teal"
                    bgColor={"red"}
                    onClick={() => handleCheckAndDelete(item?.carriage)}
                    p={0}
                    _hover={{ bgColor: "red", opacity: "0.7" }}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </Button>
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {openDelateModal && (
        <Deleteted
          isOpen={openDelateModal}
          onClose={onCloseDelateModal}
          carriageNumber={getTableData}
          deletedFunction={handleDelate}
        />
      )}{" "}
      {isOpen && (
        <Fraza_model
          isOpen={isOpen}
          onClose={onClose}
          updatedData={updatedData}
        />
      )}
    </>
  );
});

export default FrazaTable;
