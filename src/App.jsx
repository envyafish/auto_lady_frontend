import './App.css';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Login from "./page/Login";
import Home from "./page/Home";
import React, {useState} from "react";


function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("token"));
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<Navigate to="/app/subscribe" replace/>}/>
                <Route path="/app" element={<Navigate to="/app/subscribe" replace/>}/>
                <Route
                    path="/app/*"
                    element={isAuthenticated ? <Home/> : <Navigate to="/login"/>}
                />
            </Routes>
        </Router>
    );
}

export default App;
