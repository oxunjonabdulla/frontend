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
import { Fragment, useState } from "react";
import UserApi from "../../../Service/module/userModule.api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { imageGet } from "../../../utils/imageGet";
import PropTypes from "prop-types";
import { Deleteted } from "../../Deletete";

export const AccaptedTable = ({ data }) => {
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
            {vu_51?.accepted?.headers?.map((item) => (
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
            {vu_51?.accepted?.nestedHeaders?.map((item) => (
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
            {vu_51?.accepted?.nestedDeepHeaders?.map((item) => (
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
            const { accepted_detail } = item;

            return accepted_detail ? (
              <Fragment key={accepted_detail.id}>
                <Tr>
                  <Td rowSpan={2} textAlign={"center"} fontSize={"lg"}>
                    {idx + 1}
                  </Td>
                  <Td rowSpan={2} fontWeight={700}>
                    {item?.carriage}
                  </Td>
                  <Td rowSpan={2}>{accepted_detail?.last_formation}</Td>
                  <Td rowSpan={2}>{accepted_detail?.full_inspaction}</Td>
                  <Td rowSpan={2}>{accepted_detail?.carriage_using_number}</Td>
                  <Td rowSpan={2}>{accepted_detail?.shipped_vchd}</Td>
                  <Td rowSpan={2}>{accepted_detail?.referance_number}</Td>
                  <Td rowSpan={2}>{accepted_detail?.repair_perfomed}</Td>
                  <Td> O`ng</Td>
                  <Td> {accepted_detail?.arrow_neck_length_right}</Td>
                  <Td> {accepted_detail?.arrow_neck_diametr_right}</Td>
                  <Td> {accepted_detail?.neck_stupitsa_type_right}</Td>
                  <Td> {accepted_detail?.neck_stupitsa_diametr_right}</Td>
                  <Td> {accepted_detail?.shaft_diametr_right}</Td>
                  <Td> {accepted_detail?.wheel_thickness_right}</Td>
                  <Td> {accepted_detail?.wheel_rolling_right}</Td>
                  <Td> {accepted_detail?.wheel_diametr_right}</Td>
                  <Td> {accepted_detail?.wheel_distance_between_right}</Td>
                  <Td rowSpan={2}>
                    {accepted_detail?.date_of_repair}
                    <Divider my={2} />

                    {accepted_detail?.user_signature_url ? (
                      <Image
                        width={"100px"}
                        src={imageGet(accepted_detail?.user_signature_url)}
                      />
                    ) : (
                      <Text as={"p"} color={"red"}>
                        Imzo qo`yilmagan
                      </Text>
                    )}
                  </Td>
                  <Td rowSpan={2}>
                    {accepted_detail?.invited_date}
                    <Divider my={2} />

                    {accepted_detail?.user_signature_url ? (
                      <Image
                        width={"100px"}
                        src={imageGet(accepted_detail?.user_signature_url)}
                      />
                    ) : (
                      <Text as={"p"} color={"red"}>
                        Imzo qo`yilmagan
                      </Text>
                    )}
                  </Td>
                  <Td rowSpan={2}>
                    {" "}
                    <Flex gap={2} justifyContent={"center"}>
                      <Button
                        float={"right"}
                        borderColor={"blue.400"}
                        variant={"solid"}
                        bgColor={"blue.400"}
                        p={0}
                        _hover={{ bgColor: "blue.400", opacity: "0.7" }}
                      >
                        <FontAwesomeIcon icon={faDownload} />
                      </Button>
                      <Button
                        float={"right"}
                        borderColor={"red"}
                        variant={"solid"}
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

                <Tr>
                  <Td> Chap</Td>
                  <Td> {accepted_detail?.arrow_neck_length_left}</Td>
                  <Td> {accepted_detail?.arrow_neck_diametr_chap}</Td>
                  <Td> {accepted_detail?.neck_stupitsa_type_left}</Td>
                  <Td> {accepted_detail?.neck_stupitsa_diametr_left}</Td>
                  <Td> {accepted_detail?.shaft_diametr_left}</Td>
                  <Td> {accepted_detail?.wheel_thickness_left}</Td>
                  <Td> {accepted_detail?.wheel_rolling_left}</Td>
                  <Td> {accepted_detail?.wheel_diametr_left}</Td>
                  <Td> {accepted_detail?.wheel_distance_between_left}</Td>
                </Tr>
              </Fragment>
            ) : (
              <Tr key={Math.random() * 100 + 152}>
                <Td rowSpan={2} textAlign={"center"} fontSize={"lg"}>
                  {idx + 1}
                </Td>
                <Td rowSpan={2} fontWeight={700}>
                  {item?.carriage}
                </Td>
                <Td textAlign={"center"} colSpan={19}>
                  {item?.carriage} raqami uchun vagon ishi tugallanmagan
                  ma`lumot joylash uchun vagon raqami orqali quyish bolimini
                  to`ldiring.
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

AccaptedTable.propTypes = {
  data: PropTypes.array,
};
