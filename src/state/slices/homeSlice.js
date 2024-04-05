import { createSlice } from "@reduxjs/toolkit";
import { getNewSongs, getTopSongs } from "../../resources/js/getSongs";

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        popularMusic: [],
        newMusic: []
    },
    reducers: {
        loadHomeSongs: (state, action) => {
            return {
                ...state,
                popularMusic: getNewSongs(action.payload),
                newMusic: getTopSongs(action.payload)
            }
        }
    }
});

export const {loadHomeSongs} = homeSlice.actions;
export default homeSlice.reducer;