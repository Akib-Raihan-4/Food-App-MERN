import React from "react";
import bannerImg from "/home/banner.png";
import bFood1Img from "/home/b-food1.png";

const Banner = () => {
  return (
    <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to [#FCFCFC] to-100%">
      <div className="py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        {/* Image Side */}
        <div className="md:w-1/2">
          <img src={bannerImg} alt="" />
          <div className="flex flex-col md:flex-row items-center justify-around -mt-14 gap-4">
            {/* First small card for banner*/}
            <div className="flex bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64">
              {/* Image */}
              <img src={bFood1Img} alt="" className="rounded-2xl" />
              {/* Price and stars */}
              <div className="space-y-1">
                <h5 className="font-medium mb-1">Spicy noodles</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-green"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-green"
                  
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-green"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-green"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-green"
                  />
                </div>
                <p className="text-red">$18.00</p>
              </div>
            </div>
            {/* Second small card */}
            <div className="hidden md:flex bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64">
              {/* Image */}
              <img src={bFood1Img} alt="" className="rounded-2xl" />
              {/* Price and stars */}
              <div className="space-y-1">
                <h5 className="font-medium mb-1">Spicy noodles</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star-2 bg-green"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star-2 bg-green"
                  
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star-2 bg-green"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star-2 bg-green"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star-2 bg-green"
                  />
                </div>
                <p className="text-red">$18.00</p>
              </div>
            </div>
          </div>
        </div>


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
        
      </div>
    </div>
  );
};

export default Banner;
