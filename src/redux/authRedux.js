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

const initialAuthState = {
  isLoggedIn: false,
  isAdmin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      console.log(action);
      if (action.payload === "admin") {
        state.isAdmin = true;
      }
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
