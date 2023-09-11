import CardProduct from "@/components/CardProduct";
import Container from "@/components/layouts/Container";
import { Menu, Transition } from "@headlessui/react";
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
const ModukeysByYou = () => {
  return (
    <main>
      <div className="pt-40 pb-24 w-full h-32 bg-gray-500 flex flex-col justify-center items-center">
        <h1 className="md:text-3xl font-semibold">
          Customize Your Typing Experience
        </h1>
        <p className="text-lg opacity-80">
          Start Personalizing Your Keyboard Today
        </p>
      </div>
      <Container>
        <div className="flex justify-between items-center">
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
  );
};

export default ModukeysByYou;
