import CardProduct from "@/components/CardProduct";
import Container from "@/components/layouts/Container";
import React from "react";

const shop = () => {
  return (
    <main>
      <Container>
        <h1 className="text-gray-900 text-2xl font-bold">Shop</h1>
        <div className="grid grid-cols-4 gap-4 my-5">
          <div className="bg-gray-100">sd</div>
          <div className="col-span-3 w-100 grid grid-cols-4 gap-4 gap-y-10">
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default shop;
