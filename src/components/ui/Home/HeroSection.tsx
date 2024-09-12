"use client";
import React, { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import hero1 from "../../../../public/hero-1.png";
import hero2 from "../../../../public/hero-2.png";
import hero3 from "../../../../public/hero-3.png";
import hero4 from "../../../../public/hero-4.png";
import Image from "next/image";
import { Button } from "../button";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-5 px-2">
      <div className="lg:grid lg:grid-cols-3 gap-2">
        <div className="col-span-2 bg-footerColor rounded-2xl overflow-hidden relative">
          <Carousel
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
          >
            <CarouselContent>
              <CarouselItem className="lg:flex items-center justify-center px-16 py-20">
                <div className="space-y-8">
                  <h1
                    className="text-baseColor text-xl font-semibold tracking-widest"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    UP TO 50% OFF
                  </h1>
                  <h1
                    className="text-black text-5xl font-bold"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                  >
                    For Your First{" "}
                    <span className="text-baseColor">Eco Shop</span> Shopping
                  </h1>
                  <p
                    className="font-medium text-slate-600 w-96"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    There are many variations of passages orem psum available
                    but the majority have suffered alteration in some form by
                    injected humour.
                  </p>
                  <Button data-aos="fade-down" data-aos-duration="3000">
                    SHOP NOW
                  </Button>
                </div>
                <div data-aos="fade-left" data-aos-duration="2000">
                  <Image src={hero1} alt={"hero1"} height={50} width={450} />
                </div>
              </CarouselItem>
              <CarouselItem className="lg:flex items-center justify-center px-16 py-20">
                <div className="space-y-8">
                  <h1
                    className="text-baseColor text-xl font-semibold tracking-widest"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    UP TO 50% OFF
                  </h1>
                  <h1
                    className="text-black text-5xl font-bold"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                  >
                    For Your First{" "}
                    <span className="text-baseColor">Eco Shop</span> Shopping
                  </h1>
                  <p
                    className="font-medium text-slate-600 w-96"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    There are many variations of passages orem psum available
                    but the majority have suffered alteration in some form by
                    injected humour.
                  </p>
                  <Button data-aos="fade-down" data-aos-duration="3000">
                    SHOP NOW
                  </Button>
                </div>
                <div data-aos="fade-left" data-aos-duration="2000">
                  <Image src={hero2} alt={"hero2"} height={50} width={450} />
                </div>
              </CarouselItem>
              <CarouselItem className="lg:flex items-center justify-center px-16 py-20">
                <div className="space-y-8">
                  <h1
                    className="text-baseColor text-xl font-semibold tracking-widest"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    UP TO 50% OFF
                  </h1>
                  <h1
                    className="text-black text-5xl font-bold"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                  >
                    For Your First{" "}
                    <span className="text-baseColor">Eco Shop</span> Shopping
                  </h1>
                  <p
                    className="font-medium text-slate-600 w-96"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    There are many variations of passages orem psum available
                    but the majority have suffered alteration in some form by
                    injected humour.
                  </p>
                  <Button data-aos="fade-down" data-aos-duration="3000">
                    SHOP NOW
                  </Button>
                </div>
                <div data-aos="fade-left" data-aos-duration="2000">
                  <Image src={hero3} alt={"hero3"} height={50} width={450} />
                </div>
              </CarouselItem>
              <CarouselItem className="lg:flex items-center justify-center px-16 py-20">
                <div className="space-y-8">
                  <h1
                    className="text-baseColor text-xl font-semibold tracking-widest"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    UP TO 50% OFF
                  </h1>
                  <h1
                    className="text-black text-5xl font-bold"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                  >
                    For Your First{" "}
                    <span className="text-baseColor">Eco Shop</span> Shopping
                  </h1>
                  <p
                    className="font-medium text-slate-600 w-96"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    There are many variations of passages orem psum available
                    but the majority have suffered alteration in some form by
                    injected humour.
                  </p>
                  <Button data-aos="fade-down" data-aos-duration="3000">
                    SHOP NOW
                  </Button>
                </div>
                <div data-aos="fade-left" data-aos-duration="2000">
                  <Image src={hero4} alt={"hero4"} height={50} width={450} />
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="absolute bottom-10 right-28 flex space-x-4">
              <CarouselPrevious className="p-2 rounded-full hover:bg-baseColor cursor-pointer hover:text-white" />
              <CarouselNext className="p-2 rounded-full hover:bg-baseColor cursor-pointer hover:text-white" />
            </div>
          </Carousel>
        </div>
        <div className="space-y-2 ">
          <div className="rounded-2xl heroBgOne space-y-3 py-16 px-7">
            <h1 className="text-green-600 text-sm font-semibold">
              Hot Collection
            </h1>
            <p className="text-2xl font-semibold w-56">
              Best Travel Sale Collections
            </p>
            <p>
              <Link
                href={"/"}
                className="underline uppercase font-semibold text-sm text-gray-600"
              >
                Discover Now
              </Link>
            </p>
          </div>
          <div className="rounded-2xl heroBgTwo space-y-3 py-16 px-7">
            <h1 className="text-green-600 text-sm font-semibold">
              Hot Collection
            </h1>
            <p className="text-2xl font-semibold w-56">
              Best Travel Sale Collections
            </p>
            <p>
              <Link
                href={"/"}
                className="underline uppercase font-semibold text-sm text-gray-600"
              >
                Discover Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
