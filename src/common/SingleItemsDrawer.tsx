import React from "react";
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

const SingleItemsDrawer = ({ open, onOpenChange }: any) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-10 border  lg:max-w-[40%]">
        <DialogHeader>
          <DialogDescription className="lg:grid grid-cols-2 ">
            <div className=" flex justify-center items-center">
              <Image src={p2} alt={"p2"} height={50} width={400} />
            </div>
            <div className="space-y-4 text-left">
              <DialogTitle className="text-xl font-semibold text-black">
                Beats Bluetooth Earphones
              </DialogTitle>
              <div className="space-x-1">
                <FontAwesomeIcon icon={faStar} className="text-yellowColor" />
                <FontAwesomeIcon icon={faStar} className="text-yellowColor" />
                <FontAwesomeIcon icon={faStar} className="text-yellowColor" />
                <FontAwesomeIcon
                  icon={faStarHalfAlt}
                  className="text-yellowColor"
                />
              </div>
              <div className="text-xl space-x-2 font-medium">
                <span className="line-through">$690 </span>
                <span className="text-baseColor">$650</span>
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
                    <p>Headphones</p>
                    <p className="text-baseColor">Available</p>
                    <p>676TYWV</p>
                  </div>
                </div>
              </div>
              <Button>Add to cart</Button>
              <div className="flex items-center space-x-4 ">
                <span>Follow Us :</span>
                <FaceBookIcon />
                <TwiteerIcon />
                <InstragramIcon />
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SingleItemsDrawer;
