import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-blue-400 underline" : ""
                        }
                        >
                        <h1 className="p-2">Home</h1>
                    </NavLink>
                </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;