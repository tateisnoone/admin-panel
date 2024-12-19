import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="mt-20">
      <div className="mb-6 text-center text-2xl">Auth Page</div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
