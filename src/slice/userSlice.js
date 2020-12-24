import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const login = createAsyncThunk(
  'user/loginStatus',
  async (user, thunkAPI) => {
    const { email, password } = user;
    const response = await axios({
      method: 'POST',
      url: 'https://reqres.in/api/login',
      data: { email, password }
    })
    return response.token;
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    authenticated: '',
    errorMessage: ''
  },
  reducers: {},
  extraReducers: {
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.authenticated = action.token;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.errorMessage = 'failed';
    }
  }
})

const { reducer: userReducer } = userSlice;

export default userReducer;
