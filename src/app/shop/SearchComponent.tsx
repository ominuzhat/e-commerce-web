"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";

const brands = [
  { name: "Apple", count: 12 },
  { name: "Adidas", count: 15 },
  { name: "Bosilox Inc", count: 20 },
  { name: "Converse", count: 5 },
  { name: "Canon Inc", count: 9 },
  { name: "Fashionox", count: 25 },
  { name: "Samsung", count: 19 },
  { name: "Hitachi", count: 23 },
  { name: "Nike", count: 13 },
  { name: "Panasonic", count: 14 },
  { name: "Puma", count: 16 },
  { name: "Urba Outfitters", count: 17 },
  { name: "Others", count: 18 },
];

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

const mobileData = [
  { id: 1, name: "Samsung", quantity: 10 },
  { id: 2, name: "Apple", quantity: 15 },
  { id: 3, name: "Xiaomi", quantity: 12 },
  { id: 4, name: "Sony", quantity: 18 },
  { id: 5, name: "Google", quantity: 5 },
  { id: 6, name: "Vivo", quantity: 14 },
  { id: 7, name: "Huawei", quantity: 17 },
  { id: 8, name: "Techno", quantity: 8 },
];

const SearchComponent = () => {
  const [priceRange, setPriceRange] = useState([20, 80]); // Initial values for the two pointers
  const ratings = [5, 4, 3, 2, 1]; // Ratings from 5 stars to 1 star

  // Function to generate star icons based on the rating
  const getStarIcons = (rating: any) => {
    const fullStarClass = "fas fa-star text-yellow-500  w-5 h-5 border"; // Full star class
    const emptyStarClass = "far fa-star text-yellow-500  w-5 h-5 border"; // Empty star class

    // Create full and empty stars
    const fullStars = Array(rating).fill(
      <i className={fullStarClass} key={`full-${rating}-${Math.random()}`} />
    );
    const emptyStars = Array(5 - rating).fill(
      <i className={emptyStarClass} key={`empty-${rating}-${Math.random()}`} />
    );

    return [...fullStars, ...emptyStars];
  };

  return (
    <div className="space-y-5">
      {/* search */}
      <div className="rounded-lg bg-footerColor px-6 py-4">
        <p className="text-xl font-semibold">Search</p>
        <hr className="my-4" />
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border px-4 py-4 rounded-lg w-full hover:border-baseColor focus:outline-none"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className=" text-slate-400 absolute right-4 top-1/3"
          />
        </div>
      </div>
      {/* category */}
      <div className="rounded-lg bg-footerColor px-6 py-4">
        <p className="text-xl font-semibold">Category</p>
        <hr className="my-4" />
        <div>
          {mobileData?.map((item) => (
            <div key={item?.id}>
              <div className="flex justify-between items-center space-y-4 hover:text-baseColor cursor-pointer text-gray-400">
                <div className="flex items-center space-x-3  hover:text-baseColor hover:ms-5 duration-300 hover:duration-300">
                  <p className="font-medium ">{item?.name}</p>
                </div>
                <p>({item?.quantity})</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* brands */}
      <div className="rounded-lg bg-footerColor px-6 py-4">
        <p className="text-xl font-semibold">Brands</p>
        <hr className="my-4" />
        <div>
          {brands.map((item, index) => (
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
      </div>
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
