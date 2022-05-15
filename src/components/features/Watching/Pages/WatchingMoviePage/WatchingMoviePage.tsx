import axios from 'axios';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { movieConst } from '../../../../../constants/commonConstants';
import { IDetailMovie } from '../../../../../interfaces/types';
import Title from '../../../../global/Title/Title';
import VideoPlayer from '../../../../shared/VideoPlayer/VideoPlayer';
import SimilarColumn from '../../Component/SimilarColumn/SimilarColumn';

export interface IWatchingMoviePageProps {}

export default function WatchingMoviePage(props: IWatchingMoviePageProps) {
    const { movieId } = useParams();

    const [movieInfo, setMovieInfo] = React.useState<IDetailMovie | any>({});

    React.useEffect(() => {
        (async () => {
            const response = await axios.get(
                `${movieConst.BASE_URL}/movie/${movieId}?api_key=${movieConst.API_KEY}`
            );
            setMovieInfo(response.data);
        })();
    }, [movieId]);

    return (
        <div className='container'>
            <Title title={`${movieInfo?.title} | Watch`} />

            <div className='watching__container'>
                <div className='watching__wrap'>
                    <div className='watching__wrap-movie'>
                        <VideoPlayer
                            src={`${movieConst.BASE_URL_FOR_VIDEO}movie?id=${movieId}`}
                            title='Movie Player'
                        />
                    </div>
                    <div className='watching__info'>
                        <h1 className='watching__info-name'>{movieInfo?.title}</h1>
                        <p className='watching__info-overview'>{movieInfo?.overview}</p>
                        <p className='watching__info-releaseDate'>
                            Release date: {movieInfo?.release_date}
                        </p>
                    </div>
                    {/* Comment components  */}
                </div>
                <div className='watching__similarMovie'>
                    <SimilarColumn movieId={movieId} />
                </div>
            </div>
        </div>
    );
}
