import {useEffect, useState} from "react";
import CodeCard from "../components/CodeCard";
import ActorCard from "../components/ActorCard";
import {useLocation, useParams} from "react-router-dom";
import Api from "../utils/Api";
import Torrent from "../components/Torrent";
import {useAlert} from "react-alert";

const SearchResult = () => {
    const alert = useAlert()
    const location = useLocation();
    const {query} = location.state || {};
    const [codes, setCodes] = useState([])
    const [actors, setActors] = useState([])
    const [torrents, setTorrents] = useState([])
    const [loading, setLoading] = useState(false)
    const [keyword, setKeyword] = useState(query)


    useEffect(() => {
        search()
    }, [query]);

    const complexSearch = (e) => {
        if (e.key === 'Enter') {
            search()
        }
    }

    const search = () => {
        if (keyword) {
            setCodes([])
            setActors([])
            setTorrents([])
            setLoading(true)
            Api.get("/complex/search?query=" + keyword).then(res => {
                setLoading(false)
                setCodes(res.data.codes)
                setActors(res.data.actors)
                setTorrents(res.data.torrents)
            }).catch(e => {
                alert.error("服务器异常");
            })
        }
    }


    return (
        <div>
            <label className="input input-bordered btn-block btn-sm flex items-center gap-2 mt-2">
                <input type="text" className="grow" placeholder="番号、演员" value={keyword}
                       onChange={(e) => setKeyword(e.target.value)}
                       onKeyDown={complexSearch}
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd"/>
                </svg>
            </label>
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