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
  selectedPlayers: [
    {
      name: "Goalkeeper",
      id: 1,
      poste: {
        name: "Goalkeeper",
        id: 1,
      },
      club: {},
    },
    {
      name: "Defender",
      id: 2,
      poste: {
        name: "Defender",
        id: 2,
      },
      club: {},
    },
    {
      name: "Defender",
      id: 3,
      poste: {
        name: "Defender",
        id: 2,
      },
      club: {},
    },
    {
      name: "Defender",
      id: 4,
      poste: {
        name: "Defender",
        id: 2,
      },
      club: {},
    },
    {
      name: "Defender",
      id: 5,
      poste: {
        name: "Defender",
        id: 2,
      },
      club: {},
    },
    {
      name: "Midfielder",
      id: 6,
      poste: {
        name: "Midfielder",
        id: 3,
      },
      club: {},
    },
    {
      name: "Midfielder",
      id: 7,
      poste: {
        name: "Midfielder",
        id: 3,
      },
      club: {},
    },
    {
      name: "Midfielder",
      id: 8,
      poste: {
        name: "Midfielder",
        id: 3,
      },
      club: {},
    },
    {
      name: "Midfielder",
      id: 9,
      poste: {
        name: "Midfielder",
        id: 3,
      },
      club: {},
    },
    {
      name: "Forward",
      id: 10,
      poste: {
        name: "Forward",
        id: 4,
      },
      club: {},
    },
    {
      name: "Forward",
      id: 11,
      poste: {
        name: "Forward",
        id: 4,
      },
      club: {},
    },
  ],
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
  console.log(data.userSelection.players);
  return data;
});

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
