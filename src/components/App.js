import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MoviePage from "./MoviePage";
import Contact from "./Contact";
import Login from "./Login";

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <Routes>
                <Route path="/" element={<MoviePage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
                <Route path="/.Contact" element={<Contact />} />
                <Route path="/.Login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            </Routes>
        </div>
    );
}
export default App;