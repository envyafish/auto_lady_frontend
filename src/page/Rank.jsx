import CodeCard from "../components/CodeCard";
import Api from "../utils/Api";
import {useEffect, useState} from "react";
import API from "../utils/Api";

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
    const pages = Array.from({length: 10}, (_, index) => index + 1);
    const handlePageChange = (item) => {
        setCodes([])
        setPage(item)
    };


    useEffect(() => {
        fetchCodes()
    }, [page]);
    return (
        <div>
            {
                loading && <span className="loading loading-bars loading-lg"></span>
            }
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 place-content-center mt-2">
                {codes.map((item, index) => (
                    <CodeCard code={item} key={index} onRefresh={fetchCodes}></CodeCard>
                ))}
            </div>
            <div className="join mt-2">
                {
                    pages.map((item, index) => (
                        <input
                            className="join-item btn btn-square"
                            type="radio"
                            name="options"
                            aria-label={item}
                            key={index}
                            defaultChecked={index === 0}
                            onClick={() => handlePageChange(item)}
                        />
                    ))
                }
            </div>
        </div>
    );
};
export default Rank