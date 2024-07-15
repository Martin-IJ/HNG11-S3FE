"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser, FaAngleDown } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import Cart from "./Cart";

const Navbar = () => {
  const [cartVisible, setCartVisible] = useState(false);
  const cartRef = useRef(null);

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  const handleClickOutside = (event) => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      setCartVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white">
      <div className="border-b border-primary-dark">
        <div className="container mx-auto px-2 py-5 flex items-center justify-between">
          <div className="hidden flex-1 lg:flex items-center">
            <div className="max-w-[250px] w-full flex items-center bg-primary-light border border-primary-dark px-3 py-1 rounded-[20px]">
              <input
                type="text"
                className="w-full bg-transparent outline-none text-sm"
                placeholder="Find your product"
              />
              <button>
                <IoSearch />
              </button>
            </div>
          </div>

          <div className="flex-1 flex lg:hidden gap-2 text-2xl items-center">
            <button>
              <GiHamburgerMenu />
            </button>
            <button>
              <IoSearch />
            </button>
          </div>

          <Link href="/">
            <div className="flex-1 flex justify-center">
              <Image src="/images/Frame 9.svg" alt="Logo" width={100} height={100} className="img" />
            </div>
          </Link>

          {/* Mobile navbar (right side) */}
          <div className="flex-1 flex lg:hidden justify-end gap-2 lg:gap-7 text-2xl lg:text-lg">
            <button>
              <FaRegUser />
            </button>
            <Link href="/mobile-cart">
              <div className="flex items-center">
                <MdOutlineShoppingCart />
                <div className="h-[15px] w-[15px] flex items-center justify-center text-[8px] bg-secondary-extraLight rounded-full">
                  0
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop navbar (right side) */}
          <div className="relative flex-1 hidden lg:flex justify-end gap-2 lg:gap-7 text-2xl lg:text-lg">
            <button>
              <FaRegUser />
            </button>
            <button>
              <FaRegHeart />
            </button>
            <button className="flex items-center" onClick={toggleCart}>
              <MdOutlineShoppingCart />
              <span className="h-[15px] w-[15px] flex items-center justify-center text-[8px] bg-secondary-extraLight rounded-full">
                0
              </span>
            </button>
            {cartVisible && (
              <div
                ref={cartRef}
                className="absolute top-[5.7rem] right-0 w-[520px] h-[550px] bg-white border border-secondary-extraLight shadow-lg"
              >
                <Cart onClose={() => setCartVisible(false)} />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="hidden lg:flex border-b border-primary-dark">
        <ul className="container mx-auto px-2 flex justify-between py-2 text-sm">
          <li>Brands</li>
          <li>Home</li>
          <li>Gift Cards</li>
          <li>Book a consultation</li>
          <li>Gift Cards</li>
          <li>Best & New</li>
          <li>Wholesale</li>
          <li className="flex items-center gap-3 border-b border-secondary-extraLight">
            Categories <FaAngleDown />
          </li>
          <li>Sales & Offers</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
