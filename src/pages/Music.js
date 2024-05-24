import insta from "../resources/images/insta_logo.png";
import youtube from "../resources/images/youtube_logo.png";
import tiktok from "../resources/images/tiktok_logo.png";
import SongContainer from "../components/SongContainer";
import musicStyles from "../resources/css/music.module.css";
import { useEffect, useState } from "react";
import SongCard from "../components/SongCard";
import { loadMusicSongs } from "../state/slices/MusicSlice";

function Music({state, dispatch}) {
    const [bands, setBands] = useState([]);
    const [winds, setWinds] = useState([]);
    const [orchestra, setOrchestra] = useState([]);
    const [chamber, setChamber] = useState([]);

    useEffect(() => {
        dispatch(loadMusicSongs());
    }, []);
    useEffect(() => {
        if(state.isReady){
            setBands(state.band);
            setWinds(state.wind);
            setOrchestra(state.orchestra);
            setChamber(state.chamber);
        }
    }, [state]);

    return (
        <>
            <div className={musicStyles.main}>
                <aside className={musicStyles.socials} id="socials">
                    <a href="https://www.instagram.com/blueapo11omusic/" target="_blank"><img src={insta} alt="instagram button icon"/></a>
                    <a href="https://www.youtube.com/@blueapollomusic1713" target="_blank"><img src={youtube} alt="youtube button icon"/></a>
                    <a href="https://musescore.com/user/46747553" target="_blank"><img src={tiktok} alt="musescore button icon"/></a>
                </aside>
                <SongContainer title="Big Bands" style={musicStyles}>
                    {(bands) ? bands.map((song) => (
                        <SongCard tempSongObj={song} styleNum={0} />
                    )) : "Loading..."}
                </SongContainer>
                <SongContainer title="Wind Ensemble" style={musicStyles}>
                    {(winds) ? winds.map((song) => (
                        <SongCard tempSongObj={song} styleNum={3} />
                    )) : "Loading..."}
                </SongContainer>
                <SongContainer title="Orchestra" style={musicStyles}>
                    {(orchestra) ? orchestra.map((song) => (
                        <SongCard tempSongObj={song} styleNum={2} />
                    )) : "Loading..."}
                </SongContainer>
                <SongContainer title="Chamber" style={musicStyles}>
                    {(chamber) ? chamber.map((song) => (
                        <SongCard tempSongObj={song} styleNum={1} />
                    )) : "Loading..."}
                </SongContainer>
            </div>
        </>
    );
}

export default Music;