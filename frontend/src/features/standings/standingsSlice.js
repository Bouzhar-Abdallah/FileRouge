import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:8090/api/standings";

const initialState = {
    standings: [],
    isLoading: true,
};

export const getStandings = createAsyncThunk("standings", async () => {
    console.log('getStandings')
    const response = await fetch(url);
    const standings = await response.json();
    return standings;
});

export const standingsSlice = createSlice({
    name: "standings",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getStandings.fulfilled, (state, action) => {
            //console.log(action.payload);
            state.isLoading = false;
            state.standings = action.payload;
        })
        .addCase(getStandings.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(getStandings.rejected, (state, action) => {
            state.isLoading = false;
        });
    },
});

export default standingsSlice.reducer;