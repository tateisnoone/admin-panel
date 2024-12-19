import { supabase } from "@/supabase";

export const getUserListAsAdmin = () => {
  return supabase.auth.admin.listUsers().then((res) => {
    return res.data.users as User[];
  });
};

export type User = {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: string;
  phone: string;
  confirmed_at: string;
  last_sign_in_at: string;
  app_metadata: {
    provider: string;
    provides: [string];
  };
  user_metadata: object;
  identities: null;
  created_at: string;
  updated_at: string;
  is_anonymous: boolean;
};

export const getBlogslistAsAdmin = async (): Promise<Blog[]> => {
  const { data, error } = await supabase.from("blog").select("*");

  if (error) {
    throw new Error(error.message);
  }
  return data as Blog[];
};

export const CreateBlogAsAdmin = async (newBlogValues: {
  title: string;
  title_ge: string;
  description: string;
  description_ge: string;
}) => {
  try {
    const { data, error } = await supabase.from("blog").insert(newBlogValues);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error("Error creating blog:", error);
    throw error;
  }
};

export type Blog = {
  created_at: string;
  id: number;
  user_id: string;
  title: string;
  title_ge: string;
  description: string;
  description_ge: string;
  image_url: string;
};

export const EditUserInAdmin = (id: string, payload: { email: string }) => {
  return supabase.auth.admin.updateUserById(id, { ...payload });
};

export const GetUserInfoById = (id: string) => {
  return supabase.auth.admin.getUserById(id).then((res) => {
    console.log(res.data.user);
    return res.data.user;
  });
};

export const CreateUserByAdmin = ({
  email,
  phone,
}: {
  email: string;
  phone: string;
}) => {
  return supabase.auth.signUp({
    email,
    phone,
    password: "Test12345!",
  });
};
