"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
const CartItemsData = ({ CartListData }: any) => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className="uppercase font-semibold  ">
            <TableHead className="w-[100px] ps-5  text-black">Image</TableHead>
            <TableHead className="text-black">Product Name</TableHead>
            <TableHead className="text-black">Price</TableHead>
            <TableHead className="text-black">Quantity</TableHead>
            <TableHead className=" text-black">Sub Total </TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {CartListData.map((cart: any, index: number) => (
            <TableRow key={index}>
              <TableCell className="w-36 ">
                <Image
                  src={cart?.image}
                  alt={cart?.name}
                  width={150}
                  height={200}
                  className="border rounded "
                />
              </TableCell>
              <TableCell>
                <ul className="space-y-2">
                  <li>
                    <span className="font-medium text-xl">{cart.name}</span>
                  </li>
                  <li className="">
                    <span className="font-base ">Type: {cart.type}</span>
                  </li>
                  <li>
                    <span className="font-base">Color: {cart.type}</span>
                  </li>
                </ul>
              </TableCell>
              <TableCell className="font-medium">{cart.price}</TableCell>
              <TableCell className="text-right font-medium">
                <div className="flex items-center space-x-5">
                  <Button
                    onClick={handleDecrement}
                    className={` rounded-full ${
                      cart?.quantity > 0 ? "bg-baseColor " : "bg-gray-500 "
                    }`}
                  >
                    -
                  </Button>
                  <p className="font-bold">{cart?.quantity}</p>
                  <Button onClick={handleIncrement} className="rounded-full ">
                    +
                  </Button>
                </div>
              </TableCell>{" "}
              <TableCell className="font-medium">{cart.price}</TableCell>
              <TableCell className="text-right font-medium">
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="text-xl text-red-600 hover:text-baseColor cursor-pointer"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="lg:flex items-center justify-between mt-5 space-y-0 lg:space-y-5 px-2">
        <div className="relative">
          <Input
            placeholder="Your Coupon Code"
            className="rounded-full lg:w-[25rem] px-5 py-6 hover:border-baseColor focus:outline-none "
          />
          <Button className="rounded-full absolute top-1 right-1 ">
            Apply Coupon
          </Button>
        </div>
        <Button className="">
          <FontAwesomeIcon icon={faArrowLeft} className="me-2" /> Continue
          Shopping
        </Button>
      </div>
    </div>
  );
};

export default CartItemsData;
