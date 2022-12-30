import types from './farm.types';

export const fetchRiceDataRequested = () => ({ type: types.fetchRiceDataRequested });
export const fetchRiceDataSucceeded = (payload) => ({ type: types.fetchRiceDataSucceeded, payload });