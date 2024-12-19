import { getBlogslistAsAdmin } from "@/api/admin";
import { mapBlogsListForAdmin } from "@/api/admin/utils";
import { useQuery } from "@tanstack/react-query";
import { Table } from "antd";
import Column from "antd/es/table/Column";

const Blogs = () => {
  const { data } = useQuery({
    queryKey: ["blogsList"],
    queryFn: () => getBlogslistAsAdmin,
  });

  console.log("blogs:", data);
  const mappedUsers = mapBlogsListForAdmin(data);

  return (
    <Table bordered dataSource={mappedUsers}>
      <Column title="Id" dataIndex="id" />
      <Column title="User Id" dataIndex="userId" />
      <Column title="Created At" dataIndex="createdAt" />
      <Column title="Title" dataIndex="lastSignIn" />
    </Table>
  );
};

export default Blogs;
