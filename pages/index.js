import ButtonPrimary from "@/components/ButtonPrimary";
import CardProduct from "@/components/CardProduct";
import Container from "@/components/layouts/Container";
import Navbar from "@/components/layouts/Navbar";
import { Icon } from "@iconify/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Report } from "notiflix";
import { useEffect, useState } from "react";
import Slider from "react-slick";
const bannerHome = "/images/banner-home-01.webp";
const bannerHome1 = "/images/banner-home-01.webp";
const bannerHome2 = "/images/banner-home-02.webp";
const dummy_products = require("@/public/json-dummy/product.json");
const category_dummy = require("@/public/json-dummy/category.json");

export default function Home() {
  var settings = {
    dots: true,
    arrows: false,
    autoplaySpeed: 3000,
    // infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  function onHandleBlog() {
    Report.info(
      "Coming Soon",
      "Stay tuned for exciting updates and fresh content on our blog",
      "Okay",
      {
        borderRadius: 0,
      }
    );
  }
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Elevate your typing experience with ModuKeys mechanical keyboards. Explore a wide range of high-performance keyboards, customizable designs, and cutting-edge technology. Upgrade your typing game with ModuKeys today."
        />
        <meta
          name="keywords"
          content="ModuKeys, mechanical keyboards, high-performance keyboards, customizable keyboards, typing experience"
        />
      </Head>
      <Navbar />
      <main>
        <section>
          <Slider {...settings}>
            <ImageBannerSlider
              img={bannerHome1}
              cta="/shop"
              title="Elevate Your Typing Experience with ModuKeys!"
              desc="Experience the ultimate typing performance with ModuKeys mechanical
          keyboards. Unleash your creativity with customizable designs,
          ultra-responsive switches, and superior quality. Don't miss
          out-upgrade to ModuKeys today!"
              color="white"
            />
            <ImageBannerSlider
              img={bannerHome2}
              cta="/shop"
              title="Elevate Your Typing Experience with ModuKeys!"
              desc="Experience the ultimate typing performance with ModuKeys mechanical
          keyboards. Unleash your creativity with customizable designs,
          ultra-responsive switches, and superior quality. Don't miss
          out-upgrade to ModuKeys today!"
              color="black"
            />
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
            className="my-5 text-center bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url("/images/motiur-rahman-shakil-mpU7fYbH2-s-unsplash.webp")`,
            }}
          >
            <div className="backdrop-blur-sm w-full h-full p-4 md:p-24">
              <p className="text-white-700 text-sm md:text-md">Customize</p>
              <h2 className="text-white-900 text-2xl md:text-4xl font-semibold">
                Customize Your Typing Experience
              </h2>
              <p className="text-white-800 text-md md:text-lg mt-2 mb-6">
                Start Personalizing Your Keyboard Today
              </p>
              <Link href="/modukeys-by-you">
                <ButtonPrimary bg="orange-500">Get Started</ButtonPrimary>
              </Link>
            </div>
          </section>
          <section className="my-16">
            <h2 className="text-gray-800 text-center font-bold text-2xl">
              Most Popular
            </h2>
            <p className="text-gray-800 text-center">
              Discover our most popular and top-rated products that customers
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
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
          <section className="my-16">
            <h2 className="text-gray-900 text-center font-bold text-2xl">
              Edukeys
            </h2>
            <p className="text-gray-800 text-center">
              Discover our most popular and top-rated products that customers
            </p>
            <div className="w-full mt-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className="w-full bg-black col-span-2">
                  <div
                    className="w-full h-60 relative bg-center bg-cover cursor-pointer hover:blur-sm"
                    onClick={() => onHandleBlog()}
                    style={{
                      backgroundImage: `url(/images/krishdiphong-prayoonwongkasem-oxRLqxQ9v8o-unsplash.webp)`,
                    }}
                  >
                    <div className="absolute z-10 bottom-0 left-0 bg-gray-800/60 backdrop-blur w-[100%] p-4">
                      <h2 className="text-md text-white font-semibold truncate w-[80%]">
                        Getting to Know ModuKeys: The Revolutionary Mechanical
                        Keyboard
                      </h2>
                      <p className="text-sm text-white/70 truncate w-[80%]">
                        ModuKeys is the latest mechanical keyboard that has
                        captured the attention of keyboard enthusiasts
                        worldwide. This article will explain the unique features
                        of ModuKeys, the technology behind it, and why it has
                        become one of the top choices for users seeking
                        performance and comfort.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-black">
                  <div
                    className="w-full h-60 relative bg-center bg-cover cursor-pointer hover:blur-sm"
                    onClick={() => onHandleBlog()}
                    style={{
                      backgroundImage: `url(/images/krishdiphong-prayoonwongkasem-oxRLqxQ9v8o-unsplash.webp)`,
                    }}
                  >
                    <div className="absolute z-10 bottom-0 left-0 bg-gray-800/60 backdrop-blur w-[100%] p-4">
                      <h2 className="text-md text-white font-semibold truncate w-[80%]">
                        A Guide to Choosing the Right ModuKeys for Your Needs
                      </h2>
                      <p className="text-sm text-white/70 truncate w-[80%]">
                        In this article, we will provide a step-by-step guide to
                        help readers choose the ModuKeys keyboard that best
                        suits their needs. We will discuss various models,
                        switch types, and special features available.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-black">
                  <div
                    className="w-full h-60 relative bg-center bg-cover cursor-pointer hover:blur-sm"
                    onClick={() => onHandleBlog()}
                    style={{
                      backgroundImage: `url(/images/krishdiphong-prayoonwongkasem-oxRLqxQ9v8o-unsplash.webp)`,
                    }}
                  >
                    <div className="absolute z-10 bottom-0 left-0 bg-gray-800/60 backdrop-blur w-[100%] p-4">
                      <h2 className="text-md text-white font-semibold truncate w-[80%]">
                        Tips and Tricks to Boost Productivity with ModuKeys
                      </h2>
                      <p className="text-sm text-white/70 truncate w-[80%]">
                        ModuKeys is not just an ordinary keyboard but a powerful
                        productivity tool. In this article, we will share some
                        tips and tricks to maximize the ModuKeys experience and
                        enhance everyday productivity.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-black">
                  <div
                    className="w-full h-60 relative bg-center bg-cover cursor-pointer hover:blur-sm"
                    onClick={() => onHandleBlog()}
                    style={{
                      backgroundImage: `url(/images/krishdiphong-prayoonwongkasem-oxRLqxQ9v8o-unsplash.webp)`,
                    }}
                  >
                    <div className="absolute z-10 bottom-0 left-0 bg-gray-800/60 backdrop-blur w-[100%] p-4">
                      <h2 className="text-md text-white font-semibold truncate w-[80%]">
                        How to Care for and Clean Your ModuKeys Keyboard
                      </h2>
                      <p className="text-sm text-white/70 truncate w-[80%]">
                        Taking care of your keyboard is essential to ensure its
                        continued optimal performance. We will provide a
                        comprehensive guide on how to care for and clean your
                        ModuKeys keyboard to keep it looking and functioning
                        like new.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-black">
                  <div
                    className="w-full h-60 relative bg-center bg-cover cursor-pointer hover:blur-sm"
                    onClick={() => onHandleBlog()}
                    style={{
                      backgroundImage: `url(/images/krishdiphong-prayoonwongkasem-oxRLqxQ9v8o-unsplash.webp)`,
                    }}
                  >
                    <div className="absolute z-10 bottom-0 left-0 bg-gray-800/60 backdrop-blur w-[100%] p-4">
                      <h2 className="text-md text-white font-semibold truncate w-[80%]">
                        Latest Developments in the World of Keyboards: What You
                        Need to Know About Upcoming ModuKeys Generations
                      </h2>
                      <p className="text-sm text-white/70 truncate w-[80%]">
                        The keyboard industry continues to evolve, and ModuKeys
                        is not standing still. This article will cover the
                        latest developments in the world of keyboards and
                        provide insights into what to expect from the upcoming
                        generations of ModuKeys keyboards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </main>
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
const ImageBannerSlider = (props) => (
  <div className="relative w-full">
    <Image
      src={props.img}
      width={0}
      height={0}
      sizes="100%"
      style={{
        width: "100%",
        height: "100vh",
        objectFit: "cover",
      }}
      placeholder="blur"
      blurDataURL="data:..."
      alt="image"
    />
    <div className="absolute top-0 w-full h-full z-10 pt-16">
      <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:pt-40 flex flex-col justify-center items-start ">
        <h1
          className={`leading-loose text-3xl md:text-4xl lg:text-5xl font-semibold uppercase lg:max-w-xl text-${
            props.color || "white"
          }`}
        >
          {props.title}
        </h1>
        <p
          className={`leading-loose text-sm lg:text-lg opacity-80 lg:max-w-xl mt-4 mb-6 text-${
            props.color || "white"
          }`}
        >
          {props.desc}
        </p>
        <Link href={props.cta}>
          <ButtonPrimary>Get Started Now</ButtonPrimary>
        </Link>
      </div>
    </div>
  </div>
);
