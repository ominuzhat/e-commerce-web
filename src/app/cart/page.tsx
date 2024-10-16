import BreadCrumb from "@/common/BreadCrumb";
import HomeCouponSection from "@/components/ui/Home/HomeCouponSection";
import MainLayout from "@/layout/MainLayout";
import { Metadata } from "next";
import CartItems from "./CartItemsData";
import CartSummary from "./CartSummary";
import { Suspense } from "react";
import LoadingPost from "../shop/LoadingPost";

export const metadata: Metadata = {
  title: "Cart | Eco Shop",
  description: "Cart | Eco Shop",
};

const CartList = () => {
  return (
    <MainLayout>
      <BreadCrumb />
      <div className="max-w-screen-xl mx-auto">
        <div className="lg:grid lg:grid-cols-3 gap-10 mt-20">
          <div className="col-span-2">
            <CartItems />
          </div>
          <div>
            <Suspense fallback={<LoadingPost />}>
              <CartSummary />
            </Suspense>
          </div>
        </div>
      </div>
      <HomeCouponSection />
    </MainLayout>
  );
};

export default CartList;
