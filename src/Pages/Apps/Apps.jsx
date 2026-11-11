import React, { useState } from "react";
import { useLoaderData } from "react-router";
import AllApps from "../../Components/AllApps/AllApps";

const Apps = () => {
  const [search, setSearch] =useState('');
  const [submitSearch, setSubmitSearch] = useState('');
  const appsData = useLoaderData();
  const filteredData = appsData.filter(data =>
  data.title.toLowerCase().includes(submitSearch.toLowerCase())
);
  console.log(filteredData)
// if(search!==(filteredData)){
//   alert("data not found")
// }
  return (
    <div>
      <div className=" text-center">
        <h2 className="font-bold text-2xl mt-4 mb-2">Our All Applications</h2>
        <p className="text-sm text-[#627382] mb-5">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        {/* Apps Count */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-800">
            <span className="text-purple-600">({appsData.length})</span> Apps
            Found
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Discover your favorite apps
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex w-full md:w-auto items-center gap-2 rounded-xl border border-gray-200 bg-white p-1.5 shadow-sm focus-within:border-purple-400 focus-within:ring-2 focus-within:ring-purple-100 transition-all">
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
        
            placeholder="Search your apps here..."
            className="min-w-0 flex-1 md:w-64 px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 outline-none bg-transparent"
          />

          <button onClick={()=> setSubmitSearch(search)} className="rounded-lg bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-purple-700 active:scale-95">
            Search
          </button>
        </div>
      </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-4">

  {filteredData.length > 0 ? (
    filteredData.map((data) => (
      <AllApps data={data} key={data.id} />
    ))
  ) : (
    <div className="col-span-full flex flex-col items-center justify-center py-16">
      <h2 className="text-3xl font-bold text-gray-700">
        No Apps Found!
      </h2>

      <p className="text-gray-500 mt-2">
        Sorry, we couldn't find any application matching "{search}".
      </p>
    </div>
  )}

</div>
    </div>
  );
};

export default Apps;
