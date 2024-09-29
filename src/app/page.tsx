import HeroSection from "@/components/ui/Home/HeroSection";
import HomeBannerSection from "@/components/ui/Home/HomeBannerSection";
import HomeBrandsSection from "@/components/ui/Home/HomeBrandsSection";
import HomeCartSection from "@/components/ui/Home/HomeCartSection";
import HomeCategoriesSection from "@/components/ui/Home/HomeCategoriesSection";
import HomeCategory from "@/components/ui/Home/HomeCategory";
import HomeCouponSection from "@/components/ui/Home/HomeCouponSection";
import HomeHotSection from "@/components/ui/Home/HomeHotSection";
import HomeMegaCollection from "@/components/ui/Home/HomeMegaCollection";
import HomeMidSection from "@/components/ui/Home/HomeMidSection";
import HomeNewArrivalsSection from "@/components/ui/Home/HomeNewArrivalesSection";
import HomeSalesSection from "@/components/ui/Home/HomeSalesSection";
import HomeService from "@/components/ui/Home/HomeService";
import HomeTrendingSection from "@/components/ui/Home/HomeTrendingSection";
import MainLayout from "@/layout/MainLayout";
import { getProductList } from "@/utils/actions/productList";
import { getWebsiteInfo } from "@/utils/actions/websiteInfo";

export default async function Home() {
  const { data } = await getWebsiteInfo();
  const { data: productList, pagination } = await getProductList();
  const {
    officeInfo,
    trendingItems,
    hotItems,
    newArrivals,
    category,
    bestSellers,
    topRatedItems,
    onSaleItems,
  } = data || {};

  return (
    <MainLayout>
      <HeroSection />
      <HomeService />
      <HomeCategory category={category} />
      <HomeCartSection />
      <HomeTrendingSection trendingItems={trendingItems} />
      <HomeHotSection hotItems={hotItems} />
      <HomeBannerSection />
      <HomeCategoriesSection category={category} productList={productList} />
      <HomeNewArrivalsSection newArrivals={newArrivals} />
      <HomeMidSection />
      <HomeMegaCollection />
      <HomeBrandsSection />
      <HomeSalesSection
        bestSellers={bestSellers}
        topRatedItems={topRatedItems}
        onSaleItems={onSaleItems}
      />
      <HomeCouponSection />
    </MainLayout>
  );
}
