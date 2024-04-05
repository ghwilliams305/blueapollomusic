import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSongObjByKey } from "../../resources/js/getSongs";

const fetchMedia = createAsyncThunk('sheet/loadSongMedia', async (songKey, thunkAPI) => {
    const songObj = getSongObjByKey(songKey);

    const mediaFiles = await Promise.all([
        import(`../../content/${songObj.image}`),
        import(`../../content/${songObj.audio}`),
        import(`../../content/${songObj.score}`)
    ]);

    return {
        image: mediaFiles[0].default,
        audio: mediaFiles[1].default,
        score: mediaFiles[2].default
    }
});

const SheetSlice = createSlice({
    name: 'sheet',
    initialState: {
        title: '',
        type: '',
        date: {},
        description: "",
        audio: {},
        score: {},
        image: {}
    },
    reducers: {
        loadSongDetails: (state, action) => {
            const songObj = getSongObjByKey(action.payload);

            return {
                ...state,
                title: songObj.title,
                type: songObj.type,
                date: songObj.date,
                description: songObj.description,
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMedia.fulfilled, (state, action) => {
            return {
                ...state,
                audio: action.payload.audio,
                score: action.payload.score,
                image: action.payload.image
            }
        });
    }
});