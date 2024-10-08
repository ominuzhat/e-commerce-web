"use client";
import { faArrowRight, faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { Button } from "../button";
import CommonCard from "@/components/CommonCard";
import { useState } from "react";

const HomeCategoriesSection = ({ category, productList, wishlist }: any) => {
  // const [activeSubCategory, setActiveSubCategory] = useState<string | null>(
  //   null
  // );

  // function handleCategory(id: any): void {
  //   if (id === activeSubCategory) {
  //     setSubCategory({ subCategory: "" }), setActiveSubCategory("");
  //   } else {
  //     setSubCategory({ subCategory: id }), setActiveSubCategory(id);
  //   }
  // }

  return (
    <div className="max-w-screen-xl mx-auto lg:pt-16 pb-12 lg:px-2 px-5">
      <div className="lg:grid lg:grid-cols-4 gap-5">
        <div className="border shadow-xl py-10 px-6 rounded-xl max-h-fit">
          <p className="text-xl lg:text-2xl font-semibold">Top Categories</p>
          {/* 
          <div>
            {category?.map((item: any) => (
              <div key={item?.id}>
                {item?.subCategory?.map((subCategory: any) => (
                  <div
                    onClick={() => handleCategory(subCategory?.id)}
                    key={subCategory?.id}
                    className={`flex justify-between items-center   py-1 cursor-pointer 
                    ${
                      activeSubCategory === subCategory?.id
                        ? "text-baseColor "
                        : "hover:text-baseColor text-gray-400"
                    }`}
                  >
                    <p className="font-medium flex items-center   hover:text-baseColor hover:ms-5 duration-300 hover:duration-300">
                      {subCategory?.name}
                    </p>

                  </div>
                ))}
              </div>
            ))}
          </div> */}

          <div className="my-5">
            {category?.map((item: any, index: number) => (
              <div key={item?.id}>
                <div className="flex justify-between items-center space-y-2 hover:text-baseColor cursor-pointer">
                  <div className="flex items-center space-x-3 text-gray-700 hover:text-baseColor hover:ms-5 duration-300 hover:duration-300 ">
                    <p
                      className="w-5 h-5 "
                      dangerouslySetInnerHTML={{
                        __html: item?.icon,
                      }}
                    />
                    <p className="font-medium">{item?.name}</p>
                  </div>
                  <p>({item?.subCategory?.length})</p>
                </div>
                {index < category?.length - 1 && <hr className="my-2" />}
              </div>
            ))}
          </div>
          <Link href={"/shop"}>
            <Button className="w-full"> View All Brands</Button>
          </Link>
        </div>

        <div className="lg:col-span-3  lg:mt-0 mt-10">
          <div className="flex items-center justify-between">
            <div className="text-xl lg:text-3xl font-semibold flex items-center space-x-3">
              <FontAwesomeIcon icon={faMobile} className="text-baseColor" />
              <p>Top Products</p>
            </div>
            <div>
              <Link href={"/shop"} className="lg:text-xl text-slate-700  ">
                View More <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>

          <CommonCard data={productList?.slice(0, 6)} wishlist={wishlist} />
        </div>
      </div>
    </div>
  );
};

export default HomeCategoriesSection;
