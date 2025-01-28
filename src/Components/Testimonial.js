import React from 'react'
import { FaStar } from "react-icons/fa";
import pix from '../Assets/Avatar.png'
import quote from '../Assets/quote-down.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonial = () => {
  return (
    <div className='testimonial'>
        <div className="test-txt">
            <h2>What My <span>Clients</span> says</h2>
            <p> I lead design projects at Harvoxx Tech Hub, where I strive to improve user engagement and satisfaction.</p>

        </div>
        
        <Swiper
        className='tests'
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          // When the screen is >= 768px, show 2 slides
          768: {
            slidesPerView: 2,
          },
        }}
        navigation
        pagination={{ clickable: true }}
      >
            <SwiperSlide>
                <div className="test1">
                    <div className="test1-c">
                        <div className="t-first">
                            <div className="t-left">
                                <div className="t-top">
                                    <img src={pix} alt="" />
                                    <div>
                                        <h3>Fawzi Sayed</h3>
                                        <h4>UIUX Designer</h4>
                                    </div>
                                    
                                </div>

                                <div className="t-icons">
                                    <FaStar className='t-i'/>
                                    <FaStar className='t-i'/>
                                    <FaStar className='t-i'/>
                                    <FaStar className='t-i'/>
                                    <FaStar className='t-i'/>
                                    <span>5.0</span>
                                </div>

                            </div>

                            <img src={quote} alt="" />
                        </div>
                        <p>consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="test1">
                    <div className="test1-c">
                        <div className="t-first">
                            <div className="t-left">
                                <div className="t-top">
                                    <img src={pix} alt="" />
                                    <div>
                                        <h3>Fawzi Sayed</h3>
                                        <h4>UIUX Designer</h4>
                                    </div>
                                    
                                </div>

                                <div className="t-icons">
                                    <FaStar className='t-i'/>
                                    <FaStar className='t-i'/>
                                    <FaStar className='t-i'/>
                                    <FaStar className='t-i'/>
                                    <FaStar className='t-i'/>
                                    <span>5.0</span>
                                </div>

                            </div>

                            <img src={quote} alt="" />
                        </div>
                        <p>consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="test1">
                    <div className="test1-c">
                        <div className="t-first">
                            <div className="t-left">
                                <div className="t-top">
                                    <img src={pix} alt="" />
                                    <div>
                                        <h3>Fawzi Sayed</h3>
                                        <h4>UIUX Designer</h4>
                                    </div>
                                    
                                </div>

                                <div className="t-icons">
                                    <FaStar className='t-i'/>
                                    <FaStar className='t-i'/>
                                    <FaStar className='t-i'/>
                                    <FaStar className='t-i'/>
                                    <FaStar className='t-i'/>
                                    <span>5.0</span>
                                </div>

                            </div>

                            <img src={quote} alt="" />
                        </div>
                        <p>consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
            </SwiperSlide>
            
        </Swiper>
    </div>
  )
}

export default Testimonial