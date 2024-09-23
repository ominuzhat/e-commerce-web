import { faArrowRight, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import p2 from "../../../../public/p2.png";

import CommonCardWithCarousel from "@/components/CommonCardWithCarousel";
import { TProductTrending } from "@/types/product.type";

// const trendingData = [
//   {
//     id: 1,
//     image: p2,
//     badgeText: "Hot",
//     productName: "Bluetooth Earphones",
//     price: "$100.00",
//     stars: 4,
//   },
//   {
//     id: 2,
//     image: p2,
//     badgeText: "New",
//     productName: "Wireless Headphones",
//     price: "$150.00",
//     stars: 5,
//   },
//   {
//     id: 3,
//     image: p2,
//     badgeText: "Sale",
//     productName: "Smart Watch",
//     price: "$200.00",
//     stars: 3,
//   },
//   {
//     id: 4,
//     image: p2,
//     badgeText: "Out of stack",
//     productName: "Gaming Mouse",
//     price: "$50.00",
//     stars: 4,
//   },
//   {
//     id: 5,
//     image: p2,
//     badgeText: "New",
//     productName: "Mechanical Keyboard",
//     price: "$120.00",
//     stars: 5,
//   },
//   {
//     id: 6,
//     image: p2,
//     badgeText: "Sale",
//     productName: "Bluetooth Speaker",
//     price: "$80.00",
//     stars: 4,
//   },
//   {
//     id: 7,
//     image: p2,
//     badgeText: "Hot",
//     productName: "Fitness Tracker",
//     price: "$60.00",
//     stars: 4,
//   },
//   {
//     id: 8,
//     image: p2,
//     badgeText: "New",
//     productName: "Smartphone",
//     price: "$900.00",
//     stars: 5,
//   },
//   {
//     id: 9,
//     image: p2,
//     badgeText: "Sale",
//     productName: "Tablet",
//     price: "$300.00",
//     stars: 3,
//   },
//   {
//     id: 10,
//     image: p2,
//     badgeText: "Hot",
//     productName: "Laptop",
//     price: "$1200.00",
//     stars: 5,
//   },
//   {
//     id: 11,
//     image: p2,
//     badgeText: "New",
//     productName: "4K TV",
//     price: "$1000.00",
//     stars: 4,
//   },
//   {
//     id: 12,
//     image: p2,
//     badgeText: "10% off",
//     productName: "Camera",
//     price: "$700.00",
//     stars: 5,
//   },
// ];

const HomeTrendingSection = ({
  trendingItems,
}: {
  trendingItems: TProductTrending[];
}) => {
  return (
    <div className="max-w-screen-xl mx-auto pt-16 pb-12 lg:px-5 px-5">
      <div className="flex items-center justify-between">
        <div className="text-xl lg:text-3xl font-semibold flex items-center space-x-3">
          <FontAwesomeIcon icon={faChartLine} className="text-baseColor" />
          <p>Trending Items</p>
        </div>
        <div>
          <Link href={"/"} className="lg:text-xl text-slate-700  ">
            View More <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>

      <CommonCardWithCarousel data={trendingItems} />
    </div>
  );
};

export default HomeTrendingSection;
