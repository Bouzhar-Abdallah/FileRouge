import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
import { encryptData, decryptData } from "../../utilities/functions";
const url = "http://localhost:8090/api/";

const initialState = {
  user: {},
  isLoggedIn: false,
  isLoading: true,
  token: "",
  error: null,
  role: null,
};

export const login = createAsyncThunk("login", async (user) => {
  try {
    const response = await axios.post(url + "login", user);
    const data = response.data;
    return { data }; // Return only the necessary data
  } catch (error) {
    console.log(error.response);
    return { data: error.response.data, status: error.response.status };
  }
});

export const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = {};
      state.token = "";
      state.status = null;
      state.role = null;
    },
    checkUser: (state) => {
      const creds = decryptData();
      if (creds.user) {
        state.user = creds.user;
        state.token = creds.token;
        state.isLoggedIn = true;
        state.role = creds.user.role.name;
      } else {
        state.user = {};
        state.token = "";
        state.status = null;
        state.role = null;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        if (action.payload.status === 401) {
          //if (action.payload.error.status === 401) {
          //console.log("login failed");
          toast.error("Logge in failed");
          state.isLoading = false;
        } else {
          state.isLoading = false;
          state.user = action.payload.data.user;
          state.token = action.payload.data.authorisation.token;
          state.isLoggedIn = true;
          state.role = action.payload.data.user.role.name;
          toast.success("Logged in successfully");

          encryptData({
            user: action.payload.data.user,
            token: action.payload.data.authorisation.token,
          });
        }
      })
      .addCase(login.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(login.rejected, (state, action) => {
        console.log("rejected");
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase("login/loadSavedData", (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.role = action.payload.user.role.name;
      })
      .addCase(logoutRequest.fulfilled, (state) => {
        resetState(state);
        toast.success("Logged out successfully");
      })
      .addCase(logoutRequest.rejected, (state) => {
        toast.error("Logge out failed");
      });
  },
});

export const logoutRequest = createAsyncThunk("logout", async (_, thunkAPI) => {
  try {
    const creds = decryptData();
    const token = creds.token;
    if (!token) {
      return thunkAPI.rejectWithValue("No token found.");
    }
    
    await axios.post(url + "logout", null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    localStorage.removeItem("creds");
    
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const { logout, checkUser } = loginSlice.actions;

export default loginSlice.reducer;

const resetState = (state) => {
  Object.assign(state, initialState);
};
