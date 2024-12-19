import { Blog, User } from ".";

export const mapUsersListForAdmin = (users: User[]) => {
  return users?.map((user) => ({
    id: user?.id,
    email: user?.email,
    createdAt: user?.created_at,
    lastSignIn: user?.last_sign_in_at,
  }));
};

export const mapBlogsListForAdmin = (blogs: Blog[]) => {
  return blogs?.map((blog) => ({
    id: blog?.id,
    userId: blog?.user_id,
    createdAt: blog?.created_at,
    title: blog?.title,
  }));
};
