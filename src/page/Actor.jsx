import ActorCard from "../components/ActorCard";
import {useEffect, useState} from "react";
import Api from "../utils/Api";
import LoadingModal from "../components/LoadingModal";


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
            <LoadingModal isOpen={loading} type="spin" color="#000" height={100} width={100}/>
            {!loading &&
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 place-content-center mt-2">
                        {actors.map((item, index) => (
                            <ActorCard actor={item} key={index}></ActorCard>
                        ))
                        }
                    </div>
                </div>
            }
        </div>

    );
};
export default Actor