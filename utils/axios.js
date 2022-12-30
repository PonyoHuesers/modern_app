import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: process.env.ORIGIN_PATH || 'http://localhost:3000',
	timeout: 30000,
});

axiosInstance.interceptors.request.use(async (request) => {
	// TODO add request interceptor logic
	return request;
});

axiosInstance.interceptors.response.use(
	// TODO add response interceptor logic
	(response) => {
		return response;
	},
	(err) => {
		return Promise.reject(err);
	}
);
export default axiosInstance;
