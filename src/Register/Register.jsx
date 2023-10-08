import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../Firebase/firebase.config";
import { useContext, useState } from "react";
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import swal from 'sweetalert';
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {

    // get info from context api 
    const authInfo = useContext(AuthContext);
    // destructure 
    const {createUser} = authInfo;

    //if there is any error like email already is in use
    const [registerError, setRegisterError] = useState('');
    //declare state to show success message
    const [registerSuccess, setRegisterSuccess] = useState('');
    //declare a state to toggle between show and hide password by default hidden 
    const [showPassword, setShowPassword] = useState(false);
    
    //handle function 
    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email,password)
        .then(result =>{
            swal("Good job!","You have successfully register!","success");
            console.log(result.user);
        })
        .catch(error =>{
            swal("Sorry!","Check your password/email and correct it!","error");
            console.log(error.message);
        })
    }
    return (
        <div className="bg-base-200 min-h-screen">
            <div className="hero py-10 w-3/4 mx-auto">
                <div className="hero-content flex flex-col-reverse">
                    <div className="text-center lg:text-bottom">
                        <p>Already have an account? 
                        <Link to='/login' className=" text-[#db2777] font-semibold"> Login</Link></p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="flex justify-center items-center">
                            <h1 className="text-3xl bg- font-bold text-[#db2777]">Register now</h1>
                        </div>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your name" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword?'text':'password'} name="password" placeholder="password" className="input input-bordered" required/> 
                            {
                                showPassword ?
                            <AiOutlineEye onClick={()=>setShowPassword(!showPassword)} className="absolute cursor-pointer right-11 mt-12"></AiOutlineEye>:
                            <AiOutlineEyeInvisible onClick={()=>setShowPassword(!showPassword)} className="absolute cursor-pointer right-11 mt-12"></AiOutlineEyeInvisible>
                            }
                            <div className="my-2 flex gap-2 items-center">
                                {/* terms and conditions checked  */}
                                <input type="checkbox" name="terms" id="" className="my-1"/>
                                <label htmlFor="terms" className="text-xs mt-1 text-blue-900"> Accept our Terms & Conditions</label>
                            </div>
                            {/* <label className="label mt-2">
                                <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label> */}
                            </div>
                            <div className="form-control mt-4">
                            <button className="py-3 font-semibold rounded-xl bg-[#db2777] text-white hover:bg-pink-700">Register</button>
                            </div>
                        </form>
                        {/* showing error if any error occured */}
                        {
                            registerError && <p className="text-red-500 pt-2">{registerError}</p>
                        }
                        {/* showing success message  */}
                        {
                            registerSuccess && <p className="text-green-600 pt-2">{registerSuccess}</p>
                        }
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Register;


//function handleRegister
// const handleRegister = e =>{
//     e.preventDefault();//to avoid reloading
//     console.log('form submitted!');
//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     const name = e.target.name.value;
//     const termsAccepted = e.target.terms.checked;
//     console.log(email, password, termsAccepted);
//     //reset error
//     setRegisterError('');
//     //reset success
//     setRegisterSuccess('');

//     //by default password is string so we can validate that given string is less than 6 or not
//     if(password.length < 6){
//         setRegisterError("Password should be at least 6 characters!");
//         return;
//     }
//     else if(!/[A-Z]/.test(password)){
//         setRegisterError('Password should have atleast one UPPER CASE character!');
//         return;
//     }
//     else if(!termsAccepted){ //if terms not accepted then do not allow to register
//         setRegisterError('Please accept our terms and conditions!');
//         return;
//     }
//     //create user, it a promise so then and catch
//     createUserWithEmailAndPassword(auth,email,password)
//     // then means success
//     .then(result =>{
//         const newUser = result.user;
//         swal("Good job!", "You logged in successfully!", "success");
//         setRegisterSuccess('You have registered successfully!');
//         // console.log(newUser);

//         // update profile 
//         updateProfile(newUser,{
//             displayName: {name},
//             photoURL: result.photoURL
//         })
//         .then(() => {
//             console.log('Profile updated!')
//         })
//         .catch(error =>{
//             console.log(error.message);
//         })

//         //send verification email
//         // sendEmailVerification(newUser)
//         // .then(()=>{
//         //     alert('Please check your email and verify the account!');
//         // })
//         // .catch(error =>{
//         //     setRegisterError(error.message);
//         // })
//     })
//     .catch(error =>{
//         // console.log(error);
//         //set error
//         setRegisterError(error.message);
//     })
// }