import { useEffect, useState } from "react";
import songCardStyles from "../resources/css/songCard.module.css";
import { getSongObjByKey } from "../resources/js/getSongs";
import { useNavigate } from "react-router-dom";

function SongCard({tempSongObj, styleNum}) {
    const [customStyle, setCustomStyle] = useState("orchestra");
    const [songObj, setSongObj] = useState();
    const [coverImg, setCoverImg] = useState({});

    useEffect(() => {
        const styleList = ["band", "chamber", "orchestra", "wind"];

        setCustomStyle(styleList[styleNum]);
    }, []);

    useEffect(() => {
        setSongObj(tempSongObj);
        
        import(`../content/${tempSongObj.image}`).then((image) => {
            setCoverImg(image.default);
        });
    }, [tempSongObj]);

    const navigate = useNavigate()

    const handleOnClick = () => {
        navigate(`/music/${songObj.key}`);
    }

    return (
        <article 
            className={songCardStyles.article} 
            id={customStyle}
            onClick={handleOnClick}>
            {(songObj) ? (
                <>
                    <img src={coverImg} alt={`Song cover for ${songObj.title}`} />
                    <div>
                        <h2>{songObj.title}</h2>
                        <p>{songObj.description.slice(0, 100) + '...'}</p>
                    </div>
                </>
            ) : songObj}
        </article>
    );
}

export default SongCard;