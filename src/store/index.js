import { createStore } from "redux";
import rootReducer from "../reducer/index";

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState()); //구독 함수 
});

export default store;
