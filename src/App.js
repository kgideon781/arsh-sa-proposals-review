import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from "./Home";
import ProposalsReviewDashboard from "./Reviews";
const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reviews" element={<ProposalsReviewDashboard/>} />
            </Routes>
        </div>
    );
};

export default App;