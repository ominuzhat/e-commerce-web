"use client";
import { useAddWishlist } from "@/hooks/post.hook";
import { useUser } from "@/providers/user.provider";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const WishListButton = ({ wishlist, productId }: any) => {
  const router = useRouter();
  const { user }: any = useUser();

  const { mutate: handleAddToWishlist } = useAddWishlist();

  const handleProductAddToWishlist = () => {
    if (!user) {
      router.push("/login");
    } else {
      handleAddToWishlist({ product: productId });
    }
  };

  return (
    <div>
      {wishlist?.products.find((p: any) => p.id === productId) ? (
        <div
          className="bg-secondaryColor text-white rounded-md cursor-pointer hover:bg-baseColor border  duration-300 hover:bg-opacity-80"
          onClick={() => handleProductAddToWishlist()}
        >
          <FontAwesomeIcon
            icon={faHeart}
            className="p-2 w-4 h-4 cursor-pointer"
          />
        </div>
      ) : (
        <div
          className="border rounded-lg hover:bg-baseColor hover:text-white duration-300"
          onClick={() => handleProductAddToWishlist()}
        >
          <FontAwesomeIcon
            icon={faHeart}
            className="p-2 w-4 h-4 cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};

export default WishListButton;
