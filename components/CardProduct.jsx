import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardProduct = (props) => (
  <Link
    href={props.href ?? "/detail-product"}
    className="hover:scale-105 w-100"
  >
    <Image
      src={props.img || "/images/banner-home.png"}
      // className="w-full h-full"
      // style={{ height: 240, objectFit: "cover" }}
      // layout="fill"
      alt="product"
      width={0}
      height={0}
      sizes="100%"
      style={{ width: "100%", height: 200, objectFit: "cover" }} // optional
    />
    <p className="font-medium text-red-800 mt-3">category</p>
    <h5 className="text-gray-900 text-lg">ModuKeys Pro X1 Gaming Keyboard</h5>
    <p className="text-gray-600">red zone</p>
  </Link>
);

export default CardProduct;
