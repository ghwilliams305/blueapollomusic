import insta from "../resources/images/insta_logo.png";
import youtube from "../resources/images/youtube_logo.png";
import tiktok from "../resources/images/tiktok_logo.png";
import SongContainer from "../components/SongContainer";
import { useEffect, useState } from "react";
import { getNewSongs, getSongObjByKey, getTopSongs } from "../resources/js/getSongs";
import { Link } from "react-router-dom";
import { loadHomeSongs } from "../state/slices/homeSlice";

function Home({state, dispatch}) {
    const [topSongs, setTopSongs] = useState([]);
    const [newSongs, setNewSongs] = useState([]);
    const [topSongImage, setTopSongImage] = useState({});
    const [newSongImage, setNewSongImage] = useState({});
    useEffect(() => {
        dispatch(loadHomeSongs());
    }, []);
    useEffect(() => {
        const {isReady, popularMusic, newMusic} = state;
        
        if(isReady) {
            setNewSongs(newMusic);
            setTopSongs(popularMusic);
            
            import(`../content/${popularMusic[0].image}`).then((image) => {
                setTopSongImage(image.default);
            });
            import(`../content/${newMusic[0].image}`).then((image) => {
                setNewSongImage(image.default);
            });
        }
    }, [state]);

    return (
        <>
            <div id="banner">
                <h1>Blue Apollo Music</h1>
            </div>
            <aside id="socials">
                <a href="https://www.instagram.com/blueapo11omusic/" target="_blank"><img src={insta} alt="instagram button icon"/></a>
                <a href="https://www.youtube.com/@blueapollomusic1713" target="_blank"><img src={youtube} alt="youtube button icon"/></a>
                <a href="#" target="_blank"><img src={tiktok} alt="tik tok button icon"/></a>
            </aside>
            <section>
                <div id="content">
                    <SongContainer title="Top Songs">
                        <img id="topimg" src={topSongImage ? topSongImage : ''} alt='top song cover' />
                        <ol id="top">
                            {(topSongs) ? topSongs.map((song) => (
                                <li>
                                    <Link to={`/music/${song.key}`}>{song.title}</Link>
                                </li>
                            )) : 'Loading'}
                        </ol>
                    </SongContainer>
                    <SongContainer title="New Songs">
                        <img id="newimg" src={newSongImage ? newSongImage : ''} alt="new song cover" />
                        <ol id="new">
                            {(newSongs) ? newSongs.map((song) => (
                                <li>
                                    <Link to={`/music/${song.key}`}>{song.title}</Link>
                                </li>
                            )) : 'Loading'}
                        </ol>
                    </SongContainer>
                </div>
            </section>
        </>
    );
}

export default Home;