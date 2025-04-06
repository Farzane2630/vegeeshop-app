import { createSlice } from "@reduxjs/toolkit";
import { apiRequests } from "../../Services/Axios/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBackgroundUrl = createAsyncThunk(
  "fetchBackgroundUrl",
  async () => {
    const response = await apiRequests.get("/heroImages");
    return response.data;
  }
);

const slice = createSlice({
  name: "bgUrl",
  initialState: [],
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(fetchBackgroundUrl.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default slice.reducer;
