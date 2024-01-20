import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";
import horoscopeReducer from "./reducers/horoscopeReducer";
import notiReducer from "./reducers/notiReducer";
import btnReducer from "./reducers/btnReducer";

const middlewares = [thunk];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);
const rootReducer = combineReducers({
  userReducer,
  horoscopeReducer,
  notiReducer,
  btnReducer,
});

const store = createStore(rootReducer, composedEnhancers);

export default store;
