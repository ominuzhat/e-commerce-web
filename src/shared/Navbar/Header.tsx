import logo from "../../../public/logo.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons/faBagShopping";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const Header = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-5 px-2">
      <div className="flex items-center justify-between">
        <div>
          <Image src={logo} alt={"logo"} width={200} height={50} />
        </div>
        <div className="hidden lg:block md:block relative">
          <input
            placeholder="Search Here..."
            className="border hover:border-baseColor rounded-lg md:w-[450px] lg:w-[500px] py-2 px-4  focus:outline-none"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="w-9 p-2 absolute right-2 bottom-1 font-medium text-slate-400"
          />
        </div>
        <div className="flex items-center space-x-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <FontAwesomeIcon
                icon={faUser}
                className="w-8 bg-footerColor text-baseColor hover:text-white hover:bg-baseColor rounded-full p-2 cursor-pointer duration-300 hover:duration-300"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40">
              <Link href="/profile">
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="relative">
            <FontAwesomeIcon
              icon={faHeart}
              className="w-8 bg-footerColor text-baseColor hover:text-white hover:bg-baseColor rounded-full p-2 cursor-pointer duration-300 hover:duration-300"
            />
            <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </div>
          <div className="relative">
            <FontAwesomeIcon
              icon={faBagShopping}
              className="w-8 bg-footerColor text-baseColor hover:text-white hover:bg-baseColor rounded-full p-2 cursor-pointer duration-300 hover:duration-300"
            />
            <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
