import BreadCrumb from "@/common/BreadCrumb";
import React from "react";
import ProfileNavber from "./ProfileNavber";

const ProfilePage = () => {
  return (
    <div>
      <BreadCrumb />
      <div className="max-w-screen-xl mx-auto grid grid-cols-3 gap-5 border my-10">
        <ProfileNavber />
        <div>2</div>
      </div>
    </div>
  );
};

export default ProfilePage;
