import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";

import { vu_53 } from "../../../utils/mock_heads";

export const InviteTable = () => {
  return (
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
          <Th fontSize={"10px"} colSpan={32} textAlign={"center"}>
            Qabul
          </Th>
        </Tr>
        <Tr>
          {vu_53?.headers?.map((item) => (
            <Th
              fontSize={"10px"}
              textAlign={"center"}
              key={item.label}
              rowSpan={item?.rowspan}
              colSpan={item?.colspan}
            >
              {item.label}
            </Th>
          ))}
        </Tr>
        <Tr>
          {vu_53?.nestedHeaders?.map((item, idx) => (
            <Th
              fontSize={"10px"}
              key={idx}
              textAlign={"center"}
              rowSpan={item?.rowspan}
              colSpan={item?.colspan}
            >
              {item?.label}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody></Tbody>
    </Table>
  );
};
