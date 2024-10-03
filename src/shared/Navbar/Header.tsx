"use client";
import logo from "../../../public/logo.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons/faBagShopping";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { LogIn, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import cartList from "../../lib/CartItems.json";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { signOut, useSession } from "next-auth/react";
import { useUser } from "@/providers/user.provider";
import { logout } from "@/utils/actions/auth.user";

import SearchBar from "./SearchBar";

const Header = () => {
  const { user, setIsLoading, wishlist, cartlist }: any = useUser();

  return (
    <div className="max-w-screen-xl mx-auto py-5 px-2">
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <Image src={logo} alt={"logo"} width={200} height={50} />
        </Link>
        <div className="relative hidden lg:block">
          <SearchBar />
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
              {!user ? (
                <Link href="/login">
                  <DropdownMenuItem>
                    <LogIn className="mr-2 h-4 w-4" />
                    <span>Log In</span>
                  </DropdownMenuItem>
                </Link>
              ) : (
                <>
                  <Link href="/profile">
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuSeparator />

                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span
                      onClick={() => {
                        signOut(), logout(), setIsLoading(true);
                      }}
                    >
                      Log out
                    </span>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href={"/profile/my-wishlist"}>
            <div className="relative">
              <FontAwesomeIcon
                icon={faHeart}
                className="w-8 bg-footerColor text-baseColor hover:text-white hover:bg-baseColor rounded-full p-2 cursor-pointer duration-300 hover:duration-300"
              />
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {wishlist && wishlist?.length}
              </span>
            </div>
          </Link>

          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="relative">
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faBagShopping}
                    className="w-8 bg-footerColor text-baseColor hover:text-white hover:bg-baseColor rounded-full p-2 cursor-pointer duration-300 hover:duration-300"
                  />
                  <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {cartlist?.data?.items?.length || 0}
                  </span>
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-[20rem] absolute right-0 px-3 py-2">
                <DropdownMenuLabel>
                  <div className="flex items-center justify-between">
                    <p>{cartlist?.data?.items?.length} items</p>
                    <Link href={"/cart"}>View Cart</Link>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                {cartlist?.data?.items
                  ?.slice(0, 3)
                  ?.map((cart: any, index: number) => (
                    <DropdownMenuGroup key={index}>
                      <DropdownMenuItem>
                        <Image
                          src={
                            cart?.variant?.priceOption?.product?.featuredImage
                          }
                          alt={cart?.variant?.priceOption?.product?.title}
                          width={50}
                          height={50}
                          className="border "
                        />
                        <div className="ml-4 ">
                          <p className="font-semibold">
                            {cart?.variant?.priceOption?.product?.title.length >
                            25
                              ? cart?.variant?.priceOption?.product?.title.slice(
                                  0,
                                  25
                                ) + "..."
                              : cart?.variant?.priceOption?.product?.title}
                          </p>
                          <div className="flex items-center space-x-2">
                            <p>{cart?.quantity}</p> <span>X</span>{" "}
                            <p>{cart?.totalPrice}</p>
                          </div>
                        </div>
                        <DropdownMenuShortcut>
                          <FontAwesomeIcon
                            icon={faCircleXmark}
                            className="text-red-600 hover:text-baseColor cursor-pointer"
                          />
                        </DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  ))}
                <DropdownMenuSeparator />
                <DropdownMenuLabel>
                  <div className="flex items-center justify-between">
                    <p>Total</p>
                    <p>${cartlist?.data?.totalPrice}</p>
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
