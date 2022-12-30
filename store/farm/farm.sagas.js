import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchRiceDataSucceeded } from './farm.actions';
import farmApi from 'api/farm.api';
import types from './farm.types';

function* fetchRiceData({ payload }) {
  console.log('Hit farm.saga.js with ', payload);
  const riceData = yield call(farmApi.getRiceData, payload);

  yield put(fetchRiceDataSucceeded(riceData));
}

export default [
  takeLatest(types.fetchRiceDataRequested, fetchRiceData)
];

