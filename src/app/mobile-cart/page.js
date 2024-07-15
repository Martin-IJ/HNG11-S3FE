"use client";

import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";
import Image from "next/image";
import Link from "next/link";

const MobileCart = () => {
  const initialProducts = [
    {
      id: 1,
      name: "Olay Vitamin C Brightening Body Lotion 502ML",
      price: 33000,
      count: 1,
    },
    {
      id: 2,
      name: "Olay Vitamin C Brightening Body Lotion 502ML",
      price: 33000,
      count: 1,
    },
  ];

  const [products, setProducts] = useState(initialProducts);

  const increaseCount = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, count: product.count + 1 } : product
      )
    );
  };

  const decreaseCount = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, count: product.count > 1 ? product.count - 1 : 1 }
          : product
      )
    );
  };

  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const subtotal = products.reduce(
    (total, product) => total + product.price * product.count,
    0
  );

  return (
    <div className="p-5 ">
      <div className="h-[60vh] divide-y divide-black/20">
        <div className="flex items-center justify-between pb-5 px-3">
          <p className="h8 font-semibold">
            SHOPPING BAG <sup>{products.length}</sup>
          </p>
          <FaArrowRightLong />
        </div>

        {products.map((product) => (
          <div key={product.id} className="flex gap-10 justify-between py-5">
            <Image
              width={100}
              height={100}
              src="/images/cart product.svg"
              alt=""
              className="h-24"
            />
            <div className="flex flex-col justify-between">
              <p className="h9">{product.name}</p>
              <div className="flex items-center gap-3">
                <div className="flex gap-2 px-2 py-1 w-fit text-[9px] border border-black/20">
                  <button
                    onClick={() => decreaseCount(product.id)}
                    className={`${
                      product.count === 1 ? "text-black/20" : "text-tertiary"
                    }`}
                  >
                    -
                  </button>
                  <p>{product.count}</p>
                  <button onClick={() => increaseCount(product.id)}>+</button>
                </div>
                <p className="h9">₦{product.price}</p>
              </div>
            </div>
            <button
              className="h-fit border border-black/20 p-1 rounded text-2xl text-black/50 font-semibold"
              onClick={() => removeProduct(product.id)}
            >
              <LiaTimesSolid />
            </button>
          </div>
        ))}
      </div>

      <div className="space-y-5 border-t border-black/20 pt-5">
        <div className="px-3">
          <div className="flex justify-between">
            <p className="h8">
              SUBTOTAL: <sup>{products.length}</sup>
            </p>
            <p className="h8">₦{subtotal.toLocaleString()}</p>
          </div>
          <p className="h10">
            <sup>{products.length}</sup>{" "}
            <span className=" underline">Have a Coupon?</span>
          </p>
        </div>

        <div className="flex justify-between">
          <Link href="/cart">
            <button className="bg-primary-dark uppercase py-3 px-7 h7">
              View Cart
            </button>
          </Link>
          <Link href="/checkout">
            <button className="bg-secondary-extraLight uppercase py-3 px-10 h7 flex items-center gap-2">
              Checkout <FaArrowRightLong />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileCart;
