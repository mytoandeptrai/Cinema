import axios from 'axios';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { movieConst } from '../../../../../constants/commonConstants';
import { IVideoTrailer } from '../../../../../interfaces/types';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
export interface IModalTrailerProps {
    show: boolean;
    setShow(value: boolean): void;
}

export default function ModalTrailer({ show, setShow }: IModalTrailerProps) {
    const { media_type, id } = useParams();
    const [trailers, setTrailers] = React.useState<IVideoTrailer[] | []>([]);
    React.useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(
                    `${movieConst.BASE_URL}/${media_type}/${id}/videos?api_key=${movieConst.API_KEY}`
                );
                setTrailers(response.data.results);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [media_type, id]);

    return (
        <div
            className='trailer__overlay'
            style={{ display: show ? 'flex' : 'none' }}
            onClick={() => setShow(false)}
        >
            <div className='trailer__container'>
                <div className='trailer__header'>
                    <h1 className='trailer__header-title'>{media_type} trailers</h1>
                    <HighlightOffRoundedIcon
                        className='trailer__header-icon'
                        onClick={() => setShow(false)}
                    />
                </div>
                <div className='trailer__content'>
                    {trailers.length === 0 ? (
                        <h1 className='trailer__content-title'>There is no trailer</h1>
                    ) : (
                        trailers.map((trailer) => (
                            <div className='trailer__content-item' key={trailer.id}>
                                <h1 className='trailer__content-name'>{trailer.name}</h1>
                                <iframe
                                    src={`${movieConst.YOUTUBE_URL}${trailer.key}`}
                                    title='YouTube video player'
                                    frameBorder='0'
                                    style={{
                                        height: '315px',
                                    }}
                                    width='100%'
                                />
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
