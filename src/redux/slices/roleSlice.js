import { createSlice } from "@reduxjs/toolkit";
import { dummyRoles } from "../api/roles";

const initialState = {
  roles: [], 
};

const roleSlice = createSlice({
  name: "roles",
  initialState,
  reducers: {
    setRoles: (state, action) => {
      state.roles = action.payload;
    },
  },
});

export const { setRoles } = roleSlice.actions;

export const fetchRoles = () => async (dispatch) => {
  try {
    //  API call
    const roles = dummyRoles;
    dispatch(setRoles(roles));
  } catch (error) {
    console.error("Failed to fetch roles:", error);
  }
};

export default roleSlice.reducer;