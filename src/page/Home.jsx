import NavBar from "../components/NavBar";
import {Route, Routes} from "react-router-dom";
import Subscribe from "./Subscribe";
import Rank from "./Rank";
import Actor from "./Actor";
import Config from "./Config";
import Profile from "./Profile";

const Home = () => {
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
                </Routes>
            </div>
        </div>

    );
};
export default Home