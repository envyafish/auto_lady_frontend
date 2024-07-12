import Api from "../utils/Api";
import {useState} from "react";
const IMAGE_PROXY_URL = import.meta.env.VITE_IMAGE_PROXY;
const ActorCard = ({actor, onRefresh}) => {

    const [limitDate, setLimitDate] = useState('')

    const [isSub, setIsSub] = useState(actor.is_sub)

    const subActor = () => {
        actor.limit_date = limitDate
        Api.post('/actors/sub', actor).then(res => {
            setIsSub(true)
            onRefresh()
        })
    };
    const handleLimitDateChange = (e) => {
        setLimitDate(e.target.value)
    };
    const cancelActor = () => {
        Api.delete('/actors/cancel?code_no=' + actor.code).then(res => {
            setIsSub(false)
            onRefresh()
        });
    };
    const formatDateToChinese = (dateString) => {
        // 创建 Date 对象
        const date = new Date(dateString);

        // 获取年份、月份和日期
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // 月份从0开始，所以需要+1
        const day = date.getDate();

        // 格式化为中文日期
        return `${year}年${month}月${day}日`;
    }

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS chat bubble component"
                                src={`${IMAGE_PROXY_URL}?url= ${actor.photo}`}/>
                        </div>
                    </div>
                    <div className="chat-bubble"><img
                        alt="Tailwind CSS chat bubble component"
                        src={`${IMAGE_PROXY_URL}?url= ${actor.photo}`}/></div>
                </div>
                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                        </div>
                    </div>
                    <div
                        className="chat-bubble">{`Hello，我是${actor.name}，${actor.birth ? `出生于${formatDateToChinese(actor.birth)}，` : ``}
                        ${actor.height ? `我的身高是${actor.height},` : ``}
                        ${actor.bust ? `胸围${actor.bust},` : ``}
                        ${actor.waist ? `腰围${actor.waist},` : ``}
                        ${actor.hip ? `臀围${actor.hip},` : ``}
                        ${actor.cup ? `杯码${actor.cup},` : ``}
                        期待你的订阅！`}
                    </div>
                </div>
                <div className="chat chat-end">
                    <div className="card-actions justify-end">
                        <div className="card-actions justify-end">
                            <button className="btn btn-sm btn-primary"
                                    onClick={() => document.getElementById('subscribeModal-' + actor.code).showModal()}>订阅
                            </button>
                            {isSub && <button className="btn btn-sm btn-error"
                                              onClick={() => document.getElementById('cancelActorModal-' + actor.code).showModal()}>取消</button>}

                        </div>
                    </div>
                </div>

            </div>
            <dialog id={`subscribeModal-${actor.code}`} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">订阅{actor.name}</h3>
                    <form>
                        <div className="form-control">
                            <label className="input input-bordered flex items-center gap-2">
                                限制日期
                                <input type="date" className="grow" value={limitDate} onChange={handleLimitDateChange}/>
                            </label>
                        </div>
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <button className="btn" onClick={() => subActor()}>确认</button>
                        </form>
                    </div>
                </div>
            </dialog>
            <dialog id={`cancelActorModal-${actor.code}`} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">取消</h3>
                    <p className="py-4">确认取消订阅演员：{actor.name}</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <button className="btn" onClick={() => cancelActor()}>确认</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}
export default ActorCard

