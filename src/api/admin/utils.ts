import dayjs from "dayjs";
import { Blog, User } from ".";

export const mapUsersListForAdmin = (users: User[]) => {
  return users?.map((user) => ({
    key: user.id,
    id: user?.id,
    email: user?.email,
    phone: user?.phone,
    createdAt: dayjs(user.created_at).format("YYYY-MM-DD HH:mm"),
    lastSignIn: dayjs(user?.last_sign_in_at).format("YYYY-MM-DD HH:mm"),
  }));
};

export const mapBlogsListForAdmin = (blogs: Blog[]) => {
  return blogs?.map((blog) => ({
    key: blog.id,
    id: blog?.id,
    userId: blog?.user_id,
    createdAt: dayjs(blog?.created_at).format("YYYY-MM-DD HH:mm"),
    title: blog?.title,
    description: blog?.description,
  }));
};
