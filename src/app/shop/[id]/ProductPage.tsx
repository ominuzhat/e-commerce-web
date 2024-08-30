import ProductDescription from "./ProductDetails";
import ProductImageInformation from "./ProductImageInformation";
import ProductInformation from "./ProductInformation";

const ProductPage = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        <div className="border ">
          <ProductImageInformation />
        </div>
        <div className="col-span-2">
          <ProductInformation />
        </div>
      </div>
      <div className="my-20">
        <ProductDescription />
      </div>
    </div>
  );
};

export default ProductPage;
