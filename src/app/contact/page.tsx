import BreadCrumb from "@/common/BreadCrumb";
import { Button } from "@/components/ui/button";
import HomeCouponSection from "@/components/ui/Home/HomeCouponSection";
import MainLayout from "@/layout/MainLayout";
import {
  faClock,
  faEnvelopeCircleCheck,
  faHeadset,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ContactPage = () => {
  return (
    <MainLayout>
      <BreadCrumb />
      <div className="max-w-screen-xl mx-auto py-16 px-2">
        <div className="lg:grid lg:grid-cols-2 gap-10 ">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="space-y-5 w-full md:w-1/2 lg:w-1/2">
              <div className="shadow-lg text-center px-5 py-8 rounded-lg space-y-4 cursor-pointer hover:-translate-y-2 duration-300 hover:duration-300 h-[250px] md:h-[300px]">
                <FontAwesomeIcon
                  icon={faMapLocationDot}
                  className="w-12 h-12 rounded-full border bg-baseColor text-white p-5 mx-auto"
                />
                <p className="text-xl font-semibold">Office Address</p>
                <h1 className="text-gray-500">
                  25/B Milford Elm Drive Road, New York, USA
                </h1>
              </div>
              <div className="shadow-lg text-center px-5 py-8 rounded-lg space-y-4 cursor-pointer hover:-translate-y-2 duration-300 hover:duration-300 h-[250px] md:h-[300px]">
                <FontAwesomeIcon
                  icon={faEnvelopeCircleCheck}
                  className="w-12 h-12 rounded-full border bg-baseColor text-white p-5 mx-auto"
                />
                <p className="text-xl font-semibold">Email Us</p>
                <div className="text-gray-500">
                  <h1>info@example.com</h1>
                  <h1>support@example.com</h1>
                </div>
              </div>
            </div>
            <div className="space-y-5 w-full md:w-1/2 lg:w-1/2">
              <div className="shadow-lg text-center px-5 py-10 rounded-lg space-y-4 cursor-pointer hover:-translate-y-2 duration-300 hover:duration-300 h-[250px] md:h-[300px]">
                <FontAwesomeIcon
                  icon={faHeadset}
                  className="w-12 h-12 rounded-full border bg-baseColor text-white p-5 mx-auto"
                />
                <p className="text-xl font-semibold">Call Us</p>
                <div className="text-gray-500">
                  <h1>+2 123 4565 788</h1>
                  <h1>+2 123 4565 789</h1>
                </div>
              </div>
              <div className="shadow-lg text-center px-5 py-8 rounded-lg space-y-4 cursor-pointer hover:-translate-y-2 duration-300 hover:duration-300 h-[250px] md:h-[300px]">
                <FontAwesomeIcon
                  icon={faClock}
                  className="w-12 h-12 rounded-full border bg-baseColor text-white p-5 mx-auto"
                />
                <p className="text-xl font-semibold">Open Time</p>
                <div className="text-gray-500">
                  <h1>Mon - Sat (10AM - 05PM)</h1>
                  <h1>
                    Sunday - <span className="text-red-600">Closed</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className=" rounded-lg shadow-md px-6 py-10 space-y-5">
            <p className="text-2xl font-semibold">Get In Touch</p>
            <p className="text-gray-500">
              It is a long established fact that a reader will be distracted by
              the readable content of a page words which even slightly when
              looking at its layout.
            </p>
            <form className="pt-5 space-y-5">
              <div className="flex gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-4 py-4 rounded-xl border focus:outline-none w-full hover:border-baseColor duration-300 hover:duration-300"
                  name="name"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-4 rounded-xl border focus:outline-none w-full hover:border-baseColor duration-300 hover:duration-300"
                  name="email"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Your Subject"
                className="px-4 py-4 rounded-xl border focus:outline-none w-full hover:border-baseColor duration-300 hover:duration-300"
                name="subject"
                required
              />
              <textarea
                placeholder="Write Your Message"
                className="px-4 py-4 rounded-xl border focus:outline-none w-full hover:border-baseColor duration-300 hover:duration-300"
                rows={4}
                name="message"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-baseColor text-white rounded-xl hover:bg-opacity-90 duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <HomeCouponSection />
    </MainLayout>
  );
};

export default ContactPage;
