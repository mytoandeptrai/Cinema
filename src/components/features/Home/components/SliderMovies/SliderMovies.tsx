import axios from 'axios';
import * as React from 'react';
import { Link } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import { movieConst } from '../../../../../constants/commonConstants';
import useInnerWidth from '../../../../../hooks/useInnerWidth';
import useItemCalculate from '../../../../../hooks/useItemCalculate';
import { IDetailMovie } from '../../../../../interfaces/types';
import useStore from '../../../../../stores';
import Button from '../../../../shared/buttons/Button';
import SwiperContainer from '../../../../shared/Swiper/SwiperContainer';

export interface ISliderMoviesProps {
    type?: string;
    media_type?: string;
    id?: string;
}

export default function SliderMovies({ type, media_type, id }: ISliderMoviesProps) {
    const [movies, setMovies] = React.useState<IDetailMovie[] | []>([]);
    const { loading, setLoading } = useStore((state) => state);
    const width = useInnerWidth();

    const displayedItem = useItemCalculate();

    React.useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const URL =
                    type === movieConst.TRENDING
                        ? `${movieConst.BASE_URL}/trending/movie/week?api_key=${movieConst.API_KEY}`
                        : `${movieConst.BASE_URL}/movie/${type}?api_key=${movieConst.API_KEY}`;
                const URLSimilar =
                    media_type && id
                        ? `${movieConst.BASE_URL}/${media_type || 'tv'}/${id}/similar?api_key=${
                              movieConst.API_KEY
                          }`
                        : URL;
                const response = await axios.get(URLSimilar);
                setMovies(response.data.results);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        })();

        return () => {};
    }, [type, setLoading, id, media_type]);

    return (
        <div className='slider'>
            <div className='slider__info'>
                <h1 className='slider__info-title'>
                    {id && media_type ? 'Movie Similar' : 'Movie'} {type}
                </h1>
                <Link to={`/movie/${type}`}>
                    <Button content={'View more'} />
                </Link>
            </div>

            <SwiperContainer
                grabCursor={true}
                spaceBetween={20}
                item={displayedItem}
                loading={loading}
                movies={movies}
                to='/details/movie/'
            />
        </div>
    );
}
