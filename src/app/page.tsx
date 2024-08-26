import HeroSection from "@/components/ui/Home/HeroSection";
import HomeBannerSection from "@/components/ui/Home/HomeBannerSection";
import HomeBrandsSection from "@/components/ui/Home/HomeBrandsSection";
import HomeCartSection from "@/components/ui/Home/HomeCartSection";
import HomeCategory from "@/components/ui/Home/HomeCategory";
import HomeCouponSection from "@/components/ui/Home/HomeCouponSection";
import HomeHotSection from "@/components/ui/Home/HomeHotSection";
import HomeMegaCollection from "@/components/ui/Home/HomeMegaCollection";
import HomeMidSection from "@/components/ui/Home/HomeMidSection";
import HomeNewArrivalsSection from "@/components/ui/Home/HomeNewArrivalesSection";
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
      <HomeHotSection />
      <HomeBannerSection />
      <HomeNewArrivalsSection />
      <HomeMidSection />
      <HomeMegaCollection />
      <HomeBrandsSection />
      <HomeCouponSection />
    </MainLayout>
  );
}
