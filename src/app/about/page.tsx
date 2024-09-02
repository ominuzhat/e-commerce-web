import BreadCrumb from "@/common/BreadCrumb";
import HomeService from "@/components/ui/Home/HomeService";
import MainLayout from "@/layout/MainLayout";

import ExpertTeam from "./ExpertTeam";
import AboutSection from "./AboutSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Geo Mart",
  description: "About | Geo Mart",
};

const AboutPage = () => {
  return (
    <MainLayout>
      <BreadCrumb />
      <AboutSection />
      <ExpertTeam />
      <HomeService />
    </MainLayout>
  );
};

export default AboutPage;
