import PropTypes from 'prop-types';
import swal from 'sweetalert';
// import { Link } from 'react-router-dom';

const FavoriteCard = ({phone}) => {
    //destructuring phone object
    const {id, phone_name, brand_name, image} = phone || {}

    // function to store phone data in local storage
    const handleRemoveFromFavorite = () =>{
        // console.log(phone);

        //declare an array to store phone data in local storage each time
        const addedFavoriteItem = [];//initially it will be an empty array
        

        //to get the data from local storage and the getItem() method take only one parameter which is the name of key
        //and parse data to get original
        const favoriteItems = JSON.parse(localStorage.getItem('favItems'));
        // console.log(favoriteItems);
        //if get favoriteItems then we will do something if not then do another thing
        if(!favoriteItems){ //if favoriteItems not found then we will set key pair for initially
            addedFavoriteItem.push(phone);
            swal("Good job!", "Product added successfully!", "success");
            // alert('added!');
            //now save the array into the local storage
            localStorage.setItem('favItems',JSON.stringify(addedFavoriteItem));
        }
        else{
            //when atleast one item is there in local storage

            //checking if item already has taken or not
            const isExists = favoriteItems.find(phone => phone.id === id);
            // console.log(isExists);
            if(!isExists){
                //now add items with previous items that was in the local storage
                addedFavoriteItem.push(...favoriteItems,phone)
                //now set to local storage
                localStorage.setItem('favItems',JSON.stringify(addedFavoriteItem));
            }
            else{
                // alert('added!');
                swal("", "Product already added!", "error");
            }
        }

        //now we want to save this phone 's information in local storage
        //local storage like an object which has a function named setItem()
        //setItem() receives two paramaters 1st is name of the storing data 2nd is value
        // and value has to be stringified 
        // localStorage.setItem('favItems', JSON.stringify([{name:'anu'},{name:'ph'}]))
    }

    return (
        <div className='mx-auto mb-8 p-6'>
            <div className="relative flex h-[500px] w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-2 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img
                    src={image}
                    className="h-full w-full object-cover"
                    />
                </div>
                <div className="px-6">
                    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                    {brand_name}
                    </h6>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {phone_name}
                    </h4>
                    <p className="mb-2 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                    Experience the future in your hands with our cutting-edge smartphone. Unleash limitless possibilities.
                    </p>
                </div>
                <button onClick={handleRemoveFromFavorite}
                        className="flex select-none items-center gap-2 rounded-lg py-3 pb-10 px-6 text-center align-middle font-sans font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        Remove from Favorite
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-4 w-4 text-2xl"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        ></path>
                        </svg>
                    </button>
            </div>
        </div>
    );
};

//Adding props
FavoriteCard.propTypes = {
    phone: PropTypes.object.isRequired
}
export default FavoriteCard;