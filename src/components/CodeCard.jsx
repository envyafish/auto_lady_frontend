const CodeCard = ({code}) => {
    const photos = []
    photos.push(code.banner)
    const still_photo_arr = code.still_photo ? code.still_photo.split(',') : []
    photos.push(...still_photo_arr)
    const statusMap = {
        'COMPLETE': '已完成',
        'SUBSCRIBE': '订阅中',
        'UN_SUBSCRIBE': '未订阅'
    }
    const badgeMap = {
        'COMPLETE': 'success',
        'SUBSCRIBE': 'info',
        'UN_SUBSCRIBE': 'warning'
    }
    let status = statusMap[code.status];
    let badge = badgeMap[code.status]
    if (code.is_exist_server) {
        status = '已入库'
        badge = 'success'
    }

    const actors = code.casts ? code.casts.split(',') : []
    return (
        <div className="card bg-base-100 shadow-xl">
            {/*<figure>*/}
            {/*    <div className="carousel rounded-box">*/}
            {/*        {photos.map((item, index) => (*/}
            {/*            <div className="carousel-item w-full" key={index}>*/}
            {/*                <img*/}
            {/*                    referrerPolicy="no-referrer"*/}
            {/*                    src={item}*/}
            {/*                    className=""*/}
            {/*                    />*/}
            {/*            </div>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*</figure>*/}
            <div className="card-body">
                <h2 className="card-title">
                    {code.code}
                    <div className={`badge badge-${badge}`}>{status}</div>
                </h2>
                {/*<p>{code.title}</p>*/}
                {actors.map((item, index) => (
                    <div className="badge badge-outline" key={index}>{item}</div>
                ))}

                <div className="card-actions justify-end">
                    <div className="card-actions justify-end">
                        <button className="btn btn-sm btn-outline btn-default">订阅</button>
                        <button className="btn btn-sm btn-outline btn-warning">取消</button>
                        <button className="btn btn-sm btn-outline btn-primary">下载</button>

                    </div>
                </div>
            </div>
        </div>
    );
};
export default CodeCard