import ProductDescription from "./ProductDetails";
import ProductImageInformation from "./ProductImageInformation";
import ProductInformation from "./ProductInformation";

const ProductPage = ({ productDetails }: any) => {
  const { images, content, description, reviews } = productDetails || {};


  return (
    <div>
      <div className="lg:grid lg:grid-cols-3 gap-5">
        <div>
          <ProductImageInformation imageData={images} />
        </div>
        <div className="lg:col-span-2">
          <ProductInformation productDetails={productDetails} />
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
