import BestSellers from "@/components/BestSellers";
import Cleansers from "@/components/Cleansers";
import NewArrival from "@/components/NewArrival";
import Offer from "@/components/Offer";
import OnSale from "@/components/OnSale";

const Home = () => {
  return (
    <div>
      <div
        className="bg-cover md:bg-center bg-no-repeat h-[430px]"
        style={{ backgroundImage: `url(${"/images/hero-image.jpeg"})` }}
      >
        <div className="container mx-auto flex items-center h-full px-2">
          <div className="w-[280px]">
            <h2 className="h1">Your Daily Dose Of Glow</h2>
            <p className="h4 mt-3 mb-5">We care about your skin</p>
            <button className="green-btn">BOOK A CONSULTATION</button>
          </div>
        </div>
      </div>

      <div className="my-10 lg:my-20 space-y-7 lg:space-y-14">
        <NewArrival />
        <BestSellers />
        <Cleansers />
        <OnSale />
      </div>
      <Offer />
    </div>
  );
};

export default Home;
