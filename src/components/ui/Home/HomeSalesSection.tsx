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
import Link from "next/link";
import CommonAddToCartButton from "@/components/CommonAddToCartButton";

const HomeSalesSection = ({ onSaleItems, topRatedItems, bestSellers }: any) => {
  return (
    <div className="max-w-screen-xl mx-auto pt-16 lg:px-2 px-5">
      <div className="lg:grid grid-cols-3 gap-10 space-y-5 lg:space-y-0">
        <div>
          <p className="text-2xl font-semibold pb-2 border-b-2 ">On Sale</p>
          <p className="border border-b-2 w-10 border-baseColor"></p>

          {onSaleItems?.slice(0, 3)?.map((data: any) => (
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
                <Link href={`/shop/${data?.id}`}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <p className="text-xl font-semibold text-left">
                          {data?.title?.length > 20
                            ? data?.title?.slice(0, 20) + "..."
                            : data?.title}
                        </p>
                      </TooltipTrigger>
                      <TooltipContent className="bg-secondaryColor text-white">
                        <p>{data?.title}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <p>
                  {" "}
                  {renderStars(data?.avgRating)}{" "}
                  <span>({data?.totalReviews})</span>
                </p>
                <div className="flex gap-4 items-center">
                  {data?.priceOptions?.[0]?.variants?.[0]?.discount > 0 && (
                    <>
                      <h1 className=" text-3xl text-red-500">
                        ৳{data?.priceOptions?.[0]?.variants?.[0]?.totalPrice}
                      </h1>
                      <small className="line-through text-gray-400 font-semibold">
                        ৳ {data?.priceOptions?.[0]?.variants?.[0]?.price}
                      </small>
                    </>
                  )}
                  {!data?.priceOptions?.[0]?.variants?.[0]?.discount && (
                    <h2 className=" text-3xl text-red-500">
                      ৳{data?.priceOptions?.[0]?.variants?.[0]?.price}
                    </h2>
                  )}
                </div>
              </div>
              <div className="absolute -bottom-1 right-0">
                <CommonAddToCartButton data={data} />
              </div>
            </div>
          ))}
        </div>
        <div>
          <p className="text-2xl font-semibold pb-2 border-b-2 ">Best Seller</p>
          <p className="border border-b-2 w-10 border-baseColor"></p>

          {topRatedItems?.slice(0, 3)?.map((data: any) => (
            <div
              key={data?.id}
              className="bg-footerColor mt-10 px-4 py-2 flex items-center gap-5 relative rounded-2xl"
            >
              <Image
                src={data?.featuredImage}
                alt={"p2"}
                width={90}
                height={30}
                className="border bg-white rounded-xl"
              />
              <div className="space-y-1 ">
                <Link href={`/shop/${data?.id}`}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <p className="text-xl font-semibold text-left">
                          {data?.title?.length > 20
                            ? data?.title?.slice(0, 20) + "..."
                            : data?.title}
                        </p>
                      </TooltipTrigger>
                      <TooltipContent className="bg-secondaryColor text-white">
                        <p>{data?.title}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>{" "}
                <p>
                  {" "}
                  {renderStars(data?.avgRating)}{" "}
                  <span>({data?.totalReviews})</span>
                </p>
                <div className="flex gap-4 items-center">
                  {data?.priceOptions?.[0]?.variants?.[0]?.discount > 0 && (
                    <>
                      <h1 className=" text-3xl text-red-500">
                        ৳{data?.priceOptions?.[0]?.variants?.[0]?.totalPrice}
                      </h1>
                      <small className="line-through text-gray-400 font-semibold">
                        ৳ {data?.priceOptions?.[0]?.variants?.[0]?.price}
                      </small>
                    </>
                  )}
                  {!data?.priceOptions?.[0]?.variants?.[0]?.discount && (
                    <h2 className=" text-3xl text-red-500">
                      ৳{data?.priceOptions?.[0]?.variants?.[0]?.price}
                    </h2>
                  )}
                </div>
              </div>
              <CommonAddToCartButton data={data} />
            </div>
          ))}
        </div>
        <div>
          <p className="text-2xl font-semibold pb-2 border-b-2 ">Top Rated</p>
          <p className="border border-b-2 w-10 border-baseColor"></p>
          {bestSellers?.slice(0, 3)?.map((data: any) => (
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
                <Link href={`/shop/${data?.id}`}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <p className="text-xl font-semibold text-left">
                          {data?.title?.length > 20
                            ? data?.title?.slice(0, 20) + "..."
                            : data?.title}
                        </p>
                      </TooltipTrigger>
                      <TooltipContent className="bg-secondaryColor text-white">
                        <p>{data?.title}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>{" "}
                <p>
                  {" "}
                  {renderStars(data?.avgRating)}{" "}
                  <span>({data?.totalReviews})</span>
                </p>
                <div className="flex gap-4 items-center">
                  {data?.priceOptions?.[0]?.variants?.[0]?.discount > 0 && (
                    <>
                      <h1 className=" text-3xl text-red-500">
                        ৳{data?.priceOptions?.[0]?.variants?.[0]?.totalPrice}
                      </h1>
                      <small className="line-through text-gray-400 font-semibold">
                        ৳ {data?.priceOptions?.[0]?.variants?.[0]?.price}
                      </small>
                    </>
                  )}
                  {!data?.priceOptions?.[0]?.variants?.[0]?.discount && (
                    <h2 className=" text-3xl text-red-500">
                      ৳{data?.priceOptions?.[0]?.variants?.[0]?.price}
                    </h2>
                  )}
                </div>
              </div>
              <CommonAddToCartButton data={data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSalesSection;
