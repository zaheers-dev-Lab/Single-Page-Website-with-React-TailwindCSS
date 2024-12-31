import { Pagination, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function FirstComponent() {
    return (
        <div className="bg-[#EEEEEE] w-full flex flex-col items-center pt-2 pb-2 md:pt-10 md:pb-10" >
            <div className="w-[95%] md:w-[100%] md:p-2 lg:w-[75%]" >
                <Swiper
                    modules={[Pagination, A11y, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay:3000,
                        disableOnInteraction:false
                    }}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <div className='flex gap-x-5 flex-col md:flex-row' >
                            <div className='flex flex-col gap-y-5 w-full  md:w-1/2 items-start justify-center '>
                                <h3 className=' text-2xl md:text-3xl lg:text-4xl font-semibold text-[#Ed7722] md:w-5/6 w-full ' >Redefining Healthcare BPO and Healthcare Marketing Services</h3>
                                <p className='text-lg md:text-xl lg:text-2xl font-semibold text-[#1b3761]' >Get Affordables Solutions and Tangible Outcomes</p>
                                <p className=' border-solid border-l-4 border-[#1b3761] pl-3'>Experience Personalized Healthcare BPO and digital marketing services that ensure faster turnarounds and reduced cost. We are outsourcing and automation experts who help business and enhance operational efficiency and financial growth.</p>
                                <button className='mt-10 text-left bg-[#1b3761] text-white p-1 pl-3 pr-3 rounded-full hover:bg-[#ed7722]' >Get Free Consultation</button>
                            </div>
                            <div className='w-full md:w-1/2 mt-10 md:mt-0' >
                                <img src="https://logicbpo.com/wp-content/uploads/2024/06/image_3-1008x1024.webp" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex gap-x-5 flex-col md:flex-row' >
                            <div className='flex flex-col gap-y-5 w-full  md:w-1/2 items-start justify-center '>
                                <h3 className=' text-2xl md:text-3xl lg:text-4xl font-semibold text-[#Ed7722] md:w-5/6 w-full ' >Experience Data-Driven Healthcare Digital Marketing Solutions</h3>
                                <p className='text-lg md:text-xl lg:text-2xl font-semibold text-[#1b3761]' >Based on Decade Long Experience & Solid Evidence</p>
                                <p className=' border-solid border-l-4 border-[#1b3761] pl-3'>Grow your practice online with strategic healthcare digital marketing solutions proven to increase patient appointments and thus the revenue for small to large healthcare organizations.</p>
                                <button className='mt-10 text-left bg-[#1b3761] text-white p-1 pl-3 pr-3 rounded-full hover:bg-[#ed7722]' >Hire Digital Marketing Expert</button>
                            </div>
                            <div className='w-full md:w-1/2 mt-10 md:mt-0 flex justify-end' >
                                <img className='w-4/5'  src="https://logicbpo.com/wp-content/uploads/2024/06/image-1-850x1024.webp" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex gap-x-5 flex-col md:flex-row' >
                            <div className='flex flex-col gap-y-5 w-full  md:w-1/2 items-start justify-center '>
                                <h3 className=' text-2xl md:text-3xl lg:text-4xl font-semibold text-[#Ed7722] md:w-5/6 w-full ' >Healthcare BPO Solutions with Expedited ROIs and Affordable Costs</h3>
                                <p className='text-lg md:text-xl lg:text-2xl font-semibold text-[#1b3761]' >Uplift your healthcare facility in Record Time</p>
                                <p className=' border-solid border-l-4 border-[#1b3761] pl-3'>Say goodbye to your nontechnical tasks and cut down your healthcare overheads 67% by outsourcing our healthcare BPO solutions guaranteed to increase efficiency and speed up healthcare operations.</p>
                                <button className='mt-10 text-left bg-[#1b3761] text-white p-1 pl-3 pr-3 rounded-full hover:bg-[#ed7722]' >Talk to Healthcare BPO Expert</button>
                            </div>
                            <div className='w-full md:w-1/2 mt-10 md:mt-0 flex justify-end' >
                                <img className='w-4/5'  src="https://logicbpo.com/wp-content/uploads/2024/06/image-786x1024.webp" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='className="w-[95%] md:w-[100%] md:p-2 lg:w-[75%] mt-4 flex justify-center' >
                <img src="https://logicbpo.com/wp-content/uploads/2024/01/Logos-3-1024x123.webp" alt="" />
            </div>
        </div>
    )
}