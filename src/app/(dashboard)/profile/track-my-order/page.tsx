import { CommonIcon } from "@/common/CommonSociaIcon";
import {
  faCircleCheck,
  faGear,
  faHouse,
  faShoppingCart,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "My-Tracking-order | Profile | Geo Mart",
  description: "My--Tracking-order | Profile | Geo Mart",
};

const progress = [
  "Confirmed",
  "Processing",
  "Quality",
  "Dispatched",
  "Delivered",
];


const tracking = {
  trackingOrderNumber: "#35VR5K54",
  shipmentDetails: {
    shippedVia: "Express Shopping",
    status: "Checking Quality",
    expectedDate: "January 27, 2024",
  },
  orderStatus: "Processing",
};

const TrackMyOrder = () => {
  const getProgressIndex = (status: string) => progress.indexOf(status);

  return (
    <div className="shadow rounded-lg px-5 py-8 space-y-5">
      <p className="text-xl font-semibold">My Address List</p>
      <hr />
      <div className="space-y-6 border px-4 py-6 rounded-lg">
        <p className="font-semibold uppercase">
          Tracking Order Number :{" "}
          <span className="text-baseColor">{tracking.trackingOrderNumber}</span>
        </p>
        <div className="flex space-x-2">
          <p className="px-4 py-2 bg-slate-100 rounded-lg">
            <span className="font-semibold">Shipped Via :</span>
            <span>{tracking.shipmentDetails.shippedVia}</span>
          </p>
          <p className="px-4 py-2 bg-slate-100 rounded-lg">
            <span className="font-semibold">Status :</span>
            <span>{tracking.shipmentDetails.status}</span>
          </p>
          <p className="px-4 py-2 bg-slate-100 rounded-lg">
            <span className="font-semibold">Expected Date :</span>
            <span>{tracking.shipmentDetails.expectedDate}</span>
          </p>
        </div>
        <div className="relative md:flex items-center justify-between">
          {/* Progress Line */}
          <div
            className="w-[90%] hidden md:block md:rotate-0 mx-auto absolute left-0 right-0 h-2 bg-slate-500 z-0"
            style={{ top: "28%" }}
          >
            <div
              className="h-2 bg-baseColor"
              style={{
                width: `${
                  (getProgressIndex(tracking.orderStatus) /
                    (progress.length - 1)) *
                  101
                }%`,
              }}
            />
          </div>

          {/* Progress Steps */}
          {progress.map((status, index) => (
            <div
              className="relative mb-4 text-center space-y-2 z-10"
              key={index}
            >
              <CommonIcon
                icon={
                  status === "Confirmed"
                    ? faShoppingCart
                    : status === "Processing"
                    ? faGear
                    : status === "Quality"
                    ? faCircleCheck
                    : status === "Dispatched"
                    ? faTruckFast
                    : faHouse
                }
                className={`w-8 h-8 p-5 rounded-full text-white ${
                  index <= getProgressIndex(tracking.orderStatus)
                    ? "bg-baseColor"
                    : "bg-slate-500"
                }`}
              />
              <p className="font-semibold">{status} Order</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrackMyOrder;
