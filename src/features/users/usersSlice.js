import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "BalaChandran" },
  { id: "1", name: "Sekar" },
  { id: "2", name: "Priya" },
  { id: "3", name: "Arun" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

// export const {} = usersSlice.actions;
export default usersSlice.reducer;
