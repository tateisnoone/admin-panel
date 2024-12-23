import { GetUserInfoById, getUserListAsAdmin, User } from "@/api/admin";
import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { USERS_QUERY_KEYS } from "./enum";

export const useGetUsersList = <T>({
  queryOptions,
}: {
  queryOptions?: Omit<UseQueryOptions<User[], any, T>, "queryKey">;
} = {}): UseQueryResult<T, any> => {
  return useQuery<User[], any, T>({
    queryKey: [USERS_QUERY_KEYS.LIST],
    queryFn: getUserListAsAdmin,
    ...queryOptions,
  });
};

export const useGetUserById = (id: string) => {
  return useQuery({
    queryKey: [USERS_QUERY_KEYS.BY_ID],
    queryFn: () => GetUserInfoById(id as string),
  });
};
