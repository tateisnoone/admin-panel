import { EditUserInAdmin } from "@/api/admin";
import { DASHBOARD_PATHS } from "@/routes/dashboard/index.enum";
import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useNavigate, useParams } from "react-router-dom";

const { Item } = Form;

type InitialValues = { email: string; phone: string };

const UsersEditForm: React.FC<{
  initialValues?: InitialValues;
}> = ({ initialValues }) => {
  const { id } = useParams();
  const [form] = useForm<InitialValues>();
  const navigate = useNavigate();
  

  const handleSubmit = (values: { email: string; phone: string }) => {
    EditUserInAdmin(id as string, values);
    navigate(DASHBOARD_PATHS.FOR_USERS);
  };

  return (
    <Form<InitialValues>
      initialValues={initialValues}
      form={form}
      onFinish={handleSubmit}
      className="w-80"
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

export default UsersEditForm;
