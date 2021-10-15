import { beerApi } from "../../api/beerApi";
import { call, takeEvery, put } from "redux-saga/effects";
import { getBeer } from "../actions/getBeer";

function* getBeerApi(action) {
  yield call(action.setLoading, true);
  const data = yield call(beerApi.getBeers);
  yield put(getBeer(data.data));
  yield call(action.setLoading, false);
}

export function* getBeers() {
  // COMPUTE 타임 액션이 dispatch 되면 computeCount 제너레이터를 실행한다
  yield takeEvery("BEER", getBeerApi);
}
