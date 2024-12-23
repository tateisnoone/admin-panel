import { useEffect } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { supabase } from "./supabase";
//import { useAuthContext } from "./context/auth/hooks/useAuthContext";

import { userAtom } from "./store/auth";
import { useAtom } from "jotai";
import SignIn from "./pages/login/login";
import DashboardLayout from "./layouts/dashboard";
import AuthGuardUnauthorized from "./components/route-guards/auth/is-unauthorized";
import AuthGuardAuthorized from "./components/route-guards/auth/is-authorized";
import { USERS_ROUTES } from "./routes/dashboard/users";
import { BLOGS_ROUTES } from "./routes/dashboard/blogs";

const App: React.FC = () => {
  const [, setUser] = useAtom(userAtom);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session);
    });

    return () => subscription.unsubscribe();
  }, [setUser]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <AuthGuardAuthorized>
                <SignIn />
              </AuthGuardAuthorized>
            }
          ></Route>
          <Route
            path="/dashboard"
            element={
              <AuthGuardUnauthorized>
                <DashboardLayout />
              </AuthGuardUnauthorized>
            }
          >
            <Route path="users">{USERS_ROUTES}</Route>

            <Route path="blogs">{BLOGS_ROUTES}</Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
App.displayName = "App Component";
export default App;
