import BreadCrumb from "@/common/BreadCrumb";
import HomeService from "@/components/ui/Home/HomeService";
import MainLayout from "@/layout/MainLayout";
import React from "react";
import ExpertTeam from "./ExpertTeam";
import AboutSection from "./AboutSection";

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
