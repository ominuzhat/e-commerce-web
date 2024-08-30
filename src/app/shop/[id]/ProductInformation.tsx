"use client";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  CommonIcon,
  FaceBookIcon,
  InstragramIcon,
  TwiteerIcon,
} from "@/common/CommonSociaIcon";

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

const ProductInformation = () => {
  const [count, setCount] = useState(2);

  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <div className="space-y-3">
        <h1 className="text-2xl font-semibold">Bluetooth Earphones</h1>
        <div className="flex space-x-1 text-baseColor">
          <CommonIcon iconName={faStar} />
          <CommonIcon iconName={faStar} />
          <CommonIcon iconName={faStar} />
          <CommonIcon iconName={faStar} />
          <CommonIcon iconName={faStar} />
        </div>
        <div className="text-xl space-x-3 font-medium flex items-center">
          <span className="line-through text-gray-500">$690 </span>
          <span className="text-baseColor text-2xl">$650</span>
          <p className="text-red-700 text-sm">30% Off</p>
        </div>
        <p className="text-gray-500 ">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <hr />
        <div className="flex items-center space-x-12">
          <div className="space-y-3">
            <p className="text-gray-500 font-medium">Quantity</p>
            <div className="flex items-center space-x-5">
              <Button
                onClick={handleDecrement}
                className={` rounded-full ${
                  count > 0 ? "bg-baseColor " : "bg-gray-500 "
                }`}
              >
                -
              </Button>
              <p className="font-bold">{count}</p>
              <Button onClick={handleIncrement} className="rounded-full">
                +
              </Button>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-gray-500 font-medium">Size</p>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Choose Size" />
              </SelectTrigger>
              <SelectContent>
                {sizes.map((size, index) => (
                  <SelectItem key={index} value={size.name}>
                    {size.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex space-x-7  py-2">
          <div className="space-y-3 text-gray-500 font-semibold">
            <p>Brand </p>
            <p>Category </p>
            <p>Stock </p>
            <p>Code </p>
          </div>
          <div className="flex space-x-4 ">
            <div className="space-y-3">
              <p> :</p>
              <p> :</p>
              <p> :</p>
              <p> :</p>
            </div>
            <div className=" space-y-3">
              <p>Beats</p>
              <p>Headphones</p>
              <p className="text-baseColor">Available</p>
              <p>676TYWV</p>
            </div>
          </div>
        </div>
        <hr />

        <div className="flex items-center space-x-10">
          <div className="flex items-center space-x-3">
            <Button>Add To Cart</Button>

            <div className="border rounded-lg hover:bg-baseColor hover:text-white text-baseColor duration-300 hover:duration-300">
              <FontAwesomeIcon
                icon={faHeart}
                className="p-2 w-4 h-4 cursor-pointer  "
              />
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-4 ">
              <span>Share :</span>
              <FaceBookIcon />
              <TwiteerIcon />
              <InstragramIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
