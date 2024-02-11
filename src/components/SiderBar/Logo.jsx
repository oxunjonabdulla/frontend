import { Box, CloseButton, Flex, Image, Text } from "@chakra-ui/react";
import { LOGO } from "../../assets/images";
import PropTypes from "prop-types";

export const Logo = ({ collapse, setMocileCollapse }) => (
  <Flex
    w="full"
    alignItems="center"
    justifyContent="space-between"
    flexDirection={collapse ? "row" : "column"}
    gap={4}
  >
    <Box display="flex" w={"100%"} alignItems="center" gap={2}>
      {!collapse && (
        <Image
          src={LOGO}
          transition={"width 0.3s"}
          w={"60px"}
          objectFit={"cover"}
          alt="Vagon Depo Logo"
        />
      )}

      {collapse && (
        <Flex
          justifyContent={["space-between", "center"]}
          w={"100%"}
          align={"center"}
        >
          <Image
            src={LOGO}
            transition={"width 0.3s"}
            w={"60px"}
            objectFit={"cover"}
            alt="Vagon Depo Logo"
          />
          <CloseButton
            display={["inherit", "none"]}
            onClick={() => setMocileCollapse(false)}
          />
          <Text
            as="span"
            display={["none", "none", "inherit"]}
            textAlign={"center"}
            fontWeight={700}
            fontSize={"12px"}
            color={"gray.700"}
            userSelect={"none"}
          >
            O‘zbekiston temir yo‘llari AJ Qarshi mintaqaviy temir yo‘l uzeli
            Qarshi vagon deposi
          </Text>
        </Flex>
      )}
    </Box>
  </Flex>
);
Logo.propTypes = {
  collapse: PropTypes.bool,
  setMocileCollapse: PropTypes.func,
};
