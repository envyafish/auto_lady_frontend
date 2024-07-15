const Options = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="space-y-4">
                <div className="divider">站点</div>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">馒头APIKEY</span>
                        <span className="label-text-alt">Top Right label</span>
                    </div>
                    <input type="text"  className="input input-bordered w-full input-sm"/>
                    <div className="label">
                        <span className="label-text-alt">Bottom Left label</span>
                        <span className="label-text-alt">Bottom Right label</span>
                    </div>
                </label>
            </div>
        </div>
    )
}

export default Options