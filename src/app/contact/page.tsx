import BreadCrumb from "@/common/BreadCrumb";
import { Button } from "@/components/ui/button";
import HomeCouponSection from "@/components/ui/Home/HomeCouponSection";
import MainLayout from "@/layout/MainLayout";
import { getWebsiteInfo } from "@/utils/actions/websiteInfo";
import {
  faClock,
  faEnvelopeCircleCheck,
  faHeadset,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";
import { useForm, SubmitHandler } from "react-hook-form";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Eco Shop",
  description: "Contact Us | Eco Shop",
};

const ContactPage = async () => {
  const { data } = await getWebsiteInfo();
  const { officeInfo } = data || {};

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
                <h1 className="text-gray-500">{officeInfo?.officeAddress}</h1>
              </div>
              <div className="shadow-lg text-center px-5 py-8 rounded-lg space-y-4 cursor-pointer hover:-translate-y-2 duration-300 hover:duration-300 h-[250px] md:h-[300px]">
                <FontAwesomeIcon
                  icon={faEnvelopeCircleCheck}
                  className="w-12 h-12 rounded-full border bg-baseColor text-white p-5 mx-auto"
                />
                <p className="text-xl font-semibold">Email Us</p>
                <div className="text-gray-500">
                  <h1>{officeInfo?.officialEmail}</h1>
                  <h1>{officeInfo?.supportEmail}</h1>
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
                  <h1>{officeInfo?.supportPhone}</h1>
                  <h1>{officeInfo?.hotline}</h1>
                </div>
              </div>
              <div className="shadow-lg text-center px-5 py-8 rounded-lg space-y-4 cursor-pointer hover:-translate-y-2 duration-300 hover:duration-300 h-[250px] md:h-[300px]">
                <FontAwesomeIcon
                  icon={faClock}
                  className="w-12 h-12 rounded-full border bg-baseColor text-white p-5 mx-auto"
                />
                <p className="text-xl font-semibold">Open Time</p>
                <div className="text-gray-500">
                  <h1>{officeInfo?.workingDayAndTime}</h1>
                  <h1>{officeInfo?.closedDay}</h1>
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
            <ContactForm />
          </div>
        </div>
      </div>
      <HomeCouponSection />
    </MainLayout>
  );
};

export default ContactPage;
