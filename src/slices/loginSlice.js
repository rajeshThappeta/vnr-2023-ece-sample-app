import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




//make API req for user login
export const loginPromice = createAsyncThunk(
  "userLogin",
  async (userCredObj, thunkApi) => {
 
    if (userCredObj.userType === "admin") {
      let res = await axios.get(
        `http://localhost:4000/admins?username=${userCredObj.username}&password=${userCredObj.password}`
      );

      console.log(res)
      if (res.status === 200 && res.data.length !== 0) {
        return res.data[0];
      } else {
        return thunkApi.rejectWithValue();
      }
    }

    if (userCredObj.userType === "user") {
      let res = await axios.get(
        `http://localhost:4000/users?username=${userCredObj.username}&password=${userCredObj.password}`
      );

      console.log(res);
      if (res.status === 200 && res.data.length !== 0) {
        return res.data[0];
      } else {
        return thunkApi.rejectWithValue();
      }
    }
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    userObj: null,
    userLoginStatus: false,
    errorMessage: "",
    errorStatus: false,
  },
  reducers: {
    clearState:(state,action)=>{
      state.userObj=null;
      state.userLoginStatus=false;
      state.errorMessage="";
      state.errorStatus=false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginPromice.pending, (state, action) => {
        state.userObj = null;
        state.userLoginStatus = false;
        state.errorMessage = "";
        state.errorStatus = false;
      })
      .addCase(loginPromice.fulfilled, (state, action) => {
        state.userObj = action.payload;
        state.userLoginStatus = true;
        state.errorMessage = "";
        state.errorStatus = false;
        
      })
      .addCase(loginPromice.rejected, (state, action) => {
        console.log("action in rejected", action);
        state.userObj = null;
        state.userLoginStatus = false;
        state.errorMessage = action.error.message;
        state.errorStatus = true;
      });
  },
});

//export action creator functions
export let {clearState} = loginSlice.actions;
//export slice level reducer
export default loginSlice.reducer;
