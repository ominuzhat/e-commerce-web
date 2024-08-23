import HeroSection from "@/components/ui/Home/HeroSection";
import HomeCartSection from "@/components/ui/Home/HomeCartSection";
import HomeCategory from "@/components/ui/Home/HomeCategory";
import HomeService from "@/components/ui/Home/HomeService";
import HomeTrendingSection from "@/components/ui/Home/HomeTrendingSection";
import MainLayout from "@/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <HomeService />
      <HomeCategory />
      <HomeCartSection />
      <HomeTrendingSection />
    </MainLayout>
  );
}
