import React from "react";
import logo from "../../../public/logo.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEnvelope,
  faLocation,
  faPaperPlane,
  faPhone,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {
  faAppStore,
  faFacebook,
  faGooglePlay,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import visa from "../../../public/visa.svg";
import mastercard from "../../../public/mastercard.svg";
import amex from "../../../public/amex.svg";
import discover from "../../../public/discover.svg";
import paypal from "../../../public/paypal.svg";

const Footer = () => {
  return (
    <footer className="bg-footerColor">
      <div className="max-w-screen-xl mx-auto pt-32 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 space-y-5 lg:space-y-0 px-5 md:px-2 lg:px-2 ">
          <div className="space-y-5">
            <Link href={"/"}>
              <Image src={logo} alt={"logo"} width={200} height={50} />
            </Link>
            <p className="text-gray-400  text-justify ">
              We are many variations of the passages available but the majoro
              have suffered alteration in some form by injected.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="w-8 text-white bg-baseColor rounded-full p-2 "
                />
                <span className="text-gray-400 ">+2 123 654 7898</span>
              </div>
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon
                  icon={faLocation}
                  className="w-8 text-white bg-baseColor rounded-full p-2 "
                />
                <span className="text-gray-400 ">Bashabo, Dhaka</span>
              </div>
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-8 text-white bg-baseColor rounded-full p-2 "
                />
                <span className="text-gray-400 ">info@example.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon
                  icon={faClock}
                  className="w-8 text-white bg-baseColor rounded-full p-2 "
                />
                <span className="text-gray-400 ">
                  Mon-Fri (9.00AM - 8.00PM)
                </span>
              </div>
            </div>
          </div>
          <div className="lg:px-8">
            <p className="text-xl font-semibold">Quick Links</p>
            <div className="flex space-x-1 py-5">
              <p className="border border-baseColor w-3"></p>
              <p className="border border-baseColor w-10"></p>
            </div>

            <ul className="space-y-2">
              <li>
                <Link
                  href={"/"}
                  className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:border-b border-baseColor w-40 pb-2  hover:duration-300  text-gray-400"
                >
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/about"}
                  className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:border-b border-baseColor w-40 pb-2  hover:duration-300  text-gray-400"
                >
                  <span>About Us</span>
                </Link>
              </li>

              <li>
                <Link
                  href={"/blog"}
                  className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:border-b border-baseColor w-40 pb-2  hover:duration-300  text-gray-400"
                >
                  <span>Blog</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/contact"}
                  className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:border-b border-baseColor w-40 pb-2  hover:duration-300  text-gray-400"
                >
                  <span>Ccontact us</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/about"}
                  className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:border-b border-baseColor w-40 pb-2  hover:duration-300  text-gray-400"
                >
                  <span>Testimonials</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:border-b border-baseColor w-40 pb-2  hover:duration-300  text-gray-400"
                >
                  <span>Terms Of Service</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/about"}
                  className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:border-b border-baseColor w-40 pb-2  hover:duration-300  text-gray-400"
                >
                  <span>Privacy policy</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:px-8">
            <p className="text-xl font-semibold">Browse Category </p>
            <div className="flex space-x-1 py-5">
              <p className="border border-baseColor w-3"></p>
              <p className="border border-baseColor w-10"></p>
            </div>

            <ul className="space-y-2">
              <li>
                <Link
                  href={"/"}
                  className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:border-b border-baseColor w-40 pb-2  hover:duration-300  text-gray-400"
                >
                  <span>Accessories</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/about"}
                  className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:border-b border-baseColor w-40 pb-2  hover:duration-300  text-gray-400"
                >
                  <span>Home & Garden</span>
                </Link>
              </li>

              <li>
                <Link
                  href={"/blog"}
                  className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:border-b border-baseColor w-40 pb-2  hover:duration-300  text-gray-400"
                >
                  <span>Electronics</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/contact"}
                  className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:border-b border-baseColor w-40 pb-2  hover:duration-300  text-gray-400"
                >
                  <span>Health & Beauty</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/about"}
                  className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:border-b border-baseColor w-40 pb-2  hover:duration-300  text-gray-400"
                >
                  <span>Groceries</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:border-b border-baseColor w-40 pb-2  hover:duration-300  text-gray-400"
                >
                  <span>Baby Toys</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/about"}
                  className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:border-b border-baseColor w-40 pb-2  hover:duration-300  text-gray-400"
                >
                  <span>Music & Video</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:px-8">
            <p className="text-xl font-semibold">Support Center</p>
            <div className="flex space-x-1 py-5">
              <p className="border border-baseColor w-3"></p>
              <p className="border border-baseColor w-10"></p>
            </div>

            <ul className="space-y-2">
              <li>
                <Link
                  href={"/"}
                  className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:border-b border-baseColor w-40 pb-2  hover:duration-300  text-gray-400"
                >
                  <span>FAQ</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/about"}
                  className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:border-b border-baseColor w-40 pb-2  hover:duration-300  text-gray-400"
                >
                  <span>How To Buy</span>
                </Link>
              </li>

              <li>
                <Link
                  href={"/blog"}
                  className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:border-b border-baseColor w-40 pb-2  hover:duration-300  text-gray-400"
                >
                  <span>Support Center</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/contact"}
                  className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:border-b border-baseColor w-40 pb-2  hover:duration-300  text-gray-400"
                >
                  <span>Track Your Order</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/about"}
                  className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:border-b border-baseColor w-40 pb-2  hover:duration-300  text-gray-400"
                >
                  <span>Returns Policy</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:border-b border-baseColor w-40 pb-2  hover:duration-300  text-gray-400"
                >
                  <span>Our Affiliates</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/about"}
                  className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:border-b border-baseColor w-40 pb-2  hover:duration-300  text-gray-400"
                >
                  <span>Sitemap</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xl font-semibold">Newsletter</p>
            <div className="flex space-x-1 py-5">
              <p className="border border-baseColor w-3"></p>
              <p className="border border-baseColor w-10"></p>
            </div>
            <p className="text-gray-400  text-justify ">
              Subscribe Our Newsletter To Get Latest Update And News.
            </p>

            <div className="py-3 relative">
              <input
                className="py-2 ps-5 rounded-xl outline-none text-gray-400 w-full"
                placeholder="Email Address"
                type="mail"
              />
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="w-9 p-2 rounded-lg border bg-baseColor text-white absolute right-2 bottom-4 "
              />
            </div>

            <p className="py-2 font-semibold">Get Our Mobile App</p>
            <div className="gap-2 space-y-2">
              <div className="flex space-x-5 border rounded-lg text-white bg-baseColor ps-4 py-3">
                <FontAwesomeIcon icon={faGooglePlay} className="w-6 " />
                <div>
                  {/* <p className="text-sm">Get It On</p> */}
                  <p className="font-bold">Google Play</p>
                </div>
              </div>
              <div className="flex space-x-5 border rounded-lg text-white bg-baseColor ps-4 py-3">
                <FontAwesomeIcon icon={faAppStore} className="w-6 " />{" "}
                <div>
                  {/* <p className="text-sm">Get It On</p> */}
                  <p className="font-bold">App Store</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-10" />

        <div className="lg:flex items-center justify-between px-2 space-y-4 lg:space-y-0 text-center">
          <div className="flex items-center justify-center space-x-2  ">
            <span className="text-gray-400 ">We Accept : </span>
            <Image src={visa} alt={"visa"} width={50} height={50} />
            <Image src={mastercard} alt={"mastercard"} width={50} height={50} />
            <Image src={amex} alt={"amex"} width={50} height={50} />
            <Image src={paypal} alt={"paypal"} width={50} height={50} />
            <Image src={discover} alt={"discover"} width={50} height={50} />
          </div>
          <div>
            © Copyright {new Date().getFullYear()}{" "}
            <span className="text-baseColor">Goemart</span> All Rights Reserved.
          </div>
          <div className="flex items-center space-x-4 justify-center">
            <span className="text-gray-400 ">Follow Us :</span>
            <FontAwesomeIcon
              icon={faFacebook}
              className="w-8 text-white bg-baseColor rounded-full p-2 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="w-8 text-white bg-baseColor rounded-full p-2 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="w-8 text-white bg-baseColor rounded-full p-2 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
