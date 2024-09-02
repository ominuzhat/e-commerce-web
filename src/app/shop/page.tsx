import BreadCrumb from "@/common/BreadCrumb";
import MainLayout from "@/layout/MainLayout";
import { Metadata } from "next";

import ShopList from "./ShopList";
import SearchComponent from "./SearchComponent";
import HomeCouponSection from "@/components/ui/Home/HomeCouponSection";

export const metadata: Metadata = {
  title: "Shop | Geo Mart",
  description: "Shop | Geo Mart",
};

const ShopPage = () => {
  return (
    <MainLayout>
      <BreadCrumb />
      <div className="lg:grid lg:grid-cols-4 gap-5 max-w-screen-xl mx-auto py-20 px-2 space-y-4 lg:space-y-0">
        <div>
          <SearchComponent />
        </div>
        <div className="col-span-3 ">
          <ShopList />
        </div>
      </div>
      <HomeCouponSection />
    </MainLayout>
  );
};

export default ShopPage;
