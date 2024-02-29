import { Navigate, Outlet, useLocation } from "react-router";
import { Box, Flex, HStack } from "@chakra-ui/react";
import { Sidebar } from "../components/SiderBar/Sidebar";
import { AvatarBox } from "../components/SiderBar/AvatarBox";

import UserApi from "../Service/module/userModule.api";
import { setUser } from "../redux/Slices/setUserGet";
import { useDispatch } from "react-redux";
import { setDaily } from "../redux/Slices/dailySlice";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";

export default function RouteLayout() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { isAuth } = useAuth();
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));

  const [collapse, setCollapse] = useState(true);
  const [mobileCollapse, setMocileCollapse] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const { response, error } = await new UserApi().getMe();
      dispatch(setUser(response?.data));
      if (error?.code === "user_inactive") {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.reload();
      }
      if (error) {
        localStorage.removeItem("accessToken");

        if (refreshToken) {
          const refreshed = {
            refresh: refreshToken,
          };
          const { response, error } = await new UserApi().refreshToken(
            refreshed
          );

          if (response) {
            localStorage.setItem(
              "accessToken",
              JSON.stringify(response.data.access)
            );
            window.location.reload();
          }
          if (error) {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            window.location.reload();
          }
        }
      }
    };
    const fetchDailData = async () => {
      const { response } = await new UserApi().getDailyToday();
      if (response) {
        dispatch(setDaily(response?.data));
      }
    };

    if (accessToken || refreshToken) {
      fetchData();
      fetchDailData();
    }
  }, [accessToken, dispatch, refreshToken]);

  return isAuth() ? (
    <>
      {location.pathname === "/login" ? (
        <Outlet />
      ) : (
        <HStack w="full" h="100vh" bg="gray.100">
          <Box
            onClick={() => setMocileCollapse(false)}
            opacity={mobileCollapse ? 1 : 0}
            pointerEvents={!mobileCollapse ? "none" : "inherit"}
            visibility={!mobileCollapse ? "hidden" : "inherit"}
            transition={"opacity 0.1s"}
            width={"100%"}
            height={"100%"}
            position={"fixed"}
            top={0}
            bgColor={"rgba(0,0,0,0.2)"}
            zIndex={2}
            backdropFilter={"blur(8px)"}
          ></Box>
          <Flex
            as="aside"
            w="full"
            h="full"
            maxW={["300px", collapse ? 350 : 100]}
            position={["fixed", "inherit"]}
            top={0}
            left={[mobileCollapse ? "0" : "-100%"]}
            bg="white"
            alignItems="start"
            zIndex={3}
            padding={6}
            gap={10}
            flexDirection="column"
            transition="ease-in-out .05s"
            borderTopEndRadius="3xl"
            borderBottomEndRadius="3xl"
            shadow={"lg"}
          >
            <Sidebar
              collapse={collapse}
              setMocileCollapse={setMocileCollapse}
              setCollapse={setCollapse}
            />
          </Flex>
          <Box
            as="main"
            position="relative"
            w="full"
            h="100%"
            overflow={"auto"}
            bg="white"
          >
            <AvatarBox
              setMocileCollapse={setMocileCollapse}
              setCollapse={setCollapse}
            />

            <Outlet />
          </Box>
        </HStack>
      )}
    </>
  ) : (
    <Navigate to={"/login"} />
  );
}
