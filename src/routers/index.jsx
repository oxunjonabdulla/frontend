import { Outlet } from "react-router";
import { DailyTable } from "../components";
import { AssemblyLayout } from "../layouts/AssemblyLayout";
import {
  AutoBrakersUser,
  AutoUnitUser,
  CarriageUser,
  CollectUser,
  DefecTopUser,
  EquipUser,
  PtoUser,
  StatisticUser,
  WheelUser,
} from "../layouts/PrivateUsers";
import { PtoLayout } from "../layouts/PtoLayout";
import RouteLayout from "../layouts/RouteLayout";
import {
  AssemblyPage,
  AssemblyPageUnitId,
  AutoBrakes,
  AutoConnection,
  AutomobileUnit,
  Carriage,
  CarriageDalolatnoma,
  CarriageUnit,
  DailyRepairs,
  DefectoscopeUnit,
  EntrExit,
  EquipmentUnit,
  Fraza,
  FrazaCarriage,
  HomePage,
  Login,
  NotFoundPage,
  PtoUnit,
  PtoUnitId,
  RegisterAuto,
  RegisterAutoCreate,
  RegisterBrakes,
  RegisterBrakesCreate,
  RegisterRazobshitel,
  RegisterRazobshitelCreate,
  RegisterRegular,
  RegisterRegularCreate,
  RegisterRukvas,
  Reports,
  ReportUniqPage,
  RukvaCreate,
  SignaturePage,
  StatistikaArchive,
  StatistikaPage,
  VU23,
  VU_10,
  VU_22_Arava,
  VU_22_Brakes,
  VU_31,
  VU_31_Create,
  VU_31_Current,
  VU_31_Current_Create,
  VU_32,
  VU_36,
  VU_36_Current,
  VU_47,
  VU_47_Create,
  Wheel,
  WheelPairsPage
} from "../pages";
import { ProtectedRoute } from "../utils/PrivateComponent";
import { RouteNames } from "./consts";
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
          {
            element: <VU_10 />,

            path: RouteNames.VU_10,
          },
          { element: <VU_36 />, path: RouteNames.VU_36 },
          { element: <Fraza />, path: RouteNames.FRAZA },
        ],
      },
      //start current
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
        path: RouteNames.CURRENT_REPAIR,
        children: [
          { element: <DailyRepairs />, index: true },
          {
            element: <Outlet />,
            path: RouteNames.VU_31_CURRENT,
            children: [
              {
                element: <VU_31_Current />,
                index: true,
                path: RouteNames.VU_31_CURRENT,
              },
              {
                element: <VU_31_Current_Create />,
                path: RouteNames.CREATE(RouteNames.VU_31_CURRENT),
              },
            ],
          },
          { element: <VU_36_Current />, path: RouteNames.VU_36_CURRENT },
        ],
      },
      //end current
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
              <CollectUser>
                <AssemblyLayout />
              </CollectUser>
            }
            redirectPath={RouteNames.LOGIN}
          />
        ),

        path: RouteNames.VU_31_COLLECTOR,
        children: [
          { element: <VU23 />, index: true },
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

          { element: <VU_22_Brakes />, path: RouteNames.REGISTER_22 },
          {
            element: <Outlet />,
            path: RouteNames.VU_47,
            children: [
              { element: <VU_47 />, index: true },
              {
                element: <VU_47_Create />,
                path: RouteNames.CREATE(RouteNames.VU_47),
              },
            ],
          },
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
          {
            element: <Outlet />,
            path: RouteNames.REGISTER_REGULAR,
            children: [
              {
                element: <RegisterRegular />,
                index: true,
              },
              {
                element: <RegisterRegularCreate />,
                path: RouteNames.CREATE(RouteNames.REGISTER_REGULAR),
              },
            ],
          },
          {
            element: <Outlet />,
            path: RouteNames.REGISTER_RUKVAS,
            children: [
              {
                element: <RegisterRukvas />,
                index: true,
              },
              {
                element: <RukvaCreate />,
                path: RouteNames.CREATE(RouteNames.REGISTER_RUKVAS),
              },
            ],
          },
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
        children: [
          { element: <DailyTable />, index: true },
          { element: <FrazaCarriage />, path: RouteNames.CARRIAGE_UNIT_FRAZA },
          {
            element: <CarriageDalolatnoma />,
            path: RouteNames.CARRIAGE_UNIT_DEED,
          },
          {
            element: <VU_32 />,
            path: RouteNames.VU_32,
          },
          {
            element: <VU_22_Arava />,
            path: RouteNames.VU_22_Arava,
          },
        ],
      },
      {
        element: (
          <ProtectedRoute
            element={
              <DefecTopUser>
                <DefectoscopeUnit />
              </DefecTopUser>
            }
            redirectPath={RouteNames.LOGIN}
          />
        ),
        path: RouteNames.DEFECTOSCOPES,
        children: [
          { element: <AutoConnection />, index: true },
          { element: <Carriage />, path: RouteNames.CARRIAGE },
          {
            element: <Wheel />,
            path: RouteNames.WHEEL,
          },
        ],
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
            element={<SignaturePage />}
            redirectPath={RouteNames.LOGIN}
          />
        ),
        path: RouteNames.SIGNATURE,
      },
      {
        element: (
          <ProtectedRoute
            element={<Reports />}
            redirectPath={RouteNames.LOGIN}
          />
        ),
        path: RouteNames.REPORT,
      },
      {
        element: (
          <ProtectedRoute
            element={<ReportUniqPage />}
            redirectPath={RouteNames.LOGIN}
          />
        ),
        path: RouteNames.REPORT + "/:reportId",
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
