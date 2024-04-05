const { configureStore } = require("@reduxjs/toolkit");
const { default: homeSlice } = require("./slices/homeSlice");
const { default: MusicSlice } = require("./slices/MusicSlice");
const { default: SheetSlice } = require("./slices/SheetSlice");


const store = configureStore({
    reducer: {
        home: homeSlice,
        music: MusicSlice,
        sheet: SheetSlice
    }
});

export default store;