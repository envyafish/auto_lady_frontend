import {useEffect, useState} from "react";
import CodeCard from "../components/CodeCard";
import ActorCard from "../components/ActorCard";
import {useParams} from "react-router-dom";
import Api from "../utils/Api";
import Torrent from "../components/Torrent";
import {useAlert} from "react-alert";

const SearchResult = () => {
    const alert = useAlert()
    const {query} = useParams();
    const [codes, setCodes] = useState([])
    const [actors, setActors] = useState([])
    const [torrents, setTorrents] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setCodes([])
        setActors([])
        setTorrents([])
        complexSearch()
    }, [query]);

    const complexSearch = () => {
        setLoading(true)
        Api.get("/complex/search?query=" + query).then(res => {
            setLoading(false)
            setCodes(res.data.codes)
            setActors(res.data.actors)
            setTorrents(res.data.torrents)
        }).catch(e => {
            alert.error("服务器异常");
        })
    }


    return (
        <div>
            {
                loading && <span className="loading loading-bars loading-lg"></span>
            }
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 place-content-center mt-2">
                {codes && codes.map((item, index) => (
                    <CodeCard code={item} key={index}></CodeCard>
                ))}

            </div>
            {codes && actors && <div className="divider"></div>}
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 place-content-center mt-2">
                {actors && actors.map((item, index) => (
                    <ActorCard actor={item} key={index}></ActorCard>
                ))
                }
            </div>
            {actors && torrents && <div className="divider"></div>}
            <div className="mt-2">
                {torrents && torrents.map((item, index) => (
                    <Torrent torrent={item} key={index}></Torrent>
                ))
                }
            </div>

        </div>


    )
}
export default SearchResult