import { MainHeads } from "@/components";
import { TableContainer } from "@chakra-ui/react";
import VU_47_Table from "./components/VU_47_Table";

export const VU_47 = () => {
  return (
    <MainHeads title="VU-47 Shakl" path="/auto-brakes/vu-47/create">
      <TableContainer p={4} border={"1px solid #eeeee"}>
        <VU_47_Table />
      </TableContainer>
    </MainHeads>
  );
};