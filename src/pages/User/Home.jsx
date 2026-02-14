import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../.././index.css'
import { Link } from 'react-router-dom';

// icons 



const Home = () => {
  return (
    <div className=''>

      {/* slider  */}
      <div id="slider" className='md:h-[70vh] mb-10 mt-4 relative z-0'>

        <Swiper
          spaceBetween={100}
          effect={'fade'}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          className="mySwiper border-gray-500 border rounded"
        >
          <SwiperSlide className=''>
            <img className='w-full h-full object-contain  md:object-cover ' src="https://res.cloudinary.com/ddd8w7qlf/image/upload/v1771043555/hjd1_zfhf4f.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-full h-full object-contain md:object-cover ' src="https://res.cloudinary.com/ddd8w7qlf/image/upload/v1771043553/hjd-4_fjsa6n.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-full h-full object-contain md:object-cover ' src="https://res.cloudinary.com/ddd8w7qlf/image/upload/v1771043557/hjd-5_dus1un.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-full h-full object-contain md:object-cover ' src="https://res.cloudinary.com/ddd8w7qlf/image/upload/v1771043556/hjd-7_cdirfh.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-full h-full object-contain md:object-cover ' src="https://res.cloudinary.com/ddd8w7qlf/image/upload/v1771043552/hjd-8_nklmm6.png" />
          </SwiperSlide>
        </Swiper>

      </div>

      <div id="hero-info" className='flex flex-wrap justify-between'>


        <div id="principal-info" className=' lg:basis-2/3 '>

          <div className='border border-gray-400 rounded m-4'>
            <img className='w-full h-96 overflow-hidden object-cover' src="https://res.cloudinary.com/ddd8w7qlf/image/upload/v1771046877/principal_cbwsze_edu8f0.jpg" alt="an principal image" />
          </div>

          <div className='px-6 font-sn '>
            <h2 className='font-gelica text-3xl md:text-4xl my-2  text-gray-700'>From The Desk Of Principal</h2>

            <hr />

            <p className='text-gray-500 leading-7 my-4 '>In <span className='text-gray-500 font-semibold'>2001</span>, <span className='text-gray-500 font-semibold text-xl'>Bhartiya Vidya Bhavan Jamnagar-Kendra</span> decided to enrich students of Jamnagar district with Information Technology field. In June-2002, we started Bhavan’s Shree H.J. Doshi Info. Tech. Inst. <span className='text-xl font-semibold text-gray-500'>(HJDITI)</span>, Jamnagar with only 18 students. <span className='text-xl font-semibold text-gray-500'>HJDITI is affiliated with Saurashtra University, Rajkot and approved by Gujarat Government.</span></p>

            <p className='text-gray-500 leading-7 my-4'>At present, the College has more than <span className='text-gray-500 text-xl font-semibold'>570+</span> students in various programs. It is housed in a spacious building with modern amenities and well-equipped laboratories with state-of-the-art hardware and software.</p>

            <p className='text-gray-500 leading-7 my-4'>The College has a growing, dynamic <span className='text-gray-500 text-xl font-semibold'>Faculties</span> having an experience of more than <span className='text-gray-500 text-xl font-semibold'>DECADE</span>. Our mission is to achieve academic excellence through innovative teaching and learning, quality research and enhanced development activities. The College has been continuously engaged in planning and implementing various kinds of education development activities for the pursuit of academic excellence with an eye towards the needs of the society, industries and the nation.There is no substitute for hard work. One can accomplish all pre-determined goal with positive attitude, right approach, and self-discipline.</p>

            <p className='text-gray-500 leading-7 my-4'>I assure, the combined efforts of the staffs and students play a vital role in ensuring that qualitative and innovative systems of learning are sustained and enhanced at HJDITI, Jamnagar.</p>

            <p className='text-gray-500 text-xl font-semibold tracking-normal leading-7 my-4'>“Let noble thoughts come to us from every side” -Rigveda:1-89-1</p>

            <p className='text-gray-500 text-xl font-medium leading-7 my-4 mt-14'>Dr. Tauseefkhan Pathan <br /> (Principal)</p>

          </div>

        </div>


        <div id="notice-info" className=' lg:basis-1/3 px-6 my-4  flex flex-col items-center'>

          <h2 className='text-4xl font-gelica text-gray-600 my-6'>  Notice zone   </h2>

          <hr />

          <ul>

            <li className='text-md my-3 font-sn text-gray-500 list-disc list-inside'> <Link>   Circular Regarding Library Books Submission </Link> </li>

            <hr />

            <li className='text-md my-3 font-sn text-gray-500 list-disc list-inside'> <Link>   Circular and Guidelines for HJD Biz Carnival-2026 </Link> </li>

            <hr />

            <li className='text-md my-3 font-sn text-gray-500 list-disc list-inside'> <Link>   Circular Regarding Sem-6 Internship Documents and Guide-List </Link> </li>

            <hr />

            <li className='text-md my-3 font-sn text-gray-500 list-disc list-inside'> <Link>  Circular Regarding BCA-1 Jan-2026 Exam Time Table</Link> </li>

            <hr />

            <li className='text-md my-3 font-sn text-gray-500 list-disc list-inside'> <Link> Circular Regarding Saraswati Saadhana 23-Jan-2026 </Link> </li>

            <hr />

            <li className='text-md my-4 font-sn text-gray-500 list-disc list-inside'> <Link>  Employment Notice From GTU </Link> </li>

            <hr />

            <li className='text-md my-4 font-sn text-gray-500 list-disc list-inside'> <Link>   Job For Lab-Assistant </Link> </li>

          </ul>

          <button className='bg-[#DCCCA6] px-4 py-2 font-sn rounded text-center cursor-pointer'>Read more</button>

        </div>

      </div>


    </div>
  )
}

export default Home
