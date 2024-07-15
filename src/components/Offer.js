import React from "react";

const Offer = () => {
  return (
    <div className="h-[435px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${"/images/Imaggge.jpeg"})` }}>
      <div className="container mx-auto px-2 pt-10 h-full">
        <div className="text-black w-[255px] md:w-[400px]">
          <h2 className="h1 font-semibold">
            Grab 20% Off Chemical Peeling Today!
          </h2>
          <p className="h4 mt-3 mb-5">
            Offer valid from july 2nd - July 9th
          </p>
          <button className="green-btn h7">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
