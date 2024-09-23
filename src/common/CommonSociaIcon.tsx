import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FaceBookIcon = ({ link }: any) => {
  return (
    <div>
      <a href={link} target="_blank">
        <FontAwesomeIcon icon={faFacebook} className="w-4 cursor-pointer" />
      </a>
    </div>
  );
};

export const TwiteerIcon = ({ link }: any) => {
  return (
    <div>
      <a href={link} target="_blank">
        <FontAwesomeIcon icon={faTwitter} className="w-4 cursor-pointer" />{" "}
      </a>
    </div>
  );
};

export const InstragramIcon = ({ link }: any) => {
  return (
    <div>
      <a href={link} target="_blank">
        <FontAwesomeIcon icon={faInstagram} className="w-4 cursor-pointer" />{" "}
      </a>
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
      <FontAwesomeIcon
        icon={icon}
        className={` ${className} ? ${className} :  'w-4 cursor-pointer'`}
        // className="w-4 cursor-pointer"
      />{" "}
    </div>
  );
};
