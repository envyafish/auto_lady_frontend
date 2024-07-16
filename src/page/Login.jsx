import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Api from "../utils/Api";
import {useAlert} from "react-alert";

const Login = () => {
    const alert = useAlert()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState("")
    const [tokenVisible, setTokenVisible] = useState(false)

    const doLogin = () => {
        Api.get(`/login?username=${username}&password=${password}&token_key=${token}`).then(res => {
            if (res.success) {
                localStorage.setItem("token", res.data.token)
                location.href = '/app'
            } else {
                alert.error(res.message);
            }
        }).catch(e => {
            alert.error("服务器异常");
        })
    };
    const forgetPassword = () => {
        if (tokenVisible) {
            setToken("")
        }
        setTokenVisible(!tokenVisible)
    };
    const initToken = () => {
        Api.get(`/user/token`).then(res => {
            if (res.success) {
                alert.success(res.message);
            } else {
                alert.error(res.message);
            }
        }).catch(e => {
            alert.error("服务器异常");
        })
    };
    return (
        <div>
            <div
                className="hero min-h-screen">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-5xl font-bold">AutoLady</h1>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl lg:card-side">
                            <div className="card-body">
                                {tokenVisible &&
                                    <div className="form-control">
                                        <div className="label">
                                            <label className="label-text-alt">TOKEN</label>
                                            <span className="label-text-alt">查看后台日志,截取token输入</span>
                                        </div>
                                        <div>
                                            <input type="text" className="input input-bordered" required value={token}
                                                   onChange={(e) => setToken(e.target.value)}/>
                                            <button className="btn btn-primary btn-outline ml-1"
                                                    onClick={initToken}>获取
                                            </button>
                                        </div>
                                        <div className="label">
                                            <span className="label-text-alt">这将重置账号密码</span>
                                        </div>
                                    </div>
                                }
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">用户名</span>
                                    </label>
                                    <input type="text" className="input input-bordered" required value={username}
                                           onChange={(e) => setUsername(e.target.value)}/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">密码</span>
                                    </label>
                                    <input type="password" className="input input-bordered" required value={password}
                                           onChange={(e) => setPassword(e.target.value)}/>
                                    <div className="label">
                                        <span className="label-text-alt" onClick={forgetPassword}>忘记密码</span>
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary" onClick={doLogin}>登入</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
        ;
}

export default Login;
