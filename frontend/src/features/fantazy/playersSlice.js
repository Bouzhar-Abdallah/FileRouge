import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { decryptData } from "../../utilities/functions.js";
import axios from "axios";
const url = "http://localhost:8090/api/players";

const initialState = {
    players: [],
    isLoading: true,
};

export const getPlayers = createAsyncThunk("players", async () => {
    
    const creds = decryptData();
    const token = creds.token;
    
    const response = await axios.get(url, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            },
            });
    const players = await response.data;
    //console.log(players)
    return players;
});

export const playersSlice = createSlice({
    name: "players",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
        .addCase(getPlayers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.players = action.payload.players;
            //console.log(action.payload)
        })
        .addCase(getPlayers.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(getPlayers.rejected, (state, action) => {
            state.isLoading = false;
        });
    }
});

export default playersSlice.reducer;
