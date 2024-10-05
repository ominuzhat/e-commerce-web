"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import useDebounce from "@/hooks/debounce.hook";
import { useWebsiteInfo } from "@/providers/website.provider";
import { faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const sales = [
  {
    name: "On Sale",
  },
  {
    name: "In Stock",
  },
  {
    name: "Out Of Stock",
  },
  {
    name: "Discount",
  },
];
const sizes = [
  {
    name: "Extra Small",
  },
  {
    name: "Small",
  },
  {
    name: "Medium",
  },
  {
    name: "Large",
  },
  {
    name: "Extra Large",
  },
];

interface SearchFormData {
  searchQuery: string;
}

const SearchComponent = ({ setSubCategory, setSearchterm }: any) => {
  const websiteInfo: any = useWebsiteInfo();

  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(
    null
  );

  const [priceRange, setPriceRange] = useState([20, 80]);
  const ratings = [5, 4, 3, 2, 1];

  const getStarIcons = (rating: any) => {
    const fullStarClass = "fas fa-star text-yellow-500  w-5 h-5 border"; // Full star class
    const emptyStarClass = "far fa-star text-yellow-500  w-5 h-5 border"; // Empty star class

    const fullStars = Array(rating).fill(
      <i className={fullStarClass} key={`full-${rating}-${Math.random()}`} />
    );
    const emptyStars = Array(5 - rating).fill(
      <i className={emptyStarClass} key={`empty-${rating}-${Math.random()}`} />
    );

    return [...fullStars, ...emptyStars];
  };
  const { register, handleSubmit, watch } = useForm<SearchFormData>();

  const searchQuery = watch("searchQuery");
  const search = useDebounce(searchQuery);
  setSearchterm(search);

  const onSubmit = (data: SearchFormData) => {};

  function handleCategory(id: any): void {
    if (id === activeSubCategory) {
      setSubCategory({ subCategory: "" }), setActiveSubCategory("");
    } else {
      setSubCategory({ subCategory: id }), setActiveSubCategory(id);
    }
  }

  return (
    <div className="space-y-5">
      {/* search */}
      <div className="rounded-lg bg-footerColor px-6 py-4">
        <p className="text-xl font-semibold">Search</p>
        <hr className="my-4" />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative">
            <input
              {...register("searchQuery")} // React Hook Form's register method
              type="text"
              placeholder="Search Here..."
              className="border px-4 py-4 rounded-lg w-full hover:border-baseColor focus:outline-none"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="text-slate-400 absolute right-4 top-1/3"
            />
          </div>
        </form>
      </div>
      {/* category */}

      <div className="rounded-lg bg-footerColor px-6 py-4">
        <p className="text-xl font-semibold">Category</p>
        <hr className="my-4" />
        <div>
          {websiteInfo?.category?.map((item: any) => (
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

                  {/* <p>({item?.subCategoryCount})</p> */}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* brands */}
      {/* <div className="rounded-lg bg-footerColor px-6 py-4">
        <p className="text-xl font-semibold">Brands</p>
        <hr className="my-4" />
        <div>
          {websiteInfo?.category?.map((item: any, index: number) => (
            <div key={index}>
              <div className="flex justify-between items-center space-y-4 hover:text-baseColor cursor-pointer text-gray-400">
                <div className="flex items-center space-x-3 hover:text-baseColor ">
                  <Checkbox
                    id={`brand-${index}`}
                    className="hover:border-baseColor "
                  />
                  <label
                    htmlFor={`brand-${index}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {item?.name}
                  </label>
                </div>
                <p>({item?.count})</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      {/* price range */}
      <div className="rounded-lg bg-footerColor px-6 py-4">
        <p className="text-xl font-semibold">Price Range</p>
        <hr className="my-4" />
        <div>
          <Slider
            defaultValue={priceRange}
            max={1000}
            step={5}
            onValueChange={(values) => setPriceRange(values)}
            className="w-full border-baseColor cursor-pointer my-5"
          />
        </div>
      </div>
      {/* Sales */}
      <div className="rounded-lg bg-footerColor px-6 py-4">
        <p className="text-xl font-semibold">Sales</p>
        <hr className="my-4" />
        <div className="space-y-2">
          {sales?.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between items-center hover:text-baseColor cursor-pointer text-gray-400">
                <div className="space-x-3">
                  <Checkbox
                    id={`brand-${index}`}
                    className="hover:border-baseColor "
                  />
                  <label
                    htmlFor={`brand-${index}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {item?.name}
                  </label>
                </div>
                {/* <p>({item?.count})</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Ratings*/}
      {/* <div className="rounded-lg bg-footerColor px-6 py-4">
        <p className="text-xl font-semibold">Ratings</p>
        <hr className="my-4" />
        <div className="space-y-2">
          {ratings.map((rating, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id={`rating-${rating}`}
                  className="form-checkbox text-green-500 hover:border-baseColor"
                />
                <label
                  htmlFor={`rating-${rating}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-2 flex items-center"
                >
                  {getStarIcons(rating)}
                </label>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Sizes*/}
      <div className="rounded-lg bg-footerColor px-6 py-4">
        <p className="text-xl font-semibold">Sizes </p>
        <hr className="my-4" />
        <div className="space-y-2">
          {sizes?.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between items-center hover:text-baseColor cursor-pointer text-gray-400">
                <div className="space-x-3">
                  <Checkbox
                    id={`brand-${index}`}
                    className="hover:border-baseColor "
                  />
                  <label
                    htmlFor={`brand-${index}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {item?.name}
                  </label>
                </div>
                {/* <p>({item?.count})</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* promotions */}
      <div className="max-w-screen-xl mx-auto pt-6 pb-10 px-2 text-white">
        <div className=" promotion space-y-6 py-16 flex flex-col justify-center items-center text-center">
          <h1 className=" text-base uppercase font-semibold tracking-widest border-t-2 border-b-2 border-white py-1 w-[14.5rem]">
            Get 35% Off{" "}
          </h1>{" "}
          <p className="text-3xl font-semibold ">
            New Collection of Sunglassess
          </p>{" "}
          <p>
            <Link
              href={"/"}
              className="underline uppercase font-semibold text-sm text-gray-600"
            >
              <Button className="rounded-full uppercase tracking-widest">
                Shop Now
              </Button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
