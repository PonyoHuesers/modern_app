import axios from './axios';

function getHeaders () {
	return {};
}

const req = ({ url, method, data, params, responseType }) => {
	return axios(
		url, 
		{
			method,
			crossdomain: false,
			headers: getHeaders(),
			data,
			params,
			responseType,
			withCredentials: false
		}
	)
	.then(response => response.data)
	.catch(err => {
		console.log(err);
		throw err.response;
	})
}

export default req;
