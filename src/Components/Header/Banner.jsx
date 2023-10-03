import { useState } from "react";

const Banner = () => {
    // declare a state 
    const [searchItem, setSearchItem]= useState(null);
    return (
        <div className="h-[50vh]">
            <img className="h-[50vh] bg-no-repeat brightness-50 w-full object-cover object-center" src='../../../public/banner.jpg'></img>
            <div className="h-[50vh] w-full mx-auto flex justify-center items-center absolute top-24">
                <div className=" flex justify-center items-center gap-2 mx-auto">
                    <input type="text" placeholder="Search your phone ..." className="input input-bordered input-secondary max-w-xs md:w-[500px]" />
                    <button onClick={() => setSearchItem('')}
                     className="bg-[#db2777] py-3 px-6 rounded-lg text-white font-semibold">SEARCH</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;