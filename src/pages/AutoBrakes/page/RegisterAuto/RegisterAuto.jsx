import { MainHeads } from "@/components";
import { TableContainer } from "@chakra-ui/react";
import RegisterAutoTables from "./components/RegisterAutoTables";

export const RegisterAuto = () => {
  return (
    <MainHeads
      title="Avtorejimlarni ro‘yxatga olish"
      path="/auto-brakes/register-auto/create"
    >
      <TableContainer p={4} border={"1px solid #eeeee"} shadow={"lg"}>
        <RegisterAutoTables />
      </TableContainer>
    </MainHeads>
  );
};
