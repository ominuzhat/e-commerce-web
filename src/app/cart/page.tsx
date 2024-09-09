import BreadCrumb from "@/common/BreadCrumb";
import HomeCouponSection from "@/components/ui/Home/HomeCouponSection";
import MainLayout from "@/layout/MainLayout";
import { Metadata } from "next";
import CartListData from "../../lib/CartItems.json";
import CartItems from "./CartItemsData";
import CartSummary from "./CartSummary";

export const metadata: Metadata = {
  title: "Cart | Geo Mart",
  description: "Cart | Geo Mart",
};

const CartList = () => {
  return (
    <MainLayout>
      <BreadCrumb />
      <div className="max-w-screen-xl mx-auto">
        <div className="lg:grid lg:grid-cols-3 gap-10 mt-20">
          <div className="col-span-2">
            <CartItems CartListData={CartListData} />
          </div>
          <div>
            <CartSummary />
          </div>
        </div>
      </div>
      <HomeCouponSection />
    </MainLayout>
  );
};

export default CartList;
