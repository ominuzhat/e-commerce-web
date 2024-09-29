"use client";
import Image from "next/image";
import resetImg from "../../../../public/Reset password-cuate.png";
import logo from "../../../../public/logo.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

type TChangePassword = {
  newPassword: string;
  confirmPassword: string;
};

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TChangePassword>();
  const onSubmit: SubmitHandler<TChangePassword> = (data) => console.log(data);

  return (
    <div className="max-w-screen-xl mx-auto flex items-center justify-center min-h-screen">
      <div className="lg:flex items-center rounded-lg shadow-lg">
        <div className="bg-footerColor w-full h-full hidden lg:flex justify-center items-center">
          <Image
            src={resetImg}
            alt="resetImg"
            width={400}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full px-10 py-10 space-y-4">
          <Image src={logo} alt={"logo"} width={200} height={500} />
          <p className=" text-gray-500 ">
            Change Password with your Eco Shop account
          </p>
          <hr className="bg-gray-500 w-full" />
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="space-y-2 relative">
              <p className="font-semibold">New Password *</p>
              <input
                type={!newPassword ? "password" : "text"}
                placeholder="Your New Password "
                {...register("newPassword", {
                  required: "New Password is required",
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
                icon={!newPassword ? faEye : faEyeSlash}
                onClick={() => setNewPassword(!newPassword)}
              />
              {errors.newPassword && (
                <span className="text-red-500">
                  {errors.newPassword.message}
                </span>
              )}
            </div>
            <br />

            <div className="space-y-2 relative">
              <p className="font-semibold">Confirm Password *</p>
              <input
                type={!confirmPassword ? "password" : "text"}
                placeholder="Your Confirm Password "
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
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
                icon={!confirmPassword ? faEye : faEyeSlash}
                onClick={() => setConfirmPassword(!confirmPassword)}
              />
              {errors.confirmPassword && (
                <span className="text-red-500">
                  {errors.confirmPassword.message}
                </span>
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

export default ChangePassword;
