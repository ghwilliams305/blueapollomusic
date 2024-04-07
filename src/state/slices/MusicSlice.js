const { createSlice } = require("@reduxjs/toolkit");
const { getSongGroup, getSongObjByKey } = require("../../resources/js/getSongs");

const MusicSlice = createSlice({
    name: 'music',
    initialState: {
        isReady: false,
        band: [],
        wind: [],
        orchestra: [],
        chamber: []
    },
    reducers: {
        loadMusicSongs: (state, action) => {
            return {
                ...state,
                isReady: true,
                band: getSongGroup('band', 10).map(getSongObjByKey),
                wind: getSongGroup('wind', 10).map(getSongObjByKey),
                orchestra: getSongGroup('orchestra', 10).map(getSongObjByKey),
                chamber: getSongGroup('chamber', 10).map(getSongObjByKey)
            }
        }
    }
});

export const {loadMusicSongs} = MusicSlice.actions;
export default MusicSlice.reducer;