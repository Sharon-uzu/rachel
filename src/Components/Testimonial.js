import React from 'react'
import { FaStar } from "react-icons/fa";
import pix from '../Assets/testifier.png'
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
            <p> Hear from those who have worked with me and experienced the impact of my designs.</p>

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
                                        <h3>Christopher Okonkwo</h3>
                                        <h4>Software Engineer</h4>
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
                        <p>I have thoroughly reviewed the design and you exceeded my initial expectations.
                            Honestly, I didn't know what to expect at first but then I opened the link and I saw my ideas come to life.
                            I have added some comments here and there.
                            In the coming days, I will examine the PRD more closely to see how far we've come and how close we are to the game-changing moment.
                            I like doing things methodically, so not long after we have concluded the design and then developed it into a real MVP, I'll start taking feedback, and we'll start reiterating, modifying, and improving massively again. So I hope you'll stick around long after our first milestone.
                            Thank you, Racheal ✌
                        </p>
                    </div>
                </div>
            </SwiperSlide>

         

            {/* <SwiperSlide>
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
            </SwiperSlide> */}
            
        </Swiper>
    </div>
  )
}

export default Testimonial