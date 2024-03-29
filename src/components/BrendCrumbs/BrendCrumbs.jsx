import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from "@chakra-ui/react";
import { faHomeAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { routersSidebar } from "../../utils/mock_heads";

export const BrendCrumbs = memo(function ContentHead() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumb my={5}>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/">
          <Text _hover={{ textDecoration: "underline" }}>
            <FontAwesomeIcon icon={faHomeAlt} color="#7F8389" />
          </Text>
        </BreadcrumbLink>
      </BreadcrumbItem>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        const testRoute = routersSidebar.find((item) =>
          item?.path.includes(name)
        )?.label;
        return (
          <BreadcrumbItem key={name} isCurrentPage={isLast}>
            <BreadcrumbLink
              as={isLast ? "span" : Link}
              to={isLast ? null : routeTo}
              textTransform={"capitalize"}
            >
              {testRoute
                ? routersSidebar.find((item) => item.path.includes(name)).label
                : name}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
});
