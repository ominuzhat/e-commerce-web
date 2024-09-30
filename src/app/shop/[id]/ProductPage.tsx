import { useGetWishlist } from "@/hooks/wishlist.hook";
import ProductDescription from "./ProductDetails";
import ProductImageInformation from "./ProductImageInformation";
import ProductInformation from "./ProductInformation";
import { getSingleWishList } from "@/utils/actions/get/get.action";

const ProductPage = async ({ productDetails }: any) => {
  const { images, content, description, reviews } = productDetails || {};

  // const { data: WishItem } = await useGetWishlist();

  // console.log("wish", WishItem);

  return (
    <div>
      <div className="lg:grid lg:grid-cols-3 gap-5">
        <div>
          <ProductImageInformation imageData={images} />
        </div>
        <div className="lg:col-span-2">
          <ProductInformation
            productDetails={productDetails}
            singleWishItem={1}
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
