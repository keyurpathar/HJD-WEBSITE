import React, { useState } from 'react'
import '../../../src/index.css'
import { FaBars } from "react-icons/fa6";
import logo from '../../assets/Images/User/logo.png'
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';



const Header = () => {

    const [open, setOpen] = useState(false);

    return (
        <header className='font-poppins relative'>

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
                    className="md:hidden text-2xl"
                >
                    {open ? <FaTimes /> : <FaBars />}
                </button>

                {/* desktop menus  */}
                <div className='hidden md:block '>
                    <nav>
                        <ul className='flex gap-2 justify-center w-full md:text-base'>
                            <li><Link>Home</Link></li>
                            <li><Link>Our Team</Link></li>
                            <li><Link>Courses</Link></li>
                            <li><Link>Gallery</Link></li>
                            <li><Link>Notice Board</Link></li>
                            <li><Link>Usefull</Link></li>
                            <li><Link>IQAC</Link></li>
                            <li><Link>Facility</Link></li>
                            <li><Link>Contact us</Link></li>
                        </ul>
                    </nav>
                </div>


            </div>

            {/* mobile menus  */}
            {open &&
                <nav className="md:hidden bg-white shadow-md  w-full text-center ">
                    <ul className='flex flex-col items-center gap-3 px-4 py-4'>
                        <li><Link>Home</Link></li>
                        <li><Link>Our Team</Link></li>
                        <li><Link>Courses</Link></li>
                        <li><Link>Gallery</Link></li>
                        <li><Link>Notice Board</Link></li>
                        <li><Link>Usefull</Link></li>
                        <li><Link>IQAC</Link></li>
                        <li><Link>Facility</Link></li>
                        <li><Link>Contact us</Link></li>
                    </ul>
                </nav>
            }

        </header>
    )
}

export default Header
