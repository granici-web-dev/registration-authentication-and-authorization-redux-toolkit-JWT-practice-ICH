import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: '',
  },
  reducers: {},
  extraReducers: () => {},
});

export default authSlice.reducer;