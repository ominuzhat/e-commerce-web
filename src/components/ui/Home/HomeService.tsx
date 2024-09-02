import {
  faHeadset,
  faRotateLeft,
  faTruckFast,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeService = () => {
  return (
    <div className="max-w-screen-xl mx-auto bg-footerColor rounded-xl my-5 ">
      <div className="lg:flex items-center justify-around py-10 space-y-8 lg:space-y-0 ">
        <div className="lg:flex items-center space-x-3 text-center lg:text-left">
          <FontAwesomeIcon
            icon={faTruckFast}
            className="w-8 h-8 rounded-full bg-baseColor text-white p-4"
          />
          <div className="space-y-1">
            <p className="text-2xl font-semibold">Free Delivery</p>
            <p className=" text-gray-600">Orders Over $120</p>
          </div>
        </div>
        <div className="lg:flex items-center space-x-3 text-center lg:text-left">
          <FontAwesomeIcon
            icon={faRotateLeft}
            className="w-8 h-8 rounded-full bg-baseColor text-white p-4"
          />
          <div className="space-y-1">
            <p className="text-2xl font-semibold">Get Refund</p>
            <p className=" text-gray-600">Within 30 Days Returns</p>
          </div>
        </div>
        <div className="lg:flex items-center space-x-3 text-center lg:text-left">
          <FontAwesomeIcon
            icon={faWallet}
            className="w-8 h-8 rounded-full bg-baseColor text-white p-4"
          />
          <div className="space-y-1">
            <p className="text-2xl font-semibold">Safe Payment</p>
            <p className=" text-gray-600">100% Secure Payment</p>
          </div>
        </div>
        <div className="lg:flex items-center space-x-3 text-center lg:text-left">
          <FontAwesomeIcon
            icon={faHeadset}
            className="w-8 h-8 rounded-full bg-baseColor text-white p-4"
          />
          <div className="space-y-1">
            <p className="text-2xl font-semibold">24/7 Support</p>
            <p className=" text-gray-600">Feel Free To Call Us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeService;
