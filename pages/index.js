import ButtonPrimary from "@/components/ButtonPrimary";
import CardProduct from "@/components/CardProduct";
import Container from "@/components/layouts/Container";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";
const bannerHome = "/images/banner-home.png";
const dummy_products = require("@/public/json-dummy/product.json");
const category_dummy = require("@/public/json-dummy/category.json");

export default function Home() {
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section>
        <Slider {...settings}>
          <ImageBannerSlider />
          <ImageBannerSlider />
          <ImageBannerSlider />
          <ImageBannerSlider />
        </Slider>
      </section>
      <Container>
        <section className="my-3">
          {/* <h2 className="text-gray-900 text-center font-bold text-xl">
            Category
          </h2> */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {category_dummy.map((item, index) => (
              <CardCategory
                key={index}
                title={item.name}
                url={item.url}
                href={`/shop#${item.name}`}
              />
            ))}
          </div>
        </section>
        <section
          className="my-5 text-center"
          style={{
            backgroundImage: `url("/images/pedro-costa-aXY5doQNZTc-unsplash.jpg")`,
          }}
        >
          <div className="backdrop-blur w-full h-full p-4 md:p-24">
            <p className="text-white-700 text-sm md:text-md">Customize</p>
            <h2 className="text-white-900 text-2xl md:text-4xl font-semibold">
              Customize Your Typing Experience
            </h2>
            <p className="text-white-800 text-md md:text-lg mt-2 mb-6">
              Start Personalizing Your Keyboard Today
            </p>
            <ButtonPrimary>Get Started</ButtonPrimary>
          </div>
        </section>
        <section className="my-16">
          <h2 className="text-gray-900 text-center font-bold text-2xl">
            Most Popular
          </h2>
          <p className="text-gray-800 text-center">
            Discover our most popular and top-rated products that customers
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {dummy_products.map((item, index) =>
              index >= 4 ? null : (
                <CardProduct key={index} data={item} index={index} />
              )
            )}
          </div>
          <div className="flex justify-center w-full mt-6">
            <Link href="/shop">
              <ButtonPrimary>Learn More</ButtonPrimary>
            </Link>
          </div>
        </section>
        {/* <section className="my-16">
          <h2 className="text-gray-900 text-center font-bold text-2xl">
            Edukeys
          </h2>
          <p className="text-gray-800 text-center">
            Discover our most popular and top-rated products that customers
          </p>
          <div className="relative grid grid-cols-2 gap-4"></div>
        </section> */}
      </Container>
    </>
  );
}
const CardCategory = (props) => (
  <Link href={props.href || "#"} className="relative w-full">
    <Image
      src={props.url}
      width={0}
      height={0}
      sizes="100%"
      style={{
        width: "100%",
        height: 100,
        objectFit: "cover",
      }}
      placeholder="blur"
      blurDataURL="data:..."
      alt="image"
    />
    <div className="absolute hover:backdrop-blur-sm bg-black bg-opacity-60 top-0 z-10 w-full h-full flex justify-center items-center p-4">
      <p className="md:font-medium text-sm md:text-xl">
        {props.title || "Title"}
      </p>
    </div>
  </Link>
);
const ImageBannerSlider = (...props) => (
  <Image
    src={bannerHome}
    width={0}
    height={0}
    sizes="100%"
    style={{
      width: "100%",
      height: "60vh",
      objectFit: "cover",
    }}
    placeholder="blur"
    blurDataURL="data:..."
    alt="image"
  />
);
const ImageItem = (...props) => (
  <Image
    src={bannerHome}
    width={0}
    height={0}
    sizes="100%"
    style={{
      width: "100%",
      height: props.height || "100%",
      objectFit: "cover",
    }}
    placeholder="blur"
    blurDataURL="data:..."
    alt="image"
  />
);
