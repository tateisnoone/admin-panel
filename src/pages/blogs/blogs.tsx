import { getBlogslistAsAdmin } from "@/api/admin";
import { mapBlogsListForAdmin } from "@/api/admin/utils";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Button, Table } from "antd";
import Column from "antd/es/table/Column";
import { NavLink, useNavigate } from "react-router-dom";

type Blog = {
  id: string;
  userId: string;
  createdAt: string;
  title: string;
  description: string;
};

const Blogs = () => {
  const { data } = useQuery({
    queryKey: ["blogsList"],
    queryFn: getBlogslistAsAdmin,
  });
  const navigate = useNavigate();

  const handleNavigateToBlogEdit = (id: string) => {
    navigate(`/dashboard/blogs/edit/${id}`);
  };

  const mappedUsers = mapBlogsListForAdmin(data);

  return (
    <Table
      title={() => (
        <NavLink to="/dashboard/blogs/create">
          {" "}
          <Button type="primary" icon={<PlusOutlined />}>
            Create Blog
          </Button>{" "}
        </NavLink>
      )}
      bordered
      dataSource={mappedUsers}
    >
      <Column<Blog> title="Id" dataIndex="id" />
      <Column<Blog> title="User Id" dataIndex="userId" />
      <Column<Blog> title="Created At" dataIndex="createdAt" />
      <Column<Blog> title="Title" dataIndex="title" />
      <Column<Blog> title="Description" dataIndex="description" />

      <Column<Blog>
        title="Actions"
        render={(_, row) => {
          return (
            <EditOutlined
              className="cursor-pointer"
              onClick={() => {
                handleNavigateToBlogEdit(row?.id);
              }}
            />
          );
        }}
      />
    </Table>
  );
};

export default Blogs;
