import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";

import punk1 from '../../public/NFTIcons/1.png'
import punk2 from '../../public/NFTIcons/2.png'
import punk3 from '../../public/NFTIcons/3.png'
import punk4 from '../../public/NFTIcons/4.png'
import punk5 from '../../public/NFTIcons/5.png'
import punk6 from '../../public/NFTIcons/6.png'
import punk7 from '../../public/NFTIcons/7.png'
import punk8 from '../../public/NFTIcons/8.png'


// export default class MultipleItems extends Component {
//     render() {
//         const settings = {
//             dots: true,
//             infinite: true,
//             speed: 500,
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             rows: 2,
//             slidesPerRow: 2
//         };
//         const icons = [punk1, punk2, punk3, punk4, punk5, punk6, punk7, punk8];
//         return (
//             <div>
//                 <h2> TOP NFTs IN THE COLLECTION </h2>
//                 <Slider {...settings}>
//                     {icons.map((item, index) => {
//                         return <div key={index}>
//                             <Image src={item} alt={'1'} width={294} height={294} />
//                         </div>
//                     })}
//                 </Slider>
//             </div>
//         );
//     }
// }

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
    const icons = [punk1, punk2, punk3, punk4, punk5, punk6, punk7, punk8];
    return (
        <>
            <h1>TOP NFTs </h1>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >

                {icons.map((item, index) => {
                    return (
                        <SwiperSlide>
                            <Image src={item} alt={index} width={294} height={294} />
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </>
    );
};