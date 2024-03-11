import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Root() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Root;