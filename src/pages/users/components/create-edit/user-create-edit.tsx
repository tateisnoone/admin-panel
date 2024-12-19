import { EditUserInAdmin } from "@/api/admin";
import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useNavigate, useParams } from "react-router-dom";

const { Item } = Form;

type InitialValues = { email: string; phone: string };

const UsersCreateEditForm: React.FC<{
  initialValues?: InitialValues;
}> = ({ initialValues }) => {
  const { id } = useParams();
  const [form] = useForm<InitialValues>();
  const navigate = useNavigate();

  const handleSubmit = (values: { email: string; phone: string }) => {
    EditUserInAdmin(id as string, values);

    navigate("/dashboard");
  };

  return (
    <Form<InitialValues>
      initialValues={initialValues}
      form={form}
      onFinish={handleSubmit}
      style={{ maxWidth: 600 }}
    >
      <Item label="Email" name="email" rules={[{ required: true }]}>
        <Input placeholder="Enter Email" />
      </Item>

      <Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Item>
    </Form>
  );
};

export default UsersCreateEditForm;
