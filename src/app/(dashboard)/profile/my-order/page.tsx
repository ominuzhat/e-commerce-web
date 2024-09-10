import { faEye } from "@fortawesome/free-solid-svg-icons";
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
import { CommonIcon } from "@/common/CommonSociaIcon";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

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
  title: "My-order | Profile | Geo Mart",
  description: "My-order | Profile | Geo Mart",
};
const MyOrder = () => {
  return (
    <>
      <div className="shadow rounded-lg px-5 py-8 space-y-5">
        <div className="flex items-center  justify-between">
          <p className="text-xl font-semibold">My Orders List</p>
          <div className="flex space-x-2">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Default" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Default</SelectLabel>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Input type="text" placeholder="Search" />
          </div>
        </div>
        <hr />
        <Table>
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
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
};

export default MyOrder;
