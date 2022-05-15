import * as React from 'react';
import Title from '../../../../global/Title/Title';
import LoginForm from '../../Components/LoginForm';

export interface ILoginPageProps {}

export default function LoginPage(props: ILoginPageProps) {
    return (
        <div className='login__page'>
            <Title title='Login Page' />
            <LoginForm />
        </div>
    );
}
