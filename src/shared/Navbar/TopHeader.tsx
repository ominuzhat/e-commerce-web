import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faEnvelope,
  faEnvelopeOpen,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";

const TopHeader = () => {
  return (
    <div className="bg-baseColor">
      <div className="max-w-screen-xl mx-auto lg:flex lg:items-center justify-between text-white space-y-2 lg:space-y-0 py-3 font-medium px-2">
        <div className="flex space-x-4 text-sm justify-center">
          <div className="flex space-x-2 pe-3 border-e border-slate-300">
            <FontAwesomeIcon icon={faEnvelopeOpen} className="w-4" />
            <span>info@example.com</span>
          </div>
          <div className="flex space-x-2 pe-3 border-e border-slate-300">
            <FontAwesomeIcon icon={faHeadset} className="w-4" />
            <span>+2 123 654 7898</span>
          </div>
          <div className="flex space-x-2 ">
            <FontAwesomeIcon icon={faComment} className="w-4" />
            <span>Need Help?</span>
          </div>
        </div>
        <div className="flex space-x-4 justify-center">
          <span>Follow Us :</span>
          <FontAwesomeIcon icon={faFacebook} className="w-4 cursor-pointer" />
          <FontAwesomeIcon icon={faTwitter} className="w-4 cursor-pointer" />
          <FontAwesomeIcon icon={faInstagram} className="w-4 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
