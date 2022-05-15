import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { commonConst, movieConst } from '../../../../../constants/commonConstants';
import useInfinityQuery from '../../../../../hooks/useInfinityQuery';
import { IDetailMovie } from '../../../../../interfaces/types';
import Skeleton from '../../../../global/Skeleton/Skeleton';
import Title from '../../../../global/Title/Title';
import ScrollToTopButton from '../../../../shared/buttons/ScrollToTopButton/ScrollToTopButton';
import MovieItem from '../../Components/MovieItem/MovieItem';

const TVShowPage = () => {
    const [totalPage, setTotalPage] = useState(0);
    const [movies, setMovies] = useState<IDetailMovie[] | []>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [firstLoad, setFirstLoad] = useState<boolean>(false);
    const { buttonRef, page } = useInfinityQuery(firstLoad);

    useEffect(() => {
        setIsLoading(true);
        (async () => {
            try {
                const response = await axios.get(
                    `${movieConst.BASE_URL}/tv/on_the_air?api_key=${movieConst.API_KEY}&page=${page}`
                );
                setMovies([...movies, ...response.data.results]);
                setTotalPage(response.data.total_pages);
                setFirstLoad(true);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [page]);

    return (
        <div className='margin-top container'>
            <Title title={commonConst.TV_SHOWS} />
            <div className='grid-layout grid-gap-20px-20px'>
                {!isLoading ? (
                    movies?.map((movie) => (
                        <Link key={movie.id} to={`/details/tv/${movie.id}`}>
                            <MovieItem data={movie} />
                        </Link>
                    ))
                ) : (
                    <>
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </>
                )}
            </div>
            <ScrollToTopButton />
            {page < totalPage && (
                <button ref={buttonRef} className='button__load-more'>
                    Load More
                </button>
            )}
        </div>
    );
};

export default TVShowPage;
