import {useEffect, useState} from "react";
import CodeCard from "../components/CodeCard";
import ActorCard from "../components/ActorCard";
import {useParams} from "react-router-dom";
import Api from "../utils/Api";
import API from "../utils/Api";
import Torrent from "../components/Torrent";

const SearchResult = () => {
    const {query} = useParams();
    console.log(query)
    const [code, setCode] = useState(null)
    const [actors, setActors] = useState([])
    const [torrents, setTorrents] = useState([])
    const [loading, setLoading] = useState(false)
    const [config, setConfig] = useState({
        DEFAULT_FILTER: {}
    })
    const fetchConfig = () => {
        API.get('/config').then(data => {
            const conf = data.data;
            conf.DEFAULT_FILTER = JSON.parse(conf.DEFAULT_FILTER)
            setConfig(conf);
        })
    }
    useEffect(() => {
        fetchConfig()
        complexSearch()
    }, [])

    useEffect(() => {
        setCode(null)
        setActors([])
        setTorrents([])
        complexSearch()
    }, [query]);

    const complexSearch = () => {
        setLoading(true)
        Api.get("/complex/search?query=" + query).then(res => {
            setLoading(false)
            setCode(res.data.code)
            setActors(res.data.actors)
            setTorrents(res.data.torrents)
        })
    }

    const nothingHappen = () => {
        return undefined;
    };
    return (
        <div>
            {
                loading && <span className="loading loading-bars loading-lg"></span>
            }
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 place-content-center mt-2">
                {code && <CodeCard code={code}
                                   defaultFilter={config.DEFAULT_FILTER} onRefresh={nothingHappen}></CodeCard>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 place-content-center mt-2">
                {actors && actors.map((item, index) => (
                    <ActorCard actor={item} key={index} onRefresh={nothingHappen}></ActorCard>
                ))
                }
            </div>
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