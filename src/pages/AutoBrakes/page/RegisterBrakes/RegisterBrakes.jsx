import { MainHeads } from "@/components";
import { TableContainer } from "@chakra-ui/react";
import RegisterBrakesTable from "./components/RegisterBrakes";

export const RegisterBrakes = () => {
  return (
    <MainHeads
      title="Rezervuar, tormoz silindr va ishchi kameralarni ro‘yxatga olish kitobi"
      path="/auto-brakes/register-brake-silindir/create"
    >
      <TableContainer p={4} border={"1px solid #eeeee"}>
        <RegisterBrakesTable />
      </TableContainer>
    </MainHeads>
  );
};
