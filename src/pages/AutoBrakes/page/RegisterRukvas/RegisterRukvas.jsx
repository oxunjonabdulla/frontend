import { MainHeads } from "@/components";
import { TableContainer } from "@chakra-ui/react";
import RukvaTable from "./components/RukvaTable";

export const RegisterRukvas = () => {
  return (
    <MainHeads
      title="Rukavalarni ro‘yxatga olish jurnali"
      path="/auto-brakes/register-rukvas/create"
    >
      <TableContainer p={4} border={"1px solid #eeeee"}>
        <RukvaTable />
      </TableContainer>
    </MainHeads>
  );
};
