import insta from "../resources/images/insta_logo.png";
import youtube from "../resources/images/youtube_logo.png";
import tiktok from "../resources/images/tiktok_logo.png";

function Footer() {
    return (
        <>
            <footer>
                <div class="infobox" id="contact">
                    <h2>Contact:</h2>
                    <a href="mailto:blueapolomusic@gmail.com" target="_blank">blueapolomusic@gmail.com</a>
                </div>
                <div id="footsocial">
                    <a href="https://www.instagram.com/blueapo11omusic/" target="_blank"><img src={insta} alt="instagram button icon"/></a>
                    <a href="https://www.youtube.com/@blueapollomusic1713" target="_blank"><img src={youtube} alt="youtube button icon"/></a>
                    <a href="https://musescore.com/user/46747553" target="_blank"><img src={tiktok} alt="musescore button icon"/></a>
                </div>
            </footer>
        </>
    );
}

export default Footer;