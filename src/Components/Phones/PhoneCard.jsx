import PropType from 'prop-types';
import { Link } from 'react-router-dom';
import { Rating } from '@mui/material';
const PhoneCard = ({phone}) => {
    //destructure and if object is not found then it will go for empty object
    const {id, phone_name, brand_name, image, price, rating} = phone || {};
    return (
        <div className='mx-auto mb-8'>
            <div className="relative flex h-[500px] w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-2 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img
                    src={image}
                    className="h-full w-full object-cover"
                    />
                </div>
                <div className="px-6">
                    <div className="flex items-center justify-between">
                        <p className="block font-sans leading-relaxed font-semibold text-blue-gray-900 antialiased">
                            <span className='font-semibold'>{brand_name}</span>
                        </p>
                        <p className="block font-sans text-base leading-relaxed text-blue-gray-900 antialiased"></p>
                        <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
                    </div>
                </div>
                <div className="px-6 py-2 h-24">
                    <div className="flex items-center justify-between">
                        <p className="block font-sans text-xl font-semibold leading-relaxed text-blue-gray-900 antialiased">
                            {phone_name}
                        </p>
                        <p className="block font-sans text-base font-bold leading-relaxed text-blue-gray-900 antialiased">
                            ${price}
                        </p>
                    </div>
                </div>
                <div className="p-6 pt-0">
                    {/* Using Link we can change the route easily dynamically */}
                    <Link to={`/phones/${id}`}>
                        <button
                        className="block w-full select-none rounded-lg bg-[#ec4899] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] text-white disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        >See Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

//Adding proptypes
PhoneCard.propTypes ={
    phone: PropType.object.isRequired
}
export default PhoneCard;