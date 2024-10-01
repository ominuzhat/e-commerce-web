import MainLayout from "@/layout/MainLayout";
import { Metadata } from "next";

import ProductsDetails from "./ProductPage";
import HomeCouponSection from "@/components/ui/Home/HomeCouponSection";
import RelatedProductItems from "@/components/RelatedItems";
import { getProductFDetails } from "@/utils/actions/productList";

export const metadata: Metadata = {
  title: "Shop | Eco Shop",
  description: "Shop | Eco Shop",
};

const ShopItemsDetails = async ({ params }: { params: any }) => {
  const { id } = params;

  const { data: productDetails } = await getProductFDetails(id);

  return (
    <MainLayout>
      <div className="max-w-screen-xl mx-auto py-20 px-2 space-y-4">
        <ProductsDetails productDetails={productDetails} />
      </div>
      <RelatedProductItems />
      <HomeCouponSection />
    </MainLayout>
  );
};

export default ShopItemsDetails;
