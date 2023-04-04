import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:8090/api/games";

const initialState = {
    weeks: [],
    isLoading: true,
};

export const getGames = createAsyncThunk("game", async () => {
    console.log('getGames')
    const response = await fetch(url);
    const games = await response.json();
    return games;
});

export const fixturesSlice = createSlice({
    name: "weeks",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getGames.fulfilled, (state, action) => {
            //console.log(action.payload);
            state.isLoading = false;
            state.weeks = action.payload;
        })
        .addCase(getGames.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(getGames.rejected, (state, action) => {
            state.isLoading = false;
        });
    },
});

export default fixturesSlice.reducer;