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
import Users from "./pages/users/users";
import Blogs from "./pages/blogs/blogs";
import UserCreateView from "./pages/users/views/create";
import UserEditView from "./pages/users/views/edit";
import BlogCreateView from "./pages/blogs/components/views/create";
import BlogEditView from "./pages/blogs/components/views/edit";
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
            <Route path="users">
              <Route index element={<Users />} />
              <Route path="create" element={<UserCreateView />} />
              <Route path="edit/:id" element={<UserEditView />} />{" "}
            </Route>

            <Route path="blogs">
              <Route index element={<Blogs />} />
              <Route path="create" element={<BlogCreateView />} />
              <Route path="edit/:id" element={<BlogEditView />} />
            </Route>
          </Route>

          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};
App.displayName = "App Component";
export default App;
