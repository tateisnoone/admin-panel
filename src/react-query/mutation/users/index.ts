import { CreateUserByAdmin } from "@/api/admin";
import { DASHBOARD_PATHS } from "@/routes/dashboard/index.enum";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

export const useCreateUser = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["user-create"],
    mutationFn: CreateUserByAdmin,
    onSuccess: () => {
      navigate(DASHBOARD_PATHS.FOR_USERS);
    },
  });
};

// export const useEditUser = () => {
//   const navigate = useNavigate();
//   return useMutation({
//     mutationKey: ["user-edit"],
//     mutationFn: EditUserInAdmin,
//     onSuccess: () => {
//       navigate(DASHBOARD_PATHS.FOR_USERS);
//     },
//   });
// };
