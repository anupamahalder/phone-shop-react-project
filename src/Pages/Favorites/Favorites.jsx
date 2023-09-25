import { useEffect, useState } from "react";
import FavoriteCard from "./FavoriteCard";

const Favorites = () => {
    //declare a state where we will store the phone's data 
    const [favorites, setFavorites] = useState([]);
    //declare a state to show no data found when local storage is empty
    const [noFound, setNoFound] = useState(false)
    //we will declare a state for see all button if clicked the true will become false else false become true the value will be maintained by the state
    const [isShowAll, setIsShowAll] = useState(false);

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
        //and setiing favorites item as empty array to show no products item in the screen
        setFavorites([]);
        //also want to see the no product found on screen
        setNoFound('No product is found!');
    }
    console.log(isShowAll);
    return (
        <>
        {/* if the length of favorites are greater than 0 then show a delete btn */}
        <div>
        <div>
            {favorites.length > 0 && <button onClick={handleRemoveFromFavorite}
            className="block w-40 mx-auto my-5 select-none rounded-lg bg-pink-500 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] text-white disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">Remove All Products</button>}
        </div>
        <div className="bg-gray-50">
            {/* getting data from local storage  */}
            {/* Now conditional rendering will be if data found then show favorites if not found then show no data found  */}
            {
                noFound ? <p className="h-[90vh] flex justify-center items-center text-center p-10 font-semibold text-xl">{noFound}</p>: 
                <div>
                    {
                        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {
                                //if showAll is true then show all data else conditional rendering and slice to show how many numbers of data we want to show
                                isShowAll ? favorites.map(phone => <FavoriteCard key={phone.id} phone={phone}></FavoriteCard>):
                                favorites.slice(0,3).map(phone => <FavoriteCard key={phone.id} phone={phone}></FavoriteCard>)
                            }
                        </div>
                    }
                </div>
            }
            {/* when clicked the button we will change the value of the state using arraow function to set the state*/}
            {
                <button onClick={() => setIsShowAll(!isShowAll)}
                className="block w-40 mx-auto my-5 select-none rounded-lg bg-pink-500 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] text-white disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button">
                    {isShowAll ? "See Less" : "See Less"}
                </button>
            }
        </div>
        </div>
        </>
    );
};

export default Favorites;