import React, { useState } from "react";
import RatingChart from "../RatingChart/RatingChart";
import { addDataToLS } from "../../utilities/utilities";

const DetailsCard = ({ singleApp,Id }) => {
  
  const [instal, setInstal] = useState(false);
  const handleInstalBtn = (id) => {
    console.log("clicked");
    setInstal(true);
    addDataToLS(id)
  };

  const {
    image,
    title,
    ratingAvg,
    downloads,
    companyName,
    description,
    ratings,
    reviews,
    size,
  } = singleApp;

  // Format large numbers
  const formatNumber = (number) => {
    return new Intl.NumberFormat("en", {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(number);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* App Information Card */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* App Image */}
          <div className="shrink-0 flex justify-center">
            <img
              src={image}
              alt={title}
              className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-2xl border border-gray-100"
            />
          </div>

          {/* App Details */}
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold text-[#001931]">
              {title}
            </h1>

            <p className="text-gray-500 mt-2">
              Developed by{" "}
              <span className="text-purple-600 font-semibold">
                {companyName}
              </span>
            </p>

            <div className="border-t border-gray-200 my-5"></div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4">
              {/* Downloads */}
              <div>
                <p className="text-sm text-gray-500 mb-2">Downloads</p>
                <h2 className="text-2xl font-bold text-[#00B87A]">
                  {formatNumber(downloads)}
                </h2>
              </div>

              {/* Average Rating */}
              <div>
                <p className="text-sm text-gray-500 mb-2">Average Rating</p>
                <h2 className="text-2xl font-bold text-orange-500">
                  ⭐ {ratingAvg}
                </h2>
              </div>

              {/* Total Reviews */}
              <div>
                <p className="text-sm text-gray-500 mb-2">Total Reviews</p>
                <h2 className="text-2xl font-bold text-purple-600">
                  {formatNumber(reviews)}
                </h2>
              </div>
            </div>

            {/* Install Button */}
            <button
              onClick={()=>handleInstalBtn(Id) }
              disabled={instal}
              className={`mt-6 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold px-8 py-3 rounded-lg shadow-md
  ${instal ? "bg-gray-400 cursor-not-allowed opacity-60" : "hover:scale-105 transition-transform duration-200"}`}
            >
              {instal ? "Installed" : `Install Now (${size}MB)`}
            </button>
          </div>
        </div>

        {/* Ratings Section */}
        <div className="border-t border-gray-200 mt-8 pt-6">
          <h2 className="text-xl font-bold text-[#001931] mb-5">Ratings</h2>

          <RatingChart ratings={ratings} />
        </div>

        {/* Description Section */}
        <div className="border-t border-gray-200 mt-8 pt-6">
          <h2 className="text-xl font-bold text-[#001931] mb-3">Description</h2>

          <p className="text-gray-600 leading-7 text-justify">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
