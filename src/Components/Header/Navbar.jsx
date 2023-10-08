import { NavLink } from "react-router-dom";
import { AiOutlineAlignRight, AiOutlineDown } from "react-icons/ai";
import Logo from "./Logo";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Navbar = () => {
    const {user,logOutUser} = useContext(AuthContext);
    //declare a state 
    const [open, setOpen] = useState(false);
    const handleSignOutBtn = () =>{
        logOutUser()
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    return (
        <div className="py-6 px-10 shadow-md">
            <nav className="flex justify-between items-center">
                <Logo></Logo>
                <div className="md:hidden text-pink-500 text-2xl" onClick={() =>
                setOpen(!open)}>
                    {
                        open === true ? <AiOutlineDown></AiOutlineDown>:<AiOutlineAlignRight></AiOutlineAlignRight>

                    }
                    {/* <AiOutlineClose></AiOutlineClose> */}
                </div>
                <ul className={`md:flex md:gap-4 absolute md:static ${open? "bg-white rounded-xl p-4 mt-40 right-12 z-10":"-top-40"}`}>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#db2777]" : ""
                            }
                            >
                            <h1 className="md:p-2 text-lg font-semibold">Home</h1>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/favorites"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#db2777]" : ""
                            }
                            >
                            <h1 className="md:p-2 text-lg font-semibold">Favorites</h1>
                        </NavLink>
                    </li>
                    <li>
                        {
                            user ? <div className="flex gap-2 justify-center items-center">
                            <span className="text-blue-700">{user.email}</span>
                            <h1 onClick={handleSignOutBtn} 
                            className="md:p-2 text-lg font-semibold cursor-pointer">Sign Out</h1>
                            </div>
                            :<NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#db2777]" : ""
                            }
                            >
                            <h1 className="md:p-2 text-lg font-semibold">Login</h1>
                        </NavLink>}
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;