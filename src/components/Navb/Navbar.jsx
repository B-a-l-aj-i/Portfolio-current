import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="w-full bg-white fixed z-[99] p-[1%]">
            <div className="flex justify-between items-center">
                <div className="max-w-[900px] pl-[7%] font-bold text-[1.6rem]">
                    <Link to="/" className="no-underline text-inherit">
                        <p>
                            <span className="inline-block w-[15px] h-[15px] bg-green-200 animate-rotate-square"> </span>
                            {" "}Balaji Mariappan{" "}
                        </p>
                    </Link>
                </div>

                <div className="w-[600px] pr-[5%] max-md:hidden">
                    <ul className="flex justify-evenly list-none">
                        <li className="font-extralight text-[1.2rem] cursor-pointer inline">
                            <NavLink to="/" end className={({ isActive }) => `no-underline inline-flex items-center justify-center min-w-[3.25rem] px-2 py-1.5 rounded-md text-sm text-center ${isActive ? "bg-green-100 text-green-800" : "text-inherit hover:bg-green-100 hover:text-green-800"}`}>
                                Home
                            </NavLink>
                        </li>
                        <li className="font-extralight text-[1.2rem] cursor-pointer inline">
                            <NavLink to="/techstack" className={({ isActive }) => `no-underline inline-flex items-center justify-center min-w-[3.25rem] px-2 py-1.5 rounded-md text-sm text-center ${isActive ? "bg-green-100 text-green-800" : "text-inherit hover:bg-green-100 hover:text-green-800"}`}>
                                Techstack
                            </NavLink>
                        </li>
                        <li className="font-extralight text-[1.2rem] cursor-pointer inline">
                            <NavLink to="/project" className={({ isActive }) => `no-underline inline-flex items-center justify-center min-w-[3.25rem] px-2 py-1.5 rounded-md text-sm text-center ${isActive ? "bg-green-100 text-green-800" : "text-inherit hover:bg-green-100 hover:text-green-800"}`}>
                                Project
                            </NavLink>
                        </li>
                        <li className="font-extralight text-[1.2rem] cursor-pointer inline">
                            <NavLink to="/contact" className={({ isActive }) => `no-underline inline-flex items-center justify-center min-w-[3.25rem] px-2 py-1.5 rounded-md text-sm text-center ${isActive ? "bg-green-100 text-green-800" : "text-inherit hover:bg-green-100 hover:text-green-800"}`}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
