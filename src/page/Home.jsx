import NavBar from "../components/NavBar";
import {Navigate, Route, Routes} from "react-router-dom";
import Subscribe from "./Subscribe";
import Rank from "./Rank";
import Actor from "./Actor";
import Config from "./Config";
import Profile from "./Profile";
import SearchResult from "./SearchResult";
import {useEffect} from "react";
import API from "../utils/Api";

const Home = () => {
    useEffect(() => {
        fetchConfig()
    }, []);

    const fetchConfig = () => {
        API.get('/config').then(res => {
            localStorage.setItem("config", JSON.stringify(res.data))
        })
    }

    return (
        <div className="flex flex-col">
            <NavBar/>
            <div className="p-1">
                <Routes>
                    <Route path="subscribe" element={<Subscribe/>}/>
                    <Route path="rank" element={<Rank/>}/>
                    <Route path="actor" element={<Actor/>}/>
                    <Route path="config" element={<Config/>}/>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="search/:query" element={<SearchResult/>}/>
                </Routes>
            </div>
        </div>

    );
};
export default Home