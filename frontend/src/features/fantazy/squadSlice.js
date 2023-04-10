import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { calculateTotaleValue } from "../../utilities/functions.js";
import axios from "axios";
import { decryptData } from "../../utilities/functions.js";

const url = "http://localhost:8090/api/";

const initialState = {
  name: null,
  TotaleValue: 0,
  players: [],
  hasSquad: false,
  isLoading: true,
};

export const getSquad = createAsyncThunk("squad", async () => {
  const creds = decryptData();
  const token = creds.token;
  const response = await axios.get(url + "squad", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.data;
  console.log(data);
  return data;
});

export const squadSlice = createSlice({
  name: "squad",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getSquad.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        if (action.payload.squad != null) {
          state.name = action.payload.squad.name;
          state.players = action.payload.squad.players;
          state.hasSquad = true;
          state.TotaleValue = calculateTotaleValue(state.players);
        }
      })
      .addCase(getSquad.pending, (state, action) => {
        console.log("pending");
        state.isLoading = true;
      })
      .addCase(getSquad.rejected, (state, action) => {
        console.log("rejected");
        state.isLoading = false;
      });
  },
});

export default squadSlice.reducer;
