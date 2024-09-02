import { Button } from "@/components/ui/button";
import {
  faBarsStaggered,
  faCar,
  faLayerGroup,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";

const items = [
  {
    title: "50",
    Description: "Pending Orders",
    bgColor: "#f8f2fe",
    textColor: "#a855f7",
    icon: faBarsStaggered, // Direct reference to the imported icon
  },
  {
    title: "250",
    Description: "Completed Orders",
    bgColor: "#f8f2fe",
    textColor: "#11b76b",
    icon: faLayerGroup, // Direct reference to the imported icon
  },
  {
    title: "$15.80k",
    Description: "My Balance",
    bgColor: "#fef2f2",
    textColor: "#f05454",
    icon: faWallet, // Direct reference to the imported icon
  },
];

export const metadata: Metadata = {
  title: "Profile | Geo Mart",
  description: "Profile | Geo Mart",
};

const ProfilePage = () => {
  return (
    <div className="space-y-8">
      <div className=" shadow rounded-lg px-5 py-8 space-y-5">
        <p className="text-xl font-semibold">Summary</p>
        <hr />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {items?.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-5 py-8 rounded-lg"
              style={{ backgroundColor: item?.bgColor }}
            >
              <div className="space-y-1" style={{ color: item?.textColor }}>
                <p className="text-3xl font-semibold">{item?.title}</p>
                <p>{item?.Description}</p>
              </div>

              <FontAwesomeIcon
                icon={item?.icon}
                style={{
                  backgroundColor: item?.bgColor,
                  color: item?.textColor,
                  padding: "1.25rem",
                  borderRadius: "9999px",
                  display: "inline-block",
                  width: "30px",
                  height: "auto",
                  border: `1px solid ${item?.bgColor}`,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className=" shadow rounded-lg px-5 py-8 space-y-5">
        <div className="flex items-center  justify-between">
          <p className="text-xl font-semibold">Recent Orders</p>
          <Button>View All Orders</Button>
        </div>

        <hr />
      </div>
    </div>
  );
};

export default ProfilePage;
