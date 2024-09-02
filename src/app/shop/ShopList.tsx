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

const trendingData = [
  {
    id: 1,
    image: p2,
    badgeText: "Hot",
    productName: "Bluetooth Earphones",
    price: "$100.00",
    stars: 4,
  },
  {
    id: 2,
    image: p2,
    badgeText: "New",
    productName: "Wireless Headphones",
    price: "$150.00",
    stars: 5,
  },
  {
    id: 3,
    image: p2,
    badgeText: "Sale",
    productName: "Smart Watch",
    price: "$200.00",
    stars: 3,
  },
  {
    id: 4,
    image: p2,
    badgeText: "Out of stack",
    productName: "Gaming Mouse",
    price: "$50.00",
    stars: 4,
  },
  {
    id: 5,
    image: p2,
    badgeText: "New",
    productName: "Mechanical Keyboard",
    price: "$120.00",
    stars: 5,
  },
  {
    id: 6,
    image: p2,
    badgeText: "Sale",
    productName: "Bluetooth Speaker",
    price: "$80.00",
    stars: 4,
  },
  {
    id: 7,
    image: p2,
    badgeText: "Hot",
    productName: "Fitness Tracker",
    price: "$60.00",
    stars: 4,
  },
  {
    id: 8,
    image: p2,
    badgeText: "New",
    productName: "Smartphone",
    price: "$900.00",
    stars: 5,
  },
  {
    id: 9,
    image: p2,
    badgeText: "Sale",
    productName: "Tablet",
    price: "$300.00",
    stars: 3,
  },
  {
    id: 10,
    image: p2,
    badgeText: "Hot",
    productName: "Laptop",
    price: "$1200.00",
    stars: 5,
  },
  {
    id: 11,
    image: p2,
    badgeText: "New",
    productName: "4K TV",
    price: "$1000.00",
    stars: 4,
  },
  {
    id: 12,
    image: p2,
    badgeText: "10% off",
    productName: "Camera",
    price: "$700.00",
    stars: 5,
  },
];

const ShopList = () => {
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
        <CommonCard trendingData={trendingData} />
      </div>
      <div>
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
    </div>
  );
};

export default ShopList;
