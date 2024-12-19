import { GetUserInfoById } from "@/api/admin";
import UsersCreateEditForm from "../../components/create-edit/user-edit";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const UserEditView = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useQuery({
    queryKey: ["userInfoById"],
    queryFn: () => GetUserInfoById(id as string),
  });

  console.log("user info:", data);
  const initialValues = data
    ? {
        email: data.email || "",
        phone: data.phone || "",
      }
    : undefined;
  return (
    <>
      {isLoading ? (
        <span>Loading</span>
      ) : (
        <UsersCreateEditForm initialValues={initialValues} />
      )}
    </>
  );
};

export default UserEditView;
