// routing system 
import { Link } from 'react-router-dom'
// icons 
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";


const Footer = () => {
  return (

    <>
      <footer>
        
        {/* top footer  */}
        <div id='top-footer' className='flex justify-center items-center gap-4 flex-wrap'>

          <div id="map">

            <iframe
              title='college location map' loading='lazy'
              className='rounded border border-gray-400 h-60'
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3686.598774792548!2d70.06232!3d22.481707!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39576aa8807c6ecf%3A0xdc38c612891ec83!2sBhavan&#39;s%20Shree%20H.%20J.%20Doshi%20Information%20Technology%20Institute!5e0!3m2!1sen!2sin!4v1770614792107!5m2!1sen!2sin" >
            </iframe>

          </div>

          <div id='contact-us' className=' sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4'>

            <ul className='text-center'>
              <li className='text-2xl lg:text-3xl font-bold leading-10'> Contact Us </li>
              <li className='font-medium lg:text-lg leading-7'>Mahila College Campus,
                Mahila College Road,
                Jamnagar - 361 008,
                GUJARAT, INDIA <br />
                Mail : hjditijam@gmail.com <br />
                Contact : +91  288  2752866</li>
            </ul>

          </div>

          <div id="social" className=''>
            <ul>
              <li className='mb-2'>
                <a href='https://www.facebook.com/HJDITOfficial' target='_blank' className=' flex justify-evenly items-center py-1 rounded '>
                  <FaFacebook className='text-3xl' /> <p className='text-lg font-medium'>Facebook</p>
                </a>
              </li>

              <li className='mb-2'>
                <a href='https://www.instagram.com/hjdinfotech/' target='_blank' className=' flex justify-evenly items-center py-1 rounded '>
                  <FaInstagramSquare className='text-3xl' /> <p className='text-lg font-medium'>Instagram</p>
                </a>
              </li>

              <li className='mb-2'>
                <a href='https://www.linkedin.com/company/bhavans-shree-h-j-doshi-info-tech-institute' target='_blank' className=' flex justify-evenly items-center py-1 rounded '>
                  <FaLinkedin className='text-3xl' /> <p className='text-lg font-medium'>LinkedIn</p>
                </a>
              </li>

              <li className='mb-2'>
                <a href='https://hjderp.onlinevidyalaya.net/Pages/BaseFramework/Security/Login.aspx?OrgGroupId=3880' target='_blank' className=' flex justify-evenly items-center py-1 px-1 rounded  '>
                  <IoLogIn className='text-3xl' /> <p className='text-lg font-medium'>Bhavan's ERP</p>
                </a>
              </li>

            </ul>
          </div>

          <div id="quick-links-1">
            <ul>
              <li className='text-lg font-medium leading-8'>
                <Link>Home</Link> </li>
              <li className='text-lg font-medium leading-8'>
                <Link>About Us</Link> </li>
              <li className='text-lg font-medium leading-8'>
                <Link>Home</Link> </li>
              <li className='text-lg font-medium leading-8'>
                <Link>Papers</Link></li>
              <li className='text-lg font-medium leading-8'>
                <Link>E-materials</Link></li>
              <li className='text-lg font-medium leading-8'>
                <Link>Usefull Links</Link></li>
            </ul>
          </div>

          <div id='quick-links-2'>
            <ul>
              <li className='text-lg font-medium leading-8'>
                <Link>Noticeboard</Link>  </li>
              <li className='text-lg font-medium leading-8'>
                <Link>Gallery</Link>  </li>
              <li className='text-lg font-medium leading-8'>
                <Link>Admission</Link> </li>
              <li className='text-lg font-medium leading-8'>
                <Link>Contact Us</Link> </li>
              <li className='text-lg font-medium leading-8'>
                <Link>Staff Login</Link> </li>
              <li className='text-lg font-medium leading-8'>
                <Link>Student Area</Link> </li>
            </ul>

          </div>

        </div>

        {/* horizontal line  */}
        <hr className='mt-8' />

        {/* bottom footer  */}
        <div id="bottom-footer" className='text-center my-4 text-sm md:text-base'>

          <p> <Link className='font-medium'>Terms & Condition</Link> | <Link className='font-medium'>Privacy Policy</Link> | <Link className='font-medium'>Refund Policy</Link> </p>

          <p className='font-medium'>© 2026 Bhavan's All rights reserved</p>
        </div>

      </footer>
    </>


  )
}

export default Footer
