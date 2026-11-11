import React from "react";

const TrendingApps = ({ data }) => {
  const { image, title, ratingAvg, downloads, companyName } = data;

  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* App Image */}
      <div className="flex h-44 items-center justify-center rounded-xl bg-gray-100 p-4">
        <img
          src={image}
          alt={title}
          className="h-32 w-32 rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* App Information */}
      <div className="mt-4 space-y-2">
        <h2 className="truncate text-lg font-bold text-gray-800">{title}</h2>

        <p className="text-sm text-gray-500">{companyName}</p>

        {/* Rating and Downloads */}
        <div className="flex items-center justify-between gap-3 pt-3">
          {/* Rating */}
          <div className="flex items-center gap-1 rounded-lg bg-amber-50 px-3 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4 text-amber-500"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.418.434c1.164.093 1.636 1.546.748 2.37l-4.125 3.574 1.262 5.283c.271 1.137-.967 2.038-1.966 1.456L12 18.433l-4.631 2.9c-.999.582-2.237-.319-1.966-1.456l1.262-5.283-4.125-3.574c-.888-.824-.416-2.277.748-2.37l5.418-.434 2.082-5.006Z"
                clipRule="evenodd"
              />
            </svg>

            <span className="text-sm font-semibold text-gray-700">
              {ratingAvg}
            </span>
          </div>

          {/* Downloads */}
          <div className="flex items-center gap-1 rounded-lg bg-green-50 px-3 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4 text-green-600"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25a.75.75 0 0 1 .75.75v10.19l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75ZM3.75 19.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>

            <span className="text-sm font-semibold text-gray-700">
              {downloads >= 1000000
                ? `${(downloads / 1000000).toFixed(1)}M`
                : downloads >= 1000
                  ? `${(downloads / 1000).toFixed(1)}K`
                  : downloads}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingApps;
