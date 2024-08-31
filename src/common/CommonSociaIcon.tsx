import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export const FaceBookIcon = () => {
  return (
    <div>
      <Link href={"/"}>
        <FontAwesomeIcon icon={faFacebook} className="w-4 cursor-pointer" />
      </Link>
    </div>
  );
};

export const TwiteerIcon = () => {
  return (
    <div>
      <Link href={"/"}>
        <FontAwesomeIcon icon={faTwitter} className="w-4 cursor-pointer" />{" "}
      </Link>
    </div>
  );
};

export const InstragramIcon = () => {
  return (
    <div>
      <Link href={"/"}>
        <FontAwesomeIcon icon={faInstagram} className="w-4 cursor-pointer" />{" "}
      </Link>
    </div>
  );
};
export const CommonIcon = ({ icon }: any) => {
  return (
    <div>
      <Link href={"/"}>
        <FontAwesomeIcon icon={icon} className="w-4 cursor-pointer" />{" "}
      </Link>
    </div>
  );
};
