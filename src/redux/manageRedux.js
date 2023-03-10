const { createSlice } = require("@reduxjs/toolkit");

const initialManageState = {
  activePage: "vehicle",
  activeItem: "item1",
};
console.log(initialManageState.activePage);
const manageSlice = createSlice({
  name: "manage",
  initialState: initialManageState,
  reducers: {
    setVehicleActive(state, action) {
      state.activePage = "vehicle";
      state.activeItem = "item1";
    },
    setDriverActive(state, action) {
      state.activePage = "driver";
      state.activeItem = "item2";
    },
    setTripActive(state, action) {
      state.activePage = "trip";
      state.activeItem = "item3";
    },
  },
});
export const manageActions = manageSlice.actions;
export default manageSlice.reducer;
