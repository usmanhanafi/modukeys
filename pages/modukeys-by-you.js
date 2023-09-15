import CardProduct from "@/components/CardProduct";
import Container from "@/components/layouts/Container";
import Navbar from "@/components/layouts/Navbar";
import { Menu, Transition } from "@headlessui/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
const dummy_products = require("@/public/json-dummy/product.json");
const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const backgroundHero = "/images/andrey-matveev-FPvGiqoZOdE-unsplash.webp";
const ModukeysByYou = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="ModuKeys by You: Customize your own unique mechanical keyboard with ModuKeys. Explore a range of options to create a personalized typing experience. Design, build, and elevate your keyboard with ModuKeys today."
        />
        <meta
          name="keywords"
          content="ModuKeys by You, custom mechanical keyboard, personalized keyboard, keyboard customization, keyboard design"
        />
        <title>ModuKeys by You - Customize Your Perfect Keyboard</title>
      </Head>
      <Navbar />
      <main>
        <div
          className="w-full h-32 bg-left"
          style={{ backgroundImage: `url(${backgroundHero})` }}
        >
          <div className="pt-32 pb-10 backdrop-blur-lg flex flex-col justify-center items-center">
            <h1 className="text-gray-900 md:text-3xl font-semibold">
              Customize Your Typing Experience
            </h1>
            <p className="text-gray-900 text-lg opacity-80">
              Start Personalizing Your Keyboard Today
            </p>
          </div>
        </div>
        <Container>
          <div className="flex justify-between items-center mt-24">
            <h2 className="text-gray-900 font-medium text-lg mt-5">
              Customable Keyboards
            </h2>
          </div>
          <div className="mt-5 mb-16 w-100 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-10">
            {dummy_products.map((item, index) => {
              if (item.Customize == true) {
                return <CardProduct data={item} key={index} index={index} />;
              }
            })}
          </div>
          <div className="my-10">
            <h2 className="text-gray-900 font-medium text-lg my-5">
              Inspiration
            </h2>
            <div className="w-full">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div
                  className="w-full relative col-span-2 h-60 bg-center bg-cover"
                  style={{
                    backgroundImage: `url(/images/jay-zhang-mFtcZzLruCQ-unsplash.webp)`,
                  }}
                >
                  <h2 className="absolute z-10 bottom-0 left-0 text-md text-white font-semibold bg-gray-900/60 backdrop-blur w-full truncate md:w-auto px-8 py-3">
                    #Tholib
                  </h2>
                </div>
                <div
                  className="w-full h-60 relative bg-center bg-cover"
                  style={{
                    backgroundImage: `url(/images/andrey-matveev-FPvGiqoZOdE-unsplash.webp)`,
                  }}
                >
                  <h2 className="absolute z-10 bottom-0 left-0 text-md text-white font-semibold bg-gray-900/60 backdrop-blur w-full truncate md:w-auto px-8 py-3">
                    #Usman
                  </h2>
                </div>
                <div
                  className="w-full h-60 relative bg-center bg-cover"
                  style={{
                    backgroundImage: `url(/images/pedro-costa-aXY5doQNZTc-unsplash.webp)`,
                  }}
                >
                  <h2 className="absolute z-10 bottom-0 left-0 text-md text-white font-semibold bg-gray-900/60 backdrop-blur w-full truncate md:w-auto px-8 py-3">
                    #Hanafi
                  </h2>
                </div>
                <div
                  className="w-full h-60 relative bg-center bg-cover"
                  style={{
                    backgroundImage: `url(/images/krishdiphong-prayoonwongkasem-oxRLqxQ9v8o-unsplash.webp)`,
                  }}
                >
                  <h2 className="absolute z-10 bottom-0 left-0 text-md text-white font-semibold bg-gray-900/60 backdrop-blur w-full truncate md:w-auto px-8 py-3">
                    #Maya
                  </h2>
                </div>
                <div
                  className="w-full h-60 relative bg-center bg-cover"
                  style={{
                    backgroundImage: `url(/images/motiur-rahman-shakil-mpU7fYbH2-s-unsplash.webp)`,
                  }}
                >
                  <h2 className="absolute z-10 bottom-0 left-0 text-md text-white font-semibold bg-gray-900/60 backdrop-blur w-full truncate md:w-auto px-8 py-3">
                    #Gilang
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};

export default ModukeysByYou;
