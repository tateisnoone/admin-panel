import { supabase } from "..";

export const login = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return supabase.auth.signInWithPassword({ email, password }).then((res) => {
    if (
      res?.error &&
      res?.error.status &&
      (res?.error?.status < 200 || res?.error?.status >= 300)
    ) {
      throw new Error("Wrong Credentials");
    }
    return res;
  });
};
