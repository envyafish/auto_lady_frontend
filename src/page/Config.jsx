import {useEffect, useState} from "react";
import API from "../utils/Api";
import Alert from "../components/Alert";

const initialSort = [
    {id: 'uc', content: '无码'},
    {id: 'seeders', content: '做种'},
    {id: 'chinese', content: '中文'},
    {id: 'uhd', content: 'UHD'}
];

const loadSort = (sort_arr) => {
    const newItems = []
    for (let i = 0; i < sort_arr.length; i++) {
        const item = initialSort.find(item => item.id === sort_arr[i]);
        if (item) {
            newItems.push(item)
        }
    }
    return newItems
}

const fields = {
    "site": [
        {"name": "MTEAM_API_KEY", "label": "馒头令牌"},
        {"name": "FSM_API_KEY", "label": "飞天拉面神教APITOKEN"},
        {"name": "FSM_PASSKEY", "label": "飞天拉面神教PASSKEY"},
        {"name": "LIBRARY_COOKIE", "label": "图书馆cookie"},
        {"name": "BUS_COOKIE", "label": "公交车cookie"},
    ],
    "server": [
        {"name": "EMBY_URL", "label": "EMBY地址"},
        {"name": "EMBY_API_KEY", "label": "EMBY密钥"},
        {"name": "PLEX_URL", "label": "PLEX地址"},
        {"name": "PLEX_TOKEN", "label": "X-PLEX-TOKEN"},
        {"name": "JELLYFIN_URL", "label": "JELLYFIN地址"},
        {"name": "JELLYFIN_API_KEY", "label": "JELLYFIN密钥"},
        {"name": "JELLYFIN_USER", "label": "JELLYFIN用户"}
    ],
    "notify": [
        {"name": "WECHAT_CORP_ID", "label": "微信企业ID"},
        {"name": "WECHAT_CORP_SECRET", "label": "微信企业密钥"},
        {"name": "WECHAT_AGENT_ID", "label": "微信应用ID"},
        {"name": "WECHAT_PROXY", "label": "微信代理"},
        {"name": "WECHAT_PHOTO", "label": "微信推送图片（外网可以访问）"},
        {"name": "TELEGRAM_BOT_TOKEN", "label": "Telegram Bot Token"},
        {"name": "TELEGRAM_CHAT_ID", "label": "Telegram Chat ID"}
    ],
    "download": [
        {"name": "QBITTORRENT_URL", "label": "qbittorrent地址"},
        {"name": "QBITTORRENT_USERNAME", "label": "qbittorrent用户名"},
        {"name": "QBITTORRENT_PASSWORD", "label": "qbittorrent密码"},
        {"name": "QBITTORRENT_DOWNLOAD_PATH", "label": "qbittorrent下载地址"},
        {"name": "QBITTORRENT_CATEGORY", "label": "qbittorrent下载分类"},
        {"name": "TRANSMISSION_URL", "label": "Transmission地址"},
        {"name": "TRANSMISSION_USERNAME", "label": "Transmission用户名"},
        {"name": "TRANSMISSION_PASSWORD", "label": "Transmission密码"},
        {"name": "TRANSMISSION_DOWNLOAD_PATH", "label": "Transmission下载地址"},
        {"name": "TRANSMISSION_LABEL", "label": "Transmission标签"}
    ],
    "other": [
        {"name": "PROXY", "label": "代理地址"},
        {"name": "FLARE_SOLVERR_URL", "label": "flaresolverr地址"},
        {"name": "RANK_PAGE", "label": "榜单自动订阅页数(0不订阅)"}
    ]
}

const Config = () => {
    const [config, setConfig] = useState({
        "EMBY_URL": "",
        "EMBY_API_KEY": "",
        "PLEX_URL": "",
        "PLEX_TOKEN": "",
        "JELLYFIN_URL": "",
        "JELLYFIN_API_KEY": "",
        "JELLYFIN_USER": "",
        "QBITTORRENT_URL": "",
        "QBITTORRENT_USERNAME": "",
        "QBITTORRENT_PASSWORD": "",
        "QBITTORRENT_DOWNLOAD_PATH": "",
        "QBITTORRENT_CATEGORY": "",
        "TRANSMISSION_URL": "",
        "TRANSMISSION_USERNAME": "",
        "TRANSMISSION_PASSWORD": "",
        "TRANSMISSION_DOWNLOAD_PATH": "",
        "TRANSMISSION_LABEL": "",
        "FSM_API_KEY": "",
        "FSM_PASSKEY": "",
        "MTEAM_API_KEY": "",
        "LIBRARY_COOKIE": "",
        "BUS_COOKIE": "",
        "WECHAT_CORP_ID": "",
        "WECHAT_CORP_SECRET": "",
        "WECHAT_AGENT_ID": "",
        "WECHAT_PROXY": "",
        "WECHAT_PHOTO": "",
        "TELEGRAM_BOT_TOKEN": "",
        "TELEGRAM_CHAT_ID": "",
        "PROXY": "",
        "IMAGE_MODE": "",
        "DEFAULT_FILTER": {
            "only_chinese": false,
            "only_uc": false,
            "only_uhd": false
        },
        "DEFAULT_SORT": [
            "uhd",
            "uc",
            "chinese",
            "seeders"
        ],
        "RANK_PAGE": "1",
        "FLARE_SOLVERR_URL":""
    });
    const [sort, setSort] = useState(initialSort);
    const [alert, setAlert] = useState({
        message: '',
        type: 'success',
        isVisible: false

    });

    const moveItem = (index, direction) => {
        const newItems = Array.from(sort);
        const [movedItem] = newItems.splice(index, 1);
        newItems.splice(index + direction, 0, movedItem);
        setSort(newItems);
        setConfig({
            ...config,
            DEFAULT_SORT: newItems.map(item => item.id)
        });
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setConfig({
            ...config,
            [name]: value
        });
    };

    const handleChineseChange = (e) => {
        setConfig({
            ...config,
            DEFAULT_FILTER: {...config.DEFAULT_FILTER, only_chinese: e.target.checked}
        })
    }
    const handleUCChange = (e) => {
        setConfig({
            ...config,
            DEFAULT_FILTER: {...config.DEFAULT_FILTER, only_uc: e.target.checked}
        })
    }
    const handleUHDChange = (e) => {
        setConfig({
            ...config,
            DEFAULT_FILTER: {...config.DEFAULT_FILTER, only_uhd: e.target.checked}
        })
    }

    const saveConfig = () => {
        API.post('/config', config).then((data) => {
            localStorage.setItem("config", JSON.stringify(config))
            setAlert({
                message: data.message,
                type: 'success',
                isVisible: true
            })
            setTimeout(() => {
                setAlert({
                    message: '',
                    type: 'success',
                    isVisible: false
                })
            }, 3000); // 3秒后自动隐藏
        })
    };
    const handleImageModeChange = (e) => {
        setConfig({
            ...config,
            IMAGE_MODE: e.target.value
        })
    };

    const fetchConfig = () => {
        API.get('/config').then(res => {
            setConfig(res.data)
            setSort(loadSort(res.data.DEFAULT_SORT))
        })
    }


    useEffect(() => {
        fetchConfig()
    }, [])

    return (
        <div>
            <Alert
                message={alert.message}
                type={alert.type}
                isVisible={alert.isVisible}
            />
            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="站点" defaultChecked/>
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {
                                fields.site.map((item) => (
                                    <label className="form-control w-full max-w-xs" key={item.name}>
                                        <div className="label">
                                            <span className="label-text">{item.label}</span>
                                        </div>
                                        <input type="text" name={item.name}
                                               value={config ? config[item.name] : ''}
                                               onChange={handleChange}
                                               className="input input-sm input-bordered w-full max-w-xs"/>
                                    </label>
                                ))
                            }

                        </div>
                    </form>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="服务器"/>
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                            {
                                fields.server.map((item) => (
                                    <label className="form-control w-full max-w-xs" key={item.name}>
                                        <div className="label">
                                            <span className="label-text">{item.label}</span>
                                        </div>
                                        <input type="text" name={item.name}
                                               value={config ? config[item.name] : ''}
                                               onChange={handleChange}
                                               className="input input-sm input-bordered w-full max-w-xs"/>
                                    </label>
                                ))
                            }
                        </div>
                    </form>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="推送"/>
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {
                                fields.notify.map((item) => (
                                    <label className="form-control w-full max-w-xs" key={item.name}>
                                        <div className="label">
                                            <span className="label-text">{item.label}</span>
                                        </div>
                                        <input type="text" name={item.name}
                                               value={config ? config[item.name] : ''}
                                               onChange={handleChange}
                                               className="input input-sm input-bordered w-full max-w-xs"/>
                                    </label>
                                ))
                            }
                        </div>
                    </form>
                </div>
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="下载"/>
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {
                                fields.download.map((item) => (
                                    <label className="form-control w-full max-w-xs" key={item.name}>
                                        <div className="label">
                                            <span className="label-text">{item.label}</span>
                                        </div>
                                        <input type="text" name={item.name}
                                               value={config ? config[item.name] : ''}
                                               onChange={handleChange}
                                               className="input input-sm input-bordered w-full max-w-xs"/>
                                    </label>
                                ))
                            }

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
                                    <input type="checkbox" className="toggle toggle-sm"
                                           checked={config.DEFAULT_FILTER.only_chinese}
                                           onChange={handleChineseChange}/>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">仅无码</span>
                                    <input type="checkbox" className="toggle toggle-sm"
                                           checked={config.DEFAULT_FILTER.only_uc}
                                           onChange={handleUCChange}/>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">仅UHD</span>
                                    <input type="checkbox" className="toggle toggle-sm"
                                           checked={config.DEFAULT_FILTER.only_uhd}
                                           onChange={handleUHDChange}/>
                                </label>
                            </div>
                        </div>
                    </form>
                    <div className="divider"></div>
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                        <div>
                            {sort.map((item, index) => (
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
                                                disabled={index === sort.length - 1}
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
                        <div className="grid grid-cols-1 gap-4">
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">图片模式</span>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">无图</span>
                                        <input type="radio" name="radio-10" className="radio checked:bg-red-500"
                                               value="INVISIBLE" checked={config.IMAGE_MODE === "INVISIBLE"}
                                               onChange={handleImageModeChange}/>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">有图</span>
                                        <input type="radio" name="radio-10" className="radio checked:bg-blue-500"
                                               value="VISIBLE" checked={config.IMAGE_MODE === "VISIBLE"}
                                               onChange={handleImageModeChange}/>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">模糊</span>
                                        <input type="radio" name="radio-10" className="radio checked:bg-yellow-500"
                                               value="BLUR" checked={config.IMAGE_MODE === "BLUR"}
                                               onChange={handleImageModeChange}/>
                                    </label>
                                </div>
                            </label>
                            <div className="divider"></div>
                            <div className="grid grid-cols-1 gap-4">
                                {
                                    fields.other.map((item) => (
                                        <label className="form-control w-full max-w-xs" key={item.name}>
                                            <div className="label">
                                                <span className="label-text">{item.label}</span>
                                            </div>
                                            <input type="text" name={item.name}
                                                   value={config ? config[item.name] : ''}
                                                   onChange={handleChange}
                                                   className="input input-sm input-bordered w-full max-w-xs"/>
                                        </label>
                                    ))
                                }
                            </div>

                        </div>
                    </form>
                </div>
            </div>
            <div className="divider"></div>
            <div className="text-center">
                <button className="btn btn-sm btn-primary btn-wide mt-2" onClick={saveConfig}>保存</button>
            </div>
        </div>


    );
};
export default Config