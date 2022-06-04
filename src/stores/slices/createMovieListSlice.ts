import { IDetailMovie, IUser } from '../../interfaces/types';
import { StoreSlice } from '../index';

export interface MovieListSlice {
    favoriteMovieList: IDetailMovie[] | [];
    setFavoriteMovieList: (movie: IDetailMovie) => void;
}

const createMovieListSlice: StoreSlice<MovieListSlice> = (set, get) => ({
    favoriteMovieList: [],
    setFavoriteMovieList: (newMovie: any) =>
        set((state: any) => {
            return {
                ...state,
                favoriteMovieList: newMovie,
            };
        }, false),
});

export default createMovieListSlice;
