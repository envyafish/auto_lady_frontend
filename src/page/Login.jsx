import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Api from "../utils/Api";
import {useAlert} from "react-alert";

const Login = () => {
    const alert = useAlert()
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const doLogin = () => {
        Api.get(`/login?username=${username}&password=${password}`).then(res => {
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
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-5xl font-bold">AutoLady</h1>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl lg:card-side">
                            <div className="card-body">
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
