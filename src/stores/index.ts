import create, { GetState, SetState } from 'zustand';
import createCommonSlice, { CommonSlice } from './slices/createCommonSlice';
import createUserSlice, { UserSlice } from './slices/createUserSlice';

export type StoreState = UserSlice & CommonSlice;

export type StoreSlice<T> = (set: SetState<StoreState>, get: GetState<StoreState>) => T;

const useStore = create<StoreState>((set, get) => ({
    ...createUserSlice(set, get),
    ...createCommonSlice(set, get),
}));

export default useStore;
