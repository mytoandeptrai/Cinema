import * as React from 'react';
import { movieConst } from '../../../../../constants/commonConstants';
import { ICast } from '../../../../../interfaces/types';

export interface ICastItemProps {
    castItem: ICast;
}

export default function CastItem({ castItem }: ICastItemProps) {
    return (
        <div className='cast-item__container'>
            <img
                src={
                    castItem?.profile_path
                        ? `${movieConst.BASE_URL_FOR_IMAGE_POSTER}${castItem?.profile_path}`
                        : `https://images.unsplash.com/photo-1535704882196-765e5fc62a53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWUlMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`
                }
                alt='castItem'
            />
            <p className='cast-item__name'>{castItem?.name}</p>
            <p className='cast-item__character'>{castItem?.character}</p>
        </div>
    );
}
