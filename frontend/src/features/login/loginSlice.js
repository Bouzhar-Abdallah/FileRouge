import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
    const response = await fetch(url + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("test", error);
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
        //console.log(action.payload)
        if (action.payload.status == "error") {
          console.log("login failed");
          state.isLoading = false;
        } else {
          state.isLoading = false;
          state.user = action?.payload.user;
          state.token = action.payload?.authorisation?.token;
          state.isLoggedIn = true;
          state.role = action.payload.user.role.name;

          localStorage.setItem("token", action.payload.authorisation.token);
          //localStorage.setItem('user', JSON.stringify(action.payload.user));
        }
      })
      .addCase(login.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase("login/loadSavedData", (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.role = action.payload.user.role.name;
      })
      .addCase(checkLoginState.pending, (state) => {
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
      });
  },
});

export const checkLoginState = createAsyncThunk(
  "login/checkLoginState",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("no token");
        return thunkAPI.rejectWithValue("No token found.");
      } else {
        const response = await fetch(url + "checkLogin", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
/* export const loadSavedLoginData = () => (dispatch) => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (token && user) {
      dispatch({
        type: 'login/loadSavedData',
        payload: { token, user },
      });
    }
  }; */

  export const { logout } = loginSlice.actions;


export default loginSlice.reducer;
