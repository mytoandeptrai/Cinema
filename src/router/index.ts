import LoginPage from '../components/features/Auth/Pages/LoginPage/LoginPage';
import HomePage from '../components/features/Home';
import DetailMovie from '../components/features/Movies/Pages/DetailMovie/DetailMovie';
import MoviePage from '../components/features/Movies/Pages/MoviePage/MoviePage';
import TVShowPage from '../components/features/TVShows/Pages/TVShowPage.tsx/TVShowPage';
import WatchingMoviePage from '../components/features/Watching/Pages/WatchingMoviePage/WatchingMoviePage';
import WatchingTVPage from '../components/features/Watching/Pages/WatchingTVPage/WatchingTVPage';

export const routes = [
    {
        path: '/',
        element: HomePage,
    },
    {
        path: '/login',
        element: LoginPage,
    },
    {
        path: '/movies',
        element: MoviePage,
    },
    {
        path: '/details/:media_type/:id',
        element: DetailMovie,
    },
    {
        path: '/watch/movie/:movieId',
        element: WatchingMoviePage,
    },
    {
        path: '/watch/tv/:movieId/season/:season/esp/:esp',
        element: WatchingTVPage,
    },
    {
        path: '/tv_shows',
        element: TVShowPage,
    },
];
