import { configureStore, createSlice } from '@reduxjs/toolkit';

// 🔸 전역 상태 Slice 생성
const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    Increment: (state) => {
      state.count += 1;
    },
    Decrement: (state) => {
      state.count -= 1;
    },
  },
});

// 🔸 스토어 생성
export const Store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

// 🔸 액션 및 타입 내보내기
export const { Increment, Decrement } = counterSlice.actions;
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

// 🔸 전역 변수로 스토어 연결 (웹 전용)
if (typeof window !== 'undefined') {
  (window as any).store = Store;
}
