import PropTypes from 'prop-types';
// import swal from 'sweetalert';
// import { Link } from 'react-router-dom';

const FavoriteCard = ({phone}) => {
    //destructuring phone object
    const {phone_name, brand_name, image} = phone || {}

    return (
        <div className='mx-auto p-6'>
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
                <button
                        className="flex select-none text-xs items-center gap-2 rounded-lg py-3 mb-6 px-6 text-center align-middle font-sans font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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