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
import { useRemoveToCart } from "@/hooks/post.hook";
import { useUser } from "@/providers/user.provider";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
const CartItemsData = () => {
  const { mutate: handleRemoveToCart, data: cartData } = useRemoveToCart();

  const [count, setCount] = useState(0);
  const { cartlist, setIsCartLoading }: any = useUser();

  console.log(cartlist?.data);

  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  function handleCartDelete(cart: any): void {
    const data = {
      quantity: cart?.variant?.quantity,
      variant: cart?.variant?.id,
      product: cart?.variant?.priceOption?.product?.id,
      cartId: cartlist?.data?.id,
    };
    handleRemoveToCart(data);
    setIsCartLoading(true);
  }

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
          {cartlist?.data?.items?.map((cart: any, index: number) => (
            <TableRow key={index}>
              <TableCell className="w-36 ">
                <Image
                  src={cart?.variant?.priceOption?.product?.featuredImage}
                  alt={cart?.variant?.priceOption?.product?.title}
                  width={150}
                  height={200}
                  className="border rounded "
                />
              </TableCell>
              <TableCell>
                <ul className="space-y-2">
                  <li>
                    <span className=" text-xl font-semibold">
                      {cart?.variant?.priceOption?.product?.title.length > 20
                        ? cart?.variant?.priceOption?.product?.title.slice(
                            0,
                            20
                          ) + "..."
                        : cart?.variant?.priceOption?.product?.title}
                    </span>
                  </li>
                  <li className="">
                    <span className="font-base text-baseColor">
                      Size: {cart?.variant?.size || "N/A"}
                    </span>
                  </li>
                  <li>
                    <span className="font-base text-baseColor">
                      Color: {cart?.variant?.priceOption?.color || "N/A"}
                    </span>
                  </li>
                </ul>
              </TableCell>
              <TableCell className="font-medium">{cart?.totalPrice}</TableCell>
              <TableCell className="text-right font-medium">
                <div className="flex items-center space-x-5">
                  <button
                    onClick={handleDecrement}
                    className={`border rounded-full px-3 py-1 text-baseColor text-xl ${
                      cart?.quantity > 0 ? "bg-footerColor " : "bg-gray-500 "
                    }`}
                  >
                    -
                  </button>
                  <p className="font-bold">{cart?.quantity}</p>
                  <button
                    onClick={handleIncrement}
                    className={` rounded-full px-3 py-1 text-baseColor text-xl bg-footerColor border `}
                  >
                    +
                  </button>
                </div>
              </TableCell>{" "}
              <TableCell className="font-medium">{cart.price}</TableCell>
              <TableCell className="text-right font-medium">
                <FontAwesomeIcon
                  onClick={() => handleCartDelete(cart)}
                  icon={faCircleXmark}
                  className="text-xl text-red-600 hover:text-baseColor cursor-pointer"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="lg:flex items-center justify-between mt-5 space-y-0 lg:space-y-5 px-2">
        <Button className="">
          <FontAwesomeIcon icon={faArrowLeft} className="me-2" /> Continue
          Shopping
        </Button>
      </div>
    </div>
  );
};

export default CartItemsData;
