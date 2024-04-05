import sheetStyles from "../resources/css/sheet.module.css";
import SongContainer from "../components/SongContainer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getReleventSong, getSongObjByKey } from "../resources/js/getSongs";
import SongCard from "../components/SongCard";
import tubaPic from "../resources/images/temp_tuba.jpg";
import { loadSongDetails } from "../state/slices/SheetSlice";

const backgroundStyle = {
    backgroundImage:"url('../images/temp_tuba.jpg')",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover"
}

function Sheet({state, dispatch}) {
    const {songKey} = useParams();
    const [songObj, setSongObj] = useState();
    const [relevantContent, setRelevantContent] = useState();
    const [image, setImage] = useState({});
    const [audio, setAudio] = useState({});
    const [score, setScore] = useState({});
    const [backgroundImage, setBackgroundImage] = useState(tubaPic);

    useEffect(() => {
        const songObj = dispatch(loadSongDetails);

        setSongObj(tempSongObj);

        const descriptionArray = tempSongObj.description.split(" ");
        const titleArray = tempSongObj.title.split(" ");
        const searchArray = descriptionArray.concat(titleArray);

        setRelevantContent([]);
        const tempRelevantContent = getReleventSong(searchArray, 3);
        const reducedArray = tempRelevantContent.filter((song) => song !== songKey);
        while(reducedArray.length > 2) {
            reducedArray.pop();
        }
        setRelevantContent(reducedArray);
        
        import(`../content/${tempSongObj.image}`).then((image) => {
            setImage(image.default);
            setBackgroundImage(image.default);
        });
        import(`../content/${tempSongObj.audio}`).then((audio) => {
            setAudio(audio.default);
        });
        import(`../content/${tempSongObj.score}`).then((score) => {
            setScore(score.default);
        });
    }, [songKey]);

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
                        <SongCard songKey={song} styleNum={3} />
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