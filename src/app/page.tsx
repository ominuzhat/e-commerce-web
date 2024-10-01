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
import { getCurrentUser } from "@/utils/actions/auth.user";
import { getWishList } from "@/utils/actions/get/get.action";
import { getProductList } from "@/utils/actions/productList";
import { getWebsiteInfo } from "@/utils/actions/websiteInfo";

export default async function Home() {
  const data = await getCurrentUser();

  let wishlist = [];
  if (data?.data?.email) {
    const { data: wishlistItem } = await getWishList();
    wishlist = wishlistItem;
  }

  const { data: webInfo } = await getWebsiteInfo();
  const { data: productList } = await getProductList();

  const {
    officeInfo,
    trendingItems,
    hotItems,
    newArrivals,
    category,
    bestSellers,
    topRatedItems,
    onSaleItems,
  } = webInfo || {};

  return (
    <MainLayout>
      <HeroSection />
      <HomeService />
      <HomeCategory category={category} />
      <HomeCartSection />
      <HomeTrendingSection trendingItems={trendingItems} wishlist={wishlist} />
      <HomeHotSection hotItems={hotItems} wishlist={wishlist} />
      <HomeBannerSection />
      <HomeCategoriesSection
        category={category}
        productList={productList}
        wishlist={wishlist}
      />
      <HomeNewArrivalsSection newArrivals={newArrivals} wishlist={wishlist} />
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
