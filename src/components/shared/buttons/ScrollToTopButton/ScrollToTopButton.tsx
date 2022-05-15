import ArrowCircleUpSharpIcon from '@mui/icons-material/ArrowCircleUpSharp';
import React from 'react';

const ScrollToTopButton = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div className='scrollToTop' onClick={handleScrollToTop}>
            <ArrowCircleUpSharpIcon className='TVPage_icon' />
        </div>
    );
};

export default ScrollToTopButton;
