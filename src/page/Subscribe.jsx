import CodeCard from "../components/CodeCard";
import {useEffect, useState} from "react";
import Api from "../utils/Api";
import Pagination from "../components/Pagination";
import LoadingModal from "../components/LoadingModal";
import {useAlert} from "react-alert";

const subscribeStatus = {
    '全部': '',
    '订阅中': 'SUBSCRIBE',
    '已完成': 'COMPLETE',
    '未订阅': 'UN_SUBSCRIBE'
}
const Subscribe = () => {
    const alert = useAlert()
    const [activeTab, setActiveTab] = useState('全部');
    const [codes, setCodes] = useState([])
    const [loading, setLoading] = useState(false)
    const [keyword, setKeyword] = useState("")
    const [query, setQuery] = useState({
        page: 1,
        size: 20,
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
        }).catch(e => {
            alert.error("服务器异常");
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


    const downloadCommand = () => {
        Api.get('/codes/download/all').then(res => {
            if (res.success) {
                alert.success("执行成功")
            } else {
                alert.error("执行失败")
            }
        }).catch(e => {
            alert.error("服务器异常");
        })
    };
    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            setQuery({
                ...query,
                query: keyword
            })
        }

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
            <LoadingModal isOpen={loading} type="spin" color="#000" height={100} width={100}/>
            {!loading &&
                <div>
                    {activeTab === '订阅中' &&
                        <button className="btn btn-block btn-sm mt-2 btn-accent"
                                onClick={() => document.getElementById('downloadConfirmModal').showModal()}>
                            一键执行下载
                            <svg className="icon h-6 w-6" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M505.7 661c3.2 4.1 9.4 4.1 12.6 0l112-141.7c4.1-5.2 0.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8z"
                                ></path>
                                <path
                                    d="M878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"
                                ></path>
                            </svg>
                        </button>
                    }
                    <label className="input input-bordered btn-block btn-sm flex items-center gap-2 mt-2">
                        <input type="text" className="grow" placeholder="番号、演员、类型、制作商、发行商" value={keyword}
                               onChange={(e) => setKeyword(e.target.value)}
                               onKeyDown={handleSearch}
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
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 place-content-center mt-2">
                        {codes.map((item, index) => (
                            <CodeCard code={item} key={index} onRefresh={fetchCodes}></CodeCard>
                        ))}
                    </div>
                    <div className="join mt-2">
                        <Pagination currentPage={query.page} totalPages={totalPages}
                                    onPageChange={(item) => setQuery({...query, page: item})}/>
                    </div>
                </div>
            }
            <dialog id={`downloadConfirmModal`} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">下载订阅中的番号</h3>
                    <p className="py-4">所有已订阅的番号将会在后台自动搜索下载;</p>
                    <p className="py-4">订阅番号数量较多的情况下,请勿频繁执行该操作;</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <button className="btn" onClick={() => downloadCommand()}>确认</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>

    );
};
export default Subscribe