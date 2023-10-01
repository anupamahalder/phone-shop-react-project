import { Link } from "react-router-dom";
const Register = () => {
    return (
        <div className="bg-base-200">
            <div className="hero min-h-screen w-3/4 mx-auto">
                <div className="hero-content flex flex-col-reverse">
                    <div className="text-center lg:text-bottom">
                        <p>Already have account? 
                        <Link to='/login' className=" text-[#db2777]"> Login</Link></p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="flex justify-center items-center">
                            <h1 className="text-3xl bg- font-bold text-[#db2777]">Register now</h1>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="py-3 font-semibold rounded-xl bg-[#db2777] text-white hover:bg-pink-700">Register</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Register;