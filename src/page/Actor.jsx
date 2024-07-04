import ActorCard from "../components/ActorCard";
import {useEffect, useState} from "react";
import Api from "../utils/Api";


const Actor = () => {
    const [actors, setActors] = useState([])
    const fetchActor = () => {
        Api.get('/actors').then(res => {
            setActors(res.data)
        })
    }
    useEffect(() => {
        fetchActor()
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 place-content-center mt-2">
            {actors.map((item, index) => (
                <ActorCard actor={item} key={index} onRefresh={fetchActor}></ActorCard>
            ))
            }
        </div>
    );
};
export default Actor