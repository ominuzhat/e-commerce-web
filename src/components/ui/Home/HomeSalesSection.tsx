import p2 from "../../../../public/p2.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-regular-svg-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../tooltip";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons/faBagShopping";

const trendingData = [
  {
    id: 1,
    image: p2,
    badgeText: "Hot",
    productName: "Bluetooth Earphones",
    price: "$100.00",
    stars: 4,
  },
  {
    id: 2,
    image: p2,
    badgeText: "New",
    productName: "Wireless Headphones",
    price: "$150.00",
    stars: 5,
  },
  {
    id: 3,
    image: p2,
    badgeText: "Sale",
    productName: "Smart Watch",
    price: "$200.00",
    stars: 3,
  },
];

const HomeSalesSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto pt-16 lg:px-2 px-5">
      <div className="lg:grid grid-cols-3 gap-10 space-y-5 lg:space-y-0">
        <div>
          <p className="text-2xl font-semibold pb-2 border-b-2 ">On Sale</p>
          <p className="border border-b-2 w-10 border-baseColor"></p>

          {trendingData?.map((data) => (
            <div
              key={data?.id}
              className="bg-footerColor mt-10 px-4 py-2 flex items-center gap-5 relative rounded-2xl"
            >
              <Image
                src={data?.image}
                alt={"p2"}
                width={100}
                height={30}
                className="border bg-white rounded-xl"
              />
              <div className="space-y-1 ">
                <p className="text-xl font-semibold">{data?.productName}</p>
                <div className="space-x-1">
                  <FontAwesomeIcon icon={faStar} className="text-yellowColor" />
                  <FontAwesomeIcon icon={faStar} className="text-yellowColor" />
                  <FontAwesomeIcon icon={faStar} className="text-yellowColor" />
                  <FontAwesomeIcon
                    icon={faStarHalfAlt}
                    className="text-yellowColor"
                  />
                </div>
                <div className=" space-x-2 font-medium">
                  <span className="line-through">$690 </span>
                  <span className="text-baseColor">{data?.price}</span>
                </div>
              </div>
              <div className="absolute -bottom-1 right-0">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      {" "}
                      <FontAwesomeIcon
                        icon={faBagShopping}
                        className="w-4 h-4 bg-secondaryColor text-white hover:bg-baseColor rounded-full p-2 cursor-pointer duration-300 hover:duration-300"
                      />
                    </TooltipTrigger>
                    <TooltipContent className="bg-secondaryColor text-white">
                      <p>Add to Cart</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          ))}
        </div>
        <div>
          <p className="text-2xl font-semibold pb-2 border-b-2 ">Best Seller</p>
          <p className="border border-b-2 w-10 border-baseColor"></p>

          {trendingData?.map((data) => (
            <div
              key={data?.id}
              className="bg-footerColor mt-10 px-4 py-2 flex items-center gap-5 relative rounded-2xl"
            >
              <Image
                src={data?.image}
                alt={"p2"}
                width={100}
                height={30}
                className="border bg-white rounded-xl"
              />
              <div className="space-y-1 ">
                <p className="text-xl font-semibold">{data?.productName}</p>
                <div className="space-x-1">
                  <FontAwesomeIcon icon={faStar} className="text-yellowColor" />
                  <FontAwesomeIcon icon={faStar} className="text-yellowColor" />
                  <FontAwesomeIcon icon={faStar} className="text-yellowColor" />
                  <FontAwesomeIcon
                    icon={faStarHalfAlt}
                    className="text-yellowColor"
                  />
                </div>
                <div className=" space-x-2 font-medium">
                  <span className="line-through">$690 </span>
                  <span className="text-baseColor">{data?.price}</span>
                </div>
              </div>
              <div className="absolute -bottom-1 right-0">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      {" "}
                      <FontAwesomeIcon
                        icon={faBagShopping}
                        className="w-4 h-4 bg-secondaryColor text-white hover:bg-baseColor rounded-full p-2 cursor-pointer duration-300 hover:duration-300"
                      />
                    </TooltipTrigger>
                    <TooltipContent className="bg-secondaryColor text-white">
                      <p>Add to Cart</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          ))}
        </div>
        <div>
          <p className="text-2xl font-semibold pb-2 border-b-2 ">Top Rated</p>
          <p className="border border-b-2 w-10 border-baseColor"></p>

          {trendingData?.map((data) => (
            <div
              key={data?.id}
              className="bg-footerColor mt-10 px-4 py-2 flex items-center gap-5 relative rounded-2xl"
            >
              <Image
                src={data?.image}
                alt={"p2"}
                width={100}
                height={30}
                className="border bg-white rounded-xl"
              />
              <div className="space-y-1 ">
                <p className="text-xl font-semibold">{data?.productName}</p>
                <div className="space-x-1">
                  <FontAwesomeIcon icon={faStar} className="text-yellowColor" />
                  <FontAwesomeIcon icon={faStar} className="text-yellowColor" />
                  <FontAwesomeIcon icon={faStar} className="text-yellowColor" />
                  <FontAwesomeIcon
                    icon={faStarHalfAlt}
                    className="text-yellowColor"
                  />
                </div>
                <div className=" space-x-2 font-medium">
                  <span className="line-through">$690 </span>
                  <span className="text-baseColor">{data?.price}</span>
                </div>
              </div>
              <div className="absolute -bottom-1 right-0">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      {" "}
                      <FontAwesomeIcon
                        icon={faBagShopping}
                        className="w-4 h-4 bg-secondaryColor text-white hover:bg-baseColor rounded-full p-2 cursor-pointer duration-300 hover:duration-300"
                      />
                    </TooltipTrigger>
                    <TooltipContent className="bg-secondaryColor text-white">
                      <p>Add to Cart</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSalesSection;
