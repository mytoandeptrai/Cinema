export const firebaseCommonConst = {
    API_KEY: process.env.REACT_APP_API_KEY_FIREBASE,
    AUTH_DOMAIN: process.env.REACT_APP_AUTH_DOMAIN,
    PROJECT_ID: process.env.REACT_APP_PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    API_ID: process.env.API_ID,
};

export const movieConst = {
    API_KEY: process.env.REACT_APP_API_KEY,
    BASE_URL: process.env.REACT_APP_BASE_URL,
    BASE_URL_FOR_IMAGE: process.env.REACT_APP_BASE_URL_FOR_IMAGE,
    BASE_URL_FOR_IMAGE_POSTER: process.env.REACT_APP_BASE_URL_FOR_IMAGE_POSTER,
    BASE_URL_FOR_VIDEO: process.env.REACT_APP_BASE_URL_FOR_VIDEO,
    TRENDING: 'trending',
    POPULAR: 'popular',
    TOP_RATED: 'top_rated',
    YOUTUBE_URL: 'https://www.youtube.com/embed/',
};

export const commonConst = {
    PHIM_MOI: 'PHIM MỚI',
    TV_SHOWS: 'TV Shows',
};

export const widthResponsiveConst = {
    ABOVE_TABLET: 1024,
    UNDER_TABLET: 740,
    ABOUT_SMALL_SCREEN: 500,
};
