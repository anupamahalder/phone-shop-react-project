import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner";
import Phones from "../../Components/Phones/Phones";
const Home = () => {

    //getting the data by calling useLoaderData() hook
    const phones = useLoaderData();
    // console.log(phones);
    return (
        <div>
            <Banner></Banner>
            {/* loading data in home and sending phones data as prop to phones component  */}
            <Phones phones={phones}></Phones>
        </div>
    );
};

export default Home;