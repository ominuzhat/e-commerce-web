const ProductDescription = ({ description }: any) => {
  return (
    <div className="my-10">
      <div className="space-y-2">
        <p
          className="text-gray-500"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </div>

      {/* <div className="my-5 lg:flex items-center lg:space-x-40 space-y-5 lg:space-y-0">
        <div className="space-y-2">
          <p className="text-xl font-medium">Features</p>
          <ul className="space-y-2 list-disc pl-5 text-gray-500">
            <li>Capture 4K30 Video and 30MP Photos</li>
            <li>Game Style Controller with Touchscreen</li>
            <li>Capture 4K30 Video and 30MP Photos</li>
            <li>View Live Camera Feed</li>
            <li>Full Control of HERO6 Black</li>
            <li>Use App for Dedicated Camera Operation</li>
          </ul>
        </div>
        <div className="space-y-2">
          <p className="text-xl font-medium">Specifications</p>
          <ul className="space-y-2 list-disc pl-5 text-gray-500">
            <li>
              <div className="flex items-center space-x-2">
                <p className="font-medium">Materials :</p>
                <p>Capture 4K30 Video and 30MP Photos</p>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <p className="font-medium">Model Year :</p>
                <p>2024</p>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <p className="font-medium">Available Sizes :</p>
                <p> 8.5, 9.0, 9.5, 10.0</p>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <p className="font-medium">Manufacturer :</p>
                <p> Reebok Inc.</p>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <p className="font-medium">Available Colors:</p>
                <p> White/Red/Blue,Black/Orange/Green</p>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <p className="font-medium">Made In:</p>
                <p>USA</p>
              </div>
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default ProductDescription;
