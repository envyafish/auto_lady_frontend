import CodeCard from "../components/CodeCard";
import {useEffect, useState} from "react";
import Api from "../utils/Api";
import API from "../utils/Api";
import Pagination from "../components/Pagination";

const subscribeStatus = {
    '全部': '',
    '订阅中': 'SUBSCRIBE',
    '已完成': 'COMPLETE',
    '未订阅': 'UN_SUBSCRIBE'
}
const Subscribe = () => {
    const [activeTab, setActiveTab] = useState('全部');
    const [codes, setCodes] = useState([])
    const [loading, setLoading] = useState(false)
    const [query, setQuery] = useState({
        page: 1,
        size: 10,
        query: '',
        status: ''
    })
    const [total, setTotal] = useState(0)
    const [totalPages, setTotalPages] = useState(0)

    const fetchCodes = () => {
        setCodes([])
        setLoading(true)
        Api.post('/codes/list', query).then(res => {
            setLoading(false)
            setCodes(res.data.data)
            setTotal(res.data.total)
        })
    }


    useEffect(() => {
        fetchCodes()
    }, [query])


    useEffect(() => {
        setTotalPages(Math.ceil(total / query.size))
    }, [total]);

    const handleTabClick = (tab) => {
        setQuery({
            ...query,
            status: subscribeStatus[tab],
            page: 1
        })
        setActiveTab(tab);
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
                    className={`tab ${activeTab === '订阅中' ? 'tab-active' : ''}`}
                    onClick={() => handleTabClick('订阅中')}
                >
                    订阅中
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
            {
                loading &&
                <div className="flex items-center justify-center h-full pt-28">
                    <span className="loading loading-dots loading-lg"></span>
                </div>
            }
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 place-content-center mt-2">
                {codes.map((item, index) => (
                    <CodeCard code={item} key={index} onRefresh={fetchCodes}></CodeCard>
                ))}
            </div>
            <div className="join mt-2">
                <Pagination currentPage={query.page} totalPages={totalPages}
                            onPageChange={(item) => setQuery({...query, page: item})}/>
            </div>
        </div>

    );
};
export default Subscribe