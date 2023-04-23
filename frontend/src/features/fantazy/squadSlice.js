import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { calculateTotaleValue } from "../../utilities/functions.js";
import axios from "axios";
import { decryptData } from "../../utilities/functions.js";
import { toast } from "react-toastify";
const url = "http://localhost:8090/api/";

const initialState = {
  name: "",
  hasStarted: false,
  hasFinished: false,
  isLoading: true,
  logo: null,
  logos: [],
  TotaleValue: 0,
  players: [],
  hasSquad: false,
  hasSelection: false,
  isLoading: true,
  step: 0,
  stepsName: [
    "Select your logo",
    "Choose a name",
    "Select players",
    "Review & Save",
  ],
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
    //console.log(squad);

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

export const saveSelectedPlayers = createAsyncThunk(
  "createSquad/saveSelectedPlayers",
  async (args, thunkAPI) => {
    const state = thunkAPI.getState().squad;
    const creds = decryptData();
    const token = creds.token;
    const players = state.players;
    const ids = players.map((item) => item.id);

    try {
      const response = await axios.post(url + "saveSelectedPlayers", ids, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.data;
      return { data: data, status: response.status };
    } catch (error) {
      return { data: error.response.data, status: error.response.status };
    }
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
      if (state.step === 2) {
        if (state.players.length < 16) {
          toast.error("you must select 16 players");
        } else if (state.players.length > 16) {
          toast.error("you can't select more than 16 players");
        } else if (state.name === "") {
          toast.error("you must choose a name");
        } else if (state.logo === null) {
          toast.error("you must choose a logo");
        } else if (state.TotaleValue > 10000) {
          toast.error("you can't exceed 10 000");
        } else {
          state.step = state.step + 1;
        }
      } else {
        state.step = state.step + 1;
      }
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
    setRandomSquad: (state, action) => {
      state.players = action.payload;
      state.TotaleValue = calculateTotaleValue(state.players);
    },
    selectPlayer: (state, action) => {
      if (state.players.length < 16) {
        if (state.players.some((player) => player.id === action.payload.id)) {
          toast.error("player already selected");
        } else {
          if (state.TotaleValue + action.payload.price < 10000) {
            state.players.push(action.payload);
            state.TotaleValue = calculateTotaleValue(state.players);
          } else {
            toast.error("budget exceeded, select another player");
          }
        }
      } else {
        state.hasFinished = true;
        toast.error("you can't select more than 16 players");
        toast.error("remove a player to select another one");
      }
    },
    removePlayer: (state, action) => {
      const index = state.players.findIndex(
        (player) => player.id === action.payload.id
      );
      state.players.splice(index, 1);
      state.TotaleValue = calculateTotaleValue(state.players);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSquad.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.squad == null) {
          state.logos = action.payload.logos;
          state.hasSquad = false;
          state.step = 0;
        } else {
          if (action.payload.squad.players.length == 0) {
            state.hasSelection = false;
            state.logo = action.payload.logo;
            state.logos = action.payload.logos;
            
            state.step = 2;
            state.hasStarted = true;
            
          } else {
            state.hasSelection = true;
            
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
        state.step = 2;
      })
      .addCase(saveNewSquad.pending, (state, action) => {
        console.log("pending 1", action);
        state.isLoading = true;
      })
      .addCase(saveNewSquad.rejected, (state, action) => {
        console.log("rejected 1", action);
        state.isLoading = false;
      })
      .addCase(saveSelectedPlayers.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.status === 201) {
          toast.success("your selection has been saved");
          state.step = 4;
        } else {
          toast.error("an error occured");
        }

        state.hasFinished = true;
      })
      .addCase(saveSelectedPlayers.pending, (state, action) => {
        console.log("pending 1", action);
        state.isLoading = true;
      })
      .addCase(saveSelectedPlayers.rejected, (state, action) => {
        toast.error("an error occured");
        state.isLoading = false;
      });
  },
});
export const {
  setStarted,
  nextStep,
  previousStep,
  setLogo,
  setName,
  selectPlayer,
  removePlayer,
  setRandomSquad,
} = squadSlice.actions;
export default squadSlice.reducer;
