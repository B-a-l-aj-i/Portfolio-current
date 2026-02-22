import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import BottomSheet from "../BottomSheet/BottomSheet";

function Navbar() {
    const [isSheetOpen, setIsSheetOpen] = useState(false);

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

                <div className="w-[600px] pr-[5%] max-md:w-auto max-md:pr-[5%] flex max-md:justify-end">
                    <div className="max-md:hidden w-full">
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
                    <button
                        type="button"
                        className="md:hidden p-2 rounded-md hover:bg-green-100 text-inherit"
                        onClick={() => setIsSheetOpen(true)}
                        aria-label="Open menu"
                    >
                        <HiOutlineMenu size={28} />
                    </button>
                </div>
            </div>
            <BottomSheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)} />
        </nav>
    );
}

export default Navbar;
