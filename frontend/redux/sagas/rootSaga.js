import conditionsSaga from "./conditionsSaga";
import { all } from "redux-saga/effects";

export function* rootSaga() {
  yield all([conditionsSaga()]);
}
