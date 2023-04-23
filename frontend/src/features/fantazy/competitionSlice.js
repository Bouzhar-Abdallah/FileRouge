import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { decryptData } from "../../utilities/functions";
import { baseURL } from "../../utilities/env";
import axios from "axios";

const initialState = {
    weekPlay: 0,
    isLoading: true,
    totalPoints: 0,
    playersCount: 0,
    userOverAllRanking: 0,
    selectedPlayers: [],
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
    //console.log(data.userSelection.players);
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
                //console.log(action.payload)
                state.isLoading = false;
                state.weekPlay = action.payload.weekPlay;
                state.totalPoints = action.payload.totalPoints;
                state.playersCount = action.payload.playersCount;
                state.userOverAllRanking = action.payload.overAllRanking;
                state.selectedPlayers = action.payload.userSelection.players;
            })
            .addCase(getCompetition.rejected, (state) => {
                
                state.isLoading = false;
            });
    },
});

export default competitionSlice.reducer;