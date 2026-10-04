import { BrowserRouter, Routes, Route } from "react-router-dom";

//import Navbar from "./components/Navbar";
import WhoAmI from "./pages/WhoAmI";
//import Projects from "./pages/Projects";
//import Blog from "./pages/Blog";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WhoAmI />} />
                {/* <Route path="/projects" element={<Projects />} />
                <Route path="/blogs" element={<Blog />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
