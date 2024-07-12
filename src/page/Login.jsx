const Login = () => {

    return (

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
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">用户名</span>
                                </label>
                                <input type="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">密码</span>
                                </label>
                                <input type="password" className="input input-bordered" required/>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">登入</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}

export default Login;
