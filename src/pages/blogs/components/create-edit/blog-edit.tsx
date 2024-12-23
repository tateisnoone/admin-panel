import { useEditBlog } from "@/react-query/mutation/blogs";
import { DASHBOARD_PATHS } from "@/routes/dashboard/index.enum";
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

  const { mutate: handleEditBlog } = useEditBlog();

  const handleSubmit = (
    id: string,
    values: {
      title: string;
      description: string;
      title_ge: string;
      description_ge: string;
    }
  ) => {
    handleEditBlog({ id, values });
    navigate(DASHBOARD_PATHS.FOR_BLOGS);
  };

  return (
    <Form<InitialValues>
      initialValues={initialValues}
      form={form}
      onFinish={(values: InitialValues) => handleSubmit(id as string, values)}
      className="w-80"
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
