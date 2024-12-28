/* eslint-disable @typescript-eslint/naming-convention */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactNativeWeb from 'vite-plugin-react-native-web';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactNativeWeb()],
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@use "src/View/style/function.scss" as *;`,
        api: 'modern', // 'modern-compiler' or "modern"
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
  // alias 설정
  resolve: {
    alias: {
      'react-native$': 'react-native-web', // React Native를 React Native Web로 매핑
      '@shared': path.resolve(__dirname, '../shared'),
    },
    // extensions: ['.ts', '.tsx', '.js', '.jsx'], // 확장자 우선 처리
  },
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
