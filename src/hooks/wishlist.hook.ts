import { getWishList, getSingleWishList } from "@/utils/actions/get/get.action";
import { useQuery } from "@tanstack/react-query";

export const useGetWishlist = () => {
  return useQuery({
    queryKey: ["WISHLIST"],
    queryFn: getWishList,
  });
};

// type WishlistItem = {
//   id: number;
// };

// export const useSingleGetWishlist = (id: number | null | undefined) => {
//   return useQuery<WishlistItem, Error>({
//     queryKey: ["SINGLE_WISHLIST", id],
//     queryFn: () => {
//       if (id) {
//         return getSingleWishList(id);
//       }
//       return Promise.reject("ID is not provided");
//     },
//     enabled: !!id,
//   });
// };
