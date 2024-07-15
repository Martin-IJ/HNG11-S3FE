import React from "react";

const Checkout = () => {
  return (
    <div className="container mx-auto px-2 py-10">
      <h2 className="h3 mb-10">Checkout</h2>

      <div className="lg:flex">
        <form className="flex mx-auto lg:mx-0 flex-col gap-5 bg-white max-w-[695px] w-full p-5">
          <p className="h7">BILLING DETAILS</p>

          <div className="md:flex justify-between gap-5 lg:gap-16">
            <label htmlFor="firstName" className="w-full block md:inline-block">
              <p className="h9 pb-2">FIRST NAME</p>
              <input
                type="text"
                id="firstName"
                className="w-full p-2 border border-primary-dark"
              />
            </label>
            <label
              htmlFor="lastName"
              className="w-full block md:inline-block mt-5 md:mt-0"
            >
              <p className="h9 pb-2">LAST NAME</p>
              <input
                type="text"
                id="lastName"
                className="w-full p-2 border border-primary-dark"
              />
            </label>
          </div>

          <label htmlFor="company" className="w-full">
            <p className="h9 pb-2">COMPANY NAME (OPTIONAL)</p>
            <input
              type="text"
              id="company"
              className="w-full p-2 border border-primary-dark"
            />
          </label>

          <p className="h9">
            COUNTRY / REGION <sup className="text-red-500">*</sup>
          </p>
          <p className="h7">NIGERIA</p>

          <label htmlFor="streetAddress1" className="w-full">
            <p className="h9 pb-2">
              STREET ADDRESS <sup className="text-red-500">*</sup>
            </p>
            <input
              type="text"
              id="streetAddress1"
              className="w-full p-2 border border-primary-dark mb-3"
            />
            <input
              type="text"
              id="streetAddress2"
              className="w-full p-2 border border-primary-dark"
            />
          </label>

          <label htmlFor="town" className="w-full">
            <p className="h9 pb-2">
              TOWN / CITY <sup className="text-red-500">*</sup>
            </p>
            <input
              type="text"
              id="town"
              className="w-full p-2 border border-primary-dark"
            />
          </label>

          <label htmlFor="state" className="w-full">
            <p className="h9 pb-2">
              STATE <sup className="text-red-500">*</sup>
            </p>
            <input
              type="text"
              id="state"
              className="w-full p-2 border border-primary-dark"
            />
          </label>

          <label htmlFor="phone" className="w-full">
            <p className="h9 pb-2">
              PHONE NUMBER <sup className="text-red-500">*</sup>
            </p>
            <input
              type="text"
              id="phone"
              className="w-full p-2 border border-primary-dark"
            />
          </label>

          <label htmlFor="email" className="w-full">
            <p className="h9 pb-2">
              EMAIL ADDRESS <sup className="text-red-500">*</sup>
            </p>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-primary-dark"
            />
          </label>
        </form>

        <div className="w-full lg:w-1/2 lg:pl-10">
          <div className="mx-auto max-w-[440px] w-full h-fit mt-10 lg:mt-0 bg-white lg:bg-transparent border border-primary-dark rounded-[4px]">
            <p className="h7 font-semibold p-[10px] text-center bg-secondary-extraLight border-b border-primary-dark">
              YOUR ORDER SUMMARY
            </p>
            <div className="h7 py-10 px-5 space-y-5">
              <div className="flex justify-between">
                <p>Products (3)</p>
                <p>₦66,000</p>
              </div>
              <div className="flex justify-between">
                <p>Shipping fee</p>
                <p>₦560</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Total amount</p>
                <p>₦66,560</p>
              </div>
            </div>
          </div>

          <button className="max-w-[295px] w-full mx-auto light-green-btn text-center mt-10 lg:mt-20">
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
