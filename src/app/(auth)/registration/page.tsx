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
import { toast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useRouter } from "next/navigation";
import { registerUser } from "@/utils/actions/registerUser";

export type TRegistration = {
  firstName: string;
  email: string;
  password: string;
};

const Registration = () => {
  const [password, setPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TRegistration>();

  const onSubmit: SubmitHandler<TRegistration> = async (
    data: TRegistration
  ) => {
    const response = await registerUser(data);
    console.log(response);

    if (response?.success === true) {
      toast({
        title: `Hi, ${response?.data?.firstName}!`,
        description: "Check your mail for validation",
        action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
      });
      reset();
    } else {
      toast({
        title: "Registration Failed",
        description: response?.message || "An unknown error occurred.",
      });
    }

    // try {
    //   const res = await registerUser(data);
    //   console.log("Registration success:", res);

    //   if (res?.success) {
    //     toast({
    //       title: `Hi, ${res?.data?.name}!`,
    //       description: "User Registration Success",
    //       action: (
    //         <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
    //       ),
    //     });

    //     // Navigate to the dashboard
    //     const router = useRouter();
    //     router.push("/dashboard");
    //   } else {
    //     toast({
    //       title: "Registration Failed",
    //       description: res?.message || "An unknown error occurred.",
    //     });
    //   }
    // } catch (error: any) {
    //   console.error("Error during submission:", error);
    //   toast({
    //     title: "Error",
    //     description: error.message || "Something went wrong!",
    //   });
    // }
  };

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
        <div className="flex flex-col justify-center items-center px-10 py-10 space-y-4">
          <Image src={logo} alt={"logo"} width={200} height={500} />
          <p className=" text-gray-500 ">
            Registration with your Eco Shop account
          </p>
          <hr className="bg-gray-500 w-full" />
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="space-y-2">
              <p className="font-semibold">Full Name *</p>
              <input
                placeholder="Your Full Name"
                {...register("firstName", {
                  required: "name is required",
                })}
                className="px-4 py-2 rounded-md border w-full focus:outline-none hover:border-baseColor"
              />
              {errors.firstName && (
                <span className="text-red-500">{errors.firstName.message}</span>
              )}
            </div>
            <br />
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
                {...register("password", {
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
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>
            <br />
            <Button className="w-full">Submit</Button>
          </form>
          <Button variant={"ghost"} className="space-x-1 ">
            <FontAwesomeIcon className="cursor-pointer w-5 " icon={faGoogle} />
            <p>Connect With Google</p>
          </Button>
          <div className="flex items-center space-x-3">
            <hr className=" w-40 bg-gray-200" />
            <p>or</p>
            <hr className=" w-40 bg-gray-200" />
          </div>
          <p className="text-sm">
            Already have an account?{" "}
            <Link className="text-baseColor underline" href={"/login"}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
