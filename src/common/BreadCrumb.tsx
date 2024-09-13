"use client";
import React, { useEffect, useState } from "react";
import breadData from "../lib/BreadCrumb.json";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faHomeAlt } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const BreadCrumb = () => {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="breadcrumb">
      <div className="max-w-screen-xl mx-auto px-2 py-10 sm:py-14 ">
        {breadData?.map((data) => (
          <div key={data?.id} className="text-left ">
            {data?.slug === pathname && (
              <div className="space-y-3">
                <h1 className=" font-bold text-xl  md:text-xl lg:text-3xl">
                  {data?.name}
                </h1>
                <div className="hover:text-baseColor duration-300 hover:duration-300 flex items-center space-x-3">
                  <Link href={"/"} className="flex items-center space-x-2">
                    {isClient && <FontAwesomeIcon icon={faHomeAlt} />}
                    <p>Home</p>
                  </Link>
                  {isClient && <FontAwesomeIcon icon={faAnglesRight} />}
                  <h1 className=" text-baseColor font-medium">{data?.name}</h1>
                </div>
                {/* <h1 className="w-full sm:w-8/12 md:w-6/12">
                  {data?.pageTitle}
                </h1> */}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BreadCrumb;
