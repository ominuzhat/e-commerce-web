"use client";

import com from "../../../../public/com-1.jpg";
import Image from "next/image";
import {
  faUser,
  faListAlt,
  faHeart,
  faAddressBook,
  faTicketAlt,
  faShippingFast,
  faCreditCard,
  faBell,
  faEnvelope,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const items = [
  {
    name: "My Profile",
    icon: faUser,
    quantity: null,
    path: "/profile",
  },
  {
    name: "My Order List",
    icon: faListAlt,
    quantity: "02",
    path: "/profile/my-order",
  },
  {
    name: "My Wishlist",
    icon: faHeart,
    quantity: "02",
    path: "/profile/my-wishlist",
  },
  {
    name: "Address List",
    icon: faAddressBook,
    quantity: null,
    path: "/profile/address-list",
  },

  {
    name: "Track My Order",
    icon: faShippingFast,
    quantity: null,
    path: "/profile/track-my-order",
  },
  // {
  //   name: "Notification",
  //   icon: faBell,
  //   quantity: "02",
  //   path: "/profile/notification",
  // },

  {
    name: "Logout",
    icon: faSignOutAlt,
    quantity: null,
    path: "/",
  },
];

const ProfileNavber = () => {
  const pathname = usePathname();

  return (
    <div className=" rounded-xl shadow-lg py-8 px-4 space-y-2 h-fit">
      <div className="space-y-2">
        <Image
          src={com}
          alt={"profile"}
          width={100}
          height={50}
          className="rounded-full mx-auto p-1 border-2 border-baseColor"
        />
        <div className="text-center">
          <p className="text-xl font-semibold"> Antoni Jonson </p>
          <p className="text-gray-500">antoni@example.com</p>
        </div>
      </div>
      <hr />

      <div className="my-5">
        {items?.map((item, index) => (
          <Link
            href={item?.path}
            key={index}
            className={`flex justify-between items-center  ${
              pathname === item?.path
                ? "bg-baseColor text-white px-4 py-2 rounded-lg"
                : "text-gray-500 px-4 py-2 hover:text-baseColor hover:translate-x-2 duration-300 hover:duration-300"
            } `}
          >
            {item && (
              <p className="font-medium space">
                <FontAwesomeIcon icon={item.icon} className="me-3" />
                {item.name}
              </p>
            )}

            {item?.quantity && (
              <p className="bg-red-200 text-sm text-red-500 font-semibold p-1 rounded-full">
                {item?.quantity}
              </p>
            )}
          </Link>
        ))}

        {/* {items?.map((item, index) => (
          <Link
            href={item?.path}
            key={index}
            className={`${
              pathname === item?.path
                ? " transform hover:scale-105 duration-500 text-baseColor bg-red-600 rounded-lg"
                : "hover:text-baseColor bg-red-600 transform hover:scale-105 duration-500 "
            }`}
          >
            <div className="flex items-center justify-between  text-gray-500 my-4 hover:text-baseColor cursor-pointer">
              <div className="flex items-center space-x-3  hover:ms-5 duration-300 hover:duration-300 ">
                <CommonIcon icon={item?.icon} />
                <p className="font-medium ">{item?.name}</p>
              </div>
              <p> {item?.quantity && `(${item?.quantity})`}</p>
            </div>
            {index < mobileData.length - 1 && <hr className="my-2" />}
          </Link>
        ))} */}
      </div>
    </div>
  );
};

export default ProfileNavber;
