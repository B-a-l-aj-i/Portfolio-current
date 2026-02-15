import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="w-full bg-white fixed z-[99] p-[1%]">
            <div className="flex justify-between items-center">
                <div className="max-w-[900px] pl-[7%] font-bold text-[1.6rem]">
                    <Link to="/" className="no-underline text-inherit">
                        <p>
                            <span className="inline-block w-[15px] h-[15px] bg-[rgb(156,212,231)] animate-rotate-square"> </span>
                            {" "}BALAJI{" "}
                            <span className="font-extralight text-[1.2rem] tracking-[0.3rem]">/ Frontend Developer</span>
                        </p>
                    </Link>
                </div>

                <div className="w-[600px] pr-[5%] max-md:hidden">
                    <ul className="flex justify-evenly list-none">
                        <li className="font-extralight text-[1.2rem] cursor-pointer inline">
                            <NavLink to="/" end className={({ isActive }) => `no-underline ${isActive ? "text-[rgb(70,70,255)]" : "text-inherit hover:text-[rgb(112,112,255)]"}`}>
                                Home
                            </NavLink>
                        </li>
                        <li className="font-extralight text-[1.2rem] cursor-pointer inline">
                            <NavLink to="/techstack" className={({ isActive }) => `no-underline ${isActive ? "text-[rgb(70,70,255)]" : "text-inherit hover:text-[rgb(112,112,255)]"}`}>
                                Techstack
                            </NavLink>
                        </li>
                        <li className="font-extralight text-[1.2rem] cursor-pointer inline">
                            <NavLink to="/project" className={({ isActive }) => `no-underline ${isActive ? "text-[rgb(70,70,255)]" : "text-inherit hover:text-[rgb(112,112,255)]"}`}>
                                Project
                            </NavLink>
                        </li>
                        <li className="font-extralight text-[1.2rem] cursor-pointer inline">
                            <NavLink to="/contact" className={({ isActive }) => `no-underline ${isActive ? "text-[rgb(70,70,255)]" : "text-inherit hover:text-[rgb(112,112,255)]"}`}>
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
