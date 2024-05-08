import { MainHeads } from "@/components";
import { TableContainer } from "@chakra-ui/react";
import RegulyatorTable from "./components/RegulyatorTable";

export const RegisterRegular = () => {
  return (
    <MainHeads
      title="Avtoregulyatorlarni ro‘yxatga olish"
      path="/auto-brakes/register-regular/create"
    >
      <TableContainer p={4} border={"1px solid #eeeee"}>
        <RegulyatorTable />
      </TableContainer>
    </MainHeads>
  );
};
