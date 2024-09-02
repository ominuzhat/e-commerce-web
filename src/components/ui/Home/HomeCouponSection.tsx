import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import coupon1 from "../../../../public/cupon-1.png";
import coupon2 from "../../../../public/cupom-2.png";

const HomeCouponSection = () => {
  return (
    <div className="bg-[#c6ebfe] mt-20 ">
      <div className=" grid grid-cols-4 py-16 text-center h-[18rem] overflow-hidden">
        <Image
          src={coupon1}
          alt={"coupon1"}
          height={20}
          width={200}
          className="mx-auto"
        />

        <div className="col-span-2 space-y-3 ">
          <h1 className="text-2xl font-bold">
            Get <span className="text-red-600">20%</span> Off Discount Coupon
          </h1>
          <p className="text-gray-500 ">By Subscribe Our Newsletter</p>
          <div className="py-3 relative ">
            <input
              className="py-2 lg:py-4 ps-5 rounded-xl outline-none text-gray-400 w-[15rem] lg:w-[40rem] "
              placeholder="Your Valid Email Address"
              type="mail"
            />
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="w-9 py-3 lg:py-5 px-4 rounded-lg border bg-baseColor text-white absolute ms-1 cursor-pointer"
            />
          </div>
        </div>
        <div>
          <Image
            src={coupon2}
            alt={"coupon1"}
            height={20}
            width={400}
            className="rotate-45"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeCouponSection;
