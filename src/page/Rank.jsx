import CodeCard from "../components/CodeCard";
import Api from "../utils/Api";
import {useEffect, useState} from "react";
import API from "../utils/Api";

const Rank = () => {
    const [codes, setCodes] = useState([])

    const [page, setPage] = useState(1)

    const [loading, setLoading] = useState(false)

    const [config, setConfig] = useState({
        DEFAULT_FILTER: {}
    })
    const fetchCodes = () => {
        setLoading(true)
        Api.get('/ranks?page=' + page).then(res => {
            setLoading(false)
            setCodes(res.data)
        })
    }
    const pages = Array.from({length: 10}, (_, index) => index + 1);
    const handlePageChange = (item) => {
        setCodes([])
        setPage(item)
    };

    const fetchConfig = () => {
        API.get('/config').then(data => {
            const conf = data.data;
            conf.DEFAULT_FILTER = JSON.parse(conf.DEFAULT_FILTER)
            setConfig(conf);
        })
    }
    useEffect(() => {
        fetchConfig()
    }, [])


    useEffect(() => {
        fetchCodes()
    }, [page]);
    return (
        <div>
            {
                loading && <span className="loading loading-bars loading-lg"></span>
            }
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4 place-content-center mt-2">
                {codes.map((item, index) => (
                    <CodeCard code={item} key={index} onRefresh={fetchCodes}
                              defaultFilter={config.DEFAULT_FILTER}></CodeCard>
                ))}
            </div>
            <div className="join mt-2">
                {
                    pages.map((item, index) => (
                        <input
                            className="join-item btn btn-square"
                            type="radio"
                            name="options"
                            aria-label={item}
                            key={index}
                            defaultChecked={index === 0}
                            onClick={() => handlePageChange(item)}
                        />
                    ))
                }
            </div>
        </div>
    );
};
export default Rank