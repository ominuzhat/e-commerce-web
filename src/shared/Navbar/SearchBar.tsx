"use client";
import useDebounce from "@/hooks/debounce.hook";
import { useGetProduct } from "@/hooks/get.hook";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

  console.log(productItem);

  return (
    <div className="border">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="hidden lg:block md:block relative">
          <input
            {...register("searchQuery")}
            placeholder="Search Here..."
            className="border hover:border-baseColor rounded-lg md:w-[450px] lg:w-[500px] py-2 px-4 focus:outline-none"
          />
          <button type="submit">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="w-9 p-2 absolute right-2 bottom-1 font-medium text-slate-400"
            />
          </button>
        </div>
      </form>
      {/* Show the filtered product items based on the search query */}
      {search && productItem.length > 0 ? (
        productItem.map((item: any) => (
          <div
            key={item.id}
            className="flex items-center my-2 p-2 border rounded shadow-md"
          >
            <img
              src={item.variant.priceOption.product.featuredImage}
              alt={item.variant.priceOption.product.title}
              className="w-16 h-16 object-cover rounded mr-4"
            />
            <div className="flex-grow">
              <h3 className="text-lg font-semibold">
                {item.variant.priceOption.product.title}
              </h3>
              <p className="text-gray-500">
                Total Price: ৳{item.totalPrice.toFixed(2)}
              </p>
            </div>
          </div>
        ))
      ) : search ? (
        <div>No results found.</div> // Message for no results
      ) : null}{" "}
      {/* Don't render anything if search is empty */}
    </div>
  );
};

export default SearchBar;
