import './App.css';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Login from "./page/Login";
import Home from "./page/Home";


const token = ''

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/app/*" element={<Home/>}/>
                <Route path="*" element={<Navigate to={token ? "/app/subscribe" : "/login"} replace/>}/>
            </Routes>
        </Router>
    );
}

export default App;
