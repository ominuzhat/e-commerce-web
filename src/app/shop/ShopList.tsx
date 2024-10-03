"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import CommonCard from "@/components/CommonCard";
import CommonPagination from "@/common/CommonPagination";
import { getWishList } from "@/utils/actions/get/get.action";
import { getCurrentUser } from "@/utils/actions/auth.user";
import { useUser } from "@/providers/user.provider";

const ShopList = ({ productData, paginationData }: any) => {
  const { wishlist }: any = useUser();

  return (
    <div className=" space-y-3 ">
      <div className="flex items-center space-x-2 text-gray-400 ">
        <h1>Sort By:</h1>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Default Sorting" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default-sorting">Default Sorting</SelectItem>
            <SelectItem value="latest-items">Latest Items</SelectItem>
            <SelectItem value="best-seller-items">Best Seller Items</SelectItem>
            <SelectItem value="LTH">Price- Low To High</SelectItem>
            <SelectItem value="HTL">Price- High To Low</SelectItem>
          </SelectContent>
        </Select>
        <p>Showing 1-10 of 50 Results</p>
      </div>
      <div>
        <CommonCard data={productData} wishlist={wishlist} />
      </div>
      <div>
        <CommonPagination paginationData={paginationData} />
      </div>
    </div>
  );
};

export default ShopList;
