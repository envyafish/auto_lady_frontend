import Api from "../utils/Api";

const Torrent = ({torrent, onPushComplete}) => {
    const handleDownload = () => {
        Api.get(`/torrents/download/manual?site=${torrent.site}&id=${torrent.id}&code_no=${torrent.code}`).then(res => {
            onPushComplete(torrent.code)
        })
    };
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
                    <button className="btn btn-sm btn-primary"
                            onClick={() => document.getElementById(`confirmDownloadModal-${torrent.site}-${torrent.id}`).showModal()}>下载
                    </button>
                </div>
            </div>
            <dialog id={`confirmDownloadModal-${torrent.site}-${torrent.id}`}
                    className="modal modal-middle">
                <div className="modal-box">
                    <p className="py-4">确认下载种子</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <button className="btn" onClick={() => handleDownload()}>确认</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}
export default Torrent