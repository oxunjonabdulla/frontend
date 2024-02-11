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
        element: <Login />,
        path: RouteNames.LOGIN,
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
