import {
  Divider,
  Flex,
  IconButton,
  Image,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";

import { vu_51 } from "../../../utils/mock_heads";
import { useState } from "react";
import UserApi from "../../../Service/module/userModule.api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { imageGet } from "../../../utils/imageGet";
import PropTypes from "prop-types";
import { Deleteted } from "../../Deletete";
import { reverseDateFormat } from "../../../utils";
import { AccaptedTable } from "./Accepted";
import { Acepted } from "../Modals/VU_51_model/Acepted";

export const InviteTable = ({ data }) => {
  const [getTableData, setGetinfTableData] = useState(null);
  const [delateModal, setDelateModal] = useState(false);

  const [updateBack, setBackId] = useState(null);
  const [showBack, setShowBackData] = useState({});
  const {
    isOpen: isOpenShowBack,
    onClose: onCloseShowBack,
    onOpen: onOpenShowBack,
  } = useDisclosure();
  const {
    isOpen: isOpenUpdate,
    onClose: onCloseUpdate,
    onOpen: onOpenUpdate,
  } = useDisclosure();
  
  const handleCheckAndDelete = (deletedID) => {
    setDelateModal(true);
    setGetinfTableData(deletedID);
  };

  const handleDelate = async () => {
    const { response } = await new UserApi().delVu51(getTableData?.uuid);
    if (response) {
      window.location.reload();
    }
  };

  const handleBackUpdate = (data) => {
    onOpenUpdate();
    setBackId(data);
  };
  const handleShowBack = (data) => {
    onOpenShowBack();
    setShowBackData(data);
  };

  return (
    <>
      {" "}
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
            {vu_51?.invite?.headers?.map((item) => (
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
            {vu_51?.invite?.nestedHeaders?.map((item) => (
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
        </Thead>
        <Tbody>
          {data?.map((item, idx) => {
            const { invite_detail } = item;

            return (
              <Tr key={item.id}>
                <Td textAlign={"center"} fontSize={"lg"}>
                  {idx + 1}
                </Td>
                <Td>
                  {invite_detail?.carriage_depo_station}
                  <Divider my={1} />
                  {invite_detail?.depo_text}
                </Td>
                <Td>{reverseDateFormat(invite_detail?.invite_date)}</Td>
                <Td fontWeight={700}> {invite_detail?.wheel_pair_number}</Td>
                <Td> {invite_detail?.wheel_pair_type}</Td>
                <Td> {invite_detail?.last_formation}</Td>
                <Td> {invite_detail?.full_inspaction}</Td>
                <Td> {invite_detail?.carriage_under}</Td>
                <Td> {invite_detail?.invite_vchd}</Td>
                <Td> {invite_detail?.referance_number}</Td>
                <Td> {invite_detail?.valid_invalid_text}</Td>
                <Td> {invite_detail?.repair_required}</Td>
                <Td>
                  {reverseDateFormat(invite_detail?.inviting_date)}
                  <Divider my={2} />

                  {item?.wheel_signature_user_signature ? (
                    <Image
                      width={"100px"}
                      src={imageGet(item?.wheel_signature_user_signature)}
                    />
                  ) : (
                    <Text as={"p"} color={"teal"}>
                      Imzo tasdiqlangan
                    </Text>
                  )}
                </Td>

                <Td>
                  {" "}
                  <Flex gap={2} justifyContent={"center"}>
                    {!item?.accepted_detail.arrow_neck_diametr_chap ? (
                      <Flex justify={"center"} align={"center"} gap={2} m={0}>
                        <Text>Orqa tomonini kiritish:</Text>
                        <IconButton
                          onClick={() => handleBackUpdate(item)}
                          colorScheme="messenger"
                          icon={<FontAwesomeIcon icon={faPlus} />}
                        />
                      </Flex>
                    ) : (
                      <Flex justify={"center"} gap={2} m={0}>
                        <IconButton
                          colorScheme="whatsapp"
                          onClick={() => handleShowBack(item)}
                          icon={<FontAwesomeIcon icon={faEye} />}
                        />
                      </Flex>
                    )}
                    <IconButton
                      colorScheme="red"
                      onClick={() => handleCheckAndDelete(item)}
                      icon={<FontAwesomeIcon icon={faTrashAlt} />}
                    />
                  </Flex>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <Acepted
        isOpen={isOpenUpdate}
        onClose={onCloseUpdate}
        accaptedData={updateBack}
      />
      <AccaptedTable
        isOpen={isOpenShowBack}
        onClose={onCloseShowBack}
        data={showBack}
      />
      <Deleteted
        isOpen={delateModal}
        onClose={setDelateModal}
        carriageNumber={String(getTableData?.id)}
        deletedFunction={handleDelate}
      />
    </>
  );
};

InviteTable.propTypes = {
  data: PropTypes.array,
};
