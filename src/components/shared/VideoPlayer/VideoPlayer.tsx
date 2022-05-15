import * as React from 'react';
export interface IVideoPlayerProps {
    src: string;
    title: string;
}

export default function VideoPlayer({ src, title }: IVideoPlayerProps) {
    return (
        <>
            <iframe
                width='100%'
                height={'100%'}
                src={src}
                title={title}
                frameBorder='0'
                allowFullScreen
            />
        </>
    );
}
