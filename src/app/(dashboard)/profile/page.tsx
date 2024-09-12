import { Button } from "@/components/ui/button";
import {
  faBarsStaggered,
  faEye,
  faLayerGroup,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { CommonIcon } from "@/common/CommonSociaIcon";

const items = [
  {
    title: "50",
    Description: "Pending Orders",
    bgColor: "#f8f2fe",
    textColor: "#a855f7",
    icon: faBarsStaggered, // Direct reference to the imported icon
  },
  {
    title: "250",
    Description: "Completed Orders",
    bgColor: "#f8f2fe",
    textColor: "#11b76b",
    icon: faLayerGroup, // Direct reference to the imported icon
  },
  {
    title: "$15.80k",
    Description: "My Balance",
    bgColor: "#fef2f2",
    textColor: "#f05454",
    icon: faWallet, // Direct reference to the imported icon
  },
];

const orderItems = [
  {
    orderNumber: "#35VR5K54",
    date: "January 21, 2024",
    amount: "$3,650",
    status: "Pending",
  },
  {
    orderNumber: "#42XD3J29",
    date: "February 14, 2024",
    amount: "$2,450",
    status: "Shipped",
  },
  {
    orderNumber: "#28NV4P76",
    date: "March 05, 2024",
    amount: "$4,870",
    status: "Delivered",
  },
  {
    orderNumber: "#67QL7K82",
    date: "April 11, 2024",
    amount: "$1,320",
    status: "Pending",
  },
  {
    orderNumber: "#91ZT8R33",
    date: "May 28, 2024",
    amount: "$7,500",
    status: "Cancelled",
  },
  {
    orderNumber: "#84MW5S44",
    date: "June 15, 2024",
    amount: "$2,980",
    status: "Shipped",
  },
];

export const metadata: Metadata = {
  title: "Profile | Eco Shop",
  description: "Profile | Eco Shop",
};

const ProfilePage = () => {
  return (
    <div className="space-y-8">
      <div className=" shadow rounded-lg px-5 py-8 space-y-5">
        <p className="text-xl font-semibold">Summary</p>
        <hr />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {items?.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-5 py-8 rounded-lg"
              style={{ backgroundColor: item?.bgColor }}
            >
              <div className="space-y-1" style={{ color: item?.textColor }}>
                <p className="text-3xl font-semibold">{item?.title}</p>
                <p>{item?.Description}</p>
              </div>
              <FontAwesomeIcon
                icon={item?.icon}
                style={{
                  backgroundColor: item?.bgColor,
                  color: item?.textColor,
                  padding: "1.25rem",
                  borderRadius: "9999px",
                  display: "inline-block",
                  width: "30px",
                  height: "auto",
                  border: `1px solid ${item?.bgColor}`,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className=" shadow rounded-lg px-5 py-8 space-y-5">
        <div className="flex items-center  justify-between">
          <p className="text-xl font-semibold">Recent Orders</p>
          <Link href={"/profile/my-order"}>
            <Button>View All Orders</Button>
          </Link>
        </div>
        <hr />
        <Table>
          <TableCaption>A list of your recent Orders.</TableCaption>
          <TableHeader>
            <TableRow className="text-center">
              <TableHead className="w-[100px] text-center">#Order No</TableHead>
              <TableHead className="text-center"> Purchased Date</TableHead>
              <TableHead className="text-center">Total</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orderItems?.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium ">
                  {item?.orderNumber}
                </TableCell>
                <TableCell className=" text-center">{item?.date}</TableCell>
                <TableCell className=" text-center">{item?.amount}</TableCell>
                <TableCell className="text-center">
                  <span
                    className={`px-2 py-1 rounded-lg font-semibold ${
                      item?.status === "Pending"
                        ? " bg-purple-200 text-purple-600"
                        : item?.status === "Cancelled"
                        ? "bg-red-200 text-red-600"
                        : item?.status === "Delivered"
                        ? "bg-green-200 text-green-600"
                        : "bg-orange-200 text-orange-600"
                    }`}
                  >
                    {item?.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <CommonIcon
                    icon={faEye}
                    className="border p-3 text-gray-600 rounded"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ProfilePage;
