import {useEffect, useState} from "react";
import CodeCard from "../components/CodeCard";
import ActorCard from "../components/ActorCard";
import {useParams} from "react-router-dom";
import Api from "../utils/Api";
import Torrent from "../components/Torrent";
import Alert from "../components/Alert";

const SearchResult = () => {
    const {query} = useParams();
    const [codes, setCodes] = useState([])
    const [actors, setActors] = useState([])
    const [torrents, setTorrents] = useState([])
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState({
        message: '',
        type: 'success',
        isVisible: false

    })

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
        })
    }

    const nothingHappen = () => {
        return undefined;
    };

    const alertSuccess = (code) => {
        setAlert({
            message: '种子添加下载成功',
            type: 'success',
            isVisible: true
        })
        setTimeout(() => {
            setAlert({
                ...alert,
                isVisible: false
            })
        }, 3000); // 3秒后自动隐藏

        if (code && codes) {
            codes.map((item, index) => {
                if (code === item.code) {
                    item.status = 'COMPLETE'
                }
            })
            setCodes(codes)
        }
    }

    const alertFail = (torrent) => {
        setAlert({
            message: '下载失败',
            type: 'error',
            isVisible: true
        })
        setTimeout(() => {
            setAlert({
                ...alert,
                isVisible: false
            })
        }, 3000); // 3秒后自动隐藏
    }
    return (
        <div>
            {
                loading && <span className="loading loading-bars loading-lg"></span>
            }
            <Alert
                message={alert.message}
                type={alert.type}
                isVisible={alert.isVisible}
            />
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 place-content-center mt-2">
                {codes && codes.map((item, index) => (
                    <CodeCard code={item} key={index} onRefresh={nothingHappen}></CodeCard>
                ))}

            </div>
            {codes && actors && <div className="divider"></div>}
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 place-content-center mt-2">
                {actors && actors.map((item, index) => (
                    <ActorCard actor={item} key={index} onRefresh={nothingHappen}></ActorCard>
                ))
                }
            </div>
            {actors && torrents && <div className="divider"></div>}
            <div className="mt-2">
                {torrents && torrents.map((item, index) => (
                    <Torrent torrent={item} key={index} onPushComplete={alertSuccess}
                             onDownloadFail={alertFail}></Torrent>
                ))
                }
            </div>

        </div>


    )
}
export default SearchResult