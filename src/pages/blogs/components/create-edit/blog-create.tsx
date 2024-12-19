import { CreateBlogAsAdmin } from "@/api/admin";
import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useNavigate } from "react-router-dom";

const { Item } = Form;

const BlogsCreateForm: React.FC = () => {
  const [form] = useForm();
  const navigate = useNavigate();

  const handleSubmit = async (values: {
    title: string;
    description: string;
    title_ge: string;
    description_ge: string;
  }) => {
    try {
      await CreateBlogAsAdmin(values);
      navigate("/dashboard/blogs");
    } catch (error) {
      console.error("Failed to create blog:", error);
    }
  };

  return (
    <Form form={form} onFinish={handleSubmit} style={{ maxWidth: 600 }}>
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

export default BlogsCreateForm;
