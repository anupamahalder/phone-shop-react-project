import { NavLink } from "react-router-dom";
import Logo from "./Logo";
const Navbar = () => {
    return (
        <div className="py-6 px-10 shadow-md">
            <nav className="flex justify-between items-center">
                <Logo></Logo>
                <ul className="flex gap-4">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#db2777] underline" : ""
                        }
                        >
                        <h1 className="p-2 font-semibold">Home</h1>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/favorites"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#db2777] underline" : ""
                        }
                        >
                        <h1 className="p-2 font-semibold">Favorites</h1>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#db2777] underline" : ""
                        }
                        >
                        <h1 className="p-2 font-semibold">Login</h1>
                    </NavLink>
                </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;