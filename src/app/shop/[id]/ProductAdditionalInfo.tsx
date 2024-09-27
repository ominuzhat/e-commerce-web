const ProductAdditionalInfo = ({ content }: { content: string }) => {
  return (
    <div className="my-10">
      <div className="space-y-2">
        <p
          className="text-gray-500"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </div>

      {/* <div className="my-5 ">
        <div className="space-y-3">
          <p className="text-xl font-medium">Shipping Options:</p>
          <ul className="space-y-2 list-disc pl-5 text-gray-500">
            <li>
              <div className="flex items-center space-x-2">
                <p className="font-medium">Standard :</p>
                <p> 6-7 Days, Shipping Cost - Free</p>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <p className="font-medium">Express :</p>
                <p>1-2 Days, Shipping Cost - $20</p>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <p className="font-medium">Courier:</p>
                <p> 2-3 Days, Shipping Cost - $30</p>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <p className="font-medium">Fastgo :</p>
                <p> 1-3 Days, Shipping Cost - $15</p>
              </div>
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default ProductAdditionalInfo;
