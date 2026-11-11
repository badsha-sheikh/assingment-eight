import React from 'react';
import Hero from '../../Components/Hero/Hero';
import { useLoaderData } from 'react-router';
import TrendingApps from '../../Components/TrendingApps/TrendingApps';

const Home = () => {
    const homeData = useLoaderData();
    console.log(homeData)
    return (
        <div>
            <Hero></Hero>
        <div className='text-center mt-6'>
                <h3 className='font-bold text-2xl'>Treading Apps</h3>
            <p className='text-[#627382] mt-2 mb-4 text-sm'>Explore All Trending Apps on the Market developed by us</p>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-4">
               {
                homeData.map(data=><TrendingApps data={data}></TrendingApps>)
            }
         </div>
        </div>
        </div>
    );
};

export default Home;