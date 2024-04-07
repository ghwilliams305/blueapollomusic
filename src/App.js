import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
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

function App({state, dispatch}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home state={state.home} dispatch={dispatch} />} />
          <Route path="music" element={<Music state={state.music} dispatch={dispatch} />} />
          <Route path="music/:songKey" element={<Sheet state={state.sheet} dispatch={dispatch} />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
