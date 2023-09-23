import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner";
import Phones from "../../Components/Phones/Phones";
const Home = () => {

    //getting the data using useLoaderData() hook
    const phones = useLoaderData();
    console.log(phones);
    return (
        <div>
            <Banner></Banner>
            <Phones></Phones>
        </div>
    );
};

export default Home;