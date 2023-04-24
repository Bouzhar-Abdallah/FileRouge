import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { decryptData } from "../../utilities/functions";
import { baseURL } from "../../utilities/env";
import { toast } from "react-toastify";
import axios from "axios";

const initialState = {
    isLoading: true,
    events: [],
};

export const getEvents = createAsyncThunk("events", async () => {
    
    const creds = decryptData();
    const token = creds.token;

    const response = await axios.get(baseURL + "events", {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await response.data;
//console.log(data)
    return data;
});


export const updatePostePoint = createAsyncThunk("updatePostePoint", async (args) => {
    const creds = decryptData();
    const token = creds.token;
    console.log(args)
    const response = await axios.post(baseURL + "updatePostePoint", args, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await response.data;
    console.log(data)
    return data;
});

export const pointsSlice = createSlice({
    name: "points",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getEvents.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(getEvents.fulfilled, (state, action) => {
            state.isLoading = false;
            state.events = action.payload;
            //console.log(state.events)
        })
        .addCase(getEvents.rejected, (state, action) => {
            state.isLoading = false;
            toast.error("Update failed");
        })
        .addCase(updatePostePoint.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(updatePostePoint.fulfilled, (state, action) => {
            state.isLoading = false;
            toast.success("Event point updated");
        })
        .addCase(updatePostePoint.rejected, (state, action) => {
            state.isLoading = false;
            toast.error("Update failed");
        });
    }
});

export default pointsSlice.reducer;