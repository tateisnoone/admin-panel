import { getUserListAsAdmin } from "@/api/admin";
import { mapUsersListForAdmin } from "@/api/admin/utils";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Button, Table } from "antd";
import Column from "antd/es/table/Column";
import { NavLink, useNavigate } from "react-router-dom";

type User = {
  id: string;
  email: string;
  last_sign_in_at: string;
  created_at: string;
  phone: string;
};

const Users = () => {
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ["usersList"],
    queryFn: getUserListAsAdmin,
  });

  const mappedUsers = mapUsersListForAdmin(data);

  const handleNavigateToUserEdit = (id: string) => {
    navigate(`/dashboard/users/edit/${id}`);
  };

  return (
    <Table
      title={() => (
        <NavLink to="/dashboard/users/create">
          {" "}
          <Button type="primary" icon={<PlusOutlined />}>
            Create User
          </Button>{" "}
        </NavLink>
      )}
      bordered
      dataSource={mappedUsers}
    >
      <Column<User> title="Id" dataIndex="id" />
      <Column<User> title="Email" dataIndex="email" />
      <Column<User> title="Phone" dataIndex="phone" />
      <Column<User> title="Created At" dataIndex="createdAt" />
      <Column<User> title="Last Sign In" dataIndex="lastSignIn" />
      <Column<User>
        title="Actions"
        render={(_, row) => {
          return (
            <EditOutlined
              className="cursor-pointer"
              onClick={() => {
                handleNavigateToUserEdit(row?.id);
              }}
            />
          );
        }}
      />
    </Table>
  );
};

export default Users;
