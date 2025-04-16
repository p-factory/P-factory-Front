import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MyFactoryDataState {
  total: number;
}

const initialState: MyFactoryDataState = {
  total: 0,
};

const totalSlice = createSlice({
  name: 'total',
  initialState,
  reducers: {
    SetTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
    ResetTotal: () => initialState,
  },
});

export const { SetTotal, ResetTotal } = totalSlice.actions;
export default totalSlice.reducer;
