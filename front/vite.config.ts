import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     '@shared': path.resolve(__dirname, '../shared'),
  //   },
  // },
  build: {
    outDir: 'dist', // 빌드 결과물이 생성될 디렉토리
    sourcemap: false, // 소스맵 생성 여부
    rollupOptions: {
      output: {
        manualChunks: undefined, // 코드 분할 설정
      },
    },
  },
});
