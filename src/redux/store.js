import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authRedux";
import dataReducer from "./dataRedux";
import manageReducer from "./manageRedux";

const store = configureStore({
  reducer: { auth: authReducer, data: dataReducer, manage: manageReducer },
});
export default store;
