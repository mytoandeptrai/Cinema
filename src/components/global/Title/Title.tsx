import * as React from 'react';
import { commonConst } from '../../../constants/commonConstants';

export interface ITitleProps {
    title: string;
}

export default function Title({ title }: ITitleProps) {
    React.useEffect(() => {
        if (title === 'undefined') {
            document.title = commonConst.PHIM_MOI;
        } else {
            document.title = title;
        }
    });
    return <></>;
}
