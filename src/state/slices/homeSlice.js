import { createSlice } from "@reduxjs/toolkit";
import { getNewSongs, getTopSongs } from "../../resources/js/getSongs";

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        popularMusic: [],
        newMusic: []
    },
    reducers: {
        loadSongs: (state, action) => {
            return {
                ...state,
                popularMusic: getNewSongs(action.payload),
                newMusic: getTopSongs(action.payload)
            }
        }
    }
});

export const {loadSongs} = homeSlice.actions;
export default homeSlice.reducer;