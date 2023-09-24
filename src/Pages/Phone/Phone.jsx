import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import PhoneCardCompo from "./PhoneCardCompo";

const Phone = () => {
    //declare a state to store only one phone
    const [phone, setPhone] = useState({})
    //use a state to store value based on button clicked
    // const [isTrue, setIsTrue] = useState(false)

    //getting phone's id using useParams hook
    // const params = useParams()
    //destructure id 
    const {id} = useParams()
    // console.log(id); //{id: 4}
    // after getting id, using find method we can get the object 
    //now we have to get the phones data either using useEffect() or loader in route then useLoaderData()
    const phones = useLoaderData();
    // console.log(phones);
    //find the phone
    useEffect(()=>{
        const findPhone = phones?.find(phone => phone.id === id)
        // console.log(findPhone);
        setPhone(findPhone);
    },[id,phones])//[id,phones,isTrue] //when new id and phones comes then useEffect will be running again, isTrue is set by btn clicked so our data will be rendered again
    // console.log(phone);
    return (
        <div className="h-[80vh] py-10 flex justify-center items-center mx-auto">
            {/* <button onClick={() => setIsTrue(!isTrue)}>Hello btn</button> */}
            <PhoneCardCompo key={phone.id} phone={phone}></PhoneCardCompo>
        </div>
    );
};

export default Phone;