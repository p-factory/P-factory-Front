// 아래 코드는 위 플러그인 규칙을 위배하는 예제입니다.
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { missingModule } from './non-existent-file'; // 존재하지 않는 파일 import

function tEst() {
  // prefer-arrow/prefer-arrow-functions : 화살표기 함수 누락으로 발생하는 error
  return (
    <div>
      <span onClick={() => alert('clicked!')}>Click me</span>
      {/* eslint-plugin-jsx-a11y: 접근성 누락 `role`과 `tabIndex={0}` 필요
      eslint-plugin-jsx-a11y의 필요성 의문
      */}
      <img src='image.jpg' /> {/* eslint-plugin-jsx-a11y: alt 속성 누락 */}
    </div>
  ); // eslint-config-prettier : 세미 콜론 누락시 eslint에서 prettier error/warning 발생
}

export default test;

// --isolatedModules 설정으로 위 주석을 해제할 시 아래 코드는 주석
export {};
