import { Table, TableContainer as Container } from "@chakra-ui/react";
import PropTypes from "prop-types";

export const TableContainer = ({ children }) => {
  return (
    <Container p={4} border={"1px solid #eeeee"} shadow={"lg"}>
      <Table
        borderRadius={10}
        size={"sm"}
        whiteSpace={"pre-wrap"}
        variant={"striped"}
        overflow={"hidden"}
        colorScheme="blackAlpha"
      >
        {children}
      </Table>
    </Container>
  );
};

TableContainer.propTypes = {
  children: PropTypes.element,
};
