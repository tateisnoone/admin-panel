import { GetUserInfoById } from "@/api/admin";
import UsersCreateEditForm from "../../components/create-edit/user-create-edit";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const UserEditView = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useQuery({
    queryKey: ["userInfoById", id],
    queryFn: () => GetUserInfoById,
  });
  console.log("user info:", data);
  return <UsersCreateEditForm />;
};

export default UserEditView;
