import axios, { AxiosResponse } from 'axios';
import * as React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { movieConst } from '../../../../../constants/commonConstants';
import { ICast, IDetailMovie, IGenre } from '../../../../../interfaces/types';
import Title from '../../../../global/Title/Title';
import Button from '../../../../shared/buttons/Button';
import FavoriteButton from '../../../../shared/buttons/FavoriteButton/FavoriteButton';
import SliderMovies from '../../../Home/components/SliderMovies/SliderMovies';
import Cast from '../../Components/Cast/Cast';
import ModalTrailer from '../../Components/ModalTrailer/ModalTrailer';

export interface IDetailMovieProps {}

export default function DetailMovie(props: IDetailMovieProps) {
    const { media_type, id } = useParams();
    const [movie, setMovie] = React.useState<IDetailMovie | any>({});
    const [cast, setCast] = React.useState<ICast[] | []>([]);
    const [showModal, setShowModal] = React.useState<boolean>(false);
    const [loading, setLoading] = React.useState<boolean>(false);
    const navigate = useNavigate();

    React.useEffect(() => {
        if (id || media_type) {
            setLoading(true);
            (async () => {
                try {
                    const response: AxiosResponse = await axios.get(
                        `${movieConst.BASE_URL}/${media_type}/${id}?api_key=${movieConst.API_KEY}`
                    );

                    const castResponse: AxiosResponse = await axios.get(
                        `${movieConst.BASE_URL}/${media_type}/${id}/credits?api_key=${movieConst.API_KEY}`
                    );
                    setMovie(response.data);
                    setCast(castResponse.data.cast);
                    setLoading(false);
                } catch (err) {
                    console.log(err);
                    navigate('/error-page');
                }
            })();
        }
    }, [id, media_type, navigate]);

    React.useEffect(() => {
        if (movie?.id) {
            /** Handle move movie to recently movie */
        }
    }, [movie]);

    return (
        <div>
            <Title title={`${movie?.name || movie?.title}`} />
            <div
                className='movie__detail'
                style={{
                    backgroundImage: `url(${movieConst.BASE_URL_FOR_IMAGE}${
                        movie?.backdrop_path || movie?.poster_path
                    })`,
                }}
            >
                <div className='container'>
                    <div className='movie__detail-content'>
                        <div className='movie__detail-poster'>
                            <img
                                src={`${movieConst.BASE_URL_FOR_IMAGE_POSTER}${
                                    movie?.poster_path || movie?.backdrop_path
                                }`}
                                alt='poster'
                                className={`movie__detail-img ${loading ? 'skeleton' : ''}`}
                            />
                        </div>

                        <div className='movie__detail-info'>
                            {loading ? (
                                <h1 className='mr-bottom-20px skeleton skeleton-text'>Loading</h1>
                            ) : (
                                <h1 className={`movie__detail-title`}>
                                    {movie?.name || movie?.title}
                                </h1>
                            )}
                            {loading ? (
                                <>
                                    <p className='skeleton skeleton-text'>Loading</p>
                                    <p className='skeleton skeleton-text'>Loading</p>
                                    <p className='skeleton skeleton-text'>Loading</p>
                                    <p className='skeleton skeleton-text last-child'>Loading</p>
                                </>
                            ) : (
                                <p className='movie__detail-overview'>{movie?.overview}</p>
                            )}
                            {loading ? (
                                <>
                                    <p className='mr-top-20px skeleton skeleton-text'>Loading</p>
                                </>
                            ) : (
                                <p className='movie__detail-release--date'>
                                    {movie?.release_date
                                        ? `Release date: ${movie?.release_date}`
                                        : `Last episode: ${movie?.last_air_date}`}
                                </p>
                            )}
                            <div className='movie__detail-genres'>
                                {movie?.genres?.map((item: IGenre) => (
                                    <Button key={item.id} content={item.name} />
                                ))}
                            </div>

                            <div className='movie__detail-ratings'>
                                <ReactStars count={10} size={movie?.vote_average} color='yellow' />
                                <div className='movie__detail-ratings--count'>{`(${movie?.vote_count} vote)`}</div>
                            </div>

                            <div className='movie__detail-watch'>
                                <Link
                                    className='movie__detail-link'
                                    to={
                                        media_type === 'tv'
                                            ? `/watch/tv/${id}/season/1/esp/1`
                                            : `/watch/movie/${id}`
                                    }
                                >
                                    Watch Now
                                </Link>
                                <span
                                    className='movie__detail-link'
                                    onClick={() => setShowModal(true)}
                                >
                                    Watch Trailer
                                </span>
                                <FavoriteButton
                                    className='movie__detail-link'
                                    movie={movie}
                                    media_type={media_type}
                                />
                                {/* <span className='movie__detail-link' onClick={() => handleAddToFavorite}>Add to Favorite</span> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <Cast loading={loading} cast={cast} />
                <SliderMovies media_type={media_type} id={id} />
                {showModal ? <ModalTrailer show={showModal} setShow={setShowModal} /> : null}
            </div>
        </div>
    );
}
