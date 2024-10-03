import BreadCrumb from "@/common/BreadCrumb";
import MainLayout from "@/layout/MainLayout";
import { Metadata } from "next";

import ShopList from "./ShopList";
import SearchComponent from "./SearchComponent";
import HomeCouponSection from "@/components/ui/Home/HomeCouponSection";
import { getProductList } from "@/utils/actions/productList";
import { Suspense } from "react";
import LoadingPost from "./LoadingPost";

export const metadata: Metadata = {
  title: "Shop | Eco Shop",
  description: "Shop | Eco Shop",
};

const ShopPage = async () => {
  const { data: productList, pagination } = await getProductList("");

  return (
    <MainLayout>
      <BreadCrumb />
      <div className="lg:grid lg:grid-cols-4 gap-5 max-w-screen-xl mx-auto py-20 px-2 space-y-4 lg:space-y-0">
        <div>
          <SearchComponent />
        </div>
        <div className="col-span-3 ">
          <Suspense fallback={<LoadingPost />}>
            {productList && productList.length === 0 ? (
              <div className=" text-center">
                <p className="text-2xl text-baseColor font-semibold">
                  No Products
                </p>
              </div>
            ) : (
              <ShopList productData={productList} paginationData={pagination} />
            )}
          </Suspense>
        </div>
      </div>
      <HomeCouponSection />
    </MainLayout>
  );
};

export default ShopPage;
