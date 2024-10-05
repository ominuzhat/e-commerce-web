import { Button } from "@/components/ui/button";
import MainLayout from "@/layout/MainLayout";
import Link from "next/link";
import React from "react";

const OrderConfirm = () => {
  const orderNumber = "38HF654DWR"; // Replace with your dynamic order number if needed

  return (
    <MainLayout>
      <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg text-center my-20">
        <h1 className="text-2xl font-semibold text-baseColor mb-4">
          Thank You for Your Order!
        </h1>
        <p className="text-gray-600 mb-4">
          Your order has been placed and will be processed as soon as possible.
          Make sure you make note of your order number, which is
          <span className="font-bold"> {orderNumber}</span>.
        </p>
        <p className="text-gray-600 mb-6">
          You will be receiving an email shortly with confirmation of your
          order.
        </p>
        <Link href="/shop">
          <Button className="w-full bg-baseColor text-white py-3 rounded-full">
            Go Back Shopping
          </Button>
        </Link>
      </div>
    </MainLayout>
  );
};

export default OrderConfirm;
