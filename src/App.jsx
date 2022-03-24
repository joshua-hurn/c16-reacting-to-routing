// inside of /src/App.jsx
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Films from "./components/Films";
import SingleFilm from './components/SingleFilm';
import People from "./components/People";
import SinglePerson from "./components/SinglePerson";

const App = () => {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/films" element={<Films />} />
                <Route path="/films/:filmid" element={<SingleFilm />} />
                <Route path="/people" element={<People />} />
                <Route path="/people/:personid" element={<SinglePerson />} />
            </Routes>
        </Router>
    );
};

export default App;