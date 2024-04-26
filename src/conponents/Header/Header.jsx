import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Header = () => {
    return (
        <div>
            <div className=" lg:container lg:mx-auto sm:container sm:mx-auto">
                <div className="font-bold mr-12">

                </div>
                <>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='slide slide1'> 
                                 
                                <div className='m-auto '>
                                    <h1 className='lg:text-7xl text-4xl md:text-5xl text-center text-green-600 m-auto font-bold  '>Painting & Drawing</h1>
                                    <p className='bg-black bg-opacity-20 rounded-lg p-2 lg:text-xl text-center m-auto md:w-2/3 text-white mt-5  '> Painting & Drawing Painting is a visual art, which is characterized by the practice of applying paint, pigment, color or other medium to a solid surface</p> 
                                </div> 
                            </div>
                             

                            </SwiperSlide>
                        <SwiperSlide><div className='slide slide2'>
                            <div className='m-auto'>
                                <h1 className='lg:text-7xl text-4xl md:text-5xl text-center text-green-600 m-auto font-bold'>Painting & Drawing</h1>
                                <p className='bg-black bg-opacity-20 rounded-lg p-2 lg:text-xl text-center m-auto md:w-2/3 text-white mt-5  '> Painting & Drawing Painting is a visual art, which is characterized by the practice of applying paint, pigment, color or other medium to a solid surface</p>

                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide> <div className='slide slide3'>
                            <div className='m-auto'>
                                <h1 className='lg:text-7xl text-4xl md:text-5xl text-center text-green-600 m-auto font-bold'>Painting & Drawing</h1>
                                <p className='bg-black bg-opacity-20 rounded-lg p-2 lg:text-xl text-center m-auto md:w-2/3 text-white mt-5  '>  Painting & Drawing Painting is a visual art, which is characterized by the practice of applying paint, pigment, color or other medium to a solid surface</p>

                            </div>
                        </div></SwiperSlide>

                    </Swiper>
                </>

            </div>
        </div>
    );
};

export default Header;