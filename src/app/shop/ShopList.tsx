import {
  Select,
  SelectContent,
  SelectItem,
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
import p2 from "@/../../public/p2.png";
import CommonCard from "@/components/CommonCard";
import { getProductList } from "@/utils/actions/productList";
import CommonPagination from "@/common/CommonPagination";

const ShopList = ({ productData, paginationData }: any) => {
  console.log(paginationData);
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
        <CommonCard data={productData} />
      </div>
      <div>
        <CommonPagination paginationData={paginationData} />

        {/* <Pagination>
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
        </Pagination> */}
      </div>
    </div>
  );
};

export default ShopList;
