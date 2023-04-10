import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
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
    console.log(error.response)
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        
        if (action.payload.status === 401) {
        //if (action.payload.error.status === 401) {
          console.log("login failed");
          state.isLoading = false;
        } else {
          state.isLoading = false;
          state.user = action.payload.data.user;
          state.token = action.payload.data.authorisation.token;
          state.isLoggedIn = true;
          state.role = action.payload.data.user.role.name;

          localStorage.setItem(
            "token",
            action.payload.data.authorisation.token
          );
          localStorage.setItem(
            "user",
            JSON.stringify(action.payload.data.user)
          );
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
      /* .addCase(checkLoginState.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkLoginState.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = localStorage.getItem("token");
        state.isLoggedIn = true;
        state.role = action.payload.user.role.name;
      })
      .addCase(checkLoginState.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
        state.role = null;
      }) */
      .addCase(logoutRequest.fulfilled, (state) => {
        resetState(state);
      })
      .addCase(logoutRequest.rejected, (state) => {
        // You can handle errors here if needed
      });
  },
});

export const checkLoginState = createAsyncThunk(
  "login/checkLoginState",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        return thunkAPI.rejectWithValue("No token found.");
      } else {
        const response = await axios.get(url + "checkLogin", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = response.data;
        return { data }; // Return only the necessary data
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutRequest = createAsyncThunk("logout", async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      return thunkAPI.rejectWithValue("No token found.");
    }

    await axios.post(url + "logout", null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    localStorage.removeItem("token");
    localStorage.removeItem("user");
  } catch (error) {
    //console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const { logout } = loginSlice.actions;

export default loginSlice.reducer;

const resetState = (state) => {
  Object.assign(state, initialState);
};
