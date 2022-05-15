import { IUser } from '../../interfaces/types';
import { StoreSlice } from '../index';

export interface UserSlice {
    user: IUser | undefined;
    setUser: (user: any) => void;
}

const createUserSlice: StoreSlice<UserSlice> = (set, get) => ({
    user: {
        displayName: 'Nhung',
        email: 'nhung@gmail.com',
        photoURL: '',
    },
    setUser: (newUser: any) =>
        set((state: any) => {
            return {
                ...state,
                user: newUser,
            };
        }),
});

export default createUserSlice;
