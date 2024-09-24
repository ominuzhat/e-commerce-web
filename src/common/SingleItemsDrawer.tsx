import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import p2 from "../../public/p2.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfAlt } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";

import { FaceBookIcon, InstragramIcon, TwiteerIcon } from "./CommonSociaIcon";
import { renderStars } from "@/components/CommonRating";

const SingleItemsDrawer = ({ open, onOpenChange, singleData }: any) => {
  const { title, sku, featuredImage, priceOptions, subCategory, avgRating } =
    singleData || {};
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-10 border  lg:max-w-[40%]">
        <DialogHeader>
          <DialogDescription className="lg:grid grid-cols-2 gap-10">
            <div className=" flex justify-center items-center">
              <Image src={featuredImage} alt={title} height={50} width={400} />
            </div>
            <div className="space-y-4 text-left">
              <DialogTitle className="text-xl font-semibold text-black">
                {title}
              </DialogTitle>
              <div className="space-x-1">{renderStars(avgRating)}</div>
              <div className="text-xl space-x-2 font-medium">
                {/* <span className="line-through">$690 </span> */}
                {/* <span className="text-baseColor">
                  ৳ {priceOptions?.[0]?.price}
                </span> */}

                <div className="flex gap-4 items-center">
                  {/* If there's a discount, show original price and discounted price */}
                  {priceOptions?.[0]?.discount > 0 && (
                    <>
                      <h1 className=" text-3xl text-red-500">
                        ৳{priceOptions?.[0]?.totalPrice}
                      </h1>
                      <small className="line-through text-gray-400">
                        ৳ {priceOptions?.[0]?.price}
                      </small>
                    </>
                  )}
                  {!priceOptions?.[0]?.discount && (
                    <h2 className=" text-3xl text-red-500">
                      ৳{priceOptions?.[0]?.price}
                    </h2>
                  )}
                </div>
              </div>
              <div className="flex space-x-7 text-base">
                <div className="space-y-1">
                  <p>Brand </p>
                  <p>Category </p>
                  <p>Stock </p>
                  <p>Code </p>
                </div>
                <div className="flex space-x-4 ">
                  <div className="space-y-1">
                    <p> :</p>
                    <p> :</p>
                    <p> :</p>
                    <p> :</p>
                  </div>
                  <div className="font-semibold space-y-1">
                    <p>Beats</p>
                    <p>{subCategory?.name}</p>
                    <p className="text-baseColor">{priceOptions?.[0]?.stock}</p>
                    <p>{sku}</p>
                  </div>
                </div>
              </div>
              <Button>Add to cart</Button>
              {/* <div className="flex items-center space-x-4 ">
                <span>Follow Us :</span>
                <FaceBookIcon />
                <TwiteerIcon />
                <InstragramIcon />
              </div> */}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SingleItemsDrawer;
