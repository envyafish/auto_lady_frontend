const Torrent = ({torrent}) => {
    return (
        <div className="card bg-base-100 w-full shadow-xl mt-2">
            <div className="card-body">
                <p>{torrent.title}</p>
                <div>
                    <span className="badge badge-outline mr-1">{torrent.site}</span>
                    <span className="badge badge-outline badge-accent mr-1">做种:{torrent.seeders}</span>
                    <span className="badge badge-outline badge-error mr-1">{Math.round(torrent.size_mb)}MB</span>
                    {torrent.chinese &&
                        <span className="badge badge-outline badge-warning mr-1">中文</span>
                    }
                    {torrent.uc &&
                        <span className="badge badge-outline badge-warning mr-1">无码</span>
                    }
                    {torrent.uhd &&
                        <span className="badge badge-outline badge-success mr-1">UHD</span>
                    }
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-sm btn-primary">下载</button>
                </div>
            </div>
        </div>
    )
}
export default Torrent