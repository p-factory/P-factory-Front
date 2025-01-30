import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 초기 상태 정의
interface ModeState {
  mode: 'view' | 'edit' | 'shared' | 'duplicated' | 'deleted';
}

const initialState: ModeState = {
  mode: 'view', // 기본 상태는 "view"
};

const modeSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    SetMode: (state, action: PayloadAction<ModeState['mode']>) => {
      state.mode = action.payload;
    },
  },
});

// 액션 및 리듀서 내보내기
export const { SetMode } = modeSlice.actions;
export default modeSlice.reducer;
