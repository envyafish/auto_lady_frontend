import subscribe from "../page/Subscribe";
import Api from "../utils/Api";
import {useState} from "react";

const statusMap = {
    'COMPLETE': '已完成',
    'SUBSCRIBE': '订阅中',
    'UN_SUBSCRIBE': '未订阅'
}
const badgeMap = {
    'COMPLETE': 'success',
    'SUBSCRIBE': 'info',
    'UN_SUBSCRIBE': 'warning'
}
const CodeCard = ({code, defaultFilter, onRefresh}) => {
    const photos = []
    photos.push(code.banner)
    const still_photo_arr = code.still_photo ? code.still_photo.split(',') : []
    photos.push(...still_photo_arr)
    const [subscribe, setSubscribe] = useState(
        {
            code: code.code,
            filter: defaultFilter,
            mode: 'STRICT'
        }
    )
    const [loading, setLoading] = useState(false)

    let status = statusMap[code.status];
    let badge = badgeMap[code.status]
    if (code.is_exist_server) {
        status = '已入库'
        badge = 'success'
    }

    const actors = code.casts ? code.casts.split(',') : []


    const subCode = () => {
        setLoading(true)
        Api.post('/codes/sub', subscribe).then(res => {
            setLoading(false)
            onRefresh()
        })
    };
    const cancelCode = () => {
        setLoading(true)
        Api.delete('/codes/cancel?code_no=' + code.code).then(res => {
            setLoading(false)
            onRefresh()
        });
    };
    const downloadCode = () => {

    };

    const handleChineseChange = (e) => {
        const newFilter = {...subscribe.filter}
        newFilter['only_chinese'] = e.target.checked
        setSubscribe({
            ...subscribe,
            filter: newFilter
        })

    }
    const handleUCChange = (e) => {
        const newFilter = {...subscribe.filter}
        newFilter['only_uc'] = e.target.checked
        setSubscribe({
            ...subscribe,
            filter: newFilter
        })

    }
    const handleUHDChange = (e) => {
        const newFilter = {...subscribe.filter}
        newFilter['only_uhd'] = e.target.checked
        setSubscribe({
            ...subscribe,
            filter: newFilter
        })

    }
    const handleModeChange = (e) => {
        setSubscribe({
            ...subscribe,
            mode: e.target.value
        })
    };


    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img
                    referrerPolicy="no-referrer"
                    src={'http://127.0.0.1:8000/v1/image-proxy?url=' + code.banner}
                    className=""
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {code.code}
                    <div className={`badge badge-${badge}`}>{status}</div>
                </h2>
                <p>{code.title}</p>
                <div>
                    {actors.map((item, index) => (
                        <span className="badge badge-outline mr-1" key={index}>{item}</span>
                    ))}
                </div>

                <div className="card-actions justify-end">
                    <div className="card-actions justify-end">
                        <button className="btn btn-sm btn-outline btn-default"
                                onClick={() => document.getElementById('filterModal-' + code.code).showModal()}>订阅
                        </button>
                        {code.status === 'SUBSCRIBE' &&
                            <button className="btn btn-sm btn-outline btn-warning"
                                    onClick={() => document.getElementById('cancelConfirmModal-' + code.code).showModal()}>取消</button>
                        }

                    </div>
                </div>
            </div>
            <dialog id={`cancelConfirmModal-${code.code}`} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">取消</h3>
                    <p className="py-4">确认取消订阅番号：{code.code}</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <button className="btn" onClick={() => cancelCode()}>确认</button>
                        </form>
                    </div>
                </div>
            </dialog>
            <dialog id={`filterModal-${code.code}`} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">订阅{code.code}</h3>
                    <form>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">仅中文</span>
                                <input type="checkbox" className="toggle toggle-sm"
                                       checked={subscribe.filter.only_chinese}
                                       onChange={handleChineseChange}/>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">仅无码</span>
                                <input type="checkbox" className="toggle toggle-sm"
                                       checked={subscribe.filter.only_uc}
                                       onChange={handleUCChange}/>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">仅UHD</span>
                                <input type="checkbox" className="toggle toggle-sm"
                                       checked={subscribe.filter.only_uhd}
                                       onChange={handleUHDChange}/>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">严格模式</span>
                                <input type="radio" name="mode" className="radio checked:bg-red-500" value="STRICT"
                                       checked={subscribe.mode === 'STRICT'} onChange={handleModeChange}/>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">预下载模式</span>
                                <input type="radio" name="mode" className="radio checked:bg-blue-500" value="PRELOAD"
                                       checked={subscribe.mode === 'PRELOAD'} onChange={handleModeChange}
                                />
                            </label>
                        </div>
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <button className="btn" onClick={() => subCode()}>确认</button>
                        </form>
                    </div>
                </div>
            </dialog>
            {
                loading && <span className="loading loading-bars loading-xs"></span>
            }
        </div>
    );
};
export default CodeCard