import { rootReducer } from "./reducers/rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
export const reduxStore = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
