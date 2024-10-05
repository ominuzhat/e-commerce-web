"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useWebsiteInfo } from "@/providers/website.provider";

const CheckoutOption = ({ setCheckout }: any) => {
  const data: any = useWebsiteInfo();
  const { deliveryOptions } = data || {};

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      deliveryOption: deliveryOptions?.[0]?.name || "",
    },
  });

  const selectedDeliveryOption = watch("deliveryOption");

  useEffect(() => {
    if (selectedDeliveryOption) {
      const selectedOption = deliveryOptions?.find(
        (option: any) => option.name === selectedDeliveryOption
      );
      setCheckout(selectedOption);
    }
  }, [selectedDeliveryOption, deliveryOptions, setCheckout]);

  const onSubmit = (formData: any) => {
    console.log("Selected Delivery Option:", formData.deliveryOption);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-5">
      <h1 className="text-xl font-semibold mb-4">Select a Delivery Option</h1>
      <div className="space-y-4">
        {deliveryOptions?.map((option: any, index: any) => (
          <label
            key={index}
            className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            <div className="flex items-center">
              <input
                type="radio"
                value={option.name}
                {...register("deliveryOption", {
                  required: "Please select a delivery option",
                })}
                className="mr-4"
              />
              <div>
                <p className="font-semibold">{option.name}</p>
                <p className="text-sm text-gray-600">
                  {option.method} - {option.estimatedDeliveryTime}
                </p>
              </div>
            </div>
            <p className="font-semibold">${option.cost.toFixed(2)}</p>
          </label>
        ))}
        {errors.deliveryOption && (
          <p className="text-red-500 text-sm mt-2">Select Delivery Option</p>
        )}
      </div>
    </form>
  );
};

export default CheckoutOption;
