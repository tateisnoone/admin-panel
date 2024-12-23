import { useCreateUser } from "@/react-query/mutation/users";

import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";

const { Item } = Form;

type InitialValues = { email: string; phone: string };

const UsersCreateForm: React.FC = () => {
  const [form] = useForm();

  const { mutate: handleCreateUser } = useCreateUser();

  const handleSubmit = (values: InitialValues) => {
    handleCreateUser(values);
  };

  return (
    <Form<InitialValues> form={form} onFinish={handleSubmit} className="w-80">
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
