import BreadCrumb from "@/common/BreadCrumb";
import MainLayout from "@/layout/MainLayout";
import { Metadata } from "next";
import React from "react";
import ShopList from "./ShopList";

export const metadata: Metadata = {
  title: "Shop | Geo Mart",
  description: "Shop | Geo Mart",
};

const ShopPage = () => {
  return (
    <MainLayout>
      <BreadCrumb />
      <div className="lg:grid lg:grid-cols-4 gap-5 max-w-screen-xl mx-auto py-20 px-2">
        <h1>aa</h1>
        <div className="col-span-3 ">
          <ShopList />
        </div>
      </div>
    </MainLayout>
  );
};

export default ShopPage;
