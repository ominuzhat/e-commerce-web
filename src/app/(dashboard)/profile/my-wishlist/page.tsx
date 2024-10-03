import p2 from "@/../../public/p2.png";
import CommonCard from "@/components/CommonCard";
import { getCurrentUser } from "@/utils/actions/auth.user";
import { getWishList } from "@/utils/actions/get/get.action";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My WishList | Eco Shop",
  description: "My WishList | Eco Shop",
};

const MyWishList = async () => {
  const data = await getCurrentUser();

  let wishlist = [];
  if (data?.data?.email) {
    const { data: wishlistItem } = await getWishList();
    wishlist = wishlistItem;
  }

  return (
    <>
      <div className="shadow rounded-lg px-5 py-8 space-y-5">
        <p className="text-xl font-semibold">My Wishlist</p>
        <hr />
        <CommonCard data={wishlist?.[0]?.products} wishlist={wishlist} />
      </div>
    </>
  );
};

export default MyWishList;
