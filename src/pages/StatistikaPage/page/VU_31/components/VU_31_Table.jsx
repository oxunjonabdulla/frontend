import { memo, useMemo, useState } from "react";
import { vu_31 } from "@/utils/mock_heads";
import {
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
import { timeClear } from "@/utils/timeClear";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { VU_31_Update } from "./VU_31_Update";
import PropTypes from "prop-types";

import { Deleteted } from "@/components";
import UserApi from "../../../../../Service/module/userModule.api";
import { reverseDateFormat } from "../../../../../utils";
const VU_31_Table = memo(function VU_31_Table({ gettingData, currentPage }) {
  const [updateData, setUpdateData] = useState(null);
  const [getTableData, setGetinfTableData] = useState(null);
  const {
    isOpen: openDelateModal,
    onOpen: onOpenDelateModal,
    onClose: onCloseDelateModal,
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
                <Button colorScheme="blue">VU-10</Button>
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
      {openDelateModal && (
        <Deleteted
          isOpen={openDelateModal}
          onClose={onCloseDelateModal}
          carriageNumber={getTableData}
          deletedFunction={handleDelate}
        />
      )}{" "}
      {onUpdateIsOpen && (
        <VU_31_Update
          isOpen={onUpdateIsOpen}
          onClose={onUpdateClose}
          updatedData={memoData}
        />
      )}
    </>
  );
});

VU_31_Table.propTypes = {
  gettingData: PropTypes.object,
  currentPage: PropTypes.number,
};

export default VU_31_Table;
