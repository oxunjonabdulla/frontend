import { memo, useMemo, useState } from "react";
import { vu_31 } from "@/utils/mock_heads";
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { timeClear } from "@/utils/timeClear";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import UserApi from "../../../Service/module/userModule.api";
import { reverseDateFormat } from "../../../utils";
import { timeMoment } from "../../../utils/roleTest";
import { useNavigate } from "react-router";

const VU_31_Table = memo(function VU_31_Table({ gettingData, currentPage }) {
  const [updateData, setUpdateData] = useState(null);
  const [getTableData, setGetinfTableData] = useState(null);
  const {
    isOpen: openDelateModal,
    onOpen: onOpenDelateModal,
    onClose: onCloseDelateModal,
  } = useDisclosure();
  const {
    isOpen: isOpenVu10,
    onOpen: onOpenVu10,
    onClose: onCloseVu10,
  } = useDisclosure();
  const {
    isOpen: onUpdateIsOpen,
    onOpen: onUpdateOpen,
    onClose: onUpdateClose,
  } = useDisclosure();

  const handleUpdate = (data) => {
    onUpdateOpen();
    setUpdateData(data);
  };
  const handlVu10 = (data) => {
    onOpenVu10();
    setUpdateData(data);
  };
  const navigate = useNavigate();
  const hanldeSendTOVu10 = async () => {
    const { response } = await new UserApi().postVu31TOVu10(
      updateData?.carriage_number
    );

    if (response.status === 200) {
      toast({
        status: "success",
        title: response.data?.status,
        duration: 4000,
        isClosable: true,
        position: "top-right",
        fontSize: "3xl",
      });
      onCloseVu10();
      navigate("/statistics/vu-10/");
    } else {
      toast({
        status: "error",
        title: "Xatolik mavjud operator bilan bog'laning",
        duration: 4000,
        isClosable: true,
        position: "top-right",
        fontSize: "3xl",
      });
    }
  };

  const memoData = useMemo(() => updateData, [updateData]);
  const handleCheckAndDelete = (deletedID) => {
    onOpenDelateModal();
    setGetinfTableData(deletedID);
  };
  const toast = useToast();
  const handleDelate = async (carriageID) => {
    const { response, error } = await new UserApi().deleteVu31(carriageID);
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

  return (
    <>
      <Modal
        isOpen={isOpenVu10}
        w={"100%"}
        onClose={onCloseVu10}
        size={["sm", "md"]}
        isCentered
        motionPreset="slideInLeft"
      >
        <ModalOverlay backdropFilter="blur(10px) hue-rotate(10deg)" />
        <ModalContent>
          <ModalHeader textAlign={"center"}>
            VU-10 Jurnalida o'tkazish
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Siz rostan ham{" "}
            <Text as={"span"} fontWeight={700} color={"green"}>
              {updateData?.carriage_number}
            </Text>{" "}
            vagon raqamini VU-10ga ot'kazasizmi
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onCloseVu10}>
              Yo'q bekor qilish
            </Button>
            <Button
              colorScheme="teal"
              // isLoading={isLoading}
              loadingText="Saqlash"
              spinnerPlacement="end"
              onClick={hanldeSendTOVu10}
              type="submit"
            >
              Ha VU-10ga o'tkazaman
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Table
        borderRadius={10}
        size={"sm"}
        whiteSpace={"pre-wrap"}
        variant={"striped"}
        overflow={"hidden"}
        colorScheme="blackAlpha"
      >
        <Thead bg={"#0c6170"} rounded={10}>
          <Tr>
            {vu_31?.nestedHeaders?.map((item) => (
              <Th
                fontSize={"10px"}
                textAlign={"center"}
                key={item.label}
                rowSpan={item.rowspan}
                colSpan={item.colspan}
              >
                {item.label}
              </Th>
            ))}
          </Tr>
          <Tr>
            {vu_31?.nestedTwo?.map((item, idx) => (
              <Th fontSize={"10px"} key={idx} textAlign={"center"}>
                {item}
              </Th>
            ))}
          </Tr>
        </Thead>

        <Tbody>
          {gettingData?.results?.map((item, idx) => (
            <Tr key={item.carriage}>
              <Td>{currentPage * 10 + idx + 1}</Td>
              <Td fontWeight={700} color={"green.900"}>
                {item.carriage_number}
              </Td>
              <Td fontWeight={700} color={"green.900"} whiteSpace={"nowrap"}>
                <ul>
                  <li>
                    Kun: {timeMoment(item?.created_at)?.day} <br />
                  </li>
                  <li> Soat:{timeMoment(item?.created_at)?.time}</li>
                </ul>
              </Td>
              <Td>{item.is_freight ? "Yukli" : "Yuksiz"}</Td>
              <Td>{item.train_number}</Td>
              <Td>{item.last_repair}</Td>
              <Td>{item.buksa}</Td>
              <Td>{item.rolik_podshipnik}</Td>
              <Td>{item.boshqa_tech_error}</Td>
              <Td>{item.junatish_park}</Td>
              <Td whiteSpace={"nowrap"}>
                {reverseDateFormat(item?.nosoz_kirish_date)}
              </Td>
              <Td>
                {timeClear(item.nosoz_kirish_hour) +
                  ":" +
                  timeClear(item.nosoz_kirish_minute)}
              </Td>
              <Td whiteSpace={"nowrap"}>
                {reverseDateFormat(item?.tamir_uzatish_date)}
              </Td>
              <Td>
                {timeClear(item.tamir_uzatish_hour) +
                  ":" +
                  timeClear(item.tamir_uzatish_minute)}
              </Td>
              <Td whiteSpace={"nowrap"}>{item.tamir_boshlanish_date}</Td>
              <Td>
                {timeClear(item.tamir_boshlanish_hour) +
                  ":" +
                  timeClear(item.tamir_boshlanish_minute)}
              </Td>
              <Td whiteSpace={"nowrap"}>
                {reverseDateFormat(item.nosoz_chiqish_date)}
              </Td>
              <Td>
                {timeClear(item.nosoz_chiqish_hour) +
                  ":" +
                  timeClear(item.nosoz_chiqish_minute)}
              </Td>
              <Td whiteSpace={"nowrap"}>{item.bekat_yulida_gr11} soat</Td>
              <Td whiteSpace={"nowrap"}>{item.tamir_yulida_gr13} soat</Td>
              <Td whiteSpace={"nowrap"}>{item.tamir_vaqtida_gr13} soat</Td>
              <Td whiteSpace={"nowrap"}>{item.umumiy_turish_gr11} soat</Td>
              <Td>
                <Button colorScheme="blue" onClick={() => handlVu10(item)}>
                  VU-10
                </Button>
              </Td>
              <Td>
                <Flex gap={2} m={0}>
                  <Button
                    float={"right"}
                    borderColor={"green.400"}
                    colorScheme="teal"
                    bgColor={"green.400"}
                    p={0}
                    minW={"30px"}
                    _hover={{ bgColor: "green.500", opacity: "0.7" }}
                    onClick={() => handleUpdate(item)}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </Button>
                  <Button
                    float={"right"}
                    borderColor={"red"}
                    minW={"30px"}
                    colorScheme="teal"
                    bgColor={"red"}
                    p={0}
                    _hover={{ bgColor: "red", opacity: "0.7" }}
                    onClick={() => handleCheckAndDelete(item?.carriage_number)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </Button>
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
});

VU_31_Table.propTypes = {
  gettingData: PropTypes.object,
  currentPage: PropTypes.number,
};

export default VU_31_Table;
