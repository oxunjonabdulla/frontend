import {
  Badge,
  Box,
  Image,
  List,
  ListItem,
  Text,
  Tooltip,
  Link as LinkChakra,
} from "@chakra-ui/react";

import { NavItem } from "./NavItem";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { home } from "@/assets";
import { routersSidebar } from "@/utils/mock_heads";
import { signatur } from "../../../assets";
import UserApi from "../../../Service/module/userModule.api";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { signature_roles } from "../../../utils/roleTest";

const home_page = {
  isWork: false,
  label: "Bosh Sahifa",
  path: "/",
  type: "link",
  icon: home,
};
const signature_page = {
  isWork: false,
  label: "Imzolanmagan jo'rnallar",
  path: "/signatures-list",
  type: "signature",
  icon: signatur,
};
export const Navigation = ({ collapse, setMocileCollapse }) => {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    const { response } = await new UserApi().getAlSsignatures();
    if (response) {
      setData(response?.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { user } = useSelector(({ userMe }) => userMe);

  const { pathname } = useLocation();

  return (
    <List w="full" overflow={"hidden"}>
      <ListItem onClick={() => setMocileCollapse(false)}>
        <NavItem item={home_page} data={data} collapse={collapse} />
      </ListItem>
      {signature_roles.includes(user?.role) && (
        <ListItem onClick={() => setMocileCollapse(false)}>
          <Box
            display="flex"
            alignItems="center"
            my={6}
            justifyContent="center"
          >
            <Tooltip
              isDisabled={collapse}
              label={signature_page.label}
              placement="right"
            >
              <LinkChakra
                to={signature_page.path}
                as={Link}
                gap={3}
                display="flex"
                alignItems="center"
                _hover={{ textDecoration: "none", color: "black" }}
                fontWeight="medium"
                color={signature_page.path === pathname ? "black" : "gray.400"}
                w="full"
                justifyContent={!collapse ? "center" : ""}
              >
                <Box
                  w={"10%"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  as="div"
                >
                  <Image src={signature_page.icon} width={"25px"} />
                </Box>

                {collapse && <Text>{signature_page.label}</Text>}
                {data?.count > 0 && (
                  <Badge
                    variant="outline"
                    rounded={"2xl"}
                    colorScheme="blue"
                    p={2}
                  >
                    {data?.count}
                  </Badge>
                )}
              </LinkChakra>
            </Tooltip>
          </Box>
        </ListItem>
      )}
      {routersSidebar
        .filter((item) =>
          user?.role === "Superuser" ? item : item?.role === user?.role
        )
        .map((item, index) => (
          <ListItem key={index} onClick={() => setMocileCollapse(false)}>
            <NavItem item={item} collapse={collapse} />
          </ListItem>
        ))}
    </List>
  );
};
Navigation.propTypes = {
  collapse: PropTypes.bool,
  setMocileCollapse: PropTypes.func,
};
