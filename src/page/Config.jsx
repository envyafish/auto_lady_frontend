import {useEffect, useState} from "react";
import API from "../utils/Api";

const Config = () => {
    const [config, setConfig] = useState(null);
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
                                   className="input input-bordered w-full max-w-xs"/>
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
                                   className="input input-bordered w-full max-w-xs"/>
                            <div className="label">
                                <span className="label-text-alt">
                                    <a className="btn-link" href="https://fsm.name/API"
                                       target="_blank">https://fsm.name/API</a>,自助申请
                                </span>
                            </div>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <input type="text" placeholder="飞天拉面神教PASSKEY"
                                   className="input input-bordered w-full max-w-xs"/>
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
                                   className="input input-bordered w-full max-w-xs"/>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <input type="text" placeholder="EMBY密钥"
                                   className="input input-bordered w-full max-w-xs"/>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <input type="text" placeholder="PLEX地址"
                                   className="input input-bordered w-full max-w-xs"/>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <input type="text" placeholder="X-PLEX-TOKEN"
                                   className="input input-bordered w-full max-w-xs"/>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <input type="text" placeholder="JELLYFIN地址"
                                   className="input input-bordered w-full max-w-xs"/>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <input type="text" placeholder="JELLYFIN密钥"
                                   className="input input-bordered w-full max-w-xs"/>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <input type="text" placeholder="JELLYFIN用户"
                                   className="input input-bordered w-full max-w-xs"/>
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
                                   className="input input-bordered w-full max-w-xs"/>

                        </label>
                        <label className="form-control w-full max-w-xs">
                            <input type="text" placeholder="微信企业密钥"
                                   className="input input-bordered w-full max-w-xs"/>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <input type="text" placeholder="微信应用ID"
                                   className="input input-bordered w-full max-w-xs"/>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <input type="text" placeholder="微信代理"
                                   className="input input-bordered w-full max-w-xs"/>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <input type="text" placeholder="Telegram Bot Token"
                                   className="input input-bordered w-full max-w-xs"/>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <input type="text" placeholder="Telegram Chat ID"
                                   className="input input-bordered w-full max-w-xs"/>
                        </label>
                    </div>
                </form>
            </div>
            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="下载"/>
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                Tab content 4
            </div>
            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="规则"/>
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                Tab content 5
            </div>
            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="其他"/>
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                Tab content 6
            </div>
        </div>
    );
};
export default Config