import req from '../utils/request';

export default {
	getRiceData: () => req({ url: '/farm/rice', method: 'GET' }),
	saveRiceData: (data) => req({ url: '/farm/rice', method: 'POST', data }),
}