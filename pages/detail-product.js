import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
const bannerHome = "/images/banner-home.png";
const dummy_products = require("@/public/json-dummy/product.json");

const DetailProduct = () => {
  const router = useRouter();
  const { id } = router.query;

  const data = dummy_products[id];
  console.log(data);
  if (!data) {
    return <p>Loading...</p>;
  }
  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white px-4">
      <div className=" py-24 mx-auto">
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
            <p className="leading-relaxed">{data.Description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <div className="flex">
                <span className="mr-3">Switch</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Material</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
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
                  <button className="flex ml-auto text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                    Configure
                  </button>
                </Link>
              ) : (
                <button className="flex ml-auto text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailProduct;
