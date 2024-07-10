import ActorCard from "../components/ActorCard";
import {useEffect, useState} from "react";
import Api from "../utils/Api";


const Actor = () => {
    const [actors, setActors] = useState([])
    const [loading, setLoading] = useState(false)
    const fetchActor = () => {
        setLoading(true)
        Api.get('/actors').then(res => {
            setLoading(false)
            setActors(res.data)

        })
    }
    useEffect(() => {
        fetchActor()
    }, [])
    return (
        <div>
            {
                loading &&
                <div className="flex items-center justify-center h-full pt-28">
                    <span className="loading loading-dots loading-lg"></span>
                </div>
            }
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 place-content-center mt-2">
                {actors.map((item, index) => (
                    <ActorCard actor={item} key={index} onRefresh={fetchActor}></ActorCard>
                ))
                }
            </div>
        </div>

    );
};
export default Actor