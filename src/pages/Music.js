import insta from "../resources/images/insta_logo.png";
import youtube from "../resources/images/youtube_logo.png";
import tiktok from "../resources/images/tiktok_logo.png";
import SongContainer from "../components/SongContainer";
import musicStyles from "../resources/css/music.module.css";
import { useEffect, useState } from "react";
import { getSongGroup } from "../resources/js/getSongs";
import SongCard from "../components/SongCard";

function Music() {
    const [bands, setBands] = useState([]);
    const [winds, setWinds] = useState([]);
    const [orchestra, setOrchestra] = useState([]);
    const [chamber, setChamber] = useState([]);

    useEffect(() => {
        setBands(getSongGroup('band', 10));
        setWinds(getSongGroup('wind', 10));
        setOrchestra(getSongGroup('orchestra', 10));
        setChamber(getSongGroup('chamber', 10));
    }, [])

    return (
        <>
            <div className={musicStyles.main}>
                <aside className={musicStyles.socials} id="socials">
                    <a href="https://www.instagram.com/blueapo11omusic/" target="_blank"><img src={insta} alt="instagram button icon"/></a>
                    <a href="https://www.youtube.com/@blueapollomusic1713" target="_blank"><img src={youtube} alt="youtube button icon"/></a>
                    <a href="#" target="_blank"><img src={tiktok} alt="tik tok button icon"/></a>
                </aside>
                <SongContainer title="Big Bands" style={musicStyles}>
                    {(bands) ? bands.map((song) => (
                        <SongCard songKey={song} styleNum={0} />
                    )) : "Loading..."}
                </SongContainer>
                <SongContainer title="Wind Ensemble" style={musicStyles}>
                    {(winds) ? winds.map((song) => (
                        <SongCard songKey={song} styleNum={3} />
                    )) : "Loading..."}
                </SongContainer>
                <SongContainer title="Orchestra" style={musicStyles}>
                    {(orchestra) ? orchestra.map((song) => (
                        <SongCard songKey={song} styleNum={2} />
                    )) : "Loading..."}
                </SongContainer>
                <SongContainer title="Chamber" style={musicStyles}>
                    {(chamber) ? chamber.map((song) => (
                        <SongCard songKey={song} styleNum={1} />
                    )) : "Loading..."}
                </SongContainer>
            </div>
        </>
    );
}

export default Music;