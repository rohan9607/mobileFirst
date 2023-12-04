"use client";
import LoginLayout from "@/components/publicLayout/LoginLayout";
import { Button } from "@/components/utilityComponents/button/Button";
import { useAppDispatch } from "@/redux/hooks";
import { login } from "@/redux/thunks/auth";
import { setCookie } from "@/utils/cookieUtil";
import loginValidationSchema from "@/validations/loginFormSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

type Props = {};

const Login = (props: Props) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
  });

  const onSubmit = (data: any) => {
    console.log({ data });

    dispatch(login(data))
      .unwrap()
      .then((res: any) => {
        if (res.success) {
          setCookie("token", res?.token, { expires: 1 });
          router.replace("dashboard");
        } else {
          Swal.fire({
            icon: "warning",
            text: res.message,
            title: "Error",
          });
        }
      });
  };

  return (
 
    <LoginLayout>
        <>
        <h5>Login</h5>
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="mt-8">
                    <div className="mt-4">
                        <label className=" text-sm font-bold text-[#102030]">
                            Email*
                        </label>
                        <input
                            type="email"
                            {...register("email")}
                            className={`w-full text-sm border-2

            rounded-xl p-3 mt-1 bg-transparent`}
                            placeholder="Enter your email"
                        // disabled={isLoading}
                        />
                        <p className="text-red-500 text-sm">
                            {errors.email?.message}
                        </p>
                    </div>
                    <div className="mt-4">
                        <label className=" text-sm font-bold text-[#102030]">
                            Password*
                        </label>
                        <input
                            type="password"
                            {...register("password")}
                            className={`w-full text-sm border-2  rounded-xl p-3 mt-1 bg-transparent`}
                            placeholder="Enter your Password"
                        // disabled={isLoading}
                        />
                        <p className="text-red-600 text-sm">
                            {errors.password?.message}
                        </p>
                    </div>
                    <div className="mt-8 flex justify-between items-center">
                        <div>
                            {/* <input type="checkbox" id="remember" /> */}
                            <Link href={"/register"}>
                            <h1
                                className="ml-2 font-light text-sm text-red-700"
                            >
                                Register
                            </h1>
                            </Link>
                        </div>
                        <button
                            className="font-light text-sm text-red-700"
                            type="button"
                            onClick={() => router.push("/forgotPassword")}
                        >
                            Forgot Password?
                        </button>
                    </div>
                    <div className="flex flex-col gap-y-4 mt-3">
                        <Button type="submit" className='mx-auto'>Sign In</Button>
                    </div>
                </div>
            </form>
        </>
    </LoginLayout>
  );
};

export default Login;
