"use client";
import React, { useRef } from "react";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons/faList";
import Link from "next/link";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { usePathname } from "next/navigation";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const nav_links = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Shop",
    path: "/shop",
  },
  {
    display: "About",
    path: "/about",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  const menuRef = useRef<HTMLDivElement>(null);
  const toggleMenu = () => {
    menuRef.current?.classList.toggle("show__menu");
  };

  return (
    <div className="border py-3">
      <div className="max-w-screen-xl mx-auto px-2">
        <div className="flex items-center justify-between ">
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className=" bg-footerColor font-medium p-5 focus:outline-none"
                >
                  <FontAwesomeIcon
                    icon={faList}
                    className="w-4 text-baseColor me-2"
                  />
                  All Categories
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 ms-32 px-4 py-2">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4 " />
                    <span className="font-semibold ">Profile</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Keyboard className="mr-2 h-4 w-4" />
                    <span>Keyboard shortcuts</span>
                    <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Users className="mr-2 h-4 w-4" />
                    <span>Team</span>
                  </DropdownMenuItem>
                  <DropdownMenuSub>
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
                  </DropdownMenuSub>
                  <DropdownMenuItem>
                    <Plus className="mr-2 h-4 w-4" />
                    <span>New Team</span>
                    <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Github className="mr-2 h-4 w-4" />
                  <span>GitHub</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LifeBuoy className="mr-2 h-4 w-4" />
                  <span>Support</span>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                  <Cloud className="mr-2 h-4 w-4" />
                  <span>API</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="navigation" onClick={toggleMenu} ref={menuRef}>
            <div className="menu flex text-sm ">
              {nav_links.map((navlinks, index) => (
                <Link
                  href={navlinks.path}
                  key={index}
                  className={`${
                    pathname === navlinks?.path
                      ? " transform hover:scale-105 duration-500 text-baseColor  rounded-lg"
                      : "hover:text-baseColor transform hover:scale-105 duration-500 "
                  }`}
                >
                  {navlinks.display}
                </Link>
              ))}
              <Link href={"/login"}>
                <Button>Sign Up</Button>
              </Link>
            </div>
          </div>

          <div className="lg:hidden block md:hidden relative ">
            <input
              placeholder="Search Here..."
              className="border hover:border-baseColor rounded-lg  py-2 px-4  focus:outline-none"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="w-9 p-2 absolute right-2 bottom-1 font-medium text-slate-400"
            />
          </div>

          <FontAwesomeIcon
            onClick={toggleMenu}
            icon={faBars}
            className="w-8 text-baseColor rounded-full p-2 lg:hidden md:hidden block cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
