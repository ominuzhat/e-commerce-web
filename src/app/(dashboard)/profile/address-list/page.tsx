import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Metadata } from "next";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import CreateAddressInfo from "./CreateAddressInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CommonPagination from "@/common/CommonPagination";

const orderItems = [
  {
    orderNumber: "Antoni",
    date: "25/B Milford Road, New York",
    amount: "antoni@example.com",
    status: "(+02) 123 4687 456",
  },
  {
    orderNumber: "Antoni",
    date: "25/B Milford Road, New York",
    amount: "antoni@example.com",
    status: "(+02) 123 4687 456",
  },
  {
    orderNumber: "Antoni",
    date: "25/B Milford Road, New York",
    amount: "antoni@example.com",
    status: "(+02) 123 4687 456",
  },
  {
    orderNumber: "Antoni",
    date: "25/B Milford Road, New York",
    amount: "antoni@example.com",
    status: "(+02) 123 4687 456",
  },
  {
    orderNumber: "Antoni",
    date: "25/B Milford Road, New York",
    amount: "antoni@example.com",
    status: "(+02) 123 4687 456",
  },
  {
    orderNumber: "Antoni",
    date: "25/B Milford Road, New York",
    amount: "antoni@example.com",
    status: "(+02) 123 4687 456",
  },
  {
    orderNumber: "Antoni",
    date: "25/B Milford Road, New York",
    amount: "antoni@example.com",
    status: "(+02) 123 4687 456",
  },
  {
    orderNumber: "hello",
    date: "25/B Milford Road, New York",
    amount: "antoni@example.com",
    status: "(+02) 123 4687 456",
  },
];

export const metadata: Metadata = {
  title: "My-order | Profile | Geo Mart",
  description: "My-order | Profile | Geo Mart",
};

const MyAddressList = () => {
  return (
    <div className="shadow rounded-lg px-5 py-8 space-y-5">
      <div className="flex items-center  justify-between">
        <p className="text-xl font-semibold">My Address List</p>
        <CreateAddressInfo />
      </div>
      <hr />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orderItems?.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium ">
                {item?.orderNumber}
              </TableCell>
              <TableCell>{item?.date}</TableCell>
              <TableCell>{item?.amount}</TableCell>
              <TableCell>{item?.status}</TableCell>
              <TableCell className="text-right flex space-x-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="border p-3 text-gray-600 rounded"
                      />
                    </TooltipTrigger>
                    <TooltipContent className="bg-secondaryColor text-white">
                      <p>Edit Address</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="border p-3 text-red-600 rounded"
                      />
                    </TooltipTrigger>
                    <TooltipContent className="bg-secondaryColor text-white">
                      <p>Remove Address</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <CommonPagination limit={2} totalItems={orderItems?.length} />
    </div>
  );
};

export default MyAddressList;
