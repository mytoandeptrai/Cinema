import { IUser } from '../../interfaces/types';
import { StoreSlice } from '../index';

export interface UserSlice {
    user: IUser | undefined;
    setUser: (user: any) => void;
}

const initialState = {
    displayName: '',
    email: '',
    photoURL: '',
};

const createUserSlice: StoreSlice<UserSlice> = (set, get) => ({
    user: initialState,
    setUser: (newUser: any) =>
        set((state: any) => {
            return {
                ...state,
                user: newUser,
            };
        }, false),
});

export default createUserSlice;
