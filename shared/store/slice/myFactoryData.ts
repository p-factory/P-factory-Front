import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MyFactoryDataState {
  total: number;
  favorite: boolean;
}

const initialState: MyFactoryDataState = {
  total: 0,
  favorite: false,
};

const totalSlice = createSlice({
  name: 'total',
  initialState,
  reducers: {
    SetTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
    SetFavorite: (state, action: PayloadAction<boolean>) => {
      state.favorite = action.payload;
    },
    ResetTotal: () => initialState,
    ResetFavorite: () => {
      return {
        ...initialState,
        favorite: true,
      };
    },
  },
});

export const { SetTotal, SetFavorite, ResetTotal } = totalSlice.actions;
export default totalSlice.reducer;
