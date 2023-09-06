import Link from "next/link";
import React from "react";

const CardProduct = (props) => (
  <Link href="#" className="hover:scale-105">
    <img
      src={props.img || "/images/banner-home.png"}
      className="w-full h-full"
      style={{ height: 240, objectFit: "cover" }}
      alt="product"
    />
    <p className="font-medium text-red-800 mt-3">category</p>
    <h5 className="text-gray-900 text-lg">ModuKeys Pro X1 Gaming Keyboard</h5>
    <p className="text-gray-600">red zone</p>
  </Link>
);

export default CardProduct;
