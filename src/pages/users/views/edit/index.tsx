import UsersCreateEditForm from "../../components/create-edit/user-edit";
import { useParams } from "react-router-dom";
import { useGetUserById } from "@/react-query/query/users";

const UserEditView = () => {
  const { id } = useParams<{ id: string }>();

  const { data: user, isLoading } = useGetUserById(id as string);

  const initialValues = user
    ? {
        email: user.email || "",
        phone: user.phone || "",
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
