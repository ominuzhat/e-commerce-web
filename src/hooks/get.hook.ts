import { getCartList } from "@/utils/actions/get/get.action";
import { getProductList } from "@/utils/actions/productList";
import { useQuery } from "@tanstack/react-query";

export const useGetCartlist = (cartId: string | null) => {
  return useQuery({
    queryKey: ["CART_LIST", cartId],
    queryFn: () => getCartList(cartId),
    enabled: !!cartId,
  });
};

export const useGetProduct = (searchItem: string | null) => {
  return useQuery({
    queryKey: ["PRODUCT_LIST", searchItem],
    queryFn: () => getProductList(searchItem),
  });
};
