import {useNavigate} from "react-router-dom";
import {useState} from "react";
import Alert from "../components/Alert";
import Api from "../utils/Api";

const Profile = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")
    const [alert, setAlert] = useState({
        message: '',
        type: 'success',
        isVisible: false

    });

    const doUpdate = () => {
        if (password !== repeatPassword) {
            setAlert({
                message: "两次密码不一样",
                type: 'error',
                isVisible: true
            })
            setTimeout(() => {
                setAlert({
                    ...alert,
                    isVisible: false
                })
            }, 3000);
            return
        }
        if (password && username) {
            Api.get(`/user/update?username=${username}&password=${password}`).then((res) => {
                if (res.success) {
                    localStorage.setItem("token", res.data.token)
                    setAlert({
                        message: "登录信息修改成功",
                        type: 'success',
                        isVisible: true
                    })
                    setTimeout(() => {
                        setAlert({
                            ...alert,
                            isVisible: false
                        })
                    }, 3000);
                } else {
                    setAlert({
                        message: "登录信息修改成功",
                        type: 'error',
                        isVisible: true
                    })
                    setTimeout(() => {
                        setAlert({
                            ...alert,
                            isVisible: false
                        })
                    }, 3000);
                }
            })
        }

    };
    return (
        <div>
            <Alert
                message={alert.message}
                type={alert.type}
                isVisible={alert.isVisible}
            />
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