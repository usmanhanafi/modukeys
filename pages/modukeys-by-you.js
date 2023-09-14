import CardProduct from "@/components/CardProduct";
import Container from "@/components/layouts/Container";
import { Menu, Transition } from "@headlessui/react";
import Head from "next/head";
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
          <div className="mt-5 mb-24 w-100 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-10">
            {dummy_products.map((item, index) => {
              if (item.Customize == true) {
                return <CardProduct data={item} key={index} index={index} />;
              }
            })}
          </div>
        </Container>
      </main>
    </>
  );
};

export default ModukeysByYou;
