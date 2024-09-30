"use client";
import p2 from "@/../../public/p2.png";
import CommonCard from "@/components/CommonCard";
import { getWishList } from "@/utils/actions/get/get.action";
import { Metadata } from "next";

const trendingData = [
  {
    id: 1,
    image: p2,
    badgeText: "Hot",
    productName: "Bluetooth Earphones",
    price: "$100.00",
    stars: 4,
    isWishList: true,
  },
  {
    id: 2,
    image: p2,
    badgeText: "New",
    productName: "Wireless Headphones",
    price: "$150.00",
    stars: 5,
    isWishList: true,
  },
  {
    id: 3,
    image: p2,
    badgeText: "Sale",
    productName: "Smart Watch",
    price: "$200.00",
    stars: 3,
    isWishList: false,
  },
  {
    id: 4,
    image: p2,
    badgeText: "Out of stack",
    productName: "Gaming Mouse",
    price: "$50.00",
    stars: 4,
    isWishList: false,
  },
  {
    id: 5,
    image: p2,
    badgeText: "New",
    productName: "Mechanical Keyboard",
    price: "$120.00",
    stars: 5,
    isWishList: true,
  },
  {
    id: 6,
    image: p2,
    badgeText: "Sale",
    productName: "Bluetooth Speaker",
    price: "$80.00",
    stars: 4,
    isWishList: false,
  },
  {
    id: 7,
    image: p2,
    badgeText: "Hot",
    productName: "Fitness Tracker",
    price: "$60.00",
    stars: 4,
    isWishList: true,
  },
  {
    id: 8,
    image: p2,
    badgeText: "New",
    productName: "Smartphone",
    price: "$900.00",
    stars: 5,
    isWishList: true,
  },
  {
    id: 9,
    image: p2,
    badgeText: "Sale",
    productName: "Tablet",
    price: "$300.00",
    stars: 3,
    isWishList: false,
  },
  {
    id: 10,
    image: p2,
    badgeText: "Hot",
    productName: "Laptop",
    price: "$1200.00",
    stars: 5,
    isWishList: false,
  },
  {
    id: 11,
    image: p2,
    badgeText: "New",
    productName: "4K TV",
    price: "$1000.00",
    stars: 4,
    isWishList: false,
  },
  {
    id: 12,
    image: p2,
    badgeText: "10% off",
    productName: "Camera",
    price: "$700.00",
    stars: 5,
    isWishList: true,
  },
];

// export const metadata: Metadata = {
//   title: "My WishList | Eco Shop",
//   description: "My WishList | Eco Shop",
// };

const MyWishList = async () => {
  // const { data: wishlist } = await getWishList();
  // console.log(wishlist);

  return (
    <>
      <div className="shadow rounded-lg px-5 py-8 space-y-5">
        <p className="text-xl font-semibold">My Wishlist</p>
        <hr />
        <CommonCard data={trendingData} />
      </div>{" "}
    </>
  );
};

export default MyWishList;
