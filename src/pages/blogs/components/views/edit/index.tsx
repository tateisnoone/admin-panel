import { useParams } from "react-router-dom";
import BlogsEditForm from "../../create-edit/blog-edit";
import { useGetBlogsById } from "@/react-query/query/blogs";

const BlogEditView = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useGetBlogsById({
    id: id as string,
  });
  const initialValues = data
    ? {
        title: data.title || "",
        title_ge: data.title_ge || "",
        description: data.description || "",
        description_ge: data.description_ge || "",
      }
    : undefined;
  return (
    <>
      {" "}
      {isLoading ? (
        <span>Loading</span>
      ) : (
        <BlogsEditForm initialValues={initialValues} />
      )}
    </>
  );
};

export default BlogEditView;
