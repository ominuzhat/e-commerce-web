import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const HomeCouponSection = () => {
  return (
    <div className="bg-[#c6ebfe] mt-20">
      <div className="py-16 text-center space-y-2">
        <h1 className="text-2xl font-bold">
          Get <span className="text-red-600">20%</span> Off Discount Coupon
        </h1>
        <p className="text-gray-500 ">By Subscribe Our Newsletter</p>
        <div className="py-3 relative ">
          <input
            className="py-4 ps-5 rounded-xl outline-none text-gray-400 w-[40rem] "
            placeholder="Your Valid Email Address"
            type="mail"
          />

          <FontAwesomeIcon
            icon={faPaperPlane}
            className="w-9 p-4 rounded-lg border bg-baseColor text-white absolute"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeCouponSection;
