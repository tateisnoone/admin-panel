import { Blog, getBlogByIdAsAdmin, getBlogslistAsAdmin } from "@/api/admin";
import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { BLOGS_QUERY_KEYS } from "./enum";

export const useGetBlogsList = <T>({
  queryOptions,
}: {
  queryOptions?: Omit<UseQueryOptions<Blog[], any, T>, "queryKey">;
} = {}): UseQueryResult<T, any> => {
  return useQuery<Blog[], any, T>({
    queryKey: [BLOGS_QUERY_KEYS.LIST],
    queryFn: getBlogslistAsAdmin,
    ...queryOptions,
  });
};

export const useGetBlogsById = ({
  queryOptions,
  id,
}: {
  queryOptions?: Omit<UseQueryOptions<Blog, any>, "queryKey">;
  id: string;
}): UseQueryResult<Blog, any> => {
  return useQuery<Blog, any>({
    queryKey: [BLOGS_QUERY_KEYS.BY_ID, id],
    queryFn: () => getBlogByIdAsAdmin(id),
    ...queryOptions,
  });
};
