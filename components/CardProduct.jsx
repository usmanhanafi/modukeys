import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardProduct = ({ data, index }) => (
  <Link
    href={data.href || `/detail-product?id=${index}`}
    className="hover:scale-105 w-100 relative"
  >
    <Image
      src={data.img || "/images/banner-home.png"}
      // className="w-full h-full"
      // style={{ height: 240, objectFit: "cover" }}
      // layout="fill"
      alt="product"
      width={0}
      height={0}
      sizes="100%"
      style={{ width: "100%", height: 200, objectFit: "cover" }} // optional
    />
    {data.Customize ? (
      <div className="bg-orange-600 text-xs absolute top-2 right-2 px-2 py-1 opacity-70">
        Customable
      </div>
    ) : null}
    <p className="text-sm text-red-800 mt-3">{data.Category || "Category"}</p>
    <h5 className="text-gray-900 font-medium text-lg truncate ">
      {data.Title || "Title"}
    </h5>
    <p className="text-gray-600 font-medium mt-3">$ {data.Price || "-"}</p>
  </Link>
);

export default CardProduct;
