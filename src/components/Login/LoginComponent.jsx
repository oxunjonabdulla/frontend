// Chakra imports
import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import ParticlesBg from "particles-bg";
import PropTypes from "prop-types";

export function LoginComponent(props) {
  const { children, illustrationBackground } = props;

  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");

  return (
    <Flex position="relative" h="max-content">
      {isLargerThan500 && <ParticlesBg type="cobweb" bg={true} />}
      <Flex
        h={{
          sm: "initial",
          md: "unset",
          lg: "100vh",
          xl: "97vh",
        }}
        w="100%"
        maxW={{ md: "66%", lg: "1313px" }}
        mx="auto"
        pt={{ sm: "50px", md: "0px" }}
        px={{ lg: "30px", xl: "0px" }}
        ps={{ xl: "70px" }}
        justifyContent="start"
        direction="column"
      >
        {children}
        <Box
          display={{ base: "none", md: "block" }}
          h="100%"
          minH="100vh"
          w={{ lg: "50vw", "2xl": "44vw" }}
          position="absolute"
          right="0px"
        >
          <Flex
            bg={`url(${illustrationBackground})`}
            justify="center"
            align="end"
            w="100%"
            h="100%"
            bgSize="cover"
            bgPosition="50%"
            position="absolute"
            borderBottomLeftRadius={{ lg: "120px", xl: "200px" }}
          ></Flex>
        </Box>
      </Flex>
    </Flex>
  );
}

LoginComponent.propTypes = {
  illustrationBackground: PropTypes.string,
  image: PropTypes.any,
};
