"use client";
import useDebounce from "@/hooks/debounce.hook";
import { useGetProduct } from "@/hooks/get.hook";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface SearchFormData {
  searchQuery: string;
}

const SearchBar = () => {
  const { register, handleSubmit, watch } = useForm<SearchFormData>();
  const [productItem, setProductItem] = useState<any>([]);
  const searchQuery = watch("searchQuery");
  const search = useDebounce(searchQuery);

  const { data, isSuccess, isPending } = useGetProduct(search);

  useEffect(() => {
    if (!isPending && isSuccess && data) {
      setProductItem(data);
    } else if (!search) {
      setProductItem([]);
    }
  }, [data, isSuccess, search]);

  const onSubmit = (data: SearchFormData) => {};

  return (
    <div className="relative z-50">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative lg:w-[500px] md:w-[450px] w-full">
          <input
            {...register("searchQuery")}
            placeholder="Search Here..."
            className="border hover:border-baseColor rounded-lg py-2 px-4 focus:outline-none w-full"
          />
          <button type="submit">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="w-9 p-2 absolute right-2 bottom-1 font-medium text-slate-400"
            />
          </button>
        </div>
      </form>

      {/* Search Results */}
      {search && productItem?.data?.length > 0 ? (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border rounded-lg shadow-lg z-50">
          {productItem?.data?.map((item: any) => (
            <Link
              href={`/shop/${item.id}`}
              key={item.id}
              className="flex items-center my-2 p-2 border-b hover:bg-gray-100 transition"
            >
              <img
                src={item?.featuredImage}
                alt={item?.title}
                className="w-16 h-16 object-cover rounded mr-4"
              />
              <div className="flex-grow">
                <h3 className="text-lg font-semibold">
                  {item?.title?.length > 40
                    ? item?.title?.slice(0, 40) + "..."
                    : item?.title}
                </h3>
                <p className="text-gray-500">
                  ৳{item?.priceOptions[0]?.variants[0]?.totalPrice?.toFixed(2)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : search ? (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border rounded-lg shadow-lg z-50 p-2">
          No results found.
        </div>
      ) : null}
    </div>
  );
};

export default SearchBar;
