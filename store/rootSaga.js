import { all } from 'redux-saga/effects';
import farmSagas from './farm/farm.sagas';

export default function* root() {
	yield all([
		...farmSagas
	])
}