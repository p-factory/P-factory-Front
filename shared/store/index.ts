import { configureStore } from '@reduxjs/toolkit';
import { factoryReducer, toolReducer } from './slice';

// 스토어 생성
export const Store = configureStore({
  reducer: {
    setFactoryMode: factoryReducer,
    setToolMode: toolReducer,
  },
});

// 액션 및 타입 내보내기
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

// 전역 변수로 스토어 연결 (웹 전용)
if (typeof window !== 'undefined') {
  (window as any).store = Store;
}
