import ButtonPrimary from "@/components/ButtonPrimary";
import CardProduct from "@/components/CardProduct";
import Container from "@/components/layouts/Container";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Slider from "react-slick";
const bannerHome = "/images/banner-home.png";

export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section>
        <Slider {...settings}>
          <div className="bg-black" style={{ minHeight: "600px" }}>
            <img
              src={bannerHome}
              className="w-full"
              style={{ maxHeight: "80vh", objectFit: "cover" }}
              alt="logo"
            />
          </div>
          <div className="bg-black" style={{ minHeight: "600px" }}>
            <img
              src={bannerHome}
              className="w-full"
              style={{ maxHeight: "80vh", objectFit: "cover" }}
              alt="logo"
            />
          </div>
          <div className="bg-black" style={{ minHeight: "600px" }}>
            <img
              src={bannerHome}
              className="w-full"
              style={{ maxHeight: "80vh", objectFit: "cover" }}
              alt="logo"
            />
          </div>
          <div className="bg-black" style={{ minHeight: "600px" }}>
            <img
              src={bannerHome}
              className="w-full"
              style={{ maxHeight: "80vh", objectFit: "cover" }}
              alt="logo"
            />
          </div>
        </Slider>
      </section>
      <Container>
        <section className="my-3">
          {/* <h2 className="text-gray-900 text-center font-bold text-xl">
            Category
          </h2> */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <CardCategory title="KEYBOARD FULL-SIZE" />
            <CardCategory title="KEYBOARD FULL-SIZE" />
            <CardCategory title="KEYBOARD FULL-SIZE" />
            <CardCategory title="KEYBOARD FULL-SIZE" />
          </div>
        </section>
        <section className="my-5 text-center p-4 md:p-24 bg-gray-300">
          <p className="text-gray-700 text-sm md:text-md">Customize</p>
          <h2 className="text-gray-900 text-2xl md:text-4xl font-semibold">
            {" "}
            Customize Your Typing Experience
          </h2>
          <p className="text-gray-800 text-md md:text-lg mt-2 mb-6">
            Start Personalizing Your Keyboard Today
          </p>
          <ButtonPrimary>Get Started Now</ButtonPrimary>
        </section>
        <section className="my-16">
          <h2 className="text-gray-900 text-center font-bold text-2xl">
            Best Seller
          </h2>
          <p className="text-gray-800 text-center">
            Discover our most popular and top-rated products that customers
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
            <CardProduct title="KEYBOARD FULL-SIZE" />
            <CardProduct title="KEYBOARD FULL-SIZE" />
            <CardProduct title="KEYBOARD FULL-SIZE" />
            <CardProduct title="KEYBOARD FULL-SIZE" />
          </div>
          <div className="flex justify-center w-full mt-6">
            <ButtonPrimary>Get Started Now</ButtonPrimary>
          </div>
        </section>
        <section className="my-16">
          <h2 className="text-gray-900 text-center font-bold text-2xl">
            Edukeys
          </h2>
          <p className="text-gray-800 text-center">
            Discover our most popular and top-rated products that customers
          </p>
          <div className="relative grid grid-cols-2 gap-4"></div>
        </section>
      </Container>
    </>
  );
}
const CardCategory = (props) => (
  <Link href={props.href || "#"} className="relative w-full">
    <img
      src={props.img || bannerHome}
      className="w-full"
      style={{ maxHeight: "100px", objectFit: "cover" }}
      alt="logo"
    />
    <div className="absolute hover:backdrop-blur-sm bg-black bg-opacity-60 top-0 z-10 w-full h-full flex justify-center items-center p-4">
      <p className="md:font-medium text-sm md:text-xl">
        {props.title || "Title"}
      </p>
    </div>
  </Link>
);
