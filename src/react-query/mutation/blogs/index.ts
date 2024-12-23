import { CreateBlogAsAdmin, EditBlogAsAdmin } from "@/api/admin";
import { DASHBOARD_PATHS } from "@/routes/dashboard/index.enum";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { BLOGS_MUTATION_KEYS } from "./enum";

export const useCreateBlog = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: [BLOGS_MUTATION_KEYS.CREATE],
    mutationFn: CreateBlogAsAdmin,
    onSuccess: () => {
      navigate(DASHBOARD_PATHS.FOR_BLOGS);
    },
  });
};

export const useEditBlog = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: [BLOGS_MUTATION_KEYS.EDIT],
    mutationFn: EditBlogAsAdmin,
    onSuccess: () => {
      navigate(DASHBOARD_PATHS.FOR_BLOGS);
    },
  });
};
