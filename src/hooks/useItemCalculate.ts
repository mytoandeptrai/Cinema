import { useEffect, useState } from 'react';
import { widthResponsiveConst } from '../constants/commonConstants';
import useInnerWidth from './useInnerWidth';

const useItemCalculate = () => {
    const [item, setItem] = useState(0);
    const width = useInnerWidth();
    useEffect(() => {
        (() => {
            if (width >= widthResponsiveConst.ABOVE_TABLET) {
                setItem(5);
            } else if (
                width < widthResponsiveConst.ABOVE_TABLET &&
                width >= widthResponsiveConst.UNDER_TABLET
            ) {
                setItem(4);
            } else if (
                width < widthResponsiveConst.UNDER_TABLET &&
                width >= widthResponsiveConst.ABOUT_SMALL_SCREEN
            ) {
                setItem(3);
            } else {
                setItem(2);
            }
        })();
    }, [width]);

    return item;
};

export default useItemCalculate;
