import { Link } from "react-router-dom";
const Login = () => {
    //function to handle login
    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }
    return (
        <div className="bg-base-200">
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
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            </div>
                            <div className="form-control mt-6">
                            <button className="py-3 font-semibold rounded-xl bg-[#db2777] text-white hover:bg-pink-700">Login</button>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Login;