import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner";
import Phones from "../../Components/Phones/Phones";
import { useState } from "react";
const Home = () => {
    // declare a state to get the value that user is searching for
    const [searchBtnClicked, setSearchBtnClicked] = useState(null);
    console.log("Inside home ",searchBtnClicked);
    //getting the data by calling useLoaderData() hook
    const phones = useLoaderData();
    // console.log(phones);
    return (
        <div>
            <Banner setSearchBtnClicked={setSearchBtnClicked}></Banner>
            {/* loading data in home and sending phones data as prop to phones component  */}
            {
                // conditional rendering 
                <Phones phones={phones} searchBtnClicked={searchBtnClicked}></Phones>
            }
        </div>
    );
};

export default Home;