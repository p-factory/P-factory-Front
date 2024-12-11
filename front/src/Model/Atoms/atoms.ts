import { atom } from 'recoil';

// count 상태를 관리하는 atom
export const countState = atom<number>({
  key: 'countState', // 고유한 key 값
  default: 0, // 초기값
});
