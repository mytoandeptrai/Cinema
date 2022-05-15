import { StoreSlice } from '..';

export interface CommonSlice {
    loading: boolean;
    setLoading: (value: boolean) => void;
}

const createCommonSlice: StoreSlice<CommonSlice> = (set, get) => ({
    loading: false,
    setLoading: (value: boolean) => set((state) => ({ ...state, loading: value })),
});

export default createCommonSlice;
