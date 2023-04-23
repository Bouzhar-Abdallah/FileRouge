import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { decryptData } from "../../utilities/functions";
import { baseURL } from "../../utilities/env";
import axios from "axios";

const initialState = {
    weekPlay: 0,
    isLoading: true,
    hasSelection: false,
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
   console.log(data);
    return data;
});

export const selectionSlice = createSlice({
    name: "selection",
    initialState,
    reducers: {
        addPlayer:(state, action) =>{
            state.selectedPlayers.push(action.payload);
            if (!state.hasSelection) {
                state.hasSelection = true;
            }
        },
        removePlayer:(state, action) =>{
            state.selectedPlayers = state.selectedPlayers.filter(player => player.id !== action.payload.id);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSelection.pending, (state) => {
                
                state.isLoading = true;
            })
            .addCase(getSelection.fulfilled, (state, action) => {
                
                state.isLoading = false;
                state.weekPlay = action.payload.weekPlay;
                state.hasSelection = action.payload.hasSelection;
                state.selectedPlayers = action.payload.selectedPlayers;
            })
            .addCase(getSelection.rejected, (state) => {
                
                state.isLoading = false;
            });
    }
});

export const { addPlayer, removePlayer } = selectionSlice.actions;

export default selectionSlice.reducer;