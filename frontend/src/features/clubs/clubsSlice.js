import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { decryptData } from "../../utilities/functions.js";
import axios from "axios";
const url = "http://localhost:8090/api/";

const initialState = {
    clubs : [],
    isLoading: true,
};

export const getClubs = createAsyncThunk("clubs", async () => {
        
        const creds = decryptData();
        const token = creds.token;
        
        const response = await axios.get(url + "getClubs", {
            headers: {
                "Content-Type": "application/json",
                /* Authorization: `Bearer ${token}`, */
                },
                });
        const clubs = await response.data;
        //console.log(clubs)
        return clubs;
    });

export const clubsSlice = createSlice({
    name: "clubs",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getClubs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.clubs = action.payload;
            //console.log(action.payload)
        })
        .addCase(getClubs.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(getClubs.rejected, (state, action) => {
            state.isLoading = false;
        });
    }
});

export default clubsSlice.reducer;