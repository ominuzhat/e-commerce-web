"use client";
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { usePathname } from "next/navigation";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import CategoryMenu from "./CategoryMenu";

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
          <CategoryMenu/>      
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
              {/* <Link href={"/login"}>
                <Button>Sign Up</Button>
              </Link> */}
              <Link href={"/"}>
                <Button>Become Seller</Button>
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
