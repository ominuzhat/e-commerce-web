"use client";
import Image from "next/image";
import loginImg from "../../../../public/Order food-pana.png";
import logo from "../../../../public/logo.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { signIn } from "next-auth/react";
import { LoginUser } from "@/utils/actions/loginUser";
import { toast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useRouter, useSearchParams } from "next/navigation";
import { useUser } from "@/providers/user.provider";

export type TLogin = {
  email: string;
  Password: string;
};

const Login = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");

  const { setIsLoading }: any = useUser();
  const [password, setPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TLogin>();

  const onSubmit: SubmitHandler<TLogin> = async (data: TLogin) => {
    console.log(data);
    try {
      const res = await LoginUser(data);
      setIsLoading(true);
      console.log(res);
      if (res.success) {
        localStorage.setItem("accessToken", res?.accessToken);
        // cookies().set("accessToken", res?.accessToken);
        toast({
          title: `Hi, ${res?.data?.name}!`,
          description: "User Registration Success",
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
        });
        // router.push(redirect);
      }
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  console.log(watch("email")); // watch input value by passing the name of it

  return (
    <div className="max-w-screen-xl mx-auto flex items-center justify-center min-h-screen">
      <div className="lg:flex items-center rounded-lg shadow-lg">
        <div className="bg-footerColor w-full h-full hidden lg:flex justify-center items-center">
          <Image
            src={loginImg}
            alt="loginImg"
            width={400}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center items-center  px-10 py-10 space-y-4">
          <Image src={logo} alt={"logo"} width={200} height={500} />
          <p className=" text-gray-500 ">Login with your Eco Shop account</p>
          <hr className="bg-gray-500 w-full" />
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="space-y-2">
              <p className="font-semibold">Email Address *</p>
              <input
                placeholder="Your Email Address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Invalid email format",
                  },
                })}
                className="px-4 py-2 rounded-md border w-full focus:outline-none hover:border-baseColor"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
            <br />
            <div className="space-y-2 relative">
              <p className="font-semibold">Password *</p>
              <input
                type={!password ? "password" : "text"}
                placeholder="Your Password "
                {...register("Password", {
                  required: "Password is required",
                  pattern: {
                    value:
                      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      "Password must be at least 8 characters long, contain one uppercase letter, one number, and one special character",
                  },
                })}
                className="px-4 py-2 rounded-md border w-full focus:outline-none hover:border-baseColor "
              />
              <FontAwesomeIcon
                className="cursor-pointer absolute top-1/2 right-5 text-baseColor"
                icon={!password ? faEye : faEyeSlash}
                onClick={() => setPassword(!password)}
              />
              {errors.Password && (
                <span className="text-red-500">{errors.Password.message}</span>
              )}
            </div>
            <Link
              href={"/forgot-password"}
              className="flex justify-end my-4 text-baseColor"
            >
              Forgot Password?
            </Link>

            <Button className="w-full">Submit</Button>
          </form>
          <Button
            variant={"ghost"}
            className="space-x-1"
            onClick={() =>
              signIn("google", {
                callbackUrl: "http://localhost:3000/profile",
              })
            }
          >
            <FontAwesomeIcon className="cursor-pointer w-5 " icon={faGoogle} />
            <p>Connect With Google</p>
          </Button>
          <div className="flex items-center space-x-3">
            <hr className=" w-40 bg-gray-200" />
            <p>or</p>
            <hr className=" w-40 bg-gray-200" />
          </div>
          <p className="text-sm">
            Don't have an account?{" "}
            <Link className="text-baseColor underline" href={"/registration"}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
