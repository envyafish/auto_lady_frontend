import CodeCard from "../components/CodeCard";
import Api from "../utils/Api";
import {useEffect, useState} from "react";
import API from "../utils/Api";
import Pagination from "../components/Pagination";

const Rank = () => {
    const [codes, setCodes] = useState([])

    const [page, setPage] = useState(1)

    const [loading, setLoading] = useState(false)


    const fetchCodes = () => {
        setLoading(true)
        setCodes([])
        Api.get('/ranks?page=' + page).then(res => {
            setLoading(false)
            setCodes(res.data)
        })
    }

    useEffect(() => {
        fetchCodes()
    }, [page]);
    return (
        <div>
            {
                loading &&
                <div className="flex items-center justify-center h-full pt-28">
                    <span className="loading loading-dots loading-lg"></span>
                </div>
            }
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 place-content-center mt-2">
                {codes.map((item, index) => (
                    <CodeCard code={item} key={index} onRefresh={fetchCodes}></CodeCard>
                ))}
            </div>
            <Pagination currentPage={page} totalPages={100} onPageChange={(item) => setPage(item)}/>

        </div>
    );
};
export default Rank