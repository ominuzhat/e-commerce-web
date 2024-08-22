import HeroSection from "@/components/ui/Home/HeroSection";
import HomeService from "@/components/ui/Home/HomeService";
import MainLayout from "@/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <HomeService />
    </MainLayout>
  );
}
