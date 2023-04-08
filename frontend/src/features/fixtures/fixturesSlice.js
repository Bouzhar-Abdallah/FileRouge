import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:8090/api/fixtures";

const initialState = {
    weeks: [],
    isLoading: true,
};

export const getFixtures = createAsyncThunk("fixtures", async () => {
    const response = await fetch(url/* , {
        credentials: 'include' 
    } */);
    const fixtures = await response.json();
    //console.log(fixtures)
    return fixtures;
});

export const fixturesSlice = createSlice({
    name: "weeks",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getFixtures.fulfilled, (state, action) => {
            state.isLoading = false;
            state.weeks = action.payload;
        })
        .addCase(getFixtures.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(getFixtures.rejected, (state, action) => {
            state.isLoading = false;
        });
    },
});

export default fixturesSlice.reducer;