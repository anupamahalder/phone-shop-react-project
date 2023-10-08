import { useContext, useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import swal from 'sweetalert';
import { AuthContext } from "../AuthProvider/AuthProvider";


const Login = () => {
    const {signInUser} = useContext(AuthContext);
    // declare a state to handle show password 
    const [showPassword, setShowPassword] = useState(false);
    // declare a state to get error 
    const [loginError, setLoginError] = useState('');
    // declare a state to store success 
    const [loginSuccess, setLoginSuccess] = useState('');
    // get a ref of email and initialize with null 
    const emailRef = useRef(null);

    //function to handle login
    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        // for login 
        signInUser(email,password)
        .then(result =>{
            swal("Good job!","You have successfully login!","success");
            console.log(result.user);
        })
        .catch(error =>{
            swal("Sorry!","You have failed to login!","error");
            console.log(error.message);
        })
        
    }
    // function to handle reset password
    const handleResetPassword = () =>{
        const email = emailRef.current.value;
        if(!email){
            alert("Please provide an email!");
            console.log('Please provide an email!');
            return;
        }
        else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
            alert('Please provide correct email!');
            return;
        }
        
        // console.log('send reset email', email);

        // send validation email 
        sendPasswordResetEmail(auth, email)
        .then(()=>{
            alert('Check your email!');
        })
        .catch(error =>{
            setLoginError(error.message);
        })
    }
    return (
        <div className="bg-base-200 min-h-screen">
            <div className="hero py-10 w-3/4 mx-auto">
                <div className="hero-content flex flex-col-reverse">
                    <div className="text-center lg:text-bottom">
                        <p>Do not have account? 
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
                            <input type="email" ref={emailRef} name="email" placeholder="email" className="input input-bordered" required/>
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
                                <Link onClick={handleResetPassword} className="label-text-alt link link-hover">Forgot password?</Link>
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