import {
  Link as LinkChakra,
  Heading,
  Box,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            _hover={{ textDecoration: "none", color: "black" }}
            fontWeight="medium"
            color={path === pathname ? "black" : "gray.400"}
            w="full"
            justifyContent={!collapse ? "center" : ""}
          >
            <FontAwesomeIcon icon={icon} style={{ fontSize: "20px" }} />
            {collapse && <Text>{label}</Text>}
          </LinkChakra>
        </Tooltip>
        {/* {collapse && (
          <React.Fragment>
            {notifications && (
              <Badge
                borderRadius="full"
                colorScheme="yellow"
                w={6}
                textAlign="center"
              >
                {notifications}
              </Badge>
            )}
            {messages && (
              <Badge
                borderRadius="full"
                colorScheme="green"
                w={6}
                textAlign="center"
              >
                {messages}
              </Badge>
            )}
          </React.Fragment>
        )} */}
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
