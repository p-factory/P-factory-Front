import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: 'https://your-api-url.com', // default API URL -> should exchange dotenv variable
  timeout: 5000, // set time limit
  headers: {
    'Content-Type': 'application/json',
  },
});

// Axios에서 responseHeaders를 조회할 수 있게 구현
AxiosInstance.interceptors.response.use(
  (response) => {
    // console.log('🔥 Response Headers:', response.headers);

    const authorization =
      response.headers['authorization'] || response.headers['Authorization'];
    // console.log('🔄 Refresh-Token:', authorization);
    if (authorization) {
      localStorage.setItem('access_token', authorization);
      console.log('🔄Token Accept in localStorage!');
    }
    return response;
  },
  (error) => {
    console.error('🚨 Response Error:', error);
    return Promise.reject(error);
  },
);

// Axios에서 모든 요청 author 헤더에 추가
AxiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default AxiosInstance;
