import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div>
                <h1>You got an error!!!</h1>
                <Link to='/'>
                    <button className="p-2 mt-5 bg-pink-500 rounded-lg text-white">Go back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;