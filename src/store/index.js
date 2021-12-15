import { createStore } from "redux";
import _ from "lodash";
import reducer from "./reducer";

const STATE_KEY = "react_training_app_state";
const PERSISTENT_PATHS = ["data"];

const storage = {
  get: (path) => {
    try {
      return JSON.parse(localStorage.getItem(path));
    } catch {
      return undefined;
    }
  },
  set: (path, value) => {
    try {
      if (_.isNil(value)) throw new Error("no_value");
      localStorage.setItem(path, JSON.stringify(value));
    } catch {
      localStorage.removeItem(path);
    }
  },
};

const state = storage.get(STATE_KEY);
const store = createStore(
  reducer,
  state,
  global.__REDUX_DEVTOOLS_EXTENSION__
    ? global.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined
);

let prevState;
store.subscribe(() => {
  const state = store.getState();
  if (
    PERSISTENT_PATHS.some(
      (path) => !_.isEqual(_.get(prevState, path), _.get(state, path))
    )
  ) {
    const persistentState = PERSISTENT_PATHS.reduce((acc, path) => {
      const pathValue = _.get(state, path);
      _.setWith(acc, path, pathValue, Object);
      return acc;
    }, {});

    prevState = persistentState;
    storage.set(STATE_KEY, persistentState);
  }
});

export default store;
