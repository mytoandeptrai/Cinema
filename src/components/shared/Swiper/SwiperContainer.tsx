import * as React from 'react';
import { Link } from 'react-router-dom';
// import Swiper core and required modules
import { Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { movieConst } from '../../../constants/commonConstants';
import { IDetailMovie } from '../../../interfaces/types';

export interface ISwiperContainerProps {
    loading: boolean;
    grabCursor: boolean;
    spaceBetween: number;
    item: number;
    children?: React.ReactNode;
    movies: IDetailMovie[] | [];
    to: string;
}

export default function SwiperContainer({
    grabCursor,
    item,
    loading,
    spaceBetween,
    children,
    movies,
    to,
}: ISwiperContainerProps) {
    return (
        <>
            <Swiper
                modules={[Navigation]}
                navigation
                grabCursor={grabCursor}
                spaceBetween={spaceBetween}
                slidesPerView={item}
            >
                {movies.length > 0 &&
                    movies.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Link to={`${to}${item.id}`}>
                                <div className='swiper__movie-item'>
                                    <img
                                        src={`${movieConst.BASE_URL_FOR_IMAGE_POSTER}${
                                            item?.backdrop_path || item?.poster_path
                                        }`}
                                        alt='item'
                                        className='swiper__movie-img'
                                    />
                                    <p className='swiper__movie-title'>{item?.title}</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </>
    );
}
