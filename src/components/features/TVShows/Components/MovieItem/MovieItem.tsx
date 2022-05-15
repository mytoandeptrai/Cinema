import * as React from 'react';
import { movieConst } from '../../../../../constants/commonConstants';
import { IDetailMovie } from '../../../../../interfaces/types';

export interface IMovieItemProps {
    data: IDetailMovie;
}

export default function MovieItem({ data }: IMovieItemProps) {
    return (
        <div className='movie__item swiper__movie-item'>
            <img
                src={`${movieConst.BASE_URL_FOR_IMAGE_POSTER}${
                    data?.backdrop_path || data?.poster_path
                }`}
                alt='src'
                className='movie__item-img'
            />
            <p className='movie__item-title swiper__movie-title'>
                {data.title ? data.title : data.name}
            </p>
        </div>
    );
}
