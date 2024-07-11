import Api from "../utils/Api";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const statusMap = {
    'COMPLETE': '已完成',
    'SUBSCRIBE': '订阅中',
    'UN_SUBSCRIBE': '未订阅',
    'CANCEL': '未订阅'
}
const badgeMap = {
    'COMPLETE': 'accent',
    'SUBSCRIBE': 'primary',
    'UN_SUBSCRIBE': 'neutral',
    'CANCEL': 'neutral'
}

const IMAGE_PROXY_URL = import.meta.env.VITE_IMAGE_PROXY;
const CodeCard = ({code, onRefresh}) => {

    const still_photo_arr = code.still_photo ? code.still_photo.split(',') : []
    const genres_arr = code.genres ? code.genres.split(',') : []
    const actors = code.casts ? code.casts.split(',') : []
    const [codeStatus, setCodeStatus] = useState(code.status)
    const [subscribe, setSubscribe] = useState(
        {
            code: code.code,
            filter: code.filter ? JSON.parse(code.filter) : JSON.parse(localStorage.getItem("config"))['DEFAULT_FILTER'],
            mode: 'STRICT'
        }
    )
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(statusMap[code.status])
    const [badge, setBadge] = useState(badgeMap[code.status])
    const [imageMode, setImageMode] = useState(JSON.parse(localStorage.getItem("config"))['IMAGE_MODE'])
    const navigate = useNavigate()

    useEffect(() => {
        setCodeStatus(code.status)
    },[code])

    useEffect(() => {
        setImageMode(JSON.parse(localStorage.getItem("config"))['IMAGE_MODE'])
        setSubscribe({
            ...subscribe,
            filter: code.filter ? JSON.parse(code.filter) : JSON.parse(localStorage.getItem("config"))['DEFAULT_FILTER']
        })
    }, [])

    useEffect(() => {
        setStatus(statusMap[codeStatus])
        setBadge(badgeMap[codeStatus])
    }, [codeStatus]);


    const subCode = () => {
        setLoading(true)
        Api.post('/codes/sub', subscribe).then(res => {
            setLoading(false)
            setCodeStatus("SUBSCRIBE")
            onRefresh()
        })
    };
    const cancelCode = () => {
        setLoading(true)
        Api.delete('/codes/cancel?code_no=' + code.code).then(res => {
            setLoading(false)
            setCodeStatus("UN_SUBSCRIBE")
            onRefresh()

        });
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

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % still_photo_arr.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + still_photo_arr.length) % still_photo_arr.length);
    };


    const toSearch = (item) => {
        navigate(`/app/search/${item}`)
    };
    return (
        <div className="card bg-base-100 shadow-xl">
            {['VISIBLE', 'BLUR'].includes(imageMode) &&
                <figure>
                    <img
                        referrerPolicy="no-referrer"
                        src={`${IMAGE_PROXY_URL}?url= ${code.banner}`}
                        className={imageMode === 'BLUR' ? 'filter blur-sm' : ''}
                    />
                </figure>
            }

            <div className="card-body">
                <h2 className="card-title">
                    <span onClick={() => toSearch(code.code)} className="link">{code.code}</span>
                    <div className={`badge badge-sm badge-${badge}`}>{status}</div>
                    {code.is_exist_server && <div className={`badge badge-sm badge-success`}>已入库</div>}
                </h2>
                <span className="mr-1">发售日期：{code.release_date}</span>
                <p className="text-sm">{code.title}</p>
                <div>
                    {actors.map((item, index) => (
                        <span className="badge badge-sm badge-outline badge-info mr-1 link" key={index}
                              onClick={() => toSearch(item)}>{item}</span>
                    ))}
                    {genres_arr.map((item, index) => (
                        <span className="badge badge-sm badge-outline mr-1" key={index}>{item}</span>
                    ))}
                </div>


                <div className="card-actions justify-end">
                    <div className="card-actions justify-end">
                        {['VISIBLE', 'BLUR'].includes(imageMode) &&
                            <button className="btn btn-sm btn-outline btn-neutral"
                                    onClick={() => document.getElementById('stillPhotoModal-' + code.code).showModal()}>剧照
                            </button>
                        }
                        <button className="btn btn-sm btn-outline btn-accent"
                                onClick={() => document.getElementById('filterModal-' + code.code).showModal()}>订阅
                        </button>
                        {codeStatus === 'SUBSCRIBE' &&
                            <button className="btn btn-sm btn-outline btn-warning"
                                    onClick={() => document.getElementById('cancelConfirmModal-' + code.code).showModal()}>取消</button>
                        }

                    </div>
                </div>
            </div>
            <dialog id={`stillPhotoModal-${code.code}`} className="modal modal-bottom flex justify-center items-center">
                <div className="modal-box sm:w-7/12">
                    <div className="carousel rounded-box w-full">
                        {still_photo_arr.map((item, index) => (
                            <div
                                key={index}
                                className={`carousel-item w-full flex justify-center items-center ${index === currentIndex ? 'block' : 'hidden'}`}>
                                <img
                                    src={item}
                                    className={`rounded-box max-w-full max-h-96 object-cover ${imageMode === 'BLUR' ? 'filter blur-sm' : ''}`}
                                    alt={`Slide ${index + 1}`}
                                />
                            </div>
                        ))}
                        <button className="btn btn-circle absolute top-1/2 left-0 transform -translate-y-1/2"
                                onClick={prevSlide}>❮
                        </button>
                        <button className="btn btn-circle absolute top-1/2 right-0 transform -translate-y-1/2"
                                onClick={nextSlide}>❯
                        </button>
                    </div>
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                </div>


            </dialog>
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