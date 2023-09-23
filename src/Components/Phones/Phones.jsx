import PropType from 'prop-types';
import PhoneCard from './PhoneCard';
const Phones = ({phones}) => {
    console.log(phones);
    return (
        <div className='bg-gray-100 py-10 mx-auto'>
            <h1 className="text-2xl text-gray-900 font-bold text-center pb-7">All categories phones</h1>
            <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-4'>
                {/* Loop through the the phones array  */}
                {
                    phones?.map(phone => <PhoneCard key={phone.id} phone={phone}></PhoneCard>)
                }
            </div>
        </div>
    );
};

//Adding proptypes
Phones.propTypes = {
    phones: PropType.array.isRequired
}
export default Phones;