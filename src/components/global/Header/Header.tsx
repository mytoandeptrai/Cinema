import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import { commonConst } from '../../../constants/commonConstants';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import useStore from '../../../stores';
export interface IHeaderProps {}

const navigationArray = [
    {
        title: 'Home',
        activeClassName: 'active',
        to: '/',
    },
    {
        title: 'Movies',
        activeClassName: 'active',
        to: '/movies',
    },
    {
        title: 'TV Shows',
        activeClassName: 'active',
        to: '/tv_shows',
    },
];

export default function Header(props: IHeaderProps) {
    const [showMenu, setShowMenu] = React.useState(false);
    const headerRef = React.useRef<HTMLElement>(null);
    const { user, loading } = useStore((state) => state);

    React.useEffect(() => {
        const current = headerRef?.current;
        const handleScroll = () => {
            window.scrollY > 50
                ? current?.classList?.add('fixed')
                : current?.classList?.remove('fixed');
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className='header' ref={headerRef}>
            <div className='header__list'>
                <Link to='/' className='header__list-logo'>
                    <MovieCreationOutlinedIcon className='header__list-icon' />
                    <span>{commonConst.PHIM_MOI}</span>
                </Link>

                <ul className='header__list-menu'>
                    {navigationArray.map((nav, index) => (
                        <li key={index} className='header__list-item'>
                            <NavLink
                                to={nav.to}
                                className={({ isActive }) =>
                                    isActive ? `${nav.activeClassName}` : ''
                                }
                            >
                                {nav.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='header__toggle-icon' onClick={() => setShowMenu(!showMenu)}>
                <div
                    className={`header__toggle-bar header__toggle-menu ${
                        showMenu ? 'header__toggle-close' : ''
                    }`}
                >
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className='header__mobile-logo'>
                <span>{commonConst.PHIM_MOI}</span>
            </div>

            <div className='header__info'>
                <Link className='header__info-search' to='/search'>
                    <SearchRoundedIcon className='header__info-logo' />
                </Link>

                {user && (
                    <div className='header__user'>
                        <img
                            src='https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.15752-9/278427148_678925380029007_9106329045772344496_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=cvMPQ2i6_-oAX_rcnS2&_nc_ht=scontent.fsgn2-6.fna&oh=03_AVLc7pmK2ng_qTyV0P26zC_1oThxGN5a7IPJikxefKiLtQ&oe=6289F13F'
                            alt='img'
                            className='header__user-logo'
                        />
                        <div className='header__user-list'>
                            <div className='header__user-item'>{user?.displayName}</div>
                            <div className='header__user-item'>{user?.email}</div>
                            <div className='header__user-item'>
                                <Link to='/favorite-move'>My Favorite Move</Link>
                            </div>
                            <div className='header__user-item'>Logout</div>
                        </div>
                    </div>
                )}

                <Link to='/login' className={`header__info-btn ${loading ? 'disabled-link' : ''}`}>
                    {loading ? 'Loading' : 'Login'}
                </Link>
            </div>
        </header>
    );
}
