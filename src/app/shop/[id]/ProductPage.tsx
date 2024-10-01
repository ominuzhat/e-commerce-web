import ProductDescription from "./ProductDetails";
import ProductImageInformation from "./ProductImageInformation";
import ProductInformation from "./ProductInformation";
import { getWishList } from "@/utils/actions/get/get.action";
import { getCurrentUser } from "@/utils/actions/auth.user";

const ProductPage = async ({ productDetails }: any) => {
  const { images, content, description, reviews } = productDetails || {};
  const data = await getCurrentUser();

  let wishlist = [];
  if (data?.data?.email) {
    const { data: wishlistItem } = await getWishList();
    wishlist = wishlistItem;
  }

  return (
    <div>
      <div className="lg:grid lg:grid-cols-3 gap-5">
        <div>
          <ProductImageInformation imageData={images} />
        </div>
        <div className="lg:col-span-2">
          <ProductInformation
            productDetails={productDetails}
            wishlist={wishlist}
          />
        </div>
      </div>
      <div className="my-20">
        <ProductDescription
          reviews={reviews}
          description={description}
          content={content}
        />
      </div>
    </div>
  );
};

export default ProductPage;
