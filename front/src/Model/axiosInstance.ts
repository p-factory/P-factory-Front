import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: 'https://your-api-url.com', // default API URL -> should exchange dotenv variable
  timeout: 5000, // set time limit
  headers: {
    'Content-Type': 'application/json',
  },
});

AxiosInstance.interceptors.response.use(
  (response) => {
    console.log('🔥 Response Headers:', response.headers); // 모든 헤더 출력

    // 🔥 Refresh-Token 확인 (대소문자 구분 없이 처리)
    const refreshToken =
      response.headers['refresh-token'] || response.headers['Refresh-Token'];
    console.log('🔄 Refresh-Token:', refreshToken);

    return response;
  },
  (error) => {
    console.error('🚨 Response Error:', error);
    return Promise.reject(error);
  },
);

export default AxiosInstance;
