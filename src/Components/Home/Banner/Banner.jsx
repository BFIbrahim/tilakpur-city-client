import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

const Banner = () => {
    return (
        <div>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper w-full h-96 image-full">
                <SwiperSlide>
                    <img className='w-full h-full ' src="https://i.postimg.cc/pdyLknmk/Banner.jpg" alt="" />
                </SwiperSlide>
                
                <SwiperSlide className='h-96'>
                    <img className='w-full h-full' src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/468448620_553960530569023_6198259510362877432_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFeCvtGiiQuhScM9iboTPN2-CBHKCQ0vbj4IEcoJDS9uMoX58JKRJo6BIVIWaL9UR09cBmtRZeUwLicTNnl5FvL&_nc_ohc=EtZ0egEJ4iMQ7kNvgH__tSI&_nc_zt=23&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=AP_ceWD8WvNggsol8mYDDRL&oh=00_AYDnS0Uv7oNISj0WMDgDLEVyjdEiqvzawj9m26TuyDt7Nw&oe=67732316" alt="" />
                </SwiperSlide>

                <SwiperSlide className='h-96'>
                    <img className='w-full h-full' src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/468325834_553612360603840_3510540781807103147_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEt1zPfdqp3r2L_OzvHSg-H7K3Su5imPcDsrdK7mKY9wCV9-QchYWe4_ZbctqIFERaGFaB5KK4O-pibQLXrkNaB&_nc_ohc=TdvxybB85mQQ7kNvgEknJW-&_nc_zt=23&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=Av6S93IHnGQYp4FkLfW-3vL&oh=00_AYAdU5PwIIB2oBXgCu1JqL26tDxZPTsQ086xoF_G1pdE7A&oe=6773396F" alt="" />
                </SwiperSlide>
                <SwiperSlide className='h-96'>
                    <img className='w-full h-full' src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/468309548_553612217270521_2706466869055723009_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGpHSnKloXNk9wN-6XqEwAouZzQ9q1OMOC5nND2rU4w4HqEqBsok4jKgBOym7n_l8XvLn_m0Vy8cOlNT0QqiABD&_nc_ohc=l_aZGnv1FXMQ7kNvgHrXYKk&_nc_zt=23&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=AahXd8V9jwiBrg-ZWgzgR61&oh=00_AYCXm6vPc91Jb2GPLQR_J0iTebb-pT8FePFHJupX-_5sAg&oe=6773317D" alt="" />
                </SwiperSlide>
                <SwiperSlide className='h-96'>
                    <img className='w-full h-full' src="https://i.postimg.cc/jSj8zbhM/field.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;