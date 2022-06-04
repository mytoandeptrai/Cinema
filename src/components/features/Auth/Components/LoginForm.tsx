import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import { AxiosError } from 'axios';
import { signInWithPopup } from 'firebase/auth';
import * as React from 'react';
import { toast } from 'react-toastify';
import { auth, facebookProvider, googleProvider } from '../../../../config/Firebase';
import { IUserResponse } from '../../../../interfaces/types';
import useStore from '../../../../stores';
import { handleAddUserToFirebase } from '../../../../utils/firebaseFunction';
export interface ILoginFormProps {}
interface ILoginSocialList {
    title: string;
    className: string;
    onClick: () => void;
    logo: any;
}

export default function LoginForm(props: ILoginFormProps) {
    const { loading, setLoading } = useStore((state) => state);

    const handleLogin = async (Provider) => {
        setLoading(true);

        try {
            const response: any = await signInWithPopup(auth, Provider);
            const {
                _tokenResponse,
                user: { displayName, email, photoURL, uid },
            } = response;
            if (_tokenResponse.isNewUser) {
                handleAddUserToFirebase({ displayName, email, photoURL, uid });
            }

            setLoading(false);

            setLoading(false);
        } catch (error: any) {
            toast.error(error.message);
            setLoading(false);
        }
    };

    const loginSocialList: ILoginSocialList[] = [
        {
            title: 'Login with google',
            className: `login-form__button login-form__google ${loading ? 'disableButton' : ''}`,
            onClick: () => handleLogin(googleProvider),
            logo: (
                <div className='login-form__icon'>
                    <GoogleIcon />
                </div>
            ),
        },
        {
            title: 'Login with facebook',
            className: `login-form__button login-form__facebook ${loading ? 'disableButton' : ''}`,
            onClick: () => handleLogin(facebookProvider),
            logo: (
                <div className='login-form__icon'>
                    <FacebookOutlinedIcon />
                </div>
            ),
        },
    ];

    return (
        <div className='login-form'>
            <h1 className='login-form__title'>Login now</h1>
            <div className='login-form__socialList'>
                {loginSocialList &&
                    loginSocialList.map((el: ILoginSocialList, index) => (
                        <button
                            className={el.className}
                            disabled={loading}
                            onClick={el.onClick}
                            key={index}
                        >
                            {el.logo}
                            <span className='login-form__subTitle'>{el.title}</span>
                        </button>
                    ))}
            </div>
        </div>
    );
}
