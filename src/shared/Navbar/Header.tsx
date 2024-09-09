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
import cartList from "../../lib/CartItems.json";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

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
          {/* <div className="relative">
            <FontAwesomeIcon
              icon={faBagShopping}
              className="w-8 bg-footerColor text-baseColor hover:text-white hover:bg-baseColor rounded-full p-2 cursor-pointer duration-300 hover:duration-300"
            />
            <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </div> */}

          {/* ddddddddddddd */}

          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="relative">
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faBagShopping}
                    className="w-8 bg-footerColor text-baseColor hover:text-white hover:bg-baseColor rounded-full p-2 cursor-pointer duration-300 hover:duration-300"
                  />
                  <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {cartList?.length}
                  </span>
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-[20rem] absolute right-0 px-3 py-2">
                <DropdownMenuLabel>
                  <div className="flex items-center justify-between">
                    <p>{cartList?.length} items</p>
                    <Link href={"/cart"}>View Cart</Link>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                {cartList?.slice(0, 3)?.map((cart, index) => (
                  <DropdownMenuGroup key={index}>
                    <DropdownMenuItem>
                      <Image
                        src={cart?.image}
                        alt={cart?.name}
                        width={50}
                        height={50}
                        className="border "
                      />
                      <div className="ml-4 ">
                        <p className="font-semibold">{cart?.name}</p>
                        <div className="flex items-center space-x-2">
                          <p>{cart?.quantity}</p> <span>X</span>{" "}
                          <p>{cart?.price}</p>
                        </div>
                      </div>
                      <DropdownMenuShortcut>
                        <FontAwesomeIcon
                          icon={faCircleXmark}
                          className="text-red-600 hover:text-baseColor cursor-pointer"
                        />
                      </DropdownMenuShortcut>

                      {/* <Users className="mr-2 h-4 w-4" />
                      <span>Team</span> */}
                    </DropdownMenuItem>
                    {/* <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        <UserPlus className="mr-2 h-4 w-4" />
                        <span>Invite users</span>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem>
                            <Mail className="mr-2 h-4 w-4" />
                            <span>Email</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <MessageSquare className="mr-2 h-4 w-4" />
                            <span>Message</span>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <PlusCircle className="mr-2 h-4 w-4" />
                            <span>More...</span>
                          </DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub> */}
                    {/* <DropdownMenuItem>
                      <Plus className="mr-2 h-4 w-4" />
                      <span>New Team</span>
                      <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                    </DropdownMenuItem> */}
                  </DropdownMenuGroup>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuLabel>
                  <div className="flex items-center justify-between">
                    <p>Total</p>
                    <p>$500</p>
                  </div>

                  <Button className="w-full mt-5">Checkout</Button>
                </DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
