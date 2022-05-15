import * as React from 'react';

const useInfinityQuery = (firstLoad) => {
    const buttonRef = React.useRef<HTMLButtonElement | null>(null);
    const [page, setPage] = React.useState(1);

    React.useEffect(() => {
        const btn = buttonRef.current;
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && firstLoad) {
                setPage((prev) => prev + 1);
            }
        });

        if (btn) observer.observe(btn);

        return () => {
            if (btn) observer.unobserve(btn);
        };
    }, [firstLoad]);

    return { buttonRef, page };
};

export default useInfinityQuery;
