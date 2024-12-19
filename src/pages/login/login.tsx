import { PropsWithChildren } from "react";

import { useNavigate } from "react-router-dom";

import { login } from "../../supabase/auth";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

const SignIn: React.FC<PropsWithChildren> = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm();

  const { mutate: handleLogin } = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: () => {
      navigate("/dashboard");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const onSubmit = (fieldValues: any) => {
    handleLogin(fieldValues);
  };

  return (
    <div className="container lg mx-auto px-4  mt-8 mb-8 font-sans flex justify-center items-center">
      <div className="w-[450px] h-80 rounded-xl border-solid border border-zinc-200 bg-card p-5 text-center bg-neutral-50">
        <h1 className="text-2xl  text-slate-800 font-bold mb-2">Sign In</h1>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid w-full  items-center gap-3 mb-5">
            <label htmlFor="email" className="text-left text-slate-900">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="email"
              {...register("email", { required: true })}
              className="h-10 p-3 rounded-md"
            />
            {formState.errors?.email ? (
              <span className="text-red-500">Email Required</span>
            ) : null}
          </div>
          <div className="grid w-full items-center gap-3 mb-5">
            <label htmlFor="password" className="text-left text-slate-900">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="password"
              {...register("password", { required: true })}
              className="h-10 p-3 rounded-md"
            />
            {formState.errors?.password ? (
              <span className="text-red-500">Password Required</span>
            ) : null}
          </div>
          <button
            className="rounded-md h-10 bg-blue-500 hover:bg-blue-400 text-base font-sans w-full mb-5"
            type="submit"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
