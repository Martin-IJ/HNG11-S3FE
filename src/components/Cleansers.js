import React from "react";
import { Cleanser } from "./db";

const Cleansers = () => {
  return (
    <div className="container mx-auto px-2 md:flex space-y-3 md:space-y-0 justify-between gap-7">
      {Cleanser.map((product, index) => {
        const { id, image, name, description } = product;
        return (
          <div
            key={id}
            className={`relative h-[225px] mx-auto max-w-[360px] w-full bg-cover bg-center bg-no-repeat border border-tertiary md:border-none rounded-[10px] lg:hover:shadow-lg lg:hover:shadow-secondary-light ${
              index >= 2 ? 'hidden sm:block' : ''
            }`}
            style={{ backgroundImage: `url(${image})` }}
          >
            <h4 className="absolute font-playFair h5 top-3 left-3 bg-white px-5 rounded-md border border-tertiary shadow shadow-black/50">
              {name}
            </h4>
            <p className="absolute h9 uppercase bottom-3 right-3 bg-white px-3 py-2 rounded-md border border-tertiary shadow shadow-black/50">
              {description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Cleansers;
