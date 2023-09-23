import PropType from 'prop-types';
import PhoneCard from './PhoneCard';
const Phones = ({phones}) => {
    console.log(phones);
    return (
        <div>
            <h1 className="text-2xl text-gray-600 font-bold text-center py-7">All categories phones</h1>
            <div>
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