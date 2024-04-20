import { Box } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import PropTypes from "prop-types";
import SimpleBar from "simplebar-react";

import "simplebar-react/dist/simplebar.min.css";
export const Sidebar = ({ collapse, setCollapse, setMocileCollapse }) => (
  <>
    <Logo
      collapse={collapse}
      setMocileCollapse={setMocileCollapse}
      setCollapse={setCollapse}
    />
    <Box w="full" overflow={"hidden"}>
      <SimpleBar style={{ maxHeight: 800 }} forceVisible="y">
        <Navigation collapse={collapse} setMocileCollapse={setMocileCollapse} />
      </SimpleBar>
    </Box>
  </>
);

Sidebar.propTypes = {
  collapse: PropTypes.bool,
  setCollapse: PropTypes.func,
  setMocileCollapse: PropTypes.func,
};
