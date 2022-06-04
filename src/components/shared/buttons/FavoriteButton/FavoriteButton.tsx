import { Timestamp } from 'firebase/firestore';
import * as React from 'react';
import { toast } from 'react-toastify';
import { IDetailMovie } from '../../../../interfaces/types';
import useStore from '../../../../stores';
import { handleAddNewCollectionFromFirebase } from '../../../../utils/firebaseFunction';

export interface IFavoriteButtonProps {
    className: string;
    movie: IDetailMovie;
    media_type: string | undefined;
}

export default function FavoriteButton({ className, movie, media_type }: IFavoriteButtonProps) {
    const { user, setLoading } = useStore((state) => state);
    const handleAddToFavorite = () => {
        if (!user?.displayName) return toast.error('You are not logged in');

        setLoading(true);
        const movieData = {
            uid: user.uid,
            movie: {
                id: movie.id,
                title: movie.title || movie.name,
                poster_path: movie.poster_path,
                media_type,
            },
            create_at: Timestamp.fromDate(new Date(Date.now())),
        };

        const response = handleAddNewCollectionFromFirebase('favoriteMovie', movieData);

        setLoading(false);
    };
    return (
        <span className='movie__detail-link' onClick={handleAddToFavorite}>
            Add to Favorite
        </span>
    );
}
