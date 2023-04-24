import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { decryptData } from "../../utilities/functions";
import { baseURL } from "../../utilities/env";
import { toast } from "react-toastify";
import axios from "axios";

const initialState = {
  isLoading: true,
  isLoaded: false,
  articles: [],
  filteredArticles: [],
  updatingArticle: null,
};

export const getArticles = createAsyncThunk("articles", async () => {
  const creds = decryptData();
  const token = creds.token;

  const response = await axios.get(baseURL + "articles", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.data;
  //console.log(data);
  return data;
});

export const updateArticle = createAsyncThunk("updateArticle", async (args) => {
  const creds = decryptData();
  const token = creds.token;
  
  const response = await axios.post(baseURL + "updateArticle", args, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.data;
  //console.log(data);
  return data;
});

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    filterArticles: (state, action) => {
      const club_id = action.payload;
      
    
      // Create a new array of filtered articles
      const filteredArticles = state.articles.filter((article) => {
        return article.clubs.some((club) => club.id == club_id);
      });

      state.filteredArticles = filteredArticles;
    },
    setUpdateArticle: (state, action) => {
      const article = action.payload;
      state.updatingArticle = article;
    }

  },
  extraReducers: (builder) => {
    builder
      .addCase(getArticles.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getArticles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoaded = true;
        state.articles = action.payload.data;
        state.filteredArticles = state.articles;
      })
      .addCase(getArticles.rejected, (state, action) => {
        state.isLoading = false;
        toast.error("Update failed");
      })
      .addCase(updateArticle.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateArticle.fulfilled, (state, action) => {
        state.isLoading = false;
        toast.success("Update successful");
      })
      .addCase(updateArticle.rejected, (state, action) => {
        state.isLoading = false;
        toast.error("Update failed");
      });
  },
});

export const { filterArticles, setUpdateArticle } = articlesSlice.actions;

export default articlesSlice.reducer;
