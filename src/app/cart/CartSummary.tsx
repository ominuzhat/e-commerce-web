"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAddCoupon, useAddOrder } from "@/hooks/post.hook";
import { useUser } from "@/providers/user.provider";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const CartSummary = ({ checkout }: any) => {
  const pathname = usePathname();
  const router = useRouter();
  const {
    mutate: handleAddOrder,
    data: addOrder,
    isSuccess,
  }: any = useAddOrder();
  const { mutate: handleAddCoupon }: any = useAddCoupon();
  const { user, cartlist }: any = useUser();
  const { discount, subtotal, grandTotal } = cartlist?.data || {};

  const [cartId, setCartId] = useState<string | null>(null);

  useEffect(() => {
    if (isSuccess && addOrder?.data?.data?.bkashURL) {
      const bkashURL = addOrder.data.data.bkashURL;
      window.location.href = bkashURL;
    }
  }, [isSuccess, addOrder]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCartId = localStorage.getItem("cartId");
      setCartId(storedCartId);
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    const couponData = {
      code: data?.code,
      cartId: cartId,
    };
    handleAddCoupon(couponData);
  };

  function handleOrderConfirm(): void {
    if (checkout && cartId) {
      handleAddOrder({
        cartId: cartId,
        deliverOption: checkout?.id,
      });
    }
  }
  // if (isSuccess && addOrder?.data) {
  //   router.push("/order");
  // }

  return (
    <div className=" px-6 py-10 rounded-lg bg-footerColor shadow">
      <h1 className="font-semibold text-xl uppercase text-baseColor text-center">
        Cart Summary
      </h1>
      <hr className="my-5" />
      <div className="flex items-center justify-between">
        <div className="space-y-2 font-semibold">
          <p>Sub Total</p>
          <p>Discount</p>
          <p>Shipping</p>
          <p>Taxes</p>
        </div>
        <div className="space-y-2 text-right">
          <p>{grandTotal}</p>
          <p>{discount}</p>
          <p>Free</p>
          <p>0</p>
        </div>
      </div>
      <hr className="my-3" />
      <div className="flex items-center justify-between">
        <div className=" font-semibold">
          <p>Total</p>
        </div>
        <div>
          <p className="text-baseColor font-semibold text-right">{subtotal}</p>
        </div>
      </div>

      <Link href={`${pathname !== "/checkout" && "/checkout"}`}>
        <Button
          className="mt-7 w-full uppercase"
          onClick={() => {
            if (pathname === "/checkout") {
              handleOrderConfirm();
            }
          }}
        >
          {pathname !== "/checkout" ? "Checkout" : "Confirm Order"}
        </Button>
      </Link>

      {pathname !== "/checkout" && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative mt-5">
            <Input
              {...register("code")}
              placeholder="Your Coupon Code"
              className="rounded-full lg:w-full px-5 py-6 hover:border-baseColor focus:outline-none"
            />

            <Button
              type="submit"
              className="rounded-full absolute top-1 right-1"
            >
              Apply Coupon
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CartSummary;
