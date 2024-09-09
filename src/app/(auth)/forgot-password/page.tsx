"use client";
import Image from "next/image";
import forgotImg from "../../../../public/Forgot password-bro.png";
import logo from "../../../../public/logo.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type TForgotPassword = {
  email: string;
};

const ForgotPassword = () => {
  const [password, setPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TForgotPassword>();
  const onSubmit: SubmitHandler<TForgotPassword> = (data) => console.log(data);

  console.log(watch("email")); // watch input value by passing the name of it

  return (
    <div className="max-w-screen-xl mx-auto flex items-center justify-center min-h-screen">
      <div className="lg:flex items-center rounded-lg shadow-lg">
        <div className="bg-footerColor w-full h-full hidden lg:flex justify-center items-center">
          <Image
            src={forgotImg}
            alt="forgotImg"
            width={400}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center items-center  w-full px-10 py-10 space-y-4">
          <Image src={logo} alt={"logo"} width={200} height={500} />
          <p className=" text-gray-500 ">
            Forgot Password with your goemart account
          </p>
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

            <Button className="w-full">Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
