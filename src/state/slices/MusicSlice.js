const { createSlice } = require("@reduxjs/toolkit");
const { getSongGroup } = require("../../resources/js/getSongs");

const MusicSlice = createSlice({
    name: 'music',
    initialState: {
        band: [],
        wind: [],
        orchestra: [],
        chamber: []
    },
    reducers: {
        loadMusicSongs: (state, action) => {
            return {
                ...state,
                band: getSongGroup('band', 10),
                wind: getSongGroup('wind', 10),
                orchestra: getSongGroup('orchestra', 10),
                chamber: getSongGroup('chamber', 10)
            }
        }
    }
});

export const {loadMusicSongs} = MusicSlice.actions;
export default MusicSlice.reducer;