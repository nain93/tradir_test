import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import beerReducer from "./reducers/beerReducer";

//watcher saga -> actions -> worker saga
// import loading from "./loading";
import { enableES5 } from "immer";
import { getBeers } from "./sagas/getBeerList";

enableES5();

const rootReducer = combineReducers({ beerReducer });

// export default rootReducer;
export default rootReducer;

//wathcer saga
export function* rootSaga() {
  yield all([getBeers()]);
}
