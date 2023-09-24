import { useEffect, useState } from "react";
import PhoneCardCompo from "../Phone/PhoneCardCompo";
import FavoriteCard from "./FavoriteCard";

const Favorites = () => {
    //declare a state where we will store the phone's data 
    const [favorites, setFavorites] = useState([]);
    //declare a state to show no data found when local storage is empty
    const [noFound, setNoFound] = useState(false)
    //there can be side effect while getting things from browser so we will use useEffect
    useEffect(() => {
        const favoriteItems = JSON.parse(localStorage.getItem('favItems'));
        //set to favorites if favorite items exist
        if(favoriteItems){
            setFavorites(favoriteItems);
        }
        else{
            console.log('No data found!');
            setNoFound('No product is found!');
        }
    },[])
    return (
        <div className="min-h-[80vh] bg-gray-50">
            {/* getting data from local storage  */}
            {/* Now conditional rendering will be if data found then show favorites if not found then show no data found  */}
            {
                noFound ? <p className="h-[60vh] flex justify-center items-center text-center p-10 font-semibold text-xl">{noFound}</p>: 
                <div>
                    {
                        // map through the products that are saved in local storage 
                        favorites.map(phone => <FavoriteCard key={phone.id} phone={phone}></FavoriteCard>)
                    }
                </div>
            }
        </div>
    );
};

export default Favorites;