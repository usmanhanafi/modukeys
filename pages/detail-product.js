import Navbar from "@/components/layouts/Navbar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
const dummy_products = require("@/public/json-dummy/product.json");
const materials = [
  "Plastic",
  "Metal",
  "Aluminum",
  "Stainless Steel",
  "ABS Plastic (for keycaps)",
  "PBT Plastic (for keycaps)",
  "Ceramic",
  "Glass",
  "Wood",
  "Fiberglass",
  "Carbon Plastic",
  "Rubber",
  "Silicone",
  "Leather",
  "Cloth",
];

const DetailProduct = () => {
  const router = useRouter();
  const { id } = router.query;

  const data = dummy_products[id];
  console.log(data);
  if (!data) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Elevate your gaming experience with the ModuKeys Pro X1 Gaming Keyboard. Featuring ultra-responsive Cherry MX Red mechanical switches, customizable RGB backlighting with 16.8 million colors, N-key rollover for precise key presses, and more. Get it now for just $159.99 at ModuKeys."
        />
        <meta
          name="keywords"
          content="ModuKeys Pro X1, gaming keyboard, Cherry MX Red, customizable RGB backlight, N-key rollover, wired USB, keyboard specifications, mechanical keyboard"
        />
        <title>ModuKeys Pro X1 Gaming Keyboard - Elevate Your Gaming</title>
      </Head>
      <Navbar />
      <main className="text-gray-700 body-font overflow-hidden bg-white px-4">
        <section className=" py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              alt="modukeys"
              width={0}
              height={0}
              sizes="100%"
              className="lg:w-1/2 w-full h-full object-cover object-center rounded border border-gray-200"
              placeholder="blur"
              blurDataURL="data:..."
              src={data.img}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {data.Category}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {data.Title}
              </h1>
              <p className="leading-relaxed mt-4">{data.Description}</p>
              <div className="flex flex-col gap-4 md:flex-row mt-6 md:items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex w-100">
                  <span className="mr-3">Switch</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div className="flex items-center w-100">
                  <span className="mr-3">Material</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                      {materials.map((item, index) => (
                        <option key={index}>{item}</option>
                      ))}
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="title-font font-medium text-2xl text-gray-900">
                  $58.00
                </span>
                {data.Customize ? (
                  <Link href="/custom-keyboard">
                    <button className="flex ml-auto text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:opacity-80">
                      Configure
                    </button>
                  </Link>
                ) : (
                  <button className="flex ml-auto text-white bg-black border-0 py-2 px-6 focus:outline-none hover:opacity-80">
                    Add To Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default DetailProduct;
