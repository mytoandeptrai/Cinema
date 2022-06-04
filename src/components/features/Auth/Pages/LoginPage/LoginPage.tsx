import * as React from 'react';
import { Navigate } from 'react-router-dom';
import { useSearchParams } from '../../../../../hooks/useSearchParams';
import useStore from '../../../../../stores';
import Loading from '../../../../global/Loading/Loading';
import Title from '../../../../global/Title/Title';
import LoginForm from '../../Components/LoginForm';

export interface ILoginPageProps {}

export default function LoginPage(props: ILoginPageProps) {
    const searchParams = useSearchParams();
    const { user, loading } = useStore((state) => state);

    if (user?.displayName) return <Navigate to={searchParams.get('redirect') || '/'} />;

    return (
        <div className='login-page'>
            <Title title='Login Page' />
            <LoginForm />

            {loading && <Loading />}
        </div>
    );
}
