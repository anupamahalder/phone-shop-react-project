import { useEffect, useState } from "react";
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

    // function to delete phone data in local storage
    const handleRemoveFromFavorite = () =>{
        //clear local stoarge
        localStorage.clear();
    }
    return (
        <>
        {/* if the length of favorites are greater than 0 then show a delete btn */}
        <div>
            {favorites.length > 0 && <button onClick={handleRemoveFromFavorite}
            className="block w-40 mx-auto my-5 select-none rounded-lg bg-[#ec4899] py-3 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] text-white disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">Remove All Products</button>}
        </div>
        <div className="bg-gray-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* getting data from local storage  */}
            {/* Now conditional rendering will be if data found then show favorites if not found then show no data found  */}
            {
                noFound ? <p className="h-[60vh] flex justify-center items-center text-center p-10 font-semibold text-xl">{noFound}</p>: 
                <div>
                    {
                        <div>
                            {/* map through the products that are saved in local storage  */}
                            {favorites.map(phone => <FavoriteCard key={phone.id} phone={phone}></FavoriteCard>)}
                        </div>
                    }
                </div>
            }
        </div>
        </>
    );
};

export default Favorites;