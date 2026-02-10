import React, { useState } from 'react'
import '../../../src/index.css'
import { FaBars } from "react-icons/fa6";
import logo from '../../assets/Images/User/logo.png'
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { IoMdArrowDropdown } from "react-icons/io";




const Header = () => {

    const [open, setOpen] = useState(false);


    return (
        <header className='font-sn  relative'>

            <div className='flex justify-between items-center'>

                <div id='logo'>
                    <Link to={'/'}>
                        <img
                            src={logo}
                            alt="An logo image"
                            className='w-16'
                        />
                    </Link>
                </div>

                {/* bar icon  */}
                <button
                    onClick={() => setOpen(!open)}
                    className="lg:hidden text-2xl"
                >
                    {open ? <FaTimes /> : <FaBars />}
                </button>

                {/* desktop menus  */}
                <div className='hidden lg:block '>
                    <nav>
                        <ul className='flex gap-8 justify-center w-full lg:text-base'>

                            <li>   <Link className=''>Home</Link>           </li>

                            <li>   <Link>Our Team</Link>       </li>

                            <li>   <Link>Courses</Link>        </li>

                            <li className='group relative'>

                                <Link className='flex items-center gap-3 cursor-pointer'>Gallery <IoMdArrowDropdown />
                                </Link>

                                <div className='absolute top-6 px-2 py-1 rounded border text-sm hidden group-hover:flex flex-col w-20 '>
                                    <Link className=''>Gallery</Link>
                                    <Link className=''>Video</Link>
                                </div>

                            </li>

                            <li>   <Link>Notice Board</Link>   </li>

                            <li className='group relative'>

                                <Link className='flex items-center gap-3 cursor-pointer'>
                                    Usefull <IoMdArrowDropdown />
                                </Link>

                                <div className='absolute top-6 py-1 px-2 rounded border text-sm hidden group-hover:flex flex-col gap-1 w-30 '>
                                    <Link className=''>Admission</Link>
                                    <Link className=''>Usefull Links</Link>
                                    <Link className=''>Old Exam paper</Link>
                                    <Link className=''>E-material</Link>
                                </div>

                            </li>

                            <li className='group relative'>

                                <Link className='flex items-center gap-3 cursor-pointer'>
                                    IQAC <IoMdArrowDropdown />
                                </Link>

                                <div className='absolute top-6 py-1 px-2 rounded border text-sm hidden group-hover:flex flex-col gap-1 w-36 '>
                                    <Link className=''>Comittie</Link>
                                    <Link className=''>Vision and Mission</Link>
                                </div>


                            </li>

                            <li className='group relative'>

                                <Link className='flex items-center gap-3 cursor-pointer'>
                                    Facilities <IoMdArrowDropdown />
                                </Link>

                                <div className='absolute top-6 py-1 px-2 rounded border text-sm hidden group-hover:flex flex-col gap-1 w-24 '>
                                    <Link className=''>Lab</Link>
                                    <Link className=''>Library</Link>
                                </div>

                            </li>

                            <li>   <Link>Contact us</Link>     </li>

                        </ul>
                    </nav>
                </div>


            </div>

            {/* mobile menus  */}
            {open &&
                <nav className="lg:hidden bg-white border-gray-500 rounded  w-full text-center ">
                    <ul className='flex flex-col items-center gap-3 px-4 py-4'>
                        <li>   <Link>Home</Link>             </li>

                        <li>   <Link>Our Team</Link>         </li>

                        <li>   <Link>Courses</Link>          </li>

                        <li className='group relative'>

                            <Link className='flex items-center gap-3 cursor-pointer'>
                                Gallery  <IoMdArrowDropdown />
                            </Link>

                            <div className='absolute top-6 -left-2 z-10 bg-white hidden rounded border 
                            group-focus-within:flex flex-col gap-1 w-26 text-left px-2 py-1 '>
                                <Link className=''>Gallery</Link>
                                <Link className=''>Video</Link>
                            </div>
                        </li>

                        <li>   <Link>Notice Board</Link>     </li>

                        <li className='group relative'>

                            <Link className='flex items-center gap-3 cursor-pointer'>
                                Usefull  <IoMdArrowDropdown />
                            </Link>

                            <div className='absolute top-6 -left-2 z-10 bg-white hidden rounded border 
                            group-focus-within:flex flex-col gap-1 w-32 text-left px-2 py-1 '>
                                <Link className=''>Admission</Link>
                                <Link className=''>Usefull Links</Link>
                                <Link className=''>Old Exam Papers</Link>
                                <Link className=''>E-material</Link>
                            </div>

                        </li>

                        <li>   <Link>IQAC</Link>             </li>

                        <li className='group relative'>

                            <Link className='flex items-center gap-3 cursor-pointer'>
                                Facility  <IoMdArrowDropdown />
                            </Link>

                            <div className='absolute top-6 -left-2 z-10 bg-white hidden rounded border 
                            group-focus-within:flex flex-col gap-1 w-32 text-left px-2 py-1 '>
                                <Link className=''>Lab</Link>
                                <Link className=''>Library</Link>
                            </div>

                        </li>

                        <li>   <Link>Contact us</Link>       </li>

                    </ul>
                </nav>
            }

        </header>
    )
}

export default Header
