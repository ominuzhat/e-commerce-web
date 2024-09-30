import MainLayout from "@/layout/MainLayout";
import { Metadata } from "next";

import ProductsDetails from "./ProductPage";
import HomeCouponSection from "@/components/ui/Home/HomeCouponSection";
import RelatedProductItems from "@/components/RelatedItems";
import { getProductFDetails } from "@/utils/actions/productList";
import { useSingleGetWishlist } from "@/hooks/wishlist.hook";
import { getSingleWishList } from "@/utils/actions/get/get.action";

export const metadata: Metadata = {
  title: "Shop | Eco Shop",
  description: "Shop | Eco Shop",
};

const ShopItemsDetails = async ({ params }: { params: any }) => {
  const { id } = params;
  const { data: singleWishItem } = await getSingleWishList(id);

  console.log("sing", singleWishItem);
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
