import CodeCard from "../components/CodeCard";
import {useEffect, useState} from "react";
import Api from "../utils/Api";
import API from "../utils/Api";

const subscribeStatus = {
    '全部': '',
    '已订阅': 'SUBSCRIBE',
    '已完成': 'COMPLETE',
    '未订阅': 'UN_SUBSCRIBE'
}
const Subscribe = () => {
    const [activeTab, setActiveTab] = useState('全部');
    const [codes, setCodes] = useState([])
    const [query, setQuery] = useState({
        page: 1,
        size: 20,
        query: '',
        status: ''
    })
    const [config, setConfig] = useState({
        DEFAULT_FILTER: {}
    })
    const [total, setTotal] = useState(0)
    const [pages, setPages] = useState([])

    const fetchCodes = () => {
        Api.post('/codes/list', query).then(res => {
            setCodes(res.data.data)
            setTotal(res.data.total)
        })
    }
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
    }, [query])

    useEffect(() => {
        const totalPage = Math.ceil(total / query.size)
        const numberList = Array.from({length: totalPage}, (_, index) => index + 1);
        setPages(numberList)
    }, [total]);

    const handleTabClick = (tab) => {
        setQuery({
            ...query,
            status: subscribeStatus[tab]
        })
        setActiveTab(tab);
    };

    const handlePageChange = (item) => {
        setQuery({
            ...query,
            page: item
        })
    };

    return (
        <div>
            <div role="tablist" className="tabs tabs-boxed">
                <a
                    role="tab"
                    className={`tab ${activeTab === '全部' ? 'tab-active' : ''}`}
                    onClick={() => handleTabClick('全部')}
                >
                    全部
                </a>
                <a
                    role="tab"
                    className={`tab ${activeTab === '已订阅' ? 'tab-active' : ''}`}
                    onClick={() => handleTabClick('已订阅')}
                >
                    已订阅
                </a>
                <a
                    role="tab"
                    className={`tab ${activeTab === '已完成' ? 'tab-active' : ''}`}
                    onClick={() => handleTabClick('已完成')}
                >
                    已完成
                </a>
                <a
                    role="tab"
                    className={`tab ${activeTab === '未订阅' ? 'tab-active' : ''}`}
                    onClick={() => handleTabClick('未订阅')}
                >
                    未订阅
                </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 place-content-center mt-2">
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
export default Subscribe