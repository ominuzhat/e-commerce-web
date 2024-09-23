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
import { renderStars } from "@/components/CommonRating";


const HomeSalesSection = ({ onSaleItems, topRatedItems, bestSellers }: any) => {
  return (
    <div className="max-w-screen-xl mx-auto pt-16 lg:px-2 px-5">
      <div className="lg:grid grid-cols-3 gap-10 space-y-5 lg:space-y-0">
        <div>
          <p className="text-2xl font-semibold pb-2 border-b-2 ">On Sale</p>
          <p className="border border-b-2 w-10 border-baseColor"></p>

          {onSaleItems?.slice(0,3)?.map((data: any) => (
            <div
              key={data?.id}
              className="bg-footerColor mt-10 px-4 py-2 flex items-center gap-5 relative rounded-2xl"
            >
              <Image
                src={data?.featuredImage}
                alt={"p2"}
                width={100}
                height={30}
                className="border bg-white rounded-xl"
              />
              <div className="space-y-1 ">
                <p className="text-xl font-semibold">{data?.title}</p>
                <p>
                  {" "}
                  {renderStars(data?.avgRating)}{" "}
                  <span>({data?.totalReviews})</span>
                </p>
                <div className=" space-x-2 font-medium">
                  <div className="flex gap-3 items-center">
                    {data?.priceOptions?.[0]?.discount > 0 && (
                      <>
                        <h1 className=" text-xl text-red-500">
                          ৳{data?.priceOptions?.[0]?.totalPrice}
                        </h1>
                        <small className="line-through text-gray-400">
                          ৳ {data?.priceOptions?.[0]?.price}
                        </small>
                      </>
                    )}
                    {!data?.priceOptions?.[0]?.discount && (
                      <h2 className=" text-xl text-red-500">৳{data?.priceOptions?.[0]?.price}</h2>
                    )}
                  </div>
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

          {topRatedItems?.slice(0,3)?.map((data: any) => (
            <div
              key={data?.id}
              className="bg-footerColor mt-10 px-4 py-2 flex items-center gap-5 relative rounded-2xl"
            >
              <Image
                src={data?.featuredImage}
                alt={"p2"}
                width={100}
                height={30}
                className="border bg-white rounded-xl"
              />
              <div className="space-y-1 ">
                <p className="text-xl font-semibold">{data?.title}</p>
                <p>
                  {" "}
                  {renderStars(data?.avgRating)}{" "}
                  <span>({data?.totalReviews})</span>
                </p>
                <div className=" space-x-2 font-medium">
                  <div className="flex gap-3 items-center">
                    {data?.priceOptions?.[0]?.discount > 0 && (
                      <>
                        <h1 className=" text-xl text-red-500">
                          ৳{data?.priceOptions?.[0]?.totalPrice}
                        </h1>
                        <small className="line-through text-gray-400">
                          ৳ {data?.priceOptions?.[0]?.price}
                        </small>
                      </>
                    )}
                    {!data?.priceOptions?.[0]?.discount && (
                      <h2 className=" text-xl text-red-500">৳{data?.priceOptions?.[0]?.price}</h2>
                    )}
                  </div>
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
          {bestSellers?.slice(0,3)?.map((data: any) => (
            <div
              key={data?.id}
              className="bg-footerColor mt-10 px-4 py-2 flex items-center gap-5 relative rounded-2xl"
            >
              <Image
                src={data?.featuredImage}
                alt={"p2"}
                width={100}
                height={30}
                className="border bg-white rounded-xl"
              />
              <div className="space-y-1 ">
                <p className="text-xl font-semibold">{data?.title}</p>
                <p>
                  {" "}
                  {renderStars(data?.avgRating)}{" "}
                  <span>({data?.totalReviews})</span>
                </p>
                <div className=" space-x-2 font-medium">
                  <div className="flex gap-3 items-center">
                    {data?.priceOptions?.[0]?.discount > 0 && (
                      <>
                        <h1 className=" text-xl text-red-500">
                          ৳{data?.priceOptions?.[0]?.totalPrice}
                        </h1>
                        <small className="line-through text-gray-400">
                          ৳ {data?.priceOptions?.[0]?.price}
                        </small>
                      </>
                    )}
                    {!data?.priceOptions?.[0]?.discount && (
                      <h2 className=" text-xl text-red-500">৳{data?.priceOptions?.[0]?.price}</h2>
                    )}
                  </div>
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
