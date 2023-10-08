import PropType from 'prop-types';
import PhoneCard from './PhoneCard';
import { useState } from 'react';
const Phones = ({phones, searchBtnClicked}) => {
    // console.log(phones);
    const matchedItem = [];
    // declare a state to maintain data length 
    const [dataLength, setDataLength] = useState(6);
    const [showAll, setShowAll] = useState(false);
    // storing matched ids 
    for(const phone of phones){
            if(phone.phone_name.toLowerCase().includes(searchBtnClicked)){
                matchedItem.push(phone);
            }
    }
    // console.log(matchedItem);
    return (
        <div className='bg-gray-50 py-10 mx-auto'>
            <h1 className="text-2xl text-gray-900 font-bold text-center pb-7">All categories phones</h1>
            <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-4'>
                {/* Loop through the the phones array  */}
                {
                    // searchBtnClicked==='' && 
                    // phones.length != 0 && 
                    // phones?.slice(0,3).map(phone => <PhoneCard key={phone.id} phone={phone}></PhoneCard>)
                }
                {
                    searchBtnClicked && matchedItem.length === 0 ? <p>No search item founds</p> :(
                    searchBtnClicked ? matchedItem?.map(phone => <PhoneCard key={phone.id} phone={phone}></PhoneCard>)
                    : 
                    (showAll ? phones.slice(0,dataLength).map(phone => <PhoneCard key={phone.id} phone={phone}></PhoneCard>):
                    phones.map(phone => <PhoneCard key={phone.id} phone={phone}></PhoneCard>)))
                    
                }
                
            </div>
                {
                    <div className='flex justify-center mx-auto'>
                    <button onClick={()=>setShowAll(!showAll)}
                     className='text-center bg-gray-200 font-semibold text-pink-600 rounded-lg py-3 px-3'>{
                        dataLength < phones.length  && showAll ?  "See All" : "See Less"
                    }</button>
                    </div>
                }
        </div>
    );
};

//Adding proptypes
Phones.propTypes = {
    phones: PropType.array.isRequired,
    searchBtnClicked: PropType.string,
}
export default Phones;