import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: 'https://your-api-url.com', // default API URL -> should exchange dotenv variable
  timeout: 5000, // set time limit
  headers: {
    'Content-Type': 'application/json',
  },
});

export default AxiosInstance;
