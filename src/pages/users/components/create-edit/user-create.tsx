import { CreateUserByAdmin } from "@/api/admin";
import { Button, Form, Input, message } from "antd";
import { useForm } from "antd/es/form/Form";
import { useNavigate } from "react-router-dom";

const { Item } = Form;

type InitialValues = { email: string; phone: string };

const UsersCreateForm: React.FC = () => {
  const [form] = useForm();
  const navigate = useNavigate();

  const handleSubmit = async (values: InitialValues) => {
    try {
      await CreateUserByAdmin(values);
      message.success("User created successfully");
      navigate("/dashboard/users");
    } catch (error: any) {
      message.error(`Error: ${error.message}`);
    }
  };

  return (
    <Form<InitialValues>
      form={form}
      onFinish={handleSubmit}
      style={{ maxWidth: 600 }}
    >
      <Item label="Email" name="email" rules={[{ required: true }]}>
        <Input placeholder="Enter Email" />
      </Item>
      <Item label="Phone" name="phone" rules={[{ required: false }]}>
        <Input placeholder="Enter Phone" />
      </Item>

      <Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Item>
    </Form>
  );
};

export default UsersCreateForm;
