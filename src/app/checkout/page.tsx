"use client";
import BreadCrumb from "@/common/BreadCrumb";
import MainLayout from "@/layout/MainLayout";
import React, { useState } from "react";
import CartSummary from "../cart/CartSummary";
import CheckoutOption from "./CheckoutOption";

const CheckoutPage = () => {
  const [checkout, setCheckout] = useState(null);

  return (
    <MainLayout>
      <BreadCrumb />
      <div className="max-w-screen-xl mx-auto">
        <div className="lg:grid lg:grid-cols-3 gap-10 mt-20">
          <div className="col-span-2">
            <CheckoutOption setCheckout={setCheckout} />
          </div>
          <div>
            <CartSummary checkout={checkout} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CheckoutPage;
