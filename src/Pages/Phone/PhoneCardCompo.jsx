import PropTypes from 'prop-types';
import swal from 'sweetalert';
// import { Link } from 'react-router-dom';

const PhoneCardCompo = ({phone}) => {
    //destructuring phone object
    const {id, phone_name, brand_name, image, price} = phone || {}

    // function to store phone data in local storage
    const handleAddToFavorite = () =>{
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
                swal("Good job!", "Product added successfully!", "success");
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
        <div>
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md py-6">
                <div className="relative h-[300px] w-60 mx-auto shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                    src={image}
                    alt="image"
                    className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                    {brand_name}
                    </h6>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {phone_name}
                    </h4>
                    <p className="mb-2 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                    Experience the future in your hands with our cutting-edge smartphone. Unleash limitless possibilities, from stunning photography to lightning-fast performance. Elevate your life, one tap at a time.
                    </p>
                    <p className="block font-sans text-base font-bold leading-relaxed text-blue-gray-900 antialiased mb-8">
                            <span className='font-bold'>Price: </span>${price}
                        </p>
                    <button onClick={handleAddToFavorite}
                        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        Add to Favorite
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
                    {/* <Link to='../'>
                        <button
                        className="block w-40 mt-5 select-none rounded-lg bg-[#ec4899] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] text-white disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        >Go to Home</button>
                    </Link> */}
                </div>
                </div>
        </div>
    );
};

//Adding props
PhoneCardCompo.propTypes = {
    phone: PropTypes.object.isRequired
}
export default PhoneCardCompo;