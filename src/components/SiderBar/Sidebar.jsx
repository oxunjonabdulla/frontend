import { Box } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import PropTypes from "prop-types";

export const Sidebar = ({ collapse, setCollapse, setMocileCollapse }) => (
  <>
    <Logo
      collapse={collapse}
      setMocileCollapse={setMocileCollapse}
      setCollapse={setCollapse}
    />
    <Box w="full" overflow={"auto"}>
      <Navigation collapse={collapse} setMocileCollapse={setMocileCollapse} />
    </Box>
  </>
);

Sidebar.propTypes = {
  collapse: PropTypes.bool,
  setCollapse: PropTypes.func,
  setMocileCollapse: PropTypes.func,
};
