import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/firebase.config";

const Login = () => {
    // declare a state to handle show password 
    const [showPassword, setShowPassword] = useState(false);
    // declare a state to get error 
    const [loginError, setLoginError] = useState('');
    // declare a state to store success 
    const [loginSuccess, setLoginSuccess] = useState('');

    //function to handle login
    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
        //clear state value 
        setLoginError('');
        setLoginSuccess('');
        // add validation 
        //go to firebase 
        signInWithEmailAndPassword(auth,email,password)
        .then(result =>{
            const prevUser = result.user;
            console.log(prevUser);
            setLoginSuccess('You have successfully logged in!');
        })
        .catch(error =>{
            setLoginError(error.message);
        })
    }
    return (
        <div className="bg-base-200">
            <div className="hero py-10 w-3/4 mx-auto">
                <div className="hero-content flex flex-col-reverse">
                    <div className="text-center lg:text-bottom">
                        <p>Already have account? 
                        <Link to='/register' className=" text-[#db2777] font-semibold"> Register</Link></p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="flex justify-center items-center">
                            <h1 className="text-3xl bg- font-bold text-[#db2777]">Login now</h1>
                        </div>
                        <form onSubmit={handleLogin}>
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
                            {/* terms and conditions checked  */}
                            {/* <div className="my-2 flex gap-2 items-center">
                                <input type="checkbox" name="terms" id="" className="my-1"/>
                                <label htmlFor="terms" className="text-xs mt-1 text-blue-900"> Accept our Terms & Conditions</label>
                            </div> */}
                            <label className="label">
                                <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                            </div>
                            <div className="form-control mt-4">
                            <button className="py-3 font-semibold rounded-xl bg-[#db2777] text-white hover:bg-pink-700">Login</button>
                            </div>
                        </form>
                        {/* showing error if any error occured */}
                        {
                            loginError && <p className="text-red-500 pt-2">{loginError}</p>
                        }
                        {/* showing success message  */}
                        {
                            loginSuccess && <p className="text-green-600 pt-2">{loginSuccess}</p>
                        }
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Login;