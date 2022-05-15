import * as React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import { movieConst } from '../../../../../constants/commonConstants';
import { ISeason, IEpisode } from '../../../../../interfaces/types';
import Title from '../../../../global/Title/Title';
import VideoPlayer from '../../../../shared/VideoPlayer/VideoPlayer';
import SimilarColumn from '../../Component/SimilarColumn/SimilarColumn';
export default function WatchingTVPage() {
    const { movieId, season, esp } = useParams();

    const [seasonTv, setSeasonTv] = React.useState<any>(1);
    const [espTv, setEspTv] = React.useState<any>(1);
    const [seasonData, setSeasonData] = React.useState<ISeason[] | []>([]);
    const [espData, setEspData] = React.useState<IEpisode[] | []>([]);
    console.log('🚀 ~ file: WatchingTVPage.tsx ~ line 16 ~ WatchingTVPage ~ espData', espData);
    const [seasonCurrent, setSeasonCurrent] = React.useState();
    const [espCurrent, setEspCurrent] = React.useState<IEpisode | any>({});
    const [nameTv, setNameTv] = React.useState<string>('');

    React.useEffect(() => {
        if (esp || season) {
            setEspTv(esp);
            setSeasonTv(season);
        }
    }, [esp, season]);

    React.useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(
                    `${movieConst.BASE_URL}/tv/${movieId}?api_key=${movieConst.API_KEY}`
                );
                setSeasonData(response.data.seasons);
                setNameTv(response.data.name);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [movieId]);

    React.useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(
                    `${movieConst.BASE_URL}/tv/${movieId}/season/${season}/episode/${esp}?api_key=${movieConst.API_KEY}`
                );
                setEspCurrent(response.data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [esp, season, movieId]);

    const handleGetEpisode = async (season, movieId) => {
        setEspData([]);
        try {
            const response = await axios.get(
                `${movieConst.BASE_URL}/tv/${movieId}/season/${season}?api_key=${movieConst.API_KEY}`
            );
            setEspData(response.data.episodes);
            setSeasonCurrent(response.data.season_number);
        } catch (error) {
            console.log(error);
        }
    };

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className='container'>
            <Title title={`${nameTv} | season ${season} | episode ${esp}`} />

            <div className='watching__container watching__container-tv'>
                <div className='watching__wrap'>
                    <div className='watching__wrap-movie watching__wrap-tv'>
                        <VideoPlayer
                            src={`${movieConst.BASE_URL_FOR_VIDEO}tv?id=${movieId}&s=${seasonTv}&e=${espTv}`}
                            title='TV Player'
                        />
                    </div>
                    <div className='watching__info watching__info-tv'>
                        <h1 className='watching__info-name'>{nameTv}</h1>
                        <p className='watching__info-seasonNumber'>
                            Season {espCurrent && espCurrent?.season_number}
                        </p>
                        <p className='watching__info-number'>
                            Episode {espCurrent?.episode_number}
                        </p>
                        <p className='watching__info-espName'>Name: {espCurrent?.name}</p>
                        <p className='watching__info-overview'>Overview: {espCurrent?.overview}</p>
                        <p className='watching__info-releaseDate'>
                            Air Date: {espCurrent?.air_date}
                        </p>
                    </div>

                    {/* Comment component  */}
                </div>

                <div className='watching__season'>
                    <h3 className='watching__season-heading'>Episodes</h3>
                    {seasonData.length > 0 &&
                        seasonData.map((item) => (
                            <div
                                className='watching__season-tv'
                                key={item.id}
                                onClick={() => handleGetEpisode(item.season_number, movieId)}
                            >
                                <div className='watching__season-link'>
                                    <div className='watching__season-img'>
                                        <img
                                            src={`${movieConst.BASE_URL_FOR_IMAGE}${
                                                item?.backdrop_path || item?.poster_path
                                            }`}
                                            alt='src'
                                        />
                                    </div>
                                    <div className='watching__season-info'>
                                        <p className='watching__season-name'>{item.name}</p>
                                        <p className='watching__season-espCount'>
                                            {item.episode_count} episode
                                        </p>
                                    </div>
                                </div>

                                <div className='watching__episode-list'>
                                    {item.season_number === seasonCurrent
                                        ? espData.length > 0 &&
                                          espData.map((esp: any) => (
                                              <NavLink
                                                  key={esp.id}
                                                  className='watching__episode-item'
                                                  to={`/watch/tv/${movieId}/season/${seasonCurrent}/esp/${esp.episode_number}`}
                                                  onClick={handleScrollToTop}
                                              >
                                                  <div className='watching__episode-content'>
                                                      <div className='watching__episode-img'>
                                                          <img
                                                              src={
                                                                  esp.still_path
                                                                      ? `${movieConst.BASE_URL_FOR_IMAGE}${esp.still_path}`
                                                                      : 'https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png'
                                                              }
                                                              alt={esp.name}
                                                          />
                                                      </div>
                                                      <p className='watching__episode-name'>
                                                          Episode {esp.episode_number}
                                                      </p>
                                                  </div>
                                              </NavLink>
                                          ))
                                        : null}
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            <div className='watching__similarMovie'>
                <SimilarColumn movieId={movieId} />
            </div>
        </div>
    );
}
