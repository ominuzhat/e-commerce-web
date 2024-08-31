import Image from "next/image";
import React from "react";
import comment from "@/../../public/com-1.jpg";
import { faClock, faStar } from "@fortawesome/free-solid-svg-icons";
import { CommonIcon } from "@/common/CommonSociaIcon";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    name: "Sinkler Denola",
    date: "31 January, 2024",
    rating: 5,
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap electronic typesetting, remaining essentially unchanged. It was popularised in the with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: "Rakib Khan",
    date: "31 January, 2024",
    rating: 5,
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap electronic typesetting, remaining essentially unchanged. It was popularised in the with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

const ProductReview = () => {
  return (
    <div className="space-y-5 my-10">
      {reviews.map((review, index) => (
        <div key={index} className="flex space-x-5 border px-5 py-5">
          <div className="flex space-x-5">
            <div>
              <Image
                src={comment} // You need to replace `comment` with your image source
                alt={"comment"}
                className="rounded-full w-[350px]"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between ">
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <div className="flex space-x-2 text-baseColor">
                    <CommonIcon icon={faClock} />
                    <p>{review.date}</p>
                  </div>
                </div>

                <div className="flex space-x-1 text-baseColor">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <CommonIcon icon={faStar} key={i} />
                  ))}
                </div>
              </div>
              <p>{review.comment}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="space-y-2">
        <Textarea
          placeholder=" Review This Item"
          className="focus:outline-none hover:border-baseColor"
        />

        <Button>Submit</Button>
      </div>
    </div>
  );
};

export default ProductReview;
