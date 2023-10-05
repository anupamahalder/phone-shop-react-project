import { useState } from "react";
import PropTypes from 'prop-types';

const Banner = ({setSearchBtnClicked}) => {
    // declare a state 
    const [searchItem, setSearchItem]= useState(null);
    const handleInputItem = e =>{
        const inputItem = e.target.value;
        // console.log(inputItem);
        setSearchItem(inputItem);
    }
    return (
        <div className="h-[60vh]">
            <img className="h-[60vh] bg-no-repeat brightness-50 w-full object-cover object-center" src='../../../public/banner.jpg'></img>
            <div className="h-[60vh] w-full mx-auto flex justify-center items-center absolute top-24">
                <div className=" flex justify-center items-center gap-2 mx-auto">
                    <input onChange={handleInputItem}
                     name="phoneInput" type="text" placeholder="Search your phone ..." className="input input-bordered input-secondary max-w-xs md:w-[500px]" />
                    <button onClick={() => setSearchBtnClicked(searchItem)}
                     className="bg-[#db2777] py-3 px-6 rounded-lg text-white font-semibold">SEARCH</button>
                </div>
            </div>
        </div>
    );
};

//Adding proptypes
Banner.propTypes ={
    setSearchBtnClicked: PropTypes.func.isRequired,
}
export default Banner;