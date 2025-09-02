import {
  Box,
  CloseButton,
  Flex,
  Image,
  Text,
  VStack,
  HStack,
  useColorModeValue,
  Divider
} from "@chakra-ui/react";
import { LOGO } from "../../assets/images";
import PropTypes from "prop-types";

export const Logo = ({ collapse, setMocileCollapse }) => {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.200");
  const subtitleColor = useColorModeValue("gray.500", "gray.400");
  const dividerColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Box
      w="full"
      bg={bgColor}
      p={4}
      borderBottom="1px"
      borderColor={dividerColor}
    >
      {!collapse ? (
        // Collapsed state - only logo centered
        <Flex justify="center" align="center">
          <Box
            p={2}
            borderRadius="lg"
            bg={useColorModeValue("blue.50", "blue.900")}
            border="2px"
            borderColor={useColorModeValue("blue.100", "blue.700")}
          >
            <Image
              src={LOGO}
              w="48px"
              h="48px"
              objectFit="contain"
              alt="Vagon Depo Logo"
              transition="all 0.3s ease"
            />
          </Box>
        </Flex>
      ) : (
        // Expanded state - logo with title
        <VStack spacing={3} align="stretch">
          <HStack justify="space-between" align="center">
            <HStack spacing={3} flex={1}>
              <Box
                p={2}
                borderRadius="lg"
                bg={useColorModeValue("blue.50", "blue.900")}
                border="2px"
                borderColor={useColorModeValue("blue.100", "blue.700")}
              >
                <Image
                  src={LOGO}
                  w="48px"
                  h="48px"
                  objectFit="contain"
                  alt="Vagon Depo Logo"
                  transition="all 0.3s ease"
                />
              </Box>

              <VStack spacing={0} align="start" flex={1}>
                <Text
                  fontWeight="bold"
                  fontSize="lg"
                  color={textColor}
                  lineHeight="1.2"
                  userSelect="none"
                >
                  Qarshi Vagon Deposi
                </Text>
                <Text
                  fontSize="xs"
                  color={subtitleColor}
                  lineHeight="1.2"
                  userSelect="none"
                  noOfLines={2}
                >
                  O'zbekiston Temir Yo'llari
                </Text>
              </VStack>
            </HStack>

            <CloseButton
              display={["flex", "none"]}
              size="sm"
              onClick={() => setMocileCollapse(false)}
              color={textColor}
              _hover={{
                bg: useColorModeValue("gray.100", "gray.700")
              }}
            />
          </HStack>

          <Divider borderColor={dividerColor} />

          <Text
            fontSize="xs"
            color={subtitleColor}
            textAlign="center"
            lineHeight="1.3"
            userSelect="none"
            px={2}
            fontWeight="medium"
          >
            Vagon Xo'jaligi Boshqarmasi
          </Text>
        </VStack>
      )}
    </Box>
  );
};

Logo.propTypes = {
  collapse: PropTypes.bool,
  setMocileCollapse: PropTypes.func,
};