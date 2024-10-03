"use client";
import { useAddWishlist } from "@/hooks/post.hook";
import { useUser } from "@/providers/user.provider";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const WishListButton = ({ wishlist, productId }: any) => {
  const router = useRouter();
  const { user, setWishlistLoading }: any = useUser();

  const { mutate: handleAddToWishlist } = useAddWishlist();

  const handleProductAddToWishlist = () => {
    if (!user) {
      router.push("/login");
    } else {
      setWishlistLoading(true);
      handleAddToWishlist(
        { product: productId },
        {
          onSuccess: () => {
            setWishlistLoading(false);
          },
          onError: () => {
            setWishlistLoading(false);
          },
        }
      );
    }
  };

  return (
    <div>
      {wishlist?.products.find((p: any) => p.id === productId) ? (
        <div onClick={() => handleProductAddToWishlist()}>
          <FontAwesomeIcon
            icon={faHeart}
            className="p-2 w-4 h-4  text-white rounded-full cursor-pointer bg-baseColor duration-300 hover:bg-opacity-80"
          />
        </div>
      ) : (
        <div onClick={() => handleProductAddToWishlist()}>
          <FontAwesomeIcon
            icon={faHeart}
            className="bg-secondaryColor text-white rounded-full p-2 w-4 h-4 cursor-pointer hover:bg-baseColor  "
          />
        </div>
      )}
    </div>
  );
};

export default WishListButton;
