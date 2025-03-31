import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 초기 상태 정의
interface FactoryState {
  mode: 'view' | 'edit' | 'shared' | 'duplicated' | 'deleted';
}

const initialState: FactoryState = {
  mode: 'view', // 기본 상태는 "view"
};

const factorySlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    SetMode: (state, action: PayloadAction<FactoryState['mode']>) => {
      state.mode = action.payload;
    },
    ResetMode: () => initialState,
  },
});

// 액션 및 리듀서 내보내기
export const { SetMode, ResetMode } = factorySlice.actions;
export default factorySlice.reducer;
