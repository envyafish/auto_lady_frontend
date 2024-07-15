import CodeCard from "../components/CodeCard";
import Api from "../utils/Api";
import {useEffect, useState} from "react";
import Pagination from "../components/Pagination";
import LoadingModal from "../components/LoadingModal";
import {useAlert} from "react-alert";

const Rank = () => {
    const alert = useAlert()
    const [codes, setCodes] = useState([])

    const [page, setPage] = useState(1)

    const [loading, setLoading] = useState(false)


    const fetchCodes = () => {
        setLoading(true)
        setCodes([])
        Api.get('/ranks?page=' + page).then(res => {
            setLoading(false)
            setCodes(res.data)
        }).catch(e => {
            alert.error("服务器异常");
        })
    }

    useEffect(() => {
        fetchCodes()
    }, [page]);
    return (
        <div>
            <LoadingModal isOpen={loading} type="spin" color="#000" height={100} width={100}/>
            {!loading &&
                <div>
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 place-content-center mt-2">
                        {codes.map((item, index) => (
                            <CodeCard code={item} key={index}></CodeCard>
                        ))}
                    </div>
                    <Pagination currentPage={page} totalPages={100} onPageChange={(item) => setPage(item)}/>
                </div>
            }
        </div>
    );
};
export default Rank