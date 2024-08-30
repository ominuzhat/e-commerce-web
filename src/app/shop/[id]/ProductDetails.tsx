import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductDescription from "./ProductDescription";
import ProductAdditionalInfo from "./ProductAdditionalInfo";
import ProductReview from "./ProductReview";

const ProductDetails = () => {
  return (
    <div>
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="grid grid-cols-3 border">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="additional-info">Additional Info</TabsTrigger>
          <TabsTrigger value="review">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="description">
          <ProductDescription />
        </TabsContent>
        <TabsContent value="additional-info">
          <ProductAdditionalInfo />
        </TabsContent>
        <TabsContent value="review">
          <ProductReview />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductDetails;
