import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faEnvelope,
  faEnvelopeOpen,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

import {
  FaceBookIcon,
  InstragramIcon,
  TwiteerIcon,
} from "@/common/CommonSociaIcon";

const TopHeader = () => {
  return (
    <div className="bg-baseColor">
      <div className="max-w-screen-xl mx-auto lg:flex lg:items-center justify-between text-white space-y-2 lg:space-y-0 py-2 font-medium px-2">
        <div className="flex space-x-4 text-sm justify-center">
          <div className="flex items-center space-x-2 pe-3 border-e border-slate-300">
            <FontAwesomeIcon icon={faEnvelopeOpen} className="w-4" />
            <span>info@example.com</span>
          </div>
          <div className="flex items-center space-x-2 pe-3 border-e border-slate-300">
            <FontAwesomeIcon icon={faHeadset} className="w-4" />
            <span>+2 123 654 7898</span>
          </div>
          <div className="flex items-center space-x-2 ">
            <FontAwesomeIcon icon={faComment} className="w-4" />
            <span>Need Help?</span>
          </div>
        </div>
        <div className="hidden lg:flex  items-center space-x-4 justify-center">
          <span>Follow Us :</span>
          <FaceBookIcon />
          <TwiteerIcon />
          <InstragramIcon />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
