"use client";
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/hooks/use-toast";
import { contactMessage } from "@/utils/actions/contactMessage";
import { SubmitHandler, useForm } from "react-hook-form";

export type TContactMessage = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TContactMessage>();

  const onSubmit: SubmitHandler<TContactMessage> = async (data) => {
    const response = await contactMessage(data);
    if (response?.success === true) {
      toast({
        title: `Hi, ${response?.data?.fullName}!`,
        description: "Message sent successfully",
        action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
      });
      reset();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="pt-5 space-y-5">
        <div className="flex gap-5">
          <div className="w-full">
            <input
              {...register("fullName", { required: "Name is required" })}
              type="text"
              placeholder="Your Name"
              className={`px-4 py-4 rounded-xl border focus:outline-none w-full duration-300 hover:duration-300 ${
                errors.fullName ? "border-red-500" : "hover:border-baseColor"
              }`}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm pt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div className="w-full">
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="Your Email"
              className={`px-4 py-4 rounded-xl border focus:outline-none w-full duration-300 hover:duration-300 ${
                errors.email ? "border-red-500" : "hover:border-baseColor"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm pt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <input
            {...register("phone", { required: "Phone is required" })}
            type="number"
            placeholder="Your Phone Number"
            className={`px-4 py-4 rounded-xl border focus:outline-none w-full duration-300 hover:duration-300 ${
              errors.phone ? "border-red-500" : "hover:border-baseColor"
            }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm pt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <textarea
            {...register("message", { required: "Message is required" })}
            placeholder="Write Your Message"
            className={`px-4 py-4 rounded-xl border focus:outline-none w-full duration-300 hover:duration-300 ${
              errors.message ? "border-red-500" : "hover:border-baseColor"
            }`}
            rows={4}
          />
          {errors.message && (
            <p className="text-red-500 text-sm pt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="px-6 py-3 bg-baseColor text-white rounded-xl hover:bg-opacity-90 duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
