import {
  Button,
  Divider,
  Flex,
  Image,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { vu_51 } from "../../../utils/mock_heads";
import { useState } from "react";
import UserApi from "../../../Service/module/userModule.api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { imageGet } from "../../../utils/imageGet";
import PropTypes from "prop-types";
import { Deleteted } from "../../Deletete";

export const InviteTable = ({ data }) => {
  const [getTableData, setGetinfTableData] = useState(null);
  const [delateModal, setDelateModal] = useState(false);

  const handleCheckAndDelete = (deletedID) => {
    setDelateModal(true);
    setGetinfTableData(deletedID);
  };

  const handleDelate = async (carriageID) => {
    const { response } = await new UserApi().delVu51(carriageID);
    if (response) {
      window.location.reload();
    }
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
                <Td fontWeight={700}>{item?.carriage}</Td>
                <Td>
                  {invite_detail?.carriage_depo_station}
                  <Divider my={1} />
                  {invite_detail?.depo_text}
                </Td>
                <Td>{invite_detail?.invite_date}</Td>
                <Td fontWeight={700}> {invite_detail?.wheel_pair_number}</Td>
                <Td> {invite_detail?.wheel_pair_type}</Td>
                <Td> {invite_detail?.wheel_surface_diametr}</Td>
                <Td> {invite_detail?.last_formation}</Td>
                <Td> {invite_detail?.full_inspaction}</Td>
                <Td> {invite_detail?.carriage_under}</Td>
                <Td> {invite_detail?.invite_vchd}</Td>
                <Td> {invite_detail?.referance_number}</Td>
                <Td> {invite_detail?.valid_invalid_text}</Td>
                <Td> {invite_detail?.repair_required}</Td>
                <Td>
                  {invite_detail?.inviting_date}
                  <Divider my={2} />

                  {invite_detail?.user_signature_url ? (
                    <Image
                      width={"100px"}
                      src={imageGet(invite_detail?.user_signature_url)}
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
                    <Button
                      float={"right"}
                      borderColor={"blue.400"}
                      colorScheme="teal"
                      bgColor={"blue.400"}
                      p={0}
                      _hover={{ bgColor: "blue.400", opacity: "0.7" }}
                    >
                      <FontAwesomeIcon icon={faDownload} />
                    </Button>
                    <Button
                      float={"right"}
                      borderColor={"red"}
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
            );
          })}
        </Tbody>
      </Table>
      <Deleteted
        isOpen={delateModal}
        onClose={setDelateModal}
        carriageNumber={getTableData}
        deletedFunction={handleDelate}
      />
    </>
  );
};

InviteTable.propTypes = {
  data: PropTypes.array,
};
