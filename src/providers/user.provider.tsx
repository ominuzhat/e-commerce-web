"use client";
import { useGetCartlist } from "@/hooks/get.hook";
import { getCurrentUser } from "@/utils/actions/auth.user";
import { getCartList, getWishList } from "@/utils/actions/get/get.action";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

const UserContext = createContext<IUserProviderValues | undefined>(undefined);

interface IUserProviderValues {
  user: any;
  subCategory: any;
  wishlist: any[];
  cartlist: any;
  setWishlist: (wishList: any[]) => void;
  isLoading: boolean;
  isCartLoading: boolean;
  wishlistLoading: boolean;
  setCartlist: any;
  setUser: (user: any) => void;
  setSubCategory: (user: any) => void;
  setIsCartLoading: Dispatch<SetStateAction<boolean>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setWishlistLoading: Dispatch<SetStateAction<boolean>>;
}

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<null>();
  const [wishlist, setWishlist] = useState<any[]>([]);
  const [cartlist, setCartlist] = useState<any>({});
  const [isCartLoading, setIsCartLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [wishlistLoading, setWishlistLoading] = useState(false);
  const [subCategory, setSubCategory] = useState("");
  const [cartId, setCartId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCartId = localStorage.getItem("cartId");
      setCartId(storedCartId);
    }
  }, []);

  const handleUser = async () => {
    const user = await getCurrentUser();

    if (cartId) {
      const data = await getCartList(cartId);
      setCartlist(data);
    }

    if (user) {
      const wishlistData = await getWishList();
      if (wishlistData?.data) {
        setWishlist(wishlistData?.data?.[0]?.products);
      }
    }

    if (user?.data) {
      setUser(user?.data);
    } else {
      setUser(null);
    }
    setWishlistLoading(true);
    setIsLoading(true);
  };

  useEffect(() => {
    handleUser();
  }, [isLoading, wishlistLoading, setIsCartLoading]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isLoading,
        setIsLoading,
        wishlist,
        setWishlist,
        wishlistLoading,
        setWishlistLoading,
        subCategory,
        setSubCategory,
        setCartlist,
        isCartLoading,
        setIsCartLoading,
        cartlist,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  return context;
};

export default UserProvider;
