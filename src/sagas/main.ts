import {takeLatest, put, call} from 'redux-saga/effects';
import {ACTIONS} from '../store/reducer';
import {usersAPI} from '../services/usersAPI';

export function* loadUsers() {
  const users = yield call(usersAPI.request);
  yield put({type: ACTIONS.LOAD_USERS, payload: users});
}

export function* createUser(user: any) {
  yield call(usersAPI.create, user.payload);
  yield call(loadUsers);
}

export function* main() {
  yield takeLatest(ACTIONS.HANDLE_LOAD_USERS, loadUsers);
  yield takeLatest(ACTIONS.CREATE_USER, createUser);
}