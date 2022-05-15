import * as React from 'react';
import { commonConst, movieConst } from '../../../constants/commonConstants';
import Banner from '../../global/Banner/Banner';
import Title from '../../global/Title/Title';
import SliderMovies from './components/SliderMovies/SliderMovies';

export interface IHomePageProps {}

export default function HomePage(props: IHomePageProps) {
    return (
        <div>
            <Title title={commonConst.PHIM_MOI} />
            <Banner type={movieConst.TRENDING} />
            <div className='container'>
                <div className='movie'>
                    <SliderMovies type={movieConst.TRENDING} />
                    <SliderMovies type={movieConst.POPULAR} />
                    <SliderMovies type={movieConst.TOP_RATED} />
                </div>
            </div>
        </div>
    );
}
