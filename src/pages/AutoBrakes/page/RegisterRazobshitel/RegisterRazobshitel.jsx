import { MainHeads } from "@/components";
import { TableContainer } from "@chakra-ui/react";
import RegisterRazobshitelTable from "./components/RegisterRazobshitelTable";

export const RegisterRazobshitel = () => {
  return (
    <MainHeads
      title="Razobshitelniy va so'ngi jumraklarni ro‘yxatga olish jurnali"
      path="/auto-brakes/register-rozobshitel/create"
    >
      <TableContainer p={4} border={"1px solid #eeeee"}>
        <RegisterRazobshitelTable />
      </TableContainer>
    </MainHeads>
  );
};
