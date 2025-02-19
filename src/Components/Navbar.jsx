import React, { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

function Navbar() {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            {/* Desktop Navbar */}
            <div className='hidden fixed top-0 left-0 w-full bg-white shadow-md z-50 md:flex justify-between p-7 items-center'>
                <div><img src="/logo.png" alt="logo" /></div>
                <ul className='flex justify-evenly gap-7 items-center'>
                    <li className="cursor-pointer hover:border-b-4 hover:border-black">Microsoft 365</li>
                    <li className="cursor-pointer hover:border-b-4 hover:border-black">Office</li>
                    <li className="cursor-pointer hover:border-b-4 hover:border-black">Copilot</li>
                    <li className="cursor-pointer hover:border-b-4 hover:border-black">Windows</li>
                    <li className="cursor-pointer hover:border-b-4 hover:border-black">Support</li>
                </ul>
                <div className='flex justify-evenly gap-3 items-center text-2xl'>
                    <AiOutlineSearch />
                    <IoCartOutline />
                    <CgProfile />
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className='fixed top-0 left-0 w-full bg-white shadow-md z-50 flex justify-between p-7 md:hidden items-center gap-5'>
                <div onClick={() => setToggle(!toggle)} className='text-2xl cursor-pointer'>
                    {toggle ? <RxCross1 /> : <FaBars />}
                </div>
                <div><img src="/logo.png" alt="logo" /></div>
                <div className='flex gap-3 text-2xl'>
                    <AiOutlineSearch />
                    <IoCartOutline />
                    <CgProfile />
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg p-5 transform ${toggle ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden z-40`}>
                <ul className='flex flex-col gap-5 text-lg mt-20'>
                    <li className="cursor-pointer hover:border-b-4 hover:border-black" onClick={() => setToggle(false)}>Microsoft 365</li>
                    <li className="cursor-pointer hover:border-b-4 hover:border-black" onClick={() => setToggle(false)}>Office</li>
                    <li className="cursor-pointer hover:border-b-4 hover:border-black" onClick={() => setToggle(false)}>Copilot</li>
                    <li className="cursor-pointer hover:border-b-4 hover:border-black" onClick={() => setToggle(false)}>Windows</li>
                    <li className="cursor-pointer hover:border-b-4 hover:border-black" onClick={() => setToggle(false)}>Support</li>
                </ul>
            </div>
        </>
    );
}


export default Navbar;
