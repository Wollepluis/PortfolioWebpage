import { Routes, Route } from "react-router-dom";
import "./App.css";

import { Navbar } from "./components/Navbar";
import { Home, WhoAmI, Projects, Blog } from "./pages";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/WhoAmI" element={<WhoAmI />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/Blog" element={<Blog />} />
            </Routes>
        </div>
    );
}

export default App;
