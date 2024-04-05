import React from "react";
import bannerImg from "/home/banner.png";
import bFood1Img from "/home/b-food1.png";

const Banner = () => {
  return (
    <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to [#FCFCFC] to-100%">
      <div className="py-24 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Texts side */}
        <div className="md:w-1/2 space-y-7 px-4">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug text-black">
            Dive into the Delights of Delectable{" "}
            <span className="text-green">Food</span>
          </h2>
          <p className="text-xl text-[#4A4A4A]">
            Where each plates weaves a story of culinary mastery and passionate
            craftsmanship
          </p>
          <button className="btn bg-green rounded-full px-8 py-3 text-white font-semibold ">
            Order Now
          </button>
        </div>
        {/* Image Side */}
        <div className="md:w-1/2">
          <img src={bannerImg} alt="" />
          <div>
            <div>
              <img src={bFood1Img} alt="" className="rounded-2xl"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
