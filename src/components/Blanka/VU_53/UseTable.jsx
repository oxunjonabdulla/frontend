import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";

import { vu_53 } from "../../../utils/mock_heads";

export const UseTable = () => {
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
          <Th colSpan="37" textAlign={"center"} fontSize={"10px"}>
            IsTemol
          </Th>
        </Tr>

        <Tr>
          {vu_53?.secondHeader &&
            vu_53?.secondHeader?.map((item, idx) => (
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

        <Tr>
          {vu_53?.secondHeaderNested &&
            vu_53?.secondHeaderNested?.map((item, idx) => (
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

        <Tr>
          {vu_53?.secondNestedDeepHeadersNext &&
            vu_53?.secondNestedDeepHeadersNext?.map((item, idx) => (
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

        <Tr>
          {vu_53?.secondDeepHeadersNext &&
            vu_53?.secondDeepHeadersNext?.map((item, idx) => (
              <Th fontSize={"10px"} key={idx} textAlign={"center"}>
                {item?.label}
              </Th>
            ))}
        </Tr>
      </Thead>
      <Tbody></Tbody>
    </Table>
  );
};
