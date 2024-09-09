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
import {useAlert} from "react-alert";

const Home = () => {
    const alert = useAlert()
    useEffect(() => {
        fetchConfig()
    }, []);

    const fetchConfig = () => {
        API.get('/config').then(res => {
            if (res.success) {
                localStorage.setItem("config", JSON.stringify(res.data))
            }
        }).catch(e => {
            alert.error("服务器异常");
        })
    }

    return (
        <div className="flex flex-col">
            <NavBar/>
            <div className="p-1">
                <Routes>
                    <Route path="subscribe" element={<Subscribe/>}/>
                    <Route path="rank/:page" element={<Rank/>}/>
                    <Route path="actor" element={<Actor/>}/>
                    <Route path="config" element={<Config/>}/>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="search" element={<SearchResult/>}/>
                </Routes>
            </div>
        </div>

    );
};
export default Home