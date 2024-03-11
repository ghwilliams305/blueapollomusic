import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Root from "./components/Root";
import Home from "./pages/home";
import Music from "./pages/Music";
import Sheet from "./pages/Sheet";

const router = createBrowserRouter( createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route index element={<Home />} />
    <Route path="music" element={<Music />} />
    <Route path="music/:songKey" element={<Sheet />} />
  </Route>
));

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
