import * as React from 'react';

export interface IButtonProps {
    content: string;
}

export default function Button({ content }: IButtonProps) {
    return <span className='button'>{content}</span>;
}
