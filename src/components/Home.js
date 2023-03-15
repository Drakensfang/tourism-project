import React from "react";

const Home = () => {
  return (
    <div className="relative z-30  flex flex-col justify-start items-end ">
      <div className=" flex flex-col items-end px-6 md:pl-0 pt-12 w-screen md:w-[40rem]  ">
        {/* Title */}
        <div className="w-full flex justify-start items-start">
          <h1 className="text-[72px] font-bold text-white leading-[100%]  ">
          <div className="top-element-formatting">
    THE GARDEN CITY,<span className="second-word-formatting">SINGAPORE</span>
  
    </div>       
       
          </h1>
        </div>

        {/* Description */}
        <div className="text-white/80    w-full ml-[1px] pt-10">
          <p className=" text-[18px] font-medium">
            Let's explore one of the most diverse countries in the <br />
            world, namely Singapore. Enjoy 3 vacation ideas <br />
            suitable for the whole family!
          </p>
        </div>

        {/* Featured */}
        <div className="mt-12 border-t border-white/70 pb-4 w-full flex items-center justify-center gap-8 flex-col md:flex-row">
          <div className="text-center ">
            <p className="text-white/80 font-medium">Most popular activity</p>
            <p className="text-white font-bold">Nature stroll at Gardens by The Bay</p>
          </div>
          <div className=" ">
            <p className="text-white/80 font-medium">Most exciting location</p>
            <p className="text-white font-bold">Enjoy the rides at Universal Studios</p>
          </div>
          <div className=" ">
            <p className="text-white/80 font-medium">Change of pace</p>
            <p className="text-white font-bold">Go on a food & culture tour</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
