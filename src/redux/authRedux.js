// const { createSlice } = require("@reduxjs/toolkit")

// const initialAuthState = {
//     user: null,
//     isFetching: false,
//     error: false
// }

// const authSlice = createSlice({
//     name: "auth",
//     initialState: initialAuthState,
//     reducers:{
//         loginStart(state){
//             state.user= null;
//             state.isFetching= true;
//             state.error= false;
//         },
//         loginSuccess(state, action){
//             state.user = action.payload;
//             state.isFetching = false;
//             state.error= false;
//         },
//         loginFailure(state){
//             state.user = null
//             state.isFetching = false;
//             state.error= true;
//         },
//         logout(state){
//             state.isLoggedIn= false
//         }
//     }
// });
// export const authActions = authSlice.actions;
// export default authSlice.reducer

const { createSlice } = require("@reduxjs/toolkit");
const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const isAdminState = localStorage.getItem("isAdmin");

  return { token: storedToken, isAdmin: isAdminState };
};
const tokenData = retrieveStoredToken();
let initialToken;
let initialAdmin;
if (tokenData) {
  initialToken = tokenData.token;
  initialAdmin = tokenData.isAdmin;
} else {
  initialToken = "";
  initialAdmin = false;
}
console.log("initialAdmin", initialAdmin);
const initialAuthState = {
  isLoggedIn: false,
  isAdmin: initialAdmin,
  token: initialToken,
};
console.log(initialAuthState.isAdmin);
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;

      if (action.payload === "admin") {
        state.isAdmin = true;
        state.token = "admin";
      } else {
        state.isAdmin = false;
        state.token = "others";
      }
      localStorage.setItem("token", state.token);
      localStorage.setItem("isAdmin", state.isAdmin);
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = "";
      localStorage.removeItem("token");
      localStorage.removeItem("isAdmin");
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
