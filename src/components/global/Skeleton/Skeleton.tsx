import * as React from 'react';

export interface ISkeletonProps {}

export default function Skeleton(props: ISkeletonProps) {
    return (
        <div className='skeleton'>
            <div className='skeleton-img'></div>
        </div>
    );
}
