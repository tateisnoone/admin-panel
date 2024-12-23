import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { DASHBOARD_PATHS } from "../index.enum";

const UsersLazy = lazy(() => import("@/pages/users/users"));
const UserCreateViewLazy = lazy(() => import("@/pages/users/views/create"));
const UserEditViewLazy = lazy(() => import("@/pages/users/views/edit"));

export const USERS_ROUTES = [
  <>
    <Route
      index
      element={
        <Suspense fallback={<span>Loading</span>}>
          <UsersLazy />
        </Suspense>
      }
    />
    <Route
      path={DASHBOARD_PATHS.FOR_CREATE}
      element={
        <Suspense fallback={<span>Loading</span>}>
          <UserCreateViewLazy />
        </Suspense>
      }
    />
    <Route
      path={DASHBOARD_PATHS.FOR_EDIT}
      element={
        <Suspense fallback={<span>Loading</span>}>
          <UserEditViewLazy />
        </Suspense>
      }
    />
  </>,
];
