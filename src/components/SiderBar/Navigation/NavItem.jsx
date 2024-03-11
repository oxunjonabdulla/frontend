import {
  Link as LinkChakra,
  Heading,
  Box,
  Text,
  Tooltip,
  Image,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export const NavItem = ({ item, collapse }) => {
  const { label, icon, path, type } = item;
  const { pathname } = useLocation();
  if (type === "link") {
    return (
      <Box display="flex" alignItems="center" my={6} justifyContent="center">
        <Tooltip isDisabled={collapse} label={label} placement="right">
          <LinkChakra
            to={path}
            as={Link}
            gap={3}
            display="flex"
            alignItems="center"
            transition={"0.2s"}
            _hover={{
              textDecoration: "none",
              color: "black",
              filter: "grayscale(0)",
            }}
            filter={path === pathname ? "grayscale(0%)" : "grayscale(100%)"}
            fontWeight="medium"
            color={path === pathname ? "black" : "gray.400"}
            w="full"
            justifyContent={!collapse ? "center" : ""}
          >
            <Image src={icon} width={"25px"} />
            {collapse && <Text>{label}</Text>}
          </LinkChakra>
        </Tooltip>
      </Box>
    );
  }
  return (
    <Heading
      color="gray.400"
      fontWeight="medium"
      textTransform="uppercase"
      fontSize="sm"
      borderTopWidth={1}
      borderColor="gray.100"
      pt={collapse ? 8 : 0}
      my={6}
    >
      <Text display={collapse ? "flex" : "none"}>{label}</Text>
    </Heading>
  );
};
NavItem.propTypes = {
  item: PropTypes.object,
  collapse: PropTypes.bool,
};
