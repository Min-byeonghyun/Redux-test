import { combineReducers } from "redux"; // 합쳐주는역할
import { modalReducer } from "./modal";

const rootReducer = combineReducers({
  modal: modalReducer,
});

export default rootReducer;
