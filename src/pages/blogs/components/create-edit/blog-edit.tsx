import { EditBlogAsAdmin } from "@/api/admin";
import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useNavigate, useParams } from "react-router-dom";

const { Item } = Form;

type InitialValues = {
  title: string;
  title_ge: string;
  description: string;
  description_ge: string;
};

const BlogsEditForm: React.FC<{
  initialValues?: InitialValues;
}> = ({ initialValues }) => {
  const { id } = useParams();
  const [form] = useForm<InitialValues>();
  const navigate = useNavigate();

  const handleSubmit = (values: {
    title: string;
    title_ge: string;
    description: string;
    description_ge: string;
  }) => {
    EditBlogAsAdmin(id as string | number, values);
    navigate("/dashboard/blogs");
  };

  return (
    <Form<InitialValues>
      initialValues={initialValues}
      form={form}
      onFinish={handleSubmit}
      style={{ maxWidth: 600 }}
    >
      <Item label="Title" name="title" rules={[{ required: true }]}>
        <Input placeholder="Enter Title" />
      </Item>
      <Item label="Description" name="description" rules={[{ required: true }]}>
        <Input placeholder="Enter Description" />
      </Item>
      <Item label="TitleGE" name="title_ge" rules={[{ required: true }]}>
        <Input placeholder="Enter Title in GE" />
      </Item>
      <Item
        label="DescriptionGe"
        name="description_ge"
        rules={[{ required: true }]}
      >
        <Input placeholder="Enter Description in GE" />
      </Item>
      <Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Item>
    </Form>
  );
};

export default BlogsEditForm;
