"use client";
import { getCurrentUser } from "@/utils/actions/auth.user";
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
  isLoading: boolean;
  setUser: (user: any) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any | null>();
  const [isLoading, setIsLoading] = useState(false);

  const handleUser = async () => {
    const user = await getCurrentUser();
    setUser(user?.data);
    setIsLoading(true);
  };

  useEffect(() => {
    handleUser();
  }, [isLoading]);

  return (
    <UserContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  return context;
};

export default UserProvider;
