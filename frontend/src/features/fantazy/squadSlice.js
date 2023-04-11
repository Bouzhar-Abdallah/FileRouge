import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { calculateTotaleValue } from "../../utilities/functions.js";
import axios from "axios";
import { decryptData } from "../../utilities/functions.js";

const url = "http://localhost:8090/api/";

const initialState = {
  name: '',
  hasStarted: false,
  isLoading: true,
  logo: null,
  logos: [],
  TotaleValue: 0,
  players: [],
  hasSquad: false,
  isLoading: true,
  step: 0,
  stepsName: ["Select your logo", "Choose a name", "Select players"],
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
  //console.log(data);
  return data;
});

export const saveNewSquad = createAsyncThunk(
  "createSquad/saveNewSquad",
  async (args, thunkAPI) => {
    const state = thunkAPI.getState().squad;
    const creds = decryptData();
    const token = creds.token;
    console.log(state);
    const squad = {
      name: state.name,
      logo_id: state.logo.id,
    };
    console.log(squad);

    const response = await axios.post(url + "saveNewSquad", squad, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.data;
    return data;
  }
);

export const squadSlice = createSlice({
  name: "squad",
  initialState,
  reducers: {
    setStarted: (state) => {
      state.hasStarted = true;
    },
    nextStep: (state) => {
      state.step = state.step + 1;
    },
    previousStep: (state) => {
      state.step = state.step - 1;
    },
    setLogo: (state, action) => {
      state.logo = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSquad.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        if (action.payload.squad != null) {
          if (action.payload.squad.players == null) {
            console.log("has players");
          } else {
            console.log("no players");
            state.step = 2;
            state.hasStarted = true;
            state.logo = action.payload.logo;
            state.name = action.payload.squad.name;
            state.logos = action.payload.logos;
          }

          state.name = action.payload.squad.name;
          state.players = action.payload.squad.players;
          state.hasSquad = true;
          state.TotaleValue = calculateTotaleValue(state.players);
        } else {
          state.logos = action.payload.logos;
        }
      })
      .addCase(getSquad.pending, (state, action) => {
        //console.log("pending");
        state.isLoading = true;
      })
      .addCase(getSquad.rejected, (state, action) => {
        //console.log("rejected");
        state.isLoading = false;
      })
      .addCase(saveNewSquad.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log("save", action.payload);
        state.step =2;
      })
      .addCase(saveNewSquad.pending, (state, action) => {
        console.log("pending 1", action);
        state.isLoading = true;
      })
      .addCase(saveNewSquad.rejected, (state, action) => {
        console.log("rejected 1", action);
        state.isLoading = false;
      });
  },
});
export const { setStarted, nextStep, previousStep, setLogo, setName } =
  squadSlice.actions;
export default squadSlice.reducer;
