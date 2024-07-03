import {useEffect, useState} from "react";
import API from "../utils/Api";
import Alert from "../components/Alert";

const initialSort = [
    {id: 'uc', content: '无码'},
    {id: 'seeders', content: '做种'},
    {id: 'chinese', content: '中文'},
    {id: 'uhd', content: 'UHD'}
];

const fields = {
    "pt": [
        {"name": "MTEAM_API_KEY", "label": "馒头令牌"},
        {"name": "FSM_API_KEY", "label": "飞天拉面神教APITOKEN"},
        {"name": "FSM_PASSKEY", "label": "飞天拉面神教PASSKEY"}
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
        {"name": "TELEGRAM_BOT_TOKEN", "label": "Telegram Bot Token"},
        {"name": "TELEGRAM_CHAT_ID", "label": "Telegram Chat ID"}
    ],
    "download": [
        {"name": "QBITTORRENT_HOST", "label": "qbittorent host"},
        {"name": "QBITTORRENT_PORT", "label": "qbittorent port"},
        {"name": "QBITTORRENT_USERNAME", "label": "qbittorent 用户名"},
        {"name": "QBITTORRENT_PASSWORD", "label": "qbittorent 密码"},
        {"name": "QBITTORRENT_DOWNLOAD_PATH", "label": "qbittorent 下载地址"},
        {"name": "QBITTORRENT_CATEGORY", "label": "qbittorent 下载分类"}
    ],
    "other": [
        {"name": "PROXY", "label": "代理地址"}
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
        "QBITTORRENT_HOST": "",
        "QBITTORRENT_PORT": "",
        "QBITTORRENT_USERNAME": "",
        "QBITTORRENT_PASSWORD": "",
        "QBITTORRENT_DOWNLOAD_PATH": "",
        "QBITTORRENT_CATEGORY": "",
        "FSM_API_KEY": "",
        "FSM_PASSKEY": "",
        "MTEAM_API_KEY": "",
        "WECHAT_CORP_ID": "",
        "WECHAT_CORP_SECRET": "",
        "WECHAT_AGENT_ID": "",
        "WECHAT_PROXY": "",
        "TELEGRAM_BOT_TOKEN": "",
        "TELEGRAM_CHAT_ID": "",
        "PROXY": ""
    });
    const [sort, setSort] = useState(initialSort);
    const [alert, setAlert] = useState({
        message: '',
        type: 'success',
        isVisible: false

    });
    const [filter, setFilter] = useState({
        "only_chinese": false,
        "only_uc": false,
        "only_uhd": false
    });

    const moveItem = (index, direction) => {
        const newItems = Array.from(sort);
        const [movedItem] = newItems.splice(index, 1);
        newItems.splice(index + direction, 0, movedItem);
        setSort(newItems);
    };
    const loadSort = (default_sort) => {
        const sort_arr = default_sort.split(',')
        const newItems = []
        for (let i = 0; i < sort_arr.length; i++) {
            const item = sort.find(item => item.id === sort_arr[i]);
            if (item) {
                newItems.push(item)
            }
        }
        setSort(newItems)
    }

    const loadFilter = (default_filter) => {
        console.log(default_filter)
        setFilter(JSON.parse(default_filter))
    }

    const fetchConfig = async () => {
        const data = await API.get('/config')
        setConfig(data.data);
        loadSort(data.data['DEFAULT_SORT'])
        loadFilter(data.data['DEFAULT_FILTER'])
        return data.data
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setConfig({
            ...config,
            [name]: value
        });
    };

    const handleChineseChange = (e) => {
        const newFilter = {...filter}
        newFilter['only_chinese'] = e.target.checked
        setFilter(newFilter)

    }
    const handleUCChange = (e) => {
        const newFilter = {...filter}
        newFilter['only_uc'] = e.target.checked
        setFilter(newFilter)

    }
    const handleUHDChange = (e) => {
        const newFilter = {...filter}
        newFilter['only_uhd'] = e.target.checked
        setFilter(newFilter)

    }

    useEffect(() => {
        fetchConfig();
    }, []);
    const saveConfig = () => {
        const newConfig = {...config}
        newConfig['DEFAULT_SORT'] = sort.map(item => item.id).join(',')
        newConfig['DEFAULT_FILTER'] = JSON.stringify(filter)
        API.post('/v1/config', newConfig).then((data) => {
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
    return (
        <div>
            <Alert
                message={alert.message}
                type={alert.type}
                isVisible={alert.isVisible}
            />
            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="PT" defaultChecked/>
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {
                                fields.pt.map((item) => (
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
                                           checked={filter ? filter['only_chinese'] : false}
                                           onChange={handleChineseChange}/>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">仅无码</span>
                                    <input type="checkbox" className="toggle toggle-sm"
                                           checked={filter ? filter['only_uc'] : false} onChange={handleUCChange}/>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">仅UHD</span>
                                    <input type="checkbox" className="toggle toggle-sm"
                                           checked={filter ? filter['only_uhd'] : false} onChange={handleUHDChange}/>
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
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
                    </form>
                </div>
            </div>
            <div className="text-center">
                <button className="btn btn-sm btn-primary btn-wide mt-2" onClick={saveConfig}>保存</button>
            </div>
        </div>


    );
};
export default Config