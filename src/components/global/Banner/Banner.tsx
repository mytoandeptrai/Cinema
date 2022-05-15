import axios from 'axios';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { movieConst } from '../../../constants/commonConstants';
import { IDetailMovie } from '../../../interfaces/types';

export interface IBannerProps {
    type: string;
}

export default function Banner({ type }: IBannerProps) {
    const [banner, setBanner] = React.useState<IDetailMovie | null>(null);

    const bannerButtons = React.useMemo(
        () => [
            {
                className: 'banner__info-link',
                to: `/watch/movie/${banner?.id}`,
                title: 'Watch Now',
            },
            {
                className: 'banner__info-link',
                to: `/details/movie/${banner?.id}`,
                title: 'View Info',
            },
        ],
        [banner]
    );

    React.useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(
                    `${movieConst.BASE_URL}/${type}/movie/week?api_key=${movieConst.API_KEY}`
                );
                const movies = response?.data?.results;
                const movie = movies[Math.floor(Math.random() * movies.length)];
                setBanner(movie);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [type]);

    return (
        <>
            {banner && (
                <div
                    className='banner'
                    style={{
                        backgroundImage: `url(${movieConst.BASE_URL_FOR_IMAGE}${
                            banner?.poster_path || banner?.backdrop_path
                        })`,
                    }}
                >
                    <div className='banner__content'>
                        <div className='banner__info'>
                            <h1 className='banner__info-title'>{banner?.title}</h1>
                            <p className='banner__info-overview'>{banner?.overview}</p>
                            <div className='banner__info-btn'>
                                {bannerButtons.map((btn, index) => (
                                    <Link to={btn.to} className={btn.className} key={index}>
                                        {btn.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className='banner__poster'>
                            <img
                                src={`${movieConst.BASE_URL_FOR_IMAGE_POSTER}${
                                    banner?.backdrop_path || banner?.poster_path
                                }`}
                                alt='src'
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
