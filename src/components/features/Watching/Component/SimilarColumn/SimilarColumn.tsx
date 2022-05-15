import * as React from 'react';
import useItemCalculate from '../../../../../hooks/useItemCalculate';

export interface ISimilarColumnProps {
    movieId: string | undefined;
    mediaType?: string | undefined;
}

export default function SimilarColumn({ movieId, mediaType }: ISimilarColumnProps) {
    const item = useItemCalculate();
    
    return <div>SimilarColumn</div>;
}
