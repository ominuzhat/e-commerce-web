import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

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

interface CommonIconProps {
  icon: any;
  className?: string; // Rename the prop to className
}

export const CommonIcon: React.FC<CommonIconProps> = ({ icon, className }) => {
  return (
    <div>
      <Link href={"/"}>
        <FontAwesomeIcon
          icon={icon}
          className={` ${className} ? ${className} :  'w-4 cursor-pointer'`}
          // className="w-4 cursor-pointer"
        />{" "}
      </Link>
    </div>
  );
};
