import {useNavigate} from "react-router-dom";
import {useState} from "react";
import Api from "../utils/Api";
import {useAlert} from "react-alert";

const Profile = () => {
    const alert = useAlert()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")

    const doUpdate = () => {
        if (password !== repeatPassword) {
            alert.error("两次密码不一致")
            return
        }
        if (password && username) {
            Api.get(`/user/update?username=${username}&password=${password}`).then((res) => {
                if (res.success) {
                    localStorage.setItem("token", res.data.token)
                    alert.success("修改成功")
                } else {
                    alert.error("修改失败")
                }
            }).catch(e => {
                alert.error("服务器异常");
            })
        }

    };
    return (
        <div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl lg:card-side card-bordered card-compact">
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
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">再次输入密码</span>
                        </label>
                        <input type="password" className="input input-bordered" required value={repeatPassword}
                               onChange={(e) => setRepeatPassword(e.target.value)}/>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary" onClick={doUpdate}>登入</button>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default Profile