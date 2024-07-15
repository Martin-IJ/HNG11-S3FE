import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary-extraLight py-10 md:py-20 px-2">
      <div className="container mx-auto md:flex flex-wrap justify-between gap-5 space-y-10 md:space-y-0">
        <div className="max-w-[265px] w-full space-y-5">
          <Link href="/">
            <Image width={100} height={100} src="/images/Frame 9.svg" alt="" />
          </Link>
          <p className="text-[17px] font-merriweather">
            Subscribe to our mailing list to get the new updates{" "}
          </p>
          <div className="flex gap-5">
            <Image width={30} height={30} src="/images/facebook.svg" alt="Facebook Logo" />
            <Image width={30} height={30}
              src="/images/twitter.svg"
              alt="Twitter Logo"
              className="rounded"
            />
            <Image width={30} height={30} src="/images/instagram.svg" alt="Instagram Logo" />
            <Image width={30} height={30} src="/images/youtube.svg" alt="Youtube Logo" />
          </div>
        </div>

        <div>
          <h2 className="h3 mb-5 font-semibold">INFORMATION</h2>
          <ul className="space-y-5">
            <li>About Us</li>
            <li>Contact</li>
            <li>How we source</li>
            <li>Identifying False Products</li>
          </ul>
        </div>
        <div>
          <h2 className="h3 mb-5 font-semibold">OUR SERVICES</h2>
          <ul className="space-y-5">
            <li>Shipping & Delivery</li>
            <li>Refunds & Returns</li>
            <li>Book A Consultation</li>
          </ul>
        </div>
        <div>
          <h2 className="h3 mb-5 font-semibold">MY ACCOUNT</h2>
          <ul className="space-y-5">
            <li>My Account</li>
            <li>My Cart</li>
            <li>Checkout</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
