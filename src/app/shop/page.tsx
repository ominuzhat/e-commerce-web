import BreadCrumb from "@/common/BreadCrumb";
import MainLayout from "@/layout/MainLayout";
import { Metadata } from "next";

import ShopList from "./ShopList";
import SearchComponent from "./SearchComponent";
import HomeCouponSection from "@/components/ui/Home/HomeCouponSection";
import { getProductList } from "@/utils/actions/productList";

export const metadata: Metadata = {
  title: "Shop | Eco Shop",
  description: "Shop | Eco Shop",
};

const ShopPage = async () => {
  const { data: productList, pagination } = await getProductList();

  return (
    <MainLayout>
      <BreadCrumb />
      <div className="lg:grid lg:grid-cols-4 gap-5 max-w-screen-xl mx-auto py-20 px-2 space-y-4 lg:space-y-0">
        <div>
          <SearchComponent />
        </div>
        <div className="col-span-3 ">
          <ShopList productData={productList} paginationData={pagination} />
        </div>
      </div>
      <HomeCouponSection />
    </MainLayout>
  );
};

export default ShopPage;
