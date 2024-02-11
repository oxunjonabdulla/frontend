import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
} from "@chakra-ui/react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const BreadCumbs = ({ path, current }) => {
  return (
    <Flex justify={"center"} align={"center"} height={"100%"} mb={4}>
      <Breadcrumb
        spacing="8px"
        separator={<FontAwesomeIcon icon={faChevronRight} size="sm" />}
      >
        <BreadcrumbItem
          fontWeight={600}
          _hover={{ textDecoration: "underline" }}
        >
          {" "}
          <Link to={path?.link}>{path?.title}</Link>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          {" "}
          <BreadcrumbLink href={current?.link}>{current?.title}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Flex>
  );
};

BreadCumbs.propTypes = {
  path: PropTypes.object,
  current: PropTypes.object,
};
