import React from "react";
import { FaGooglePlay } from "react-icons/fa6";
import { FaAppStoreIos } from "react-icons/fa";
import heroImg from "../../assets/hero.png";

const Hero = () => {
  return (
    <div>
      <div className="max-w-10/12 mx-auto text-center mt-10">
        <h1 className="text-4xl mb-2 font-bold">
          We Build <br></br>
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-[#627382]">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        <div className="flex gap-4 justify-center mt-4">
          <button className="btn">
            {" "}
            <FaGooglePlay /> Google Play
          </button>

          <button className="btn">
            {" "}
            <FaAppStoreIos />
            App Store
          </button>
        </div>
      </div>
      <div className="max-w-10/12 mx-auto mt-10">
        <img className="h-70 w-120 mx-auto" src={heroImg} alt="Hero-Image" />
      </div>
   <section className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-10 px-5 text-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Trusted By Millions, Built For You
        </h2>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Total Downloads */}
          <div className="flex flex-col items-center">
            <p className="text-xs text-white/70 mb-2">
              Total Downloads
            </p>

            <h3 className="text-4xl md:text-5xl font-bold mb-2">
              29.6M
            </h3>

            <p className="text-xs text-white/80">
              21% More Than Last Month
            </p>
          </div>

          {/* Total Reviews */}
          <div className="flex flex-col items-center">
            <p className="text-xs text-white/70 mb-2">
              Total Reviews
            </p>

            <h3 className="text-4xl md:text-5xl font-bold mb-2">
              906K
            </h3>

            <p className="text-xs text-white/80">
              46% More Than Last Month
            </p>
          </div>

          {/* Active Apps */}
          <div className="flex flex-col items-center">
            <p className="text-xs text-white/70 mb-2">
              Active Apps
            </p>

            <h3 className="text-4xl md:text-5xl font-bold mb-2">
              132+
            </h3>

            <p className="text-xs text-white/80">
              31 More Will Launch
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Hero;
