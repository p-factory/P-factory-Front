/* eslint-disable @typescript-eslint/naming-convention */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
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
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@shared': path.resolve(__dirname, '../shared'),
      '@shared/components': path.resolve(__dirname, '../shared/components'),
      '@store': path.resolve(__dirname, '../shared/store'),
      '@store/slice': path.resolve(__dirname, '../shared/store/slice'),
      '@view': path.resolve(__dirname, './src/View'),
      '@view/components': path.resolve(__dirname, './src/View/components'),
      '@view/stylesheet': path.resolve(__dirname, './src/View/stylesheet'),
      '@controller': path.resolve(__dirname, './src/Controller'),
      '@model': path.resolve(__dirname, './src/Model'),
      '@mapping': path.resolve(__dirname, './src/Model/Mapping'),
      '@dto': path.resolve(__dirname, './src/Model/Dto'),
      '@page': path.resolve(__dirname, './src/Page'),
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
