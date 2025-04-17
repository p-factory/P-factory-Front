import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { factoryReducer, toolReducer, myFactoryDataReducer } from './slice';

// persist 설정
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, myFactoryDataReducer);

// 스토어 생성
export const Store = configureStore({
  reducer: {
    setFactoryMode: factoryReducer,
    setToolMode: toolReducer,
    setMyFactoryData: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const Persistor = persistStore(Store);

// 액션 및 타입 내보내기
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

// 전역 변수로 스토어 연결 (웹 전용)
if (typeof window !== 'undefined') {
  (window as any).store = Store;
}
