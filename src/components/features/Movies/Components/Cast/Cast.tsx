import * as React from 'react';
import { ICast } from '../../../../../interfaces/types';
import Skeleton from '../../../../global/Skeleton/Skeleton';
import CastItem from '../CastItem/CastItem';

export interface ICastProps {
    cast: ICast[];
    loading: boolean;
}

export default function Cast({ cast, loading }: ICastProps) {
    return (
        <>
            <h3 className='cast__title'>Cast</h3>
            <div className='cast__container grid-gap-20px-20px grid-layout'>
                {loading ? (
                    <>
                        {new Array(10).fill(1).map((v, i) => (
                            <Skeleton key={i + 1} />
                        ))}
                    </>
                ) : (
                    cast
                        ?.slice(0, Math.floor(Math.random() * 6) + 10)
                        ?.map((item: ICast, index) => <CastItem key={index} castItem={item} />)
                )}
            </div>
        </>
    );
}
