import { NavLink } from "react-router-dom";
import logo from "../resources/images/apollo_logo.jpg";

function Header() {
    return (
        <>
            <nav>
                <div className="infobox">
                    <img src={logo} alt="blue apollo logo"/>
                    <span>Blue Apollo Music</span>
                </div>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/music">Music</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav> 
        </>
    );
}

export default Header;