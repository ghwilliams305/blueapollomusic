import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getReleventSong, getSongObjByKey } from "../../resources/js/getSongs";

export const fetchMedia = createAsyncThunk('sheet/loadSongMedia', async (songKey, thunkAPI) => {
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
        isReady: false,
        song: {
            title: '',
            type: '',
            date: {},
            description: "",
            audio: {},
            score: {},
            image: {}
        },
        releventContent: []
    },
    reducers: {
        loadSongDetails: (state, action) => {
            const songObj = getSongObjByKey(action.payload);

            return {
                ...state,
                isReady: true,
                song: {
                    ...state.song,
                    title: songObj.title,
                    type: songObj.type,
                    date: songObj.date,
                    description: songObj.description
                }
            }
        },
        loadReleventContent: (state, action) => {
            const {description, title} = getSongObjByKey(action.payload)

            const descriptionArray = description.split(" ");
            const titleArray = title.split(" ");
            const searchArray = descriptionArray.concat(titleArray);

            const relevantContent = getReleventSong(searchArray, 3).filter((song) => song !== action.payload);
            while(relevantContent.length > 2) {
                relevantContent.pop();
            }
            
            return {
                ...state,
                isReady: true,
                releventContent: relevantContent.map(getSongObjByKey)
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMedia.fulfilled, (state, action) => {
            return {
                ...state,
                isReady: true,
                song: {
                    ...state.song,
                    audio: action.payload.audio,
                    score: action.payload.score,
                    image: action.payload.image
                }
            }
        });
        builder.addCase(fetchMedia.pending, (state, action) => {
            return {
                ...state,
                isReady: false,
            }
        });
    }
});

export const {loadSongDetails, loadReleventContent} = SheetSlice.actions;
export default SheetSlice.reducer;