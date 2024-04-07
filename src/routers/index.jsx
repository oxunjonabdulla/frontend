import { AssemblyLayout } from "../layouts/AssemblyLayout";
import { PtoLayout } from "../layouts/PtoLayout";
import RouteLayout from "../layouts/RouteLayout";
import {
  AssemblyPage,
  AssemblyPageUnitId,
  AutoBrakes,
  AutomobileUnit,
  CarriageUnit,
  Defectoscopes,
  EquipmentUnit,
  HomePage,
  Login,
  NotFoundPage,
  PtoUnit,
  PtoUnitId,
  StatistikaArchive,
  StatistikaPage,
  WheelPairsPage,
  DailyRepairs,
  VU_31,
  VU_36,
  Fraza,
  VU_31_Create,
  RegisterAuto,
  RegisterRegular,
  VU_22,
  VU_47,
  RegisterRukvas,
  RegisterRazobshitel,
  RegisterBrakes,
  EntrExit,
  RegisterAutoCreate,
  RegisterRazobshitelCreate,
  RegisterBrakesCreate,
} from "../pages";
import {
  CollectUser,
  DefecTopUser,
  PtoUser,
  StatisticUser,
  WheelUser,
  AutoBrakersUser,
  AutoUnitUser,
  EquipUser,
  CarriageUser,
} from "../layouts/PrivateUsers";
import { ProtectedRoute } from "../utils/PrivateComponent";
import { RouteNames } from "./consts";
import { Outlet } from "react-router";
import { DailyTable } from "../components";
export const routes = [
  {
    element: <RouteLayout />,
    path: RouteNames.HOME,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute
            element={<HomePage />}
            redirectPath={RouteNames.LOGIN}
          />
        ),
        path: RouteNames.HOME,
        errorElement: <NotFoundPage />,
      },

      {
        element: (
          <ProtectedRoute
            element={
              <StatisticUser>
                <StatistikaPage />
              </StatisticUser>
            }
            redirectPath={RouteNames.LOGIN}
          />
        ),
        path: RouteNames.STATISTIKA,
        children: [
          { element: <DailyRepairs />, index: true },
          {
            element: <Outlet />,
            path: RouteNames.VU_31,
            children: [
              { element: <VU_31 />, index: true },
              {
                element: <VU_31_Create />,
                path: RouteNames.CREATE(RouteNames.VU_31),
              },
            ],
          },
          { element: <VU_36 />, path: RouteNames.VU_36 },
          { element: <Fraza />, path: RouteNames.FRAZA },
        ],
      },
      {
        element: (
          <ProtectedRoute
            element={
              <StatisticUser>
                <StatistikaArchive />
              </StatisticUser>
            }
            redirectPath={RouteNames.LOGIN}
          />
        ),
        path: RouteNames.STATISTIKAARCHIVE,
      },
      {
        element: (
          <ProtectedRoute
            element={
              <CollectUser>
                <AssemblyLayout />
              </CollectUser>
            }
            redirectPath={RouteNames.LOGIN}
          />
        ),

        path: RouteNames.ASSEMBLY,
        children: [
          { element: <AssemblyPage />, index: true },
          { element: <AssemblyPageUnitId />, path: ":id" },
        ],
      },
      {
        element: (
          <ProtectedRoute
            element={
              <AutoBrakersUser>
                <AutoBrakes />
              </AutoBrakersUser>
            }
            redirectPath={RouteNames.LOGIN}
          />
        ),
        path: RouteNames.AUTO_BRAKES,
        children: [
          { element: <DailyTable />, index: true },

          { element: <VU_22 />, path: RouteNames.VU_22 },
          { element: <VU_47 />, path: RouteNames.VU_47 },
          {
            element: <Outlet />,
            path: RouteNames.REGISTER_AUTO,
            children: [
              { element: <RegisterAuto />, index: true },
              {
                element: <RegisterAutoCreate />,
                path: RouteNames.CREATE(RouteNames.REGISTER_AUTO),
              },
            ],
          },
          { element: <RegisterRegular />, path: RouteNames.REGISTER_REGULAR },
          { element: <RegisterRukvas />, path: RouteNames.REGISTER_RUKVAS },
          {
            element: <Outlet />,
            path: RouteNames.REGISTER_RAZOBSHITEL,
            children: [
              {
                element: <RegisterRazobshitel />,
                index: true,
              },
              {
                element: <RegisterRazobshitelCreate />,
                path: RouteNames.CREATE(RouteNames.REGISTER_RAZOBSHITEL),
              },
            ],
          },
          {
            element: <Outlet />,
            path: RouteNames.REGISTER_BRAKES,
            children: [
              {
                element: <RegisterBrakes />,
                index: true,
              },
              {
                element: <RegisterBrakesCreate />,
                path: RouteNames.CREATE(RouteNames.REGISTER_BRAKES),
              },
            ],
          },
          { element: <EntrExit />, path: RouteNames.REGISTER_EXITENTRY },
        ],
      },
      {
        element: (
          <ProtectedRoute
            element={
              <AutoUnitUser>
                <AutomobileUnit />
              </AutoUnitUser>
            }
            redirectPath={RouteNames.LOGIN}
          />
        ),
        path: RouteNames.AUTOMOBILE_UNIT,
      },
      {
        element: (
          <ProtectedRoute
            element={
              <CarriageUser>
                <CarriageUnit />
              </CarriageUser>
            }
            redirectPath={RouteNames.LOGIN}
          />
        ),
        path: RouteNames.CARRIAGE_UNIT,
      },

      {
        element: (
          <ProtectedRoute
            element={
              <DefecTopUser>
                <Defectoscopes />
              </DefecTopUser>
            }
            redirectPath={RouteNames.LOGIN}
          />
        ),
        path: RouteNames.DEFECTOSCOPES,
      },
      {
        element: (
          <ProtectedRoute
            element={
              <EquipUser>
                <EquipmentUnit />
              </EquipUser>
            }
            redirectPath={RouteNames.LOGIN}
          />
        ),
        path: RouteNames.EQUIPMENT_UNIT,
      },
      {
        element: (
          <ProtectedRoute
            element={
              <PtoUser>
                <PtoLayout />
              </PtoUser>
            }
            redirectPath={RouteNames.LOGIN}
          />
        ),
        path: RouteNames.PRO_UNIT,

        children: [
          {
            index: true,
            element: <PtoUnit />,
          },
          {
            element: <PtoUnitId />,
            path: ":id",
          },
        ],
      },
      {
        element: (
          <ProtectedRoute
            element={
              <WheelUser>
                <WheelPairsPage />
              </WheelUser>
            }
            redirectPath={RouteNames.LOGIN}
          />
        ),
        path: RouteNames.WHEEL_PAIRS,
      },

      {
        element: <ProtectedRoute element={<NotFoundPage />} />,
        path: RouteNames.NOT_FOUND,
      },
    ],
  },
  {
    element: <Login />,
    path: RouteNames.LOGIN,
  },
];

const getRouteNames = (routesObjects) => {
  return routesObjects.reduce((acc, route) => {
    const paths = (route.path || "")
      .replaceAll(":", ",")
      .replaceAll("/", ",")
      .split(",");
    const children = route.children || [];
    return Array.from(new Set([...acc, ...paths, ...getRouteNames(children)]));
  }, []);
};

export const routeNames = new Set(getRouteNames(routes));
