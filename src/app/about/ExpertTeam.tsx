import React from "react";
import team1 from "../../../public/team1.jpg";
import Image from "next/image";
import {
  FaceBookIcon,
  InstragramIcon,
  TwiteerIcon,
} from "@/common/CommonSociaIcon";

const TeamData = [
  {
    id: 1,
    image: team1,
    name: "Mona Lisa",
    designation: "Senior Manager",
  },
  {
    id: 2,
    image: team1,
    name: "Mona Tona",
    designation: "Junior Manager",
  },
  {
    id: 1,
    image: team1,
    name: "Mona My",
    designation: "Senior Manager",
  },
  {
    id: 1,
    image: team1,
    name: "Mona Boss",
    designation: "Senior Manager",
  },
];

const ExpertTeam = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-16 px-2 ">
      <div className="text-center space-y-1 mb-16">
        <p className="uppercase tracking-widest text-baseColor  font-bold">
          OUR Team
        </p>
        <p className="  text-4xl font-semibold">
          Meet Our Expert <span className="text-baseColor">Team</span>{" "}
        </p>
      </div>

      <div className="lg:grid lg:grid-cols-4 gap-5" data-aos="fade-up">
        {TeamData?.map((data) => (
          <div
            key={data?.id}
            className="border rounded-lg shadow-xl hover:shadow-2xl cursor-pointer p-4 mx-auto text-center hover:-translate-y-2 duration-300 hover:duration-300"
          >
            <Image
              src={data?.image}
              alt={"team1"}
              width={300}
              height={50}
              className="rounded w-full"
            />
            <div className="mt-3 space-y-3">
              <p className="text-xl hover:text-baseColor duration-300 hover:duration-300 cursor-pointer font-semibold">
                {data?.name}
              </p>
              <p className="text-baseColor font-semibold">
                {data?.designation}
              </p>
              <hr />
              <div className="flex items-center space-x-4 justify-center">
                <FaceBookIcon />
                <TwiteerIcon />
                <InstragramIcon />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertTeam;
