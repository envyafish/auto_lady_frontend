import {useEffect, useState} from "react";
import API from "../utils/Api";

const initialItems = [
    {id: 'uc', content: '无码'},
    {id: 'chinese', content: '中文'},
    {id: 'uhd', content: 'UHD'},
    {id: 'seeders', content: '做种'},
];

const Config = () => {
    const [config, setConfig] = useState(null);
    const [items, setItems] = useState(initialItems);

    const moveItem = (index, direction) => {
        const newItems = Array.from(items);
        const [movedItem] = newItems.splice(index, 1);
        newItems.splice(index + direction, 0, movedItem);
        setItems(newItems);
    };

    useEffect(() => {
        API.get('/v1/config')
            .then(data => {
                setConfig(data);
            })
            .catch(error => {
            });
    }, []);
    return (
        <div role="tablist" className="tabs tabs-lifted">
            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="PT" defaultChecked/>
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <label className="form-control w-full max-w-xs">
                            <input type="text" placeholder="馒头令牌"
                                   className="input input-sm input-bordered w-full max-w-xs"/>
                            <div className="label">
                                <span className="label-text-alt">
                                    <a className="btn-link"
                                       href="https://kp.m-team.cc/usercp?tab=laboratory"
                                       target="_blank">https://kp.m-team.cc/usercp?tab=laboratory</a>,存取令牌
                                </span>
                            </div>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <input type="text" placeholder="飞天拉面神教APITOKEN"
                                   className="input input-sm input-bordered w-full max-w-xs"/>
                            <div className="label">
                                <span className="label-text-alt">
                                    <a className="btn-link" href="https://fsm.name/API"
                                       target="_blank">https://fsm.name/API</a>,自助申请
                                </span>
                            </div>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <input type="text" placeholder="飞天拉面神教PASSKEY"
                                   className="input input-sm input-bordered w-full max-w-xs"/>
                            <div className="label">
                                <span className="label-text-alt">
                                    <a className="btn-link" href="https://fsm.name/Users/me?type=security"
                                       target="_blank">https://fsm.name/Users/me?type=security</a>
                                    </span>
                            </div>
                        </label>
                    </div>
                </form>
            </div>

            <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab"
                aria-label="服务器"
            />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <label className="form-control w-full max-w-xs">
                            <input type="text" placeholder="EMBY地址"
                                   className="input input-sm input-bordered w-full max-w-xs"/>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <input type="text" placeholder="EMBY密钥"
                                   className="input input-sm input-bordered w-full max-w-xs"/>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <input type="text" placeholder="PLEX地址"
                                   className="input input-sm input-bordered w-full max-w-xs"/>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <input type="text" placeholder="X-PLEX-TOKEN"
                                   className="input input-sm input-bordered w-full max-w-xs"/>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <input type="text" placeholder="JELLYFIN地址"
                                   className="input input-sm input-bordered w-full max-w-xs"/>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <input type="text" placeholder="JELLYFIN密钥"
                                   className="input input-sm input-bordered w-full max-w-xs"/>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <input type="text" placeholder="JELLYFIN用户"
                                   className="input input-sm input-bordered w-full max-w-xs"/>
                        </label>
                    </div>
                </form>
            </div>

            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="推送"/>
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <label className="form-control w-full max-w-xs">
                            <input type="text" placeholder="微信企业ID"
                                   className="input input-sm input-bordered w-full max-w-xs"/>

                        </label>
                        <label className="form-control w-full max-w-xs">
                            <input type="text" placeholder="微信企业密钥"
                                   className="input input-sm input-bordered w-full max-w-xs"/>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <input type="text" placeholder="微信应用ID"
                                   className="input input-sm input-bordered w-full max-w-xs"/>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <input type="text" placeholder="微信代理"
                                   className="input input-sm input-bordered w-full max-w-xs"/>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <input type="text" placeholder="Telegram Bot Token"
                                   className="input input-sm input-bordered w-full max-w-xs"/>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <input type="text" placeholder="Telegram Chat ID"
                                   className="input input-sm input-bordered w-full max-w-xs"/>
                        </label>
                    </div>
                </form>
            </div>
            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="下载"/>
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <label className="form-control w-full max-w-xs">
                            <input type="text" placeholder="qbittorent host"
                                   className="input input-sm input-bordered w-full max-w-xs"/>

                        </label>
                        <label className="form-control w-full max-w-xs">
                            <input type="text" placeholder="qbittorent port"
                                   className="input input-sm input-bordered w-full max-w-xs"/>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <input type="text" placeholder="qbittorent 用户名"
                                   className="input input-sm input-bordered w-full max-w-xs"/>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <input type="text" placeholder="qbittorent 密码"
                                   className="input input-sm input-bordered w-full max-w-xs"/>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <input type="text" placeholder="qbittorent 下载地址"
                                   className="input input-sm input-bordered w-full max-w-xs"/>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <input type="text" placeholder="qbittorent 下载分类"
                                   className="input input-sm input-bordered w-full max-w-xs"/>
                        </label>

                    </div>
                </form>
            </div>
            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="规则"/>
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">仅中文</span>
                                <input type="checkbox" className="toggle toggle-sm" defaultChecked/>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">仅无码</span>
                                <input type="checkbox" className="toggle toggle-sm" defaultChecked/>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">仅UHD</span>
                                <input type="checkbox" className="toggle toggle-sm" defaultChecked/>
                            </label>
                        </div>
                    </div>
                </form>
                <div className="divider"></div>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                    <div>
                        {items.map((item, index) => (
                            <div key={item.id} className="mb-2">
                                <label className="label">
                                    <label className="label-text w-12">{item.content}</label>
                                    <div>
                                        <button
                                            className="btn btn-sm btn-primary"
                                            onClick={() => moveItem(index, -1)}
                                            disabled={index === 0}
                                        >
                                            上移
                                        </button>
                                        <button
                                            className="btn btn-sm btn-secondary ml-2"
                                            onClick={() => moveItem(index, 1)}
                                            disabled={index === items.length - 1}
                                        >
                                            下移
                                        </button>
                                    </div>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="其他"/>
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <label className="form-control w-full max-w-xs">
                            <input type="text" placeholder="代理地址"
                                   className="input input-sm input-bordered w-full max-w-xs"/>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Config