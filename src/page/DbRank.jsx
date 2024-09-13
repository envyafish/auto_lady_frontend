import CodeCard from "../components/CodeCard";
import Api from "../utils/Api";
import {useEffect, useState} from "react";
import Pagination from "../components/Pagination";
import LoadingModal from "../components/LoadingModal";
import {useAlert} from "react-alert";
import {useNavigate, useParams} from "react-router-dom";

const subscribeStatus = {
    '全部': '',
    '订阅中': 'SUBSCRIBE',
    '已完成': 'COMPLETE',
    '未订阅': 'UN_SUBSCRIBE'
}
const Rank = () => {
    const [type, setType] = useState('daily');
    const [activeTab, setActiveTab] = useState('全部');
    const navigate = useNavigate()
    const alert = useAlert()
    const [codes, setCodes] = useState([])
    const [originalCodes, setOriginalCodes] = useState([])
    const [loading, setLoading] = useState(false)


    const fetchCodes = () => {
        setLoading(true)
        setCodes([])
        Api.get('/ranks/avdb?type=' + type).then(res => {
            setLoading(false)
            setCodes(res.data)
            setOriginalCodes(res.data)
        }).catch(e => {
            alert.error("服务器异常");
        })
    }

    useEffect(() => {
        fetchCodes()
        setActiveTab('全部')
    }, [type]);

    const handleTabClick = (tab) => {
        const status = subscribeStatus[tab]
        if (status === "") {
            setCodes(originalCodes)
        } else {
            const filterCodes = originalCodes.filter(code => code.status === status)
            setCodes(filterCodes)
        }
        setActiveTab(tab);
    };
    const subscribeCommand = () => {
        const code_arr = codes.map(code => code.code).join(',')
        Api.get('/rank/subscribe?codes=' + code_arr).then(res => {
            if (res.success) {
                alert.success("执行成功")
            } else {
                alert.error("执行失败")
            }
        }).catch(e => {
            alert.error("服务器异常");
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
            <div>
                <input
                    className="btn btn-link btn-xs btn-info"
                    type="radio"
                    name="options"
                    aria-label="日榜"
                    defaultChecked={type === 'daily'}
                    onClick={() => setType('daily')}
                />
                <input className="btn btn-link btn-xs" type="radio" name="options" aria-label="周榜"
                       defaultChecked={type === 'weekly'}
                       onClick={() => setType('weekly')}
                />
                <input className="btn btn-link btn-xs" type="radio" name="options" aria-label="月榜"
                       defaultChecked={type === 'monthly'}
                       onClick={() => setType('monthly')}
                />
            </div>
            <LoadingModal isOpen={loading} type="spin" color="#000" height={100} width={100}/>
            {!loading &&
                <div>
                    <button className="btn btn-block btn-sm mt-2 btn-accent"
                            onClick={() => document.getElementById('subscribeConfirmModal').showModal()}>
                        一键订阅
                        <svg className="icon h-6 w-6" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" width="200" height="200">
                            <path
                                d="M510.68 883.15c-15.2 0-30.37-8.49-48.1-25.47-25.35-24.3-50.81-48.48-76.27-72.64-61.6-58.49-125.28-118.96-186.38-180.25-68.39-68.6-99.26-141.23-94.39-222.07 4.09-67.79 31.08-122.65 78.06-158.66 50.62-38.79 123.3-53.23 194.46-38.6 51.71 10.63 90 41.18 127.03 70.72l1.54 1.23c0.47 0.38 0.94 0.76 1.41 1.13 8.05-5.05 15.94-10.15 23.68-15.13 30.01-19.35 58.34-37.63 90.38-50.54 84.26-33.9 189.34-8.11 244.51 60.07 58.08 71.79 68.23 157.45 28.57 241.22-20 42.22-50.67 84.68-91.16 126.22-57.91 59.41-118.94 117.32-177.96 173.33-22.3 21.16-44.59 42.32-66.77 63.59-17.98 17.22-33.31 25.85-48.61 25.85zM322.91 235.07c-40.08 0-77.72 11.4-105.7 32.85-34.37 26.34-53.38 66.08-56.52 118.12-3.92 65.06 20.98 122.17 78.37 179.73 60.56 60.74 123.97 120.95 185.3 179.18 25.52 24.23 51.04 48.47 76.45 72.82 4.78 4.57 7.91 7.21 9.9 8.73 2.06-1.55 5.31-4.3 10.31-9.09 22.25-21.35 44.61-42.57 66.98-63.8 58.64-55.64 119.28-113.19 176.44-171.82 36.23-37.15 63.39-74.6 80.77-111.3 30.5-64.42 23.05-127.64-21.58-182.8-39.86-49.23-119.33-68.36-180.89-43.55-27.16 10.93-53.36 27.83-81.09 45.71-13.56 8.74-27.59 17.79-42.49 26.65l-17.29 10.29-18.13-16.06c-2.81-2.58-7.07-6.51-11.59-10.12l-1.54-1.22c-33.41-26.65-64.96-51.83-103.69-59.79a217.005 217.005 0 0 0-44.01-4.53z"
                            ></path>
                        </svg>
                    </button>
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 place-content-center mt-2">
                        {codes.map((item, index) => (
                            <CodeCard code={item} key={index}></CodeCard>
                        ))}
                    </div>

                </div>
            }
            <dialog id={`subscribeConfirmModal`} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">订阅当前榜单页</h3>
                    <p className="py-4">即将订阅当前页未订阅且不存在媒体库的番号</p>
                    <p className="py-4">已存在媒体库的番号,订阅请手动订阅</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <button className="btn" onClick={() => subscribeCommand()}>确认</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};
export default Rank