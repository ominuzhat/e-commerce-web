"use client";
import BreadCrumb from "@/common/BreadCrumb";
import MainLayout from "@/layout/MainLayout";
// import { Metadata } from "next";

import ShopList from "./ShopList";
import SearchComponent from "./SearchComponent";
import HomeCouponSection from "@/components/ui/Home/HomeCouponSection";
import { Suspense, useState } from "react";
import LoadingPost from "./LoadingPost";
import { useGetProduct } from "@/hooks/get.hook";
import { useUser } from "@/providers/user.provider";

// export const metadata: Metadata = {
//   title: "Shop | Eco Shop",
//   description: "Shop | Eco Shop",
// };

const ShopPage = () => {
  const [searchTerm, setSearchterm] = useState("");
  const { subCategory, setSubCategory }: any = useUser();
  const { data, isSuccess, isPending } = useGetProduct({
    subCategory: subCategory || "",
    searchItem: searchTerm || "",
  });

  return (
    <MainLayout>
      <BreadCrumb />
      <div className="lg:grid lg:grid-cols-4 gap-5 max-w-screen-xl mx-auto py-20 px-2 space-y-4 lg:space-y-0">
        <div>
          <SearchComponent
            setSubCategory={setSubCategory}
            setSearchterm={setSearchterm}
          />
        </div>
        <div className="col-span-3">
          <Suspense fallback={<LoadingPost />}>
            {data?.data && data?.data.length === 0 ? (
              <div className="text-center">
                <p className="text-2xl text-baseColor font-semibold">
                  No Products
                </p>
              </div>
            ) : isPending ? (
              <LoadingPost />
            ) : (
              <ShopList productData={data?.data} paginationData={{}} />
            )}
          </Suspense>
        </div>
      </div>
      <HomeCouponSection />
    </MainLayout>
  );
};

export default ShopPage;
