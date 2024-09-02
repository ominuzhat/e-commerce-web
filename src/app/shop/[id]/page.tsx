import MainLayout from "@/layout/MainLayout";
import { Metadata } from "next";

import ProductsDetails from "./ProductPage";
import HomeCouponSection from "@/components/ui/Home/HomeCouponSection";
import RelatedProductItems from "@/components/RelatedItems";

export const metadata: Metadata = {
  title: "Shop | Geo Mart",
  description: "Shop | Geo Mart",
};

const ShopItemsDetails = () => {
  return (
    <MainLayout>
      <div className="max-w-screen-xl mx-auto py-20 px-2 space-y-4">
        <ProductsDetails />
      </div>
      <RelatedProductItems />
      <HomeCouponSection />
    </MainLayout>
  );
};

export default ShopItemsDetails;
