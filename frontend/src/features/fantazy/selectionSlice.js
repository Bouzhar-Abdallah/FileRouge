import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { decryptData } from "../../utilities/functions";
import { baseURL } from "../../utilities/env";
import { toast } from "react-toastify";
import axios from "axios";

const initialState = {
  weekPlay: null,
  isLoading: true,
  hasSelection: false,
  readyToSave: false,
  selectedPlayers: [],
};

export const getSelection = createAsyncThunk("selection", async () => {
  const creds = decryptData();
  const token = creds.token;

  const response = await axios.get(baseURL + "selection", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.data;
  
  return data;
});

export const saveSelection = createAsyncThunk(
  "saveSelection",
  async (args, thunkAPI) => {
    const creds = decryptData();
    const token = creds.token;
    const state = thunkAPI.getState().selection
    const selection = state.selectedPlayers
    const ids = selection.map((item) => item.id);
    
    const response = await axios.post(baseURL + "saveSelection", ids, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.data;
    
    return data;
  }
);

export const selectionSlice = createSlice({
  name: "selection",
  initialState,
  reducers: {
    addPlayer: (state, action) => {
      
      switch (action.payload.poste.name) {
        case "Goalkeeper":
          if (
            state.selectedPlayers.filter(
              (player) => player.poste.name === "Goalkeeper"
            ).length < 1
          ) {
            state.selectedPlayers.push(action.payload);
            
          } else {
            toast.error("You can't select more than one GoalKeeper");
          }
          break;
        case "Defender":
          if (
            state.selectedPlayers.filter(
              (player) => player.poste.name === "Defender"
            ).length < 4
          ) {
            state.selectedPlayers.push(action.payload);
          } else {
            toast.error("You can't select more than four Defenders");
          }
          break;
        case "Midfielder":
          if (
            state.selectedPlayers.filter(
              (player) => player.poste.name === "Midfielder"
            ).length < 4
          ) {
            state.selectedPlayers.push(action.payload);
          } else {
            toast.error("You can't select more than four Midfielders");
          }
          break;
        case "Forward":
          if (
            state.selectedPlayers.filter(
              (player) => player.poste.name === "Forward"
            ).length < 2
          ) {
            state.selectedPlayers.push(action.payload);
          } else {
            toast.error("You can't select more than two Forwards");
          }
          break;
        default:
          break;
      }

      if (state.selectedPlayers.length === 11) {
        state.readyToSave = true;
      }
    },
    removePlayer: (state, action) => {
      state.selectedPlayers = state.selectedPlayers.filter(
        (player) => player.id !== action.payload.id
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSelection.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSelection.fulfilled, (state, action) => {
        state.isLoading = false;
        state.weekPlay = action.payload.week;
        state.hasSelection = action.payload.hasSelection;
        state.selectedPlayers = action.payload.selectedPlayers;
      })
      .addCase(getSelection.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(saveSelection.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(saveSelection.fulfilled, (state, action) => {
        state.isLoading = false;
        if(state.hasSelection){
            toast.success("Your selection has been updated successfully");
        }else{
            toast.success("Your selection has been saved successfully");
        }
      })
      .addCase(saveSelection.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { addPlayer, removePlayer } = selectionSlice.actions;

export default selectionSlice.reducer;
