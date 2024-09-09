import { Button } from "@/components/ui/button";
import Link from "next/link";

const CartSummary = () => {
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
          <p>$4,500.00</p>
          <p>$5.00</p>
          <p>Free</p>
          <p>$25.00</p>
        </div>
      </div>
      <hr className="my-3" />
      <div className="flex items-center justify-between">
        <div className=" font-semibold">
          <p>Total</p>
        </div>
        <div>
          <p className="text-baseColor font-semibold text-right">$4,520.00</p>
        </div>
      </div>
      <Link href={"/checkout"}>
        <Button className="mt-7 w-full uppercase">Checkout</Button>
      </Link>
    </div>
  );
};

export default CartSummary;
