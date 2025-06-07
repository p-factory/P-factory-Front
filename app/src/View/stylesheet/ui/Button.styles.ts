import { StyleSheet } from 'react-native';

const Button = StyleSheet.create({
  // body: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // 공통 버튼 스타일
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 350,
    width: '100%',
    height: 56,
    backgroundColor: '#97EB0D', // var(--primary-color)
    padding: 10,
    borderRadius: 80, // var(--corner-radius-large)
  },
  // submit 버튼 스타일
  submit: {
    color: '#97EB0D', // var(--gray4-color)
    backgroundColor: '#E0E0E0', // var(--gray2-color)
  },
  // 버튼 내용 컨테이너
  contents: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  // 버튼 제목
  title: {
    display: 'flex',
    justifyContent: 'center',
    marginRight: 5,
    fontSize: 24, // var(--font-size-medium)
    fontWeight: 'bold', // var(--font-weight-bold)
  },
  // 버튼 이미지
  image: {
    width: 20,
    height: 20,
  },
  // 버튼 컨텐츠 컨테이너
  buttonContents: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Button;
