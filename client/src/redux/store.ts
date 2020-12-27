import { createUserLoader } from "../server/userLoader";
import root from "./reducers/root";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";

const userLoader = createUserLoader({});

const store = createStore(
  root,
  composeWithDevTools(
    applyMiddleware(logger, thunk.withExtraArgument({ userLoader }))
  )
);

export default store;
