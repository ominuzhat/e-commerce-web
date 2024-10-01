"use client";
import { getCurrentUser } from "@/utils/actions/auth.user";
import { getWishList } from "@/utils/actions/get/get.action";
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
  wishlist: any[];
  setWishlist: (wishList: any[]) => void;
  isLoading: boolean;
  setUser: (user: any) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<null>();
  const [wishlist, setWishlist] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleUser = async () => {
    const user = await getCurrentUser();
    if (user?.data) {
      setUser(user?.data);
    } else {
      setUser(null);
    }
    setIsLoading(true);
  };

  useEffect(() => {
    const fetchWishlist = async () => {
      const wishlistData = await getWishList();

      if (wishlistData?.data) {
        setWishlist(wishlistData?.data?.[0]?.products);
      }
    };

    fetchWishlist();
  }, []);

  useEffect(() => {
    handleUser();
  }, [isLoading]);

  return (
    <UserContext.Provider
      value={{ user, setUser, isLoading, setIsLoading, wishlist, setWishlist }}
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
