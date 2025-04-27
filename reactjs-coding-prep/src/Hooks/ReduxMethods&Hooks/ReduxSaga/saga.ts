import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

const fetchUserApi = async (userId: number) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  return response.data;
};  

// Worker saga (handles API call)

function* fetchUserSaga(action) {
  try {
    const user = yield call(fetchUserApi, action.paylaod);
    yield put({ type: "user/fetchSuccess", payload: user }); // Dispatch the success action
  } catch (error) {
    yield put({ type: "user/fetchError", payload: error.message });// Dispatch the error action
  }
}

// Watcher saga(listnes for actions)

function* watchFetchUser() {
  yield takeLatest("user/fetchRequest", fetchUserSaga);
}

export default watchFetchUser;
