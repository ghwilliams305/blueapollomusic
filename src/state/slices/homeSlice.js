import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getNewSongs, getSongObjByKey, getTopSongs } from "../../resources/js/getSongs";

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        isReady: false,
        popularMusic: [],
        newMusic: []
    },
    reducers: {
        loadHomeSongs: (state, action) => (
            {
                ...state,
                isReady: true,
                popularMusic: getTopSongs(5).map(getSongObjByKey),
                newMusic: getNewSongs(5).map(getSongObjByKey)
            }
        )
    },
});

export const {loadHomeSongs} = homeSlice.actions;
export default homeSlice.reducer;