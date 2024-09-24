import CommonTitle from "@/common/CommonTitle";

import dress from "../../../../public/dress.svg";
import Image from "next/image";

const CategoryItems = [
  {
    id: 1,
    name: "Sunglasses",
    image: dress,
    items: "15 Items",
  },
  {
    id: 2,
    name: "Watches",
    image: dress,
    items: "20 Items",
  },
  {
    id: 3,
    name: "Handbags",
    image: dress,
    items: "25 Items",
  },
  {
    id: 4,
    name: "Necklaces",
    image: dress,
    items: "18 Items",
  },
  {
    id: 5,
    name: "Bracelets",
    image: dress,
    items: "30 Items",
  },
  {
    id: 6,
    name: "Earrings",
    image: dress,
    items: "22 Items",
  },
  {
    id: 7,
    name: "Hats",
    image: dress,
    items: "12 Items",
  },
  {
    id: 8,
    name: "Belts",
    image: dress,
    items: "17 Items",
  },
  {
    id: 9,
    name: "Scarves",
    image: dress,
    items: "10 Items",
  },
  {
    id: 10,
    name: "Rings",
    image: dress,
    items: "16 Items",
  },
  {
    id: 11,
    name: "Gloves",
    image: dress,
    items: "14 Items",
  },
  {
    id: 12,
    name: "Shoes",
    image: dress,
    items: "28 Items",
  },
];

const HomeCategory = ({ category }: any) => {
  return (
    <div className="max-w-screen-xl mx-auto py-24">
      <CommonTitle
        title={"Our Category"}
        subTitle={"Category"}
        description={"Browse Product By"}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 py-10 ">
        {category?.map((item: any) => (
          <div
            key={item?.id}
            className=" text-center mx-auto space-y-2 cursor-pointer"
          >
            <div className="material-bubble ">
              {item?.icon ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: item?.icon,
                  }}
                />
              ) : (
                <Image
                  src={dress}
                  alt={item?.name}
                  width={200}
                  height={50}
                  className="w-32 h-32 p-8 "
                />
              )}
            </div>

            <div className="">
              <p className="text-xl font-medium">{item?.name}</p>
              <p className="text-gray-500 font-medium">
                {item?.subCategoryCount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCategory;
