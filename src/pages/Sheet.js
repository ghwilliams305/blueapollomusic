import sheetStyles from "../resources/css/sheet.module.css";
import SongContainer from "../components/SongContainer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getReleventSong, getSongObjByKey } from "../resources/js/getSongs";
import SongCard from "../components/SongCard";
import tubaPic from "../resources/images/temp_tuba.jpg";
import { fetchMedia, loadReleventContent, loadSongDetails } from "../state/slices/SheetSlice";

const backgroundStyle = {
    backgroundImage:"url('../images/temp_tuba.jpg')",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover"
}

function Sheet({state, dispatch}) {
    const {songKey} = useParams();
    const [songObj, setSongObj] = useState();
    const [relevantContent, setRelevantContent] = useState([]);
    const [image, setImage] = useState({});
    const [audio, setAudio] = useState({});
    const [score, setScore] = useState({});
    const [backgroundImage, setBackgroundImage] = useState(tubaPic);

    useEffect(() => {
        dispatch(loadSongDetails(songKey));
        dispatch(loadReleventContent(songKey));
        dispatch(fetchMedia(songKey));
    }, [songKey]);

    useEffect(() => {
        const {isReady, song, releventContent} = state;

        if(isReady) {
            setSongObj({
                ...song,
                audio: '',
                score: '',
                image: ''
            });

            setRelevantContent(releventContent);

            setAudio(song.audio);
            setBackgroundImage(song.image);
            setImage(song.image);
            setScore(song.score);
        }
    }, [state]);

    return (
        <div style={{
            backgroundImage:`url('${backgroundImage}')`,
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover"
        }}>
            <section className={sheetStyles.section}>
                <article className={sheetStyles.info}>
                    {(songObj) ? (
                        <>
                            <div className={sheetStyles.head}>
                                <h1>{`${songObj.title} (${songObj.date.getFullYear()})`}</h1>
                            </div>
                            <img src={image} alt={`${songObj.title} cover`} id="cover"/>
                            <audio 
                                controls 
                                id="audio"
                                src={audio} />
                        </>
                    ) : "Loading..."}
                </article>
                <SongContainer title="Relevant Content" style={sheetStyles}>
                    {(relevantContent) ? relevantContent.map((song) => (
                        <SongCard tempSongObj={song} styleNum={3} />
                    )) : "Loading..."}
                </SongContainer>
                <article id="info2">
                    {(songObj) ? (
                        <>
                            <p className={sheetStyles.description}>{songObj.description}</p>
                            <iframe 
                                className={sheetStyles.iframe}
                                src={score}
                                title={`${songObj.title} score`} >
                        
                            </iframe>
                        </>
                    ) : "Loading..."}
                </article>
            </section>
        </div>
    );
}

export default Sheet;