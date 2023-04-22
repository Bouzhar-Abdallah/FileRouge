import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { decryptData } from "../../utilities/functions";
import { baseURL } from "../../utilities/env";
import axios from "axios";

const initialState = {
    weekPlay: 0,
    isLoading: true,
    totalPoints: 0,
    playersCount: 0,
};

export const getCompetition = createAsyncThunk("competition", async () => {
    const creds = decryptData();
    const token = creds.token;
    
    const response = await axios.get(baseURL + "competition", {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await response.data;
    console.log(data);
    return data;
}
);


export const competitionSlice = createSlice({
    name: "competition",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCompetition.pending, (state) => {
                
                state.isLoading = true;
            })
            .addCase(getCompetition.fulfilled, (state, action) => {
                
                state.isLoading = false;
                state.weekPlay = action.payload.weekPlay;
                state.totalPoints = action.payload.totalPoints;
                state.playersCount = action.payload.playersCount;
            })
            .addCase(getCompetition.rejected, (state) => {
                
                state.isLoading = false;
            });
    },
});

export default competitionSlice.reducer;