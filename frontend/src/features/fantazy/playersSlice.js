import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "http://localhost:8090/api/players";

const initialState = {
    players: [],
    isLoading: true,
};

export const getPlayers = createAsyncThunk("players", async () => {
    const response = await axios.get(url, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            });
    const players = await response.data;
    return players;
});

export const playersSlice = createSlice({
    name: "players",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getPlayers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.players = action.payload;
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
