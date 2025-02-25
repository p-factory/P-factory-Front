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
    console.log('🔥 Response Headers:', response.headers);

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
